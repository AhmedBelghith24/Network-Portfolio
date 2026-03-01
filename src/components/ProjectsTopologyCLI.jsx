import React, { useEffect, useMemo, useRef, useState } from 'react'
import { projects } from '../data'
import HyperOne from './customH1/HyperOne'
import { gsap } from 'gsap'
import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const clamp = (n, min, max) => Math.max(min, Math.min(max, n))

const ProjectsTopologyCLI = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    'Router> enable',
    'Router# terminal length 0',
    'Router# show topology projects',
    'Tip: type "help" to see commands.',
  ])

  const inputRef = useRef(null)
  const outputRef = useRef(null)
  const nodeRefs = useRef([])

  const total = projects.length
  const active = projects[activeIndex]

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    // animate nodes in
    gsap.fromTo(
      nodeRefs.current,
      { y: 10, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.05,
      },
    )
  }, [])

  const pushLines = (...lines) => setHistory((prev) => [...prev, ...lines])

  const goTo = (idx) => {
    const next = clamp(idx, 0, total - 1)
    setActiveIndex(next)
    pushLines(
      `Selected node: Project ${next + 1}/${total} — ${projects[next].title}`,
    )
  }

  const openLink = (url) => {
    if (!url) return pushLines('% No URL available for this project.')
    window.open(url, '_blank', 'noopener,noreferrer')
    pushLines(`Opening: ${url}`)
  }

  const handleCommand = (raw) => {
    const cmd = raw.trim()
    if (!cmd) return
    pushLines(`Router# ${cmd}`)
    const lower = cmd.toLowerCase()

    if (lower === 'help' || lower === '?') {
      pushLines(
        'Commands:',
        '  next | prev        - select next/previous project node',
        '  show <n>           - select project number (show 2)',
        '  open               - open live demo (if available)',
        '  github             - open GitHub repo (if available)',
        '  list               - list project titles',
        '  clear              - clear terminal output',
      )
      return
    }
    if (lower === 'next') return goTo(activeIndex + 1)
    if (lower === 'prev' || lower === 'back') return goTo(activeIndex - 1)

    if (lower.startsWith('show ')) {
      const n = Number(lower.split(' ')[1])
      if (!Number.isFinite(n) || n < 1 || n > total)
        return pushLines(`% Invalid. Use 1-${total}.`)
      return goTo(n - 1)
    }

    if (lower === 'open' || lower === 'demo') return openLink(active?.url)
    if (lower === 'github' || lower === 'repo') return openLink(active?.github)

    if (lower === 'list') {
      pushLines(
        'Projects:',
        ...projects.map((p, i) => `  ${i + 1}. ${p.title}`),
      )
      return
    }

    if (lower === 'clear' || lower === 'cls') {
      setHistory([
        'Router# show topology projects',
        'Tip: type "help" to see commands.',
      ])
      return
    }

    if (/^\d+$/.test(lower)) {
      const n = Number(lower)
      if (n >= 1 && n <= total) return goTo(n - 1)
    }

    pushLines('% Unknown command. Type "help".')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleCommand(input)
    setInput('')
  }

  return (
    <section className="py-20" id="projects">
      <div className="text-center mb-10">
        <HyperOne value="Projects" />
        <p className="mt-4 text-slate-700 text-lg max-w-3xl mx-auto px-6">
          Packet Tracer topology mode — select project nodes using the CLI or
          click the diagram.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-6">
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-[#0b1220]">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111b2d] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <p className="text-white/80 text-sm font-semibold tracking-wide">
              Cisco Packet Tracer - Router0 (CLI)
            </p>
            <div className="w-20" />
          </div>

          <div className="grid lg:grid-cols-[420px_1fr]">
            {/* Terminal */}
            <div className="border-b lg:border-b-0 lg:border-r border-white/10 bg-[#06101f]">
              <div
                ref={outputRef}
                className="h-[260px] lg:h-[520px] overflow-auto px-4 py-4 font-mono text-xs md:text-sm text-emerald-300 leading-relaxed"
              >
                {history.map((line, idx) => (
                  <div key={idx} className="whitespace-pre-wrap">
                    {line}
                  </div>
                ))}
              </div>

              <form
                onSubmit={onSubmit}
                className="px-4 py-3 border-t border-white/10 bg-[#0f1830]"
              >
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-emerald-300">Router#</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40"
                    placeholder='try: "next", "show 2", "open", "github"'
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-white/10 px-3 py-1 text-white/90 hover:bg-white/15 transition"
                  >
                    Enter
                  </button>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {['prev', 'next', 'open', 'github', 'list'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => handleCommand(c)}
                      className="text-xs rounded-full bg-white/10 px-3 py-1 text-white/80 hover:bg-white/15 transition"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </form>
            </div>

            {/* RIGHT: Topology + Details */}
            <div className="bg-[#0b1220]">
              <div className="px-5 py-4 border-b border-white/10">
                <p className="text-white/80 font-mono text-sm">
                  Topology: Router0 → Switch0 → Project Nodes | Selected:{' '}
                  <span className="text-white">
                    {activeIndex + 1}/{total} — {active?.title}
                  </span>
                </p>
              </div>

              <div className="p-6 lg:p-10 grid xl:grid-cols-[1fr_420px] gap-10">
                {/* Topology canvas */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
                  <div className="relative min-h-[420px]">
                    {/* Router */}
                    <div className="absolute left-6 top-6">
                      <div className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white font-mono text-sm">
                        Router0
                        <div className="text-white/60 text-xs mt-1">CORE</div>
                      </div>
                    </div>

                    {/* Switch */}
                    <div className="absolute left-6 top-28">
                      <div className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white font-mono text-sm">
                        Switch0
                        <div className="text-white/60 text-xs mt-1">ACCESS</div>
                      </div>
                    </div>

                    {/* “Cables” */}
                    <div className="absolute left-[72px] top-[72px] w-[2px] h-[70px] bg-white/20" />
                    <div className="absolute left-[72px] top-[172px] w-[260px] h-[2px] bg-white/20" />

                    {/* Project nodes */}
                    <div className="absolute left-[330px] top-[120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      {projects.map((p, i) => (
                        <button
                          key={p.id}
                          ref={(el) => (nodeRefs.current[i] = el)}
                          type="button"
                          onClick={() => goTo(i)}
                          className={`group text-left rounded-2xl border transition p-4 w-[260px]
                            ${
                              i === activeIndex
                                ? 'bg-emerald-300/10 border-emerald-300/40'
                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                            }
                          `}
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-white font-semibold">
                              {i + 1}. {p.title}
                            </p>
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${
                                i === activeIndex
                                  ? 'bg-emerald-300'
                                  : 'bg-white/25'
                              }`}
                            />
                          </div>
                          <p className="mt-2 text-white/60 text-sm line-clamp-2">
                            {p.text}
                          </p>
                          <p className="mt-3 text-xs font-mono text-white/50">
                            interface g0/{i + 1} • status up
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details panel */}
                <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                  <div className="px-5 py-4 border-b border-white/10">
                    <p className="text-white font-semibold">Device Details</p>
                    <p className="text-white/60 text-sm font-mono mt-1">
                      ProjectNode{activeIndex + 1}
                    </p>
                  </div>

                  <div className="p-5">
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20">
                      <img
                        src={active?.img}
                        alt={active?.title}
                        className="w-full h-[220px] object-cover"
                      />
                    </div>

                    <h3 className="mt-4 text-white text-xl font-bold">
                      {active?.title}
                    </h3>
                    <p className="mt-2 text-white/70 text-sm leading-relaxed">
                      {active?.text}
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      {active?.url && (
                        <button
                          onClick={() => openLink(active.url)}
                          className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-white hover:bg-white/15 transition"
                        >
                          <TbWorldWww className="h-5 w-5" />
                          Open
                        </button>
                      )}
                      {active?.github && (
                        <button
                          onClick={() => openLink(active.github)}
                          className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-white hover:bg-white/15 transition"
                        >
                          <FaGithubSquare className="h-5 w-5" />
                          GitHub
                        </button>
                      )}
                    </div>

                    <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-xs text-emerald-300">
                      <div>Router0# show project {activeIndex + 1}</div>
                      <div className="text-white/70 mt-1">
                        name: {active?.title}
                      </div>
                      <div className="text-white/70">status: up</div>
                      <div className="text-white/70">protocol: http/https</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-2 bg-[#0f1830] border-t border-white/10">
                <p className="text-xs text-white/60 font-mono">
                  Mode: Topology View
                </p>
                <p className="text-xs text-white/60 font-mono">
                  Commands: next / prev / show n / open / github / list
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsTopologyCLI
