import ProjectsCard from './ProjectsCard'
import { projects } from '../data'
import HyperOne from './customH1/HyperOne'
import PacketTracerWindow from './PacketTracerWindow'

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="text-center mb-10">
        <HyperOne value={'Projects'} />
        <p className="mt-4 text-slate-700 text-lg max-w-3xl mx-auto px-6">
          A Packet Tracer–inspired view of my work — browse projects like output
          from a network device CLI.
        </p>
      </div>

      <PacketTracerWindow title="Cisco Packet Tracer - Router0 (CLI)">
        <div className="flex flex-col gap-10 items-center w-full">
          {projects.map((project) => (
            <ProjectsCard key={project.id} {...project} />
          ))}
        </div>
      </PacketTracerWindow>
    </section>
  )
}

export default Projects
