import ukshatiLogo from "../assets/ukshati-logo.jpeg";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">

        <h2
          className="
            text-3xl
            font-bold
            text-center
            mb-12
            sm:text-4xl
            lg:mb-16
            lg:text-5xl
          "
        >
          Experience
        </h2>

        <div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

           

            <img
              src={ukshatiLogo}
              alt="Ukshati Technologies"
              className="
                h-28
                w-28
                object-contain
                rounded-xl
                sm:h-36
                sm:w-36
                lg:h-40
                lg:w-40
              "
            />

           

            <div className="flex-1">

              <h3
                className="
                  text-2xl
                  font-bold
                  text-black
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Software Development Intern
              </h3>

              <p
                className="
                  text-cyan-700
                  font-medium
                  mt-2
                  text-lg
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                Ukshati Technologies Pvt. Ltd.
              </p>

              <p
                className="
                  text-gray-700
                  mt-1
                  text-base
                  sm:text-lg
                  lg:text-xl
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
                    text-base
                    sm:text-lg
                    lg:text-xl
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
                      px-3
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      text-black
                      border
                      border-gray-400
                      text-sm
                      sm:text-base
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