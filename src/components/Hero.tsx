import type { IconType } from "react-icons"
import {
  LuArrowDown,
  LuArrowUpRight,
  LuFileCode2,
  LuFileText,
  LuGithub,
  LuLayers3,
  LuLinkedin,
  LuNotebookPen,
  LuPanelsTopLeft,
} from "react-icons/lu"
import { SOCIAL_LINKS } from "../data/portfolio"

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pb-16 pt-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:items-start">
          
          <header className="max-w-2xl">
            <div className="mb-6 flex items-center gap-2 text-sm text-(--accent)">
              <LuFileCode2 size={17} aria-hidden="true" />
              <span>desenvolvedor full stack</span>
            </div>

            <h1 className="font-serif text-6xl leading-[0.98] tracking-tight sm:text-7xl md:text-8xl">
              me conta a ideia.{" "}
              <span className="block text-(--accent)">
                a gente constrói.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-(--muted)">
              Trabalho principalmente com React, TypeScript, Python e C#,
              criando aplicações web, APIs e automações com foco em código
              limpo e qualidade :)
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="
                  flex items-center gap-2
                  rounded-full
                  bg-(--accent)
                  px-6 py-3
                  text-sm
                  font-medium
                  transition-transform duration-200
                  hover:-translate-y-0.5
                  hover:bg-(--accent-hover)
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-(--accent)
                "
              >
                conhecer meus projetos
                <LuArrowDown size={15} aria-hidden="true" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-(--border)
                  bg-(--surface)
                  px-6 py-3
                  text-sm
                  transition-transform duration-200
                  hover:-translate-y-0.5
                  hover:bg-(--soft)
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-(--accent)
                "
              >
                <LuLinkedin size={17} aria-hidden="true" />
                LinkedIn
                <LuArrowUpRight size={14} aria-hidden="true" />
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-(--border)
                  bg-(--surface)
                  px-6 py-3
                  text-sm
                  transition-transform duration-200
                  hover:-translate-y-0.5
                  hover:bg-(--soft)
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-(--accent)
                "
              >
                <LuGithub size={17} aria-hidden="true" />
                GitHub
                <LuArrowUpRight size={14} aria-hidden="true" />
              </a>

              <a
                href="/curriculo.pdf"
                download="Antonio_Curriculo.pdf"
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-(--border)
                  bg-(--surface)
                  px-6 py-3
                  text-sm
                  transition-transform duration-200
                  hover:-translate-y-0.5
                  hover:bg-(--soft)
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-(--accent)
                "
              >
                <LuFileText size={17} aria-hidden="true" />
                currículo
                <LuArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </header>

          <div className="relative shrink-0">
            <div
              className="
                relative
                h-64 w-64
                sm:h-80 sm:w-80
                overflow-hidden
                rounded-3xl
                border border-(--border)
                bg-(--surface)
                shadow-2xl
                transition-all duration-500
              "
            >
              <img
                src={`${SOCIAL_LINKS.github}.png`}
                alt="Foto de perfil do GitHub de Antonio"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={LuPanelsTopLeft}
            title="foco atual"
            description="aplicações full stack"
          />

          <InfoCard
            icon={LuNotebookPen}
            title="estudando"
            description="desenvolvimento de software"
          />

          <InfoCard
            icon={LuLayers3}
            title="gosto de trabalhar com"
            description="React, APIs e backend"
          />
        </div>
      </div>
    </section>
  )
}

type InfoCardProps = {
  icon: IconType
  title: string
  description: string
  warm?: boolean
}

function InfoCard({
  icon: Icon,
  title,
  description,
  warm = false,
}: InfoCardProps) {
  return (
    <article
      className="
        rounded-3xl
        border border-(--border)
        bg-(--surface)
        p-6
        transition-colors duration-500
      "
    >
      <div className={warm ? "text-(--warm)" : "text-(--accent)"}>
        <Icon size={23} aria-hidden="true" />
      </div>

      <p className="mt-5 text-xs uppercase tracking-widest text-(--subtle)">
        {title}
      </p>

      <h3 className="mt-2 text-base font-normal">
        {description}
      </h3>
    </article>
  )
}