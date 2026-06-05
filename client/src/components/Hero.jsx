import { FaGithub, FaLinkedin} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-8xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

       
        <div>
          <p className="text-3xl mb-4">
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

          <h1 className="text-8xl font-bold mb-6">
            Deekshitha
          </h1>

          <p className="text-2xl text-gray-700 mb-8">
            Passionate about building scalable web
          applications, REST APIs and AI-powered
          solutions.
          </p>

          <div className="flex gap-4 mb-8">
            <a
              href="#projects"
              className="border border-white px-6 py-3 bg-black text-white hover:bg-slate-800 hover:text-white rounded-full"
            
            >
              View My Work
            </a>

            <a
              href="/Deekshitha_resume.pdf"
              download
              className="border border-white px-6 py-3 bg-black text-white hover:bg-slate-800 hover:text-white rounded-full"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-5 text-4xl">
            <a href="https://www.linkedin.com/in/k-deekshitha-85163b26a">
              <FaLinkedin  color="#0A66C2" />
            </a>

            <a href="https://github.com/17kdeekshitha">
              <FaGithub />
            </a>

           
          </div>
        </div>

       
        <div className="flex justify-center">
          <img
            src="/hero.jpg"
            alt="Developer"
            className="w-full max-w-6xl"
          />
        </div>

      </div>
    </section>
  );
}