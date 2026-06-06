import profilePic from "../assets/profile_photo.jpeg";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white px-4 py-16 sm:flex sm:items-center sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-7xl">

        <div
          className="
            grid
            gap-10
            items-center
            sm:grid-cols-2
            sm:gap-16
            sm:px-8
          "
        >

        

          <div className="flex justify-center">

            <img
  src={profilePic}
  alt="Profile"
  className="w-full max-w-md max-h-[420px] object-cover rounded-3xl shadow-2xl sm:max-h-[500px]"
/>

          </div>

         

          <div className="text-center sm:text-left">

            <p className="text-lg font-semibold text-cyan-600 sm:text-2xl lg:text-3xl">
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
                text-4xl
                font-bold
                text-slate-900
                mt-2
                sm:text-5xl
                lg:text-6xl
              "
            >
              Backend Developer
            </h2>

            <p
              className="
                text-slate-500
                text-lg
                mt-3
                mb-8
                sm:text-xl
                lg:text-2xl
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
                text-base
                sm:text-lg
                lg:text-xl
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
                text-base
                sm:text-lg
                lg:text-xl
              "
            >
              I enjoy designing REST APIs,
              working with databases, and
              exploring Cloud & DevOps
              technologies.
            </p>

            

            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">

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