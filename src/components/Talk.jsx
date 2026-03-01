import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaComments } from 'react-icons/fa'

const Talk = () => {
  return (
    <section id="talk" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/60 backdrop-blur-md border border-slate-200 shadow-2xl rounded-3xl p-8 md:p-12 text-center">
          <h2 className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-extrabold text-slate-900">
            <FaComments className="w-8 h-8 text-sky-700" />
            Let’s Connect
          </h2>

          <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            I’m a CCNA-certified IT networking professional pursuing Network
            Engineer roles. If you’d like to discuss networking projects,
            infrastructure support, or opportunities in IT, feel free to reach
            out.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:abelghith@oakland.edu"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-6 py-3 text-white font-semibold shadow-lg hover:bg-sky-800 transition w-full sm:w-auto"
            >
              <FaEnvelope className="w-5 h-5" />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/ahmed-belghith-aab119349/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200 px-6 py-3 text-slate-800 font-semibold shadow-sm hover:bg-white/90 transition w-full sm:w-auto"
            >
              <FaLinkedin className="w-5 h-5 text-sky-700" />
              LinkedIn
            </a>

            <a
              href="https://github.com/AhmedBelghith24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200 px-6 py-3 text-slate-800 font-semibold shadow-sm hover:bg-white/90 transition w-full sm:w-auto"
            >
              <FaGithub className="w-5 h-5 text-slate-800" />
              GitHub
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Prefer email?{' '}
            <span className="font-mono">abelghith@oakland.edu</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Talk
