const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required",
    });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (err) {
    console.error("RESEND ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

app.get("/env-check", (req, res) => {
  res.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasEmailUser: !!process.env.EMAIL_USER,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});