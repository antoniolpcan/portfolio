import { LuGraduationCap, LuBriefcase } from "react-icons/lu"
import { education, experience } from "../data/portfolio"

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col justify-between gap-4 border-b border-(--border) pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-mono text-(--warm)">04 / trajetória</p>
            <h2 className="mt-2 font-serif text-4xl leading-tight md:text-5xl">
              experiência & formação.
            </h2>
          </div>
          <p className="max-w-md text-sm text-(--muted)">
            Histórico acadêmico e atuação prática no desenvolvimento de software.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-8 flex items-center gap-3 border-b border-(--border) pb-4 text-(--accent)">
              <LuGraduationCap size={22} aria-hidden="true" />
              <h3 className="text-xl font-medium text-(--text)">Formação Acadêmica</h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-(--warm)">
                      {item.level} ({item.date})
                    </span>
                    <span className="text-xs font-mono text-(--muted)">{item.place}</span>
                  </div>
                  <h4 className="mt-2 text-lg font-medium text-(--text) transition-colors group-hover:text-(--accent)">
                    {item.role}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center gap-3 border-b border-(--border) pb-4 text-(--accent)">
              <LuBriefcase size={22} aria-hidden="true" />
              <h3 className="text-xl font-medium text-(--text)">Atuação Profissional</h3>
            </div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-(--accent)">
                      {item.date}
                    </span>
                    <span className="text-xs font-mono text-(--muted)">{item.place}</span>
                  </div>
                  <h4 className="mt-2 text-lg font-medium text-(--text) transition-colors group-hover:text-(--accent)">
                    {item.role}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-(--muted)">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}