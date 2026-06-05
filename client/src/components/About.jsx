import profilePic from "../assets/profile_photo.jpeg";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20 bg-white"
    >
      <div className="max-w-8xl mx-auto">

        <div
          className="
            grid
            md:grid-cols-2
            gap-16
            items-center
            px-8
          "
        >

        

          <div className="flex justify-center">

            <img
  src={profilePic}
  alt="Profile"
  className="
w-full
max-w-md
h-[500px]
object-cover
rounded-3xl
shadow-2xl
"
/>

          </div>

         

          <div>

            <p className="text-cyan-600 font-semibold text-3xl">
  Hi{" "}

  <motion.span
    animate={{
      rotate: [0, 14, -8, 14, -4, 10, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
    }}
    style={{
      display: "inline-block",
      transformOrigin: "70% 70%",
    }}
  >
    👋
  </motion.span>
, I'm Deekshitha
</p>

            <h2
              className="
                text-6xl
                font-bold
                text-slate-900
                mt-2
              "
            >
              Backend Developer
            </h2>

            <p
              className="
                text-slate-500
                text-2xl
                mt-3
                mb-8
              "
            >
              Computer Science Engineering Student
              (2026 Graduate)
            </p>

            <p
              className="
                text-slate-700
                leading-8
                mb-3
                text-xl
              "
            >
              Passionate about building scalable
              backend applications using Node.js,
              Express.js, MongoDB, and MySQL.
            </p>

            <p
              className="
                text-slate-700
                leading-8
                mb-8
                text-xl
              "
            >
              I enjoy designing REST APIs,
              working with databases, and
              exploring Cloud & DevOps
              technologies.
            </p>

            

            <div className="flex flex-wrap gap-3">

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-50
                  border
                  border-cyan-200
                  text-cyan-700
                  font-medium
                "
              >
                MERN Stack Development
              </span>

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-50
                  border
                  border-cyan-200
                  text-cyan-700
                  font-medium
                "
              >
                Backend Development
              </span>

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-50
                  border
                  border-cyan-200
                  text-cyan-700
                  font-medium
                "
              >
                AI-powered Applications
              </span>

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-50
                  border
                  border-cyan-200
                  text-cyan-700
                  font-medium
                "
              >
                Cloud & DevOps Learning
              </span>

            </div>

           

            
          </div>

        </div>

      </div>
    </section>
  );
}