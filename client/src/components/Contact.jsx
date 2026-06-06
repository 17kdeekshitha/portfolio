import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://portfolio-00y0.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to send message");
    }

    alert("Message Sent!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    alert(err.message || "Failed to send message");
  }
};
  return (
    <section
      id="contact"
      className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 sm:py-20"
    > 
   <div className="mx-auto min-h-[85vh] w-full max-w-6xl p-0 sm:p-4 lg:p-8">
   
          <div className="mb-12 text-center">

            <p className="mb-2 text-lg font-bold text-gray-400 sm:text-xl lg:text-2xl">
              Get In Touch
            </p>

            <h2
              className="
                text-3xl
                font-bold
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              CONTACT
            </h2>

          </div>

          
          <div
            className="
              grid
              gap-10
              items-start
              sm:grid-cols-2
              sm:gap-14
              sm:px-8
            "
          >

            

            <div className="space-y-5">

              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-slate-800
                  p-4
                  rounded-xl
                  break-words
                  
                "
              >
                <FaPhoneAlt className="text-white" />

                <span className="text-white">
                  +91 6363108972
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-slate-800
                  p-4
                  rounded-xl
                  break-words
                  
                "
              >
                <FaEnvelope className="text-white" />

                <span className="text-white">
                  k.deekshithanaik@gmail.com
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-slate-800
                  p-4
                  rounded-xl
                  break-words"
              >
                <FaMapMarkerAlt className="text-white" />

                <span className="text-white">
                  Mangalore, Karnataka
                </span>
              </div>

              <div className="flex gap-5 pt-4">

               </div>

            </div>

            

            <form onSubmit={handleSubmit} className="space-y-5">

<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="
    w-full
    bg-slate-800
    text-white
    p-4
    rounded-xl
    outline-none
    focus:border-cyan-400
    border
    border-slate-700
  "
/>

<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Your Email"
  className="
    w-full
    bg-slate-800
    text-white
    p-4
    rounded-xl
    outline-none
    focus:border-cyan-400
    border
    border-slate-700
  "
/>

<textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="6"
  placeholder="Your Message"
  className="
    w-full
    bg-slate-800
    text-white
    p-4
    rounded-xl
    outline-none
    resize-none
    focus:border-cyan-400
    border
    border-slate-700
  "
/>

              <button
                type="submit"
                className="
                  bg-white
                  hover:bg-gray-400
                  px-8
                  py-3
                  text-black
                  rounded-xl
                  font-semibold
                  transition
                  w-full
                  sm:w-auto
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
     
    </section>
  );
}