import React from 'react'

const PacketTracerWindow = ({
  title = 'Cisco Packet Tracer - CLI',
  children,
}) => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-6">
      <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-[#0b1220]">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111b2d] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <p className="text-white/80 text-sm font-semibold tracking-wide">
            {title}
          </p>

          <div className="w-20" />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#0f1830] border-b border-white/10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80">
            Physical
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80">
            Config
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white">
            CLI
          </span>
        </div>

        {/* Console Header */}
        <div className="px-5 py-4 bg-[#0b1220] border-b border-white/10">
          <div className="font-mono text-sm text-emerald-300 leading-relaxed">
            <div>Router&gt; enable</div>
            <div>Router# conf t</div>
            <div>
              Router# <span className="text-white">show projects brief</span>
            </div>
          </div>
        </div>

        {/* Console Body */}
        <div className="px-5 py-8 bg-[#06101f]">
          {/* “Output” area */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            {children}
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#0f1830] border-t border-white/10">
          <p className="text-xs text-white/60 font-mono">
            Status: connected | Privilege: 15
          </p>
          <p className="text-xs text-white/60 font-mono">
            Press Ctrl+C to stop
          </p>
        </div>
      </div>
    </div>
  )
}

export default PacketTracerWindow
