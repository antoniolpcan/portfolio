import { LuArrowUpRight, LuGithub } from "react-icons/lu"
import type { projects } from "../data/portfolio"

type Project = (typeof projects)[number]

type ProjectItemProps = {
  project: Project
  index: number
}

export default function ProjectItem({ project, index }: ProjectItemProps) {
  const formattedIndex = String(index + 1).padStart(2, "0")

  return (
    <article className="grid gap-8 py-14 lg:grid-cols-[80px_1fr_0.85fr]">
      <div className="text-sm text-(--subtle) font-mono">
        {formattedIndex}
      </div>
      <div>
        <div className="flex items-center gap-3">
          {project.image && (
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              className="h-12 w-12 shrink-0 rounded-xl object-cover"
            />
          )}

          <h3 className="font-serif text-3xl sm:text-4xl">
            {project.title}
          </h3>
        </div>

        <p className="mt-5 max-w-xl leading-7 text-(--muted)">
          {project.description}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="
                rounded-full
                border border-(--border)
                px-3 py-1.5
                text-xs
                text-(--muted)
              "
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              text-sm
              transition-colors
              hover:text-(--accent)
              focus-visible:outline-none
              focus-visible:underline
            "
          >
            <LuGithub size={17} aria-hidden="true" />
            ver código
            <LuArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
      </div>

      <div
        className="
          group
          relative
          min-h-70
          overflow-hidden
          rounded-4xl
          border border-(--border)
          bg-(--soft)
          p-5
        "
      >
        <div
          className="
            h-full
            overflow-hidden
            rounded-2xl
            border border-(--border)
            bg-(--surface)
            shadow-sm
          "
        >
          <div className="flex items-center justify-between border-b border-(--border) px-4 py-3">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-[#c99073]" />
              <span className="h-2 w-2 rounded-full bg-[#d7b96f]" />
              <span className="h-2 w-2 rounded-full bg-(--accent)" />
            </div>

            <span className="text-xs text-(--subtle) font-mono">
              {project.title.toLowerCase()}
            </span>
          </div>
          <a href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src={`https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={`Preview ao vivo de ${project.title}`}
              loading="lazy"
              className="
                h-56
                w-full
                object-cover
                object-top
                transition-transform
                duration-500
                group-hover:scale-[1.02]
              "
            />
          </a>
        </div>
      </div>
    </article>
  )
}