import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaPython,
  FaAws,
} from "react-icons/fa";
import cLogo from "../assets/c.png";
import cpLogo from "../assets/c++.png";
import mysqlLogo from "../assets/Mysql.png";
import pythonLogo from "../assets/python.png";
import awsLogo from "../assets/AWS.png";
import {
    SiDocker,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiSelenium,
  SiTailwindcss,
} from "react-icons/si";

const skillCategories = {
  Frontend: [
    { name: "React", icon: <FaReact color="#61DAFB" className="w-10 h-10"/> },
    { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" className="w-10 h-10"/> },
  ],

  Backend: [
    { name: "Node.js", icon: <FaNodeJs color="#43B02A" className="w-10 h-10" /> },
    { name: "Express.js", icon: <SiExpress color="#000000" className="w-10 h-10"/> },
  ],

  Database: [
    { name: "MongoDB", icon: <SiMongodb color="#47A248" className="w-10 h-10"/> },
    { name: "MySQL", icon: (
    <img
      src={mysqlLogo}
      alt="MySQL"
      className="w-10 h-10"
    />)},
  ],

  Tools: [
    { name: "Git", icon: <FaGitAlt color="#F1502F" className="w-10 h-10"/> },
    { name: "GitHub", icon: <FaGithub color="#181717" className="w-10 h-10"/> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" className="w-10 h-10"/> },
    { name: "Selenium" , icon:<SiSelenium color="#43B02A" className="w-10 h-10"/>},
    {name: "Docker", icon:<SiDocker color="#2496ED" className="w-10 h-10"/>},
  ],

  Languages: [
    { name: "C", icon: (
    <img
      src={cLogo}
      alt="C"
     className="w-10 h-10"
    />)},
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" className="w-10 h-10"/> },
     {name: "C++", icon: (
    <img
      src={cpLogo}
      alt="C++"
     className="w-10 h-10"
    />)},
    { name: "Python", icon: (
    <img
      src={pythonLogo}
      alt="Python"
      className="w-10 h-10"
    />)},
    
  ],

  Cloud: [
    { name: "AWS", icon:  (
    <img
      src={awsLogo}
      alt="AWS"
    className="w-10 h-10"
    />)},
  
  ],
};
export default function Skills() {
  return (
    <section
  id="skills"
  className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 sm:py-20"
>
  <div className="mx-auto max-w-6xl">

    <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl lg:mb-16 lg:text-5xl">
      My Skills
    </h2>

    <div className="grid gap-12 sm:grid-cols-2">

      {Object.entries(skillCategories).map(
        ([category, skills]) => (
          <div key={category}>

            <h3 className="mb-6 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3 sm:gap-4">

              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    flex
                    items-center
                    gap-3
                    px-3
                    py-2.5
                    rounded-full
                    bg-slate-400/70
                    border
                    border-slate-700
                    hover:border-cyan-400
                    hover:scale-105
                    transition
                    text-base
                    sm:px-4
                    sm:py-3
                  "
                >
                  <span className="text-xl sm:text-2xl">
                    {skill.icon}
                  </span>

                  <span>
                    {skill.name}
                  </span>
                </div>
              ))}

            </div>

          </div>
        )
      )}

    </div>

  </div>
</section>
  );
}
