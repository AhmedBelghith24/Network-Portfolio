import HyperOne from '../customH1/HyperOne.jsx'
import { skills } from '../../data.jsx'

const skillstext =
  'These are the networking technologies, systems, and tools that form my technical foundation, enabling me to configure, troubleshoot, and maintain reliable IT infrastructures.'

const Skills = () => {
  return (
    <section className="bg-transparent py-20" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <HyperOne value="My Skills" />

          <p className="mt-6 text-lg md:text-xl text-slate-700 text-center max-w-4xl leading-relaxed">
            {skillstext}
          </p>

          {/* Skills Grid */}
          <div className="mt-12 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="w-full max-w-[180px] bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-slate-200
                             hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex flex-col items-center gap-3">
                    {/* your skill.icon is already an <img> */}
                    <div className="h-16 w-16 flex items-center justify-center">
                      {skill.icon}
                    </div>

                    <p className="text-slate-900 font-semibold text-sm text-center">
                      {skill.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional: remove if you don't want descriptions */}
          {/* <p className="mt-8 text-sm text-slate-500 text-center max-w-2xl">
            Tip: Hover on each skill card for a cleaner look and easier scanning.
          </p> */}
        </div>
      </div>
    </section>
  )
}

export default Skills
