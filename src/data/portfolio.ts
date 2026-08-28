import {
  SiAngular,
  SiDotnet,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si"

import peelImage from "../assets/images/peel.png"

export const NAV_ITEMS = [
  { label: "início", href: "#home" },
  { label: "sobre", href: "#about" },
  { label: "projetos", href: "#projects" },
  { label: "stack", href: "#stack" },
] as const

export const projects = [
  {
    title: "Peel",
    description:
      "Rede social baseada em post-its, criada para permitir publicações rápidas e uma experiência visual mais simples e direta.",
    technologies: [
      "Fullstack",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
    ],
    github: "https://github.com/antoniolpcan/peel-app",
    image: peelImage,
    link: "https://peel-app-ten.vercel.app/auth"
  },
]

export const backend = [
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "C#",
    icon: SiDotnet,
  },
]

export const frontend = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Angular",
    icon: SiAngular,
  },
]

export const TAGS = [
  "Full Stack",
  "APIs",
  "Backend",
  "Python",
  "React",
  "Angular",
  "RPAs",
  "Automações"
]

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/antoniolpcan/",
  github: "https://github.com/antoniolpcan",
} as const

export const education = [
  {
    role: "Desenvolvimento de Software Multiplataforma",
    place: "Fatec Araras",
    level: "Ensino Superior",
    date: "2021 - 2024"
  },
  {
    role: "Informática",
    place: "Etec Pirassununga",
    level: "Técnico",
    date: "2018 - 2020"
  },
]

export const experience = [
  {
    role: "Desenvolvedor Full Stack & RPA",
    place: "Finanto",
    description:
      "5 anos de prestação de serviços para a empresa, desenvolvendo RPAs para digitação e acompanhamento de empréstimos de crédito consignado, suporte a parceiros, manutenção de sistema fullstack com .Net e Angular e outros projetos.",
    date: "2021 - Atualmente",
  },
]