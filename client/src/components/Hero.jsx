import { FaGithub, FaLinkedin} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen px-4 pt-32 sm:flex sm:items-center sm:px-6 sm:pt-36 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 sm:grid-cols-2">

       
        <div className="text-center sm:text-left">
          <p className="mb-4 text-2xl sm:text-3xl">
            Hey{" "} 
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
  , I'm
          </p>

          <h1 className="mb-6 text-5xl font-bold sm:text-6xl lg:text-8xl">
            Deekshitha
          </h1>

          <p className="mb-8 text-lg leading-8 text-gray-700 sm:text-xl lg:text-2xl">
            Passionate about building scalable web
          applications, REST APIs and AI-powered
          solutions.
          </p>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-start">
            <a
              href="#projects"
              className="rounded-full border border-white bg-black px-6 py-3 text-center text-white hover:bg-slate-800 hover:text-white"
            
            >
              View My Work
            </a>

            <a
              href="/Deekshitha_resume.pdf"
              download
              className="rounded-full border border-white bg-black px-6 py-3 text-center text-white hover:bg-slate-800 hover:text-white"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-5 text-4xl sm:justify-start">
            <a href="https://www.linkedin.com/in/k-deekshitha-85163b26a">
              <FaLinkedin  color="#0A66C2" />
            </a>

            <a href="https://github.com/17kdeekshitha">
              <FaGithub />
            </a>

           
          </div>
        </div>

       
        <div className="flex justify-center sm:justify-end">
          <img
            src="/hero.jpg"
            alt="Developer"
            className="w-full max-w-sm rounded-3xl object-cover sm:max-w-md lg:max-w-xl"
          />
        </div>

      </div>
    </section>
  );
}