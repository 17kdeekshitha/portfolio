import React from "react";

const education = [
  {
    degree: "Bachelor of Engineering",
    specialization: "Computer Science Engineering",
    institute:
      "Sahyadri College of Engineering & Management",
    score: "CGPA: 8.48",
    duration: "2022 - 2026",
    icon: "🎓",
  },
  {
    degree: "PUC (PCMB)",
    specialization: "Science",
    institute: "Government PU College, Mudipu",
    score: "Percentage: 88.5%",
    duration: "2020 - 2022",
    icon: "🏫",
  },
  {
    degree: "SSLC",
    specialization: "",
    institute: "Vidya Rathna English Medium School, Deralakatte",
    score: "Percentage: 90.56%",
    duration: "2019 - 2020",
    icon: "📚",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen py-20 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-20">
        Education
      </h2>

      <div className="relative max-w-6xl mx-auto">


        <div
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-1
            bg-slate-600
            -translate-x-1/2
          "
        />

        {education.map((item, index) => (
          <div
            key={index}
            className="
              flex
              justify-between
              items-center
              mb-24
            "
          >
            {index % 2 === 0 ? (
              <>
               

                <div className="w-5/12">
                  <div
                    className="
                      bg-slate-900
                      p-8
                      rounded-3xl
                      border
                      border-slate-700
                      hover:border-cyan-400
                      transition
                    "
                  >
                    <h3 className="text-2xl font-bold text-cyan-400">
                      {item.degree}
                    </h3>

                    <p className="text-white">{item.specialization}</p>

                    <p className="text-white mt-2">
                      {item.institute}
                    </p>

                    <p className="text-gray-400 mt-4 font-semibold">
                      {item.score}
                    </p>
                  </div>
                </div>

               

                <div
                  className="
                    z-10
                    w-14
                    h-14
                    rounded-full
                    bg-slate-900
                    border-4
                    border-cyan-400
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                >
                  {item.icon}
                </div>

                

                <div className="w-5/12">
                  <p className="text-xl font-medium">
                    {item.duration}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="w-5/12 text-right">
                  <p className="text-xl font-medium">
                    {item.duration}
                  </p>
                </div>

             

                <div
                  className="
                    z-10
                    w-14
                    h-14
                    rounded-full
                    bg-slate-900
                    border-4
                    border-cyan-400
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                >
                  {item.icon}
                </div>

               

                <div className="w-5/12">
                  <div
                    className="
                      bg-slate-900
                      p-8
                      rounded-3xl
                      border
                      border-slate-700
                      hover:border-cyan-400
                      transition
                    "
                  >
                    <h3 className="text-2xl font-bold text-cyan-400">
                      {item.degree}
                    </h3>

                    <p className="text-white">{item.specialization}</p>

                    <p className="text-white mt-2">
                      {item.institute}
                    </p>

                    <p className="text-gray-400 mt-4 font-semibold">
                      {item.score}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}