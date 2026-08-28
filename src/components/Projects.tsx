import { projects } from "../data/portfolio"
import ProjectItem from "./ProjectItem"

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16">
          <p className="text-sm text-(--warm)">
            02 / projetos
          </p>

          <h2 className="mt-3 font-serif text-5xl md:text-6xl">
            algumas coisas que <br />
            eu construí.
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-(--muted)">
            Projetos onde experimentei ideias, tecnologias e maneiras
            diferentes de resolver problemas.
          </p>
        </header>

        <div className="divide-y divide-(--border) border-b border-(--border)">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}