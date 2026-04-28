import { nanoid } from 'nanoid'
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaPython,
  FaBootstrap,
} from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiMongodb,
  SiVite,
  SiMysql,
  SiNextdotjs,
  SiExpress,
  SiCanva,
  SiNetlify,
} from 'react-icons/si'
import img1 from './assets/port.png'
import img2 from './assets/shell.png'
import img3 from './assets/fakeflix.png'
import img4 from './assets/Overview.png'
import img5 from './assets/Koora.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#experience', text: 'experience' },
]

export const skills = [
  // Networking / IT (public folder icons)
  {
    id: nanoid(),
    title: 'SSH',
    icon: (
      <img
        src="/svg/skills/ssh.png"
        alt="SSH"
        className="h-full w-full object-contain"
      />
    ),
    text: 'Secure remote device administration using SSH.',
  },
  {
    id: nanoid(),
    title: 'Troubleshooting',
    icon: (
      <img
        src="/svg/skills/terminal.png"
        alt="Terminal"
        className="h-full w-full object-contain"
      />
    ),
    text: 'Diagnosing network and system issues using CLI tools.',
  },
  {
    id: nanoid(),
    title: 'Firewall',
    icon: (
      <img
        src="/svg/skills/firewall.png"
        alt="Firewall"
        className="h-full w-full object-contain"
      />
    ),
    text: 'Understanding firewall concepts and basic security controls.',
  },
  {
    id: nanoid(),
    title: 'Servers',
    icon: (
      <img
        src="/svg/skills/server.png"
        alt="Server"
        className="h-full w-full object-contain"
      />
    ),
    text: 'Supporting infrastructure components and IT operations.',
  },
  {
    id: nanoid(),
    title: 'LAN Devices',
    icon: (
      <img
        src="/svg/skills/hub.png"
        alt="Hub"
        className="h-full w-full object-contain"
      />
    ),
    text: 'Understanding LAN components and traffic flow.',
  },
  {
    id: nanoid(),
    title: 'Routing',
    icon: (
      <img
        src="/svg/skills/wifi-router.png"
        alt="Router"
        className="h-full w-full object-contain"
      />
    ),
    text: 'Routing & switching foundation (VLANs, basic routing).',
  },
  {
    id: nanoid(),
    title: 'DNS',
    icon: (
      <img
        src="/svg/skills/dns.png"
        alt="DNS"
        className="h-full w-full object-contain"
      />
    ),
    text: 'Troubleshooting name resolution and DNS connectivity issues.',
  },
  {
    id: nanoid(),
    title: 'DHCP',
    icon: (
      <img
        src="/svg/skills/dhcp.png"
        alt="DHCP"
        className="h-full w-full object-contain"
      />
    ),
    text: 'Dynamic addressing and DHCP troubleshooting.',
  },
  {
    id: nanoid(),
    title: 'HTTP',
    icon: (
      <img
        src="/svg/skills/http.png"
        alt="HTTP"
        className="h-full w-full object-contain"
      />
    ),
    text: 'Understanding HTTP and common networking protocols.',
  },
  {
    id: nanoid(),
    title: 'NAT',
    icon: (
      <img
        src="/svg/skills/nat.png"
        alt="NAT"
        className="h-full w-full object-contain"
      />
    ),
    text: 'Understanding HTTP and common networking protocols.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: img1,
    url: 'https://portfolio-mauve-seven-15.vercel.app',
    github: 'https://github.com/AhmedBelghith24/portfolio',
    title: 'My Portfolio 🔥',
    text: 'Welcome to my portfolio 👋 , built with React JS! This site showcases my projects, skills, and creative journey using modern, interactive web design. 🚀 Explore my work and drop me a message 📬 to learn more about how I bring ideas to life.',
  },
  {
    id: nanoid(),
    img: img4,
    url: 'https://www.societe3c.online',
    github: 'https://github.com/AhmedBelghith24/Paycheck-Management-System',
    title: 'Paycheck Management System 💰',
    text: 'This is a full-stack Paycheck Management System built with the MERN stack. It allows users to track, filter, and mark paychecks as paid, with support for supplier, bank, and monthly filters.',
  },
  {
    id: nanoid(),
    img: img5,
    url: 'https://mrewelkoora.vercel.app',
    github: 'https://github.com/AhmedBelghith24/Merwel-Koora',
    title: 'Vintage Soccer Jerseys Store ⚽',
    text: 'An e-commerce React app for browsing and purchasing vintage soccer jerseys. Features include dynamic product listings, admin-controlled inventory management, image uploads, and sales tracking.',
  },
]

export const certificates = [
  {
    id: nanoid(),
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    img: '/certificates/CCNAA.png',
  },
  {
    id: nanoid(),
    title: 'FIFA Club World Cup 2025™ volunteer certificate',
    issuer: 'FIFA',
    img: '/certificates/FIFA.png',
  },
  {
    id: nanoid(),
    title: 'AWS Certified Cloud Practitioner (CCP)',
    issuer: 'AWS',
    img: '/certificates/aws.png',
  },
]
