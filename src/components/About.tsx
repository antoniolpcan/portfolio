import { LuFileCode2 } from "react-icons/lu"
import { TAGS } from "../data/portfolio"

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.3fr]">
        <header>
          <p className="text-sm text-(--warm)">
            01 / sobre
          </p>
          <h2 className="mt-3 font-serif text-5xl leading-tight">
            um pouco <br />
            sobre mim.
          </h2>
        </header>

        <article
          className="
            rounded-4xl
            border border-(--border)
            bg-(--surface)
            p-8 shadow-[0_15px_40px_rgba(90,70,50,0.05)]
            transition-colors duration-500
            md:p-10
          "
        >
          <LuFileCode2
            size={25}
            aria-hidden="true"
            className="mb-7 text-(--accent)"
          />

          <p className="text-xl leading-9">
            Desenvolvo aplicações web e automações ponta a ponta, acompanhando o
            projeto desde a concepção até o funcionamento real em produção.
          </p>

          <p className="mt-6 leading-7 text-(--muted)">
            Tenho experiência na construção de APIs robustas, arquitetura de
            software e interfaces com React. Exploro constantemente
            novas tecnologias para otimizar processos, criar RPAs e construir
            produtos digitais a partir de novas ideias e necessidades.
          </p>
          
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologias e especialidades">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="
                  rounded-full
                  bg-(--soft)
                  px-4 py-2
                  text-sm text-(--muted)
                "
              >
                {tag}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}