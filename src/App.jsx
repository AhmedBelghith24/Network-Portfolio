import React, { useEffect, useLayoutEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/customSkills/Skills.jsx'
import About from './components/About'
import Talk from './components/Talk'
import ParticlesComponent from './components/ParticlesComponent'
import ProjectsCLI from './components/ProjectsCLI.jsx'
import Certificates from './components/Certificates.jsx'


const App = () => {
  // ✅ Run ASAP to prevent hash jump + scroll restoration
  useLayoutEffect(() => {
    // Stop browser from restoring last scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Remove any #hash (ex: #talk) so refresh always starts at top
    if (window.location.hash) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search,
      )
    }

    // Force scroll to top (twice) to beat late layout shifts
    window.scrollTo(0, 0)
    requestAnimationFrame(() => window.scrollTo(0, 0))
  }, [])

  useEffect(() => {
    AOS.init({ duration: 400 })
  }, [])

  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4">
      <ParticlesComponent />

      <div className="relative z-10 py-10 px-4">
        <div className="sticky top-0 w-full z-10 bg-gray bg-opacity-80 backdrop-filter backdrop-blur-lg">
          <Navbar />
        </div>

        <Hero />
        <About />
        <Skills />
        <ProjectsCLI />
        <Certificates />
        <Talk />

        <footer className="mt-10 text-center text-base text-gray-500 font-medium">
          Created by <span className="text-sky-700">Ahmed Belghith</span> | ©
          2026 All rights reserved
        </footer>
      </div>
    </div>
  )
}

export default App
