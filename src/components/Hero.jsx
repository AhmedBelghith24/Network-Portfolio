import heroImg from '../assets/boh.png'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24" id="home">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">
          {/* LEFT */}
          <article className="text-center md:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md px-4 py-2 text-sm md:text-base text-sky-800 shadow-sm border border-slate-200">
              <span className="h-2 w-2 rounded-full bg-sky-600" />
              Available for IT / Networking roles
            </p>

            <h2 className="mt-6 text-2xl md:text-3xl text-sky-700">
              Hi 👋🏻, I am
            </h2>

            <h1 className="mt-2 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-sky-700 leading-[1.05]">
              Ahmed <span className="text-sky-900">Belghith</span>
            </h1>

            <p className="mt-5 text-xl md:text-2xl lg:text-3xl text-sky-700 font-semibold tracking-wide">
              <Typewriter
                words={[
                  'CCNA Certified | IT Networking Professional',
                  'Aspiring Network Engineer',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={2000}
              />
            </p>

            <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed max-w-xl mx-auto md:mx-0">
              Turning networking knowledge into real-world infrastructure
              solutions through hands-on troubleshooting, secure access, and
              reliable network design.
            </p>

            {/* CTA + Socials */}
            <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-sky-700 px-6 py-3 text-white font-semibold shadow-lg hover:bg-sky-800 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white/60 backdrop-blur-md px-6 py-3 text-sky-800 font-semibold border border-slate-200 shadow-sm hover:bg-white/80 transition"
              >
                Contact Me
              </a>

              <div className="flex items-center gap-3 sm:ml-2">
                <a
                  href="https://github.com/AhmedBelghith24"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl bg-white/60 backdrop-blur-md p-2 border border-slate-200 shadow-sm hover:bg-white/80 transition"
                >
                  <FaGithubSquare className="h-7 w-7 text-sky-800" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ahmed-belghith-aab119349/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl bg-white/60 backdrop-blur-md p-2 border border-slate-200 shadow-sm hover:bg-white/80 transition"
                >
                  <FaLinkedin className="h-7 w-7 text-sky-800" />
                </a>
              </div>
            </div>
          </article>

          {/* RIGHT IMAGE */}
          <article className="hidden md:flex justify-center">
            <div className="relative">
              {/* glow background */}
              <div className="absolute -inset-6 rounded-[2rem] bg-sky-200/40 blur-2xl" />

              {/* image card */}
              <div className="relative w-[420px] lg:w-[520px] aspect-square rounded-[2rem] bg-white/60 backdrop-blur-md border border-slate-200 shadow-2xl overflow-hidden">
                <img
                  src={heroImg}
                  alt="Hero"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Hero
