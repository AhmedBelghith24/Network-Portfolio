import React from 'react'
import HyperOne from './customH1/HyperOne'

const TerminalCard = ({ title, lines }) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#06101f] shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0f1830] border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <p className="text-white/70 text-sm font-semibold">{title}</p>
        <div className="w-10" />
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm text-emerald-300 space-y-2">
        {lines.map((line, i) => (
          <p key={i} className="whitespace-pre-wrap">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

const ExperienceTerminals = () => {
  const helpDeskLines = [
    'IT Help Desk Technician | Jan 2024 – Dec 2025',
    'Oakland University Kresge Library — Rochester Hills, MI',
    '',
    '• Supported latency-sensitive user services in a campus environment',
    '• Troubleshot L1–L3 issues: DNS failures, IP conflicts, routing paths',
    '• Investigated incidents, escalated properly, followed support procedures',
    '• Performed endpoint + network validation checks for reliability',
    '• Documented incidents, resolutions, and configuration changes',
    '• Automated repetitive diagnostics using PowerShell scripts',
  ]

  const internLines = [
    'Network Support Intern | Jun 2023 – Aug 2023',
    'Aiventu — Tunis, Tunisia',
    '',
    '• Configured VLANs, trunking, STP behavior, inter-VLAN routing',
    '• Assisted with OSPF deployment + troubleshooting for reachability',
    '• Supported NAT configuration and connectivity validation exercises',
    '• Packet-level troubleshooting using verification/inspection concepts',
    '• Applied DHCP Snooping, Port Security, and Dynamic ARP Inspection',
    '• Followed documented change procedures and validation checklists',
    '• Built automation-focused lab templates using Python',
  ]

  return (
    <section className="py-20" id="experience">
      <div className="text-center mb-10">
        <HyperOne value="Experience" />
        <p className="mt-4 text-slate-700 text-lg max-w-3xl mx-auto px-6">
          A quick snapshot of my real-world IT support and networking
          experience.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 grid gap-8 lg:grid-cols-2">
        <TerminalCard title="Terminal — Help Desk" lines={helpDeskLines} />
        <TerminalCard title="Terminal — Network Intern" lines={internLines} />
      </div>
    </section>
  )
}

export default ExperienceTerminals
