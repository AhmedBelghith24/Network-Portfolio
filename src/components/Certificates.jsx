import React from 'react'
import HyperOne from './customH1/HyperOne'
import { certificates } from '../data.jsx'

const Certificates = () => {
  // Duplicate list to create a seamless loop
  const items = [...certificates, ...certificates]

  return (
    <section className="py-20 bg-transparent" id="certificates">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center">
          <HyperOne value="Certificates" />
        </div>

        {/* Slider */}
        <div className="mt-12 relative overflow-hidden">
          {/* ✅ KEEP white fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-stone-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-stone-50 to-transparent z-10" />

          <div className="cert-track flex items-center gap-10">
            {items.map((c, i) => (
              <div
                key={`${c.id}-${i}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="cert-img w-[420px] md:w-[520px] max-h-[340px] object-contain"
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* CSS animation */}
          <style>{`
            @keyframes certScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            .cert-track {
              width: max-content;
              animation: certScroll 18s linear infinite;
              will-change: transform;
            }

            /* ✅ Hover zoom (animation keeps running) */
            .cert-img {
              transition: transform 0.25s ease;
            }

            .cert-img:hover {
              transform: scale(1.06);
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

export default Certificates
