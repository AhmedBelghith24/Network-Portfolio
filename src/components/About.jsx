import HyperOne from './customH1/HyperOne.jsx'
import programmerGif from '../assets/ccna.png'

const About = () => {
  return (
    <section className="bg-transparent py-20" id="about">
      <HyperOne value={'About Me 👨🏻'} />

      {/* WIDER CONTAINER */}
      <div className="max-w-[1600px] mx-auto mt-16 px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-2xl">
          {/* LEFT — CERTIFICATE */}
          <div className="flex justify-center">
            <img
              src={programmerGif}
              alt="CCNA certificate"
              className="
                w-full
                max-w-[750px]
                object-contain
                rounded-xl
                shadow-lg
                border
                border-slate-200
                bg-white
                p-4
              "
            />
          </div>

          {/* RIGHT — ABOUT TEXT */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              CCNA Certified | System Administrator
            </h3>

            <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
              I am a CCNA-certified IT professional with a strong passion for
              networking and infrastructure design, currently pursuing a career
              as a Network Engineer. With hands-on experience in IT support and
              network administration, I have developed practical skills in
              troubleshooting wired and wireless connectivity issues,
              configuring Cisco routers and switches, and implementing routing
              protocols such as OSPF. My background includes resolving
              real-world technical problems, supporting end users, and
              maintaining reliable network operations in fast-paced
              environments. I am continuously expanding my knowledge in routing,
              switching, and network security while building projects that
              transform theoretical concepts into practical solutions.
            </p>

            {/* SKILLS BADGES */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Internet Protocol Suite (TCP/IP)',
                'Routing Protocols (OSPF, EIGRP)',
                'Cloud Fundamentals (Aws)',
                'Cisco Configuration',
                'Etherchannel',
                'Subnetting',
                'Wireless networking',
                'Network Security',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
