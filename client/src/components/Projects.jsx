import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI Travel Planner",
    image: "/Ai_planner.png",
    description:
      "AI-powered travel planner that generates personalized itineraries based on budget, duration, and preferences.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenRouter AI",
    ],

    github:
      "https://github.com/17kdeekshitha/Ai_travel_planner",

  },

  {
    title: "Healthcare Management System",
    image: "/health.jpg",

    description:
      "Complete healthcare platform for managing patients, appointments, and healthcare records.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
    ],

    github:
      "https://github.com/17kdeekshitha/healthcare_management_application",

  },
  {
  title: "Smart Email Agent",
    image: "/Ai_mail.webp",
    description:
      "AI-powered email assistant that helps users draft, organize, and manage their emails more efficiently.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenRouter AI",
      "Gmail API",
      "Fast API",
      "scikit-learn"
    ],

    github:
      "https://github.com/17kdeekshitha/Smart__email_agent",

  },

{
  title: "Diabetic Ratinopathy Detection",
    image: "/Diabetic_retina.jpg",
    description:
    "Deep learning-based system for detecting diabetic retinopathy from retinal images to assist in early diagnosis.",

    tech: [
      "Python",
      "TensorFlow",
      "Streamlit",
      "OpenCV",
      "scikit-learn"
    ],

    github:
      "https://github.com/17kdeekshitha/Diabetic_retinopathy__detection",

  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="
            text-5xl
            font-bold
            text-center
            mb-16
            text-white
          "
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className={
                "bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              }
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-58 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 mb-5 leading-7">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-6">

  {project.tech.map((tech) => (
    <span
      key={tech}
      className="
        px-4
        py-2
        rounded-full
        bg-slate-800
        border
        border-slate-600
        text-sm
      "
    >
      {tech}
    </span>
  ))}

</div>

                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-cyan-400"
                  >
                    <FaGithub />
                    Code
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-cyan-400"
                    >
                      <FiExternalLink />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
</div>
</section>
);
}