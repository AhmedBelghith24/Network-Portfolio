import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { links } from '../data.jsx'
import { FaEnvelope, FaFileAlt } from 'react-icons/fa'

const Navbar = () => {
  const navRef = useRef([])
  navRef.current = []

  const emailRef = useRef(null)
  const resumeRef = useRef(null)

  const addToRefs = (el) => {
    if (el && !navRef.current.includes(el)) {
      navRef.current.push(el)
    }
  }

  useEffect(() => {
    gsap.set([...navRef.current, emailRef.current, resumeRef.current], {
      scale: 1,
    })
  }, [])

  const handleHover = (ref, scale) => {
    gsap.to(ref.current, {
      scale: scale,
      duration: 0.3,
      ease: 'power1.inOut',
    })
  }

  return (
    <nav>
      <div className="px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Left: Title */}
        <div
          className="w-full sm:w-auto text-left"
          ref={addToRefs}
          onMouseEnter={() => handleHover(navRef.current[0], 1.1)}
          onMouseLeave={() => handleHover(navRef.current[0], 1)}
        >
          <h2 className="text-3xl font-bold">
            Web <span className="text-sky-700">Developer</span>
          </h2>
        </div>
        {/* Center: Email */}
        <div className="w-full font-bold sm:w-auto flex justify-center">
          <a
            ref={emailRef}
            href="mailto:ahmed@example.com"
            onMouseEnter={() => handleHover(emailRef, 1.1)}
            onMouseLeave={() => handleHover(emailRef, 1)}
            className="flex items-center gap-x-2 text-lg tracking-wide hover:text-sky-600 duration-300 font-bold"
          >
            <FaEnvelope className="h-6 w-6" />
            abelghith@oakland.edu
          </a>
        </div>
        {/* Right: Links & Resume */}
        <div className="font-bold w-full sm:w-auto flex items-center gap-x-8 justify-center sm:justify-end">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              ref={addToRefs}
              onMouseEnter={() => handleHover(navRef.current[index + 1], 1.5)}
              onMouseLeave={() => handleHover(navRef.current[index + 1], 1)}
              className="flex items-center gap-x-2 capitalize text-lg tracking-wide hover:text-sky-600 duration-300 font-bold"
            >
              {link.text}
            </a>
          ))}
          <a
            ref={resumeRef}
            href="/Full_Stack_Software_Engineer_Resume.pdf"
            download
            onMouseEnter={() => handleHover(resumeRef, 1.1)}
            onMouseLeave={() => handleHover(resumeRef, 1)}
            className="flex items-center gap-x-2 capitalize text-lg tracking-wide hover:text-sky-600 duration-300 px-2 py-1 rounded font-bold"
          >
            <FaFileAlt className="h-6 w-6" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// // Hover animation: add a rose-tinted box-shadow that stays until the mouse leaves.
// const handleHoverEnter = (ref) => {
//   gsap.to(ref.current, {
//     boxShadow: '0px 0px 20px rgba(244,63,94,0.8)',
//     duration: 0.1,
//     ease: 'power2.out',
//   })
// }

// const handleHoverLeave = (ref) => {
//   gsap.to(ref.current, {
//     boxShadow: '0px 0px 0px rgba(0,0,0,0)',
//     duration: 0.1,
//     ease: 'power2.out',
//   })
// }

// onMouseEnter={() => handleHoverEnter(emailRef)}
// onMouseLeave={() => handleHoverLeave(emailRef)}
