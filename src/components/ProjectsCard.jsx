import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'

const ProjectsCard = ({ url, img, github, title, text }) => {
  const cardRef = useRef(null)

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      duration: 0.15,
      scale: 1.03,
      rotationY: 5,
      boxShadow: '0 30px 60px rgba(59, 130, 246, 0.9)',
      ease: 'power3.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      duration: 0.15,
      scale: 1,
      rotationY: 0,
      boxShadow: '0 15px 25px rgba(59, 130, 246, 0.5)',
      ease: 'power3.out',
    })
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col lg:flex-row bg-white/95 rounded-2xl shadow-lg overflow-hidden border border-slate-200 ..."
    >
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full lg:w-1/2 h-64 lg:h-full object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col justify-between w-full lg:w-1/2">
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-wide text-sky-700 mb-4">
            {title}
          </h2>

          <div className="flex gap-4 mb-4 text-2xl text-yellow-400">
            <SiJavascript />
            <SiHtml5 className="text-orange-500" />
            <SiCss3 className="text-blue-600" />
          </div>
          <p className="text-slate-700 mb-4">{text}</p>
        </div>
        <div className="flex gap-4 justify-center">
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black transition" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black transition" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectsCard
