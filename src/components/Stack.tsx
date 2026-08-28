import type { IconType } from "react-icons"
import { backend, frontend } from "../data/portfolio"
import { LuPanelsTopLeft, LuServer } from "react-icons/lu"

type TechItem = {
  name: string
  icon: IconType
}

type StackCardProps = {
  title: string
  icon: IconType
  iconColorClass: string
  bgClass: string
  items: TechItem[]
}

function StackCard({
  title,
  icon: Icon,
  iconColorClass,
  bgClass,
  items,
}: StackCardProps) {
  return (
    <article
      className={`
        rounded-4xl
        border
        border-(--border)
        ${bgClass}
        p-8
        transition-colors
        duration-500
      `}
    >
      <div className="flex items-center gap-3">
        <Icon size={22} aria-hidden="true" className={iconColorClass} />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>

      <ul className="mt-8 space-y-1">
        {items.map(({ name, icon: TechIcon }) => (
          <li
            key={name}
            className="
              flex
              items-center
              gap-3
              border-b
              border-(--border)
              py-3
              last:border-b-0
            "
          >
            <TechIcon size={20} aria-hidden="true" className="text-(--muted)" />
            <span className="text-sm font-medium">{name}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Stack() {
  return (
    <section id="stack" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <header>
          <p className="text-sm text-(--warm)">03 / tecnologias</p>

          <h2 className="mt-3 font-serif text-5xl md:text-6xl">
            minha stack.
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-(--muted)">
            Tecnologias que fazem parte da maioria dos projetos que desenvolvo
            atualmente.
          </p>
        </header>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <StackCard
            title="backend"
            icon={LuServer}
            iconColorClass="text-[var(--accent)]"
            bgClass="bg-[var(--surface)]"
            items={backend}
          />
          <StackCard
            title="frontend"
            icon={LuPanelsTopLeft}
            iconColorClass="text-[var(--warm)]"
            bgClass="bg-[var(--soft)]"
            items={frontend}
          />
        </div>
      </div>
    </section>
  )
}