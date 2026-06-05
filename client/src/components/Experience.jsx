import ukshatiLogo from "../assets/ukshati-logo.jpeg";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2
          className="
            text-5xl
            font-bold
            text-center
            mb-16
          "
        >
          Experience
        </h2>

        <div>

          <div className="flex gap-6 items-start">

           

            <img
              src={ukshatiLogo}
              alt="Ukshati Technologies"
              className="
                h-40
                w-40
                object-contain
                rounded-xl
              "
            />

           

            <div>

              <h3
                className="
                  text-4xl
                  font-bold
                  text-black
                "
              >
                Software Development Intern
              </h3>

              <p
                className="
                  text-cyan-700
                  font-medium
                  mt-2
                  text-3xl
                "
              >
                Ukshati Technologies Pvt. Ltd.
              </p>

              <p
                className="
                  text-gray-700
                  mt-1
                  text-xl
                "
              >
                Jan 2026 – May 2026
              </p>

             

              <div className="mt-6">

                <ul
                  className="
                    space-y-3
                    text-black
                    leading-7
                    text-xl
                  "
                >
                  <li>
                    • Worked on ERP application
                    modules and business workflows.
                  </li>

                  <li>
                    • Developed automation test
                    scripts using Selenium and Python.
                  </li>

                  <li>
                    • Performed manual testing,
                    debugging and defect validation.
                  </li>

                  <li>
                    • Worked with Docker, MySQL,
                    Grafana and Git.
                  </li>

                  <li>
                    • Created test cases and
                    technical documentation.
                  </li>
                </ul>

              </div>

             

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                  mt-8
                "
              >
                {[
                  "Python",
                  "Selenium",
                  "Docker",
                  "MySQL",
                  "Grafana",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      text-black
                      border
                      border-gray-400
                      text-lg
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}