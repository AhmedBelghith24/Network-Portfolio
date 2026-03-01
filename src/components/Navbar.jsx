import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { links } from '../data.jsx'
import { FaEnvelope, FaFileAlt } from 'react-icons/fa'

const Navbar = () => {
  const navRef = useRef(null)
  const itemRefs = useRef([])

  const setItemRef = (el, idx) => {
    if (el) itemRefs.current[idx] = el
  }

  useEffect(() => {
    // subtle entrance
    gsap.fromTo(
      navRef.current,
      { y: -12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
    )

    // set hover base state
    gsap.set(itemRefs.current, { scale: 1 })
  }, [])

  const hoverIn = (el) => {
    gsap.to(el, { scale: 1.06, duration: 0.2, ease: 'power2.out' })
  }

  const hoverOut = (el) => {
    gsap.to(el, { scale: 1, duration: 0.2, ease: 'power2.out' })
  }

  return (
    <header className="sticky top-0 z-50">
      <nav
        ref={navRef}
        className="mx-auto max-w-[1600px] px-6 py-4"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200 shadow-lg px-5 py-3">
          {/* Brand */}
          <a
            href="#home"
            ref={(el) => setItemRef(el, 0)}
            onMouseEnter={(e) => hoverIn(e.currentTarget)}
            onMouseLeave={(e) => hoverOut(e.currentTarget)}
            className="flex items-baseline gap-2 font-extrabold tracking-tight text-slate-900"
          >
            <span className="text-2xl">Ahmed</span>
            <span className="text-2xl text-sky-700">Belghith</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                ref={(el) => setItemRef(el, idx + 1)}
                onMouseEnter={(e) => hoverIn(e.currentTarget)}
                onMouseLeave={(e) => hoverOut(e.currentTarget)}
                className="text-slate-800 font-semibold tracking-wide hover:text-sky-700 transition"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Email (desktop only to keep navbar clean) */}
            <a
              href="mailto:abelghith@oakland.edu"
              ref={(el) => setItemRef(el, links.length + 1)}
              onMouseEnter={(e) => hoverIn(e.currentTarget)}
              onMouseLeave={(e) => hoverOut(e.currentTarget)}
              className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200 px-4 py-2 text-slate-800 font-semibold hover:bg-white/90 transition"
              aria-label="Email Ahmed"
            >
              <FaEnvelope className="h-5 w-5 text-sky-700" />
              belghithahmed25@gmail.com
            </a>

            <a
              href="IT_Ahmed_Resume2026pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => setItemRef(el, links.length + 2)}
              onMouseEnter={(e) => hoverIn(e.currentTarget)}
              onMouseLeave={(e) => hoverOut(e.currentTarget)}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-4 py-2 text-white font-semibold shadow-md hover:bg-sky-800 transition"
            >
              <FaFileAlt className="h-5 w-5" />
              Resume
            </a>
          </div>
        </div>

        {/* Mobile links row */}
        <div className="md:hidden mt-3 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200 shadow-lg px-4 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-slate-800 font-semibold hover:text-sky-700 transition"
              >
                {link.text}
              </a>
            ))}
            <a
              href="mailto:belghithahmed25@gmail.com"
              className="inline-flex items-center gap-2 text-slate-800 font-semibold hover:text-sky-700 transition"
            >
              <FaEnvelope className="h-5 w-5" />
              Email
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
