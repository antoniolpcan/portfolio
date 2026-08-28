import { LuGithub, LuMail } from "react-icons/lu"

export default function Contact() {
  const EMAIL = "antoniolpcandioto@gmail.com"
  const GITHUB_URL = "https://github.com/antoniolpcan"

  return (
    <section id="contact" className="px-6 py-36">
      <div className="mx-auto max-w-4xl text-center">

        <header className="flex flex-col items-center">
          <LuMail
            size={30}
            aria-hidden="true"
            className="text-(--accent)"
          />

          <p className="mt-6 text-sm text-(--warm)">
            05 / contato
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
            tem algum projeto{" "}
            <span className="block text-(--accent)">
              em mente?
            </span>
          </h2>
        </header>

        <p className="mx-auto mt-7 max-w-lg leading-7 text-(--muted)">
          Se quiser conversar sobre desenvolvimento, algum projeto ou uma
          oportunidade de trabalho, pode entrar em contato comigo.
        </p>

        <div className="mt-10">
          <a
            href={`mailto:${EMAIL}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-(--text)
              px-7
              py-3.5
              text-sm
              font-medium
              text-(--bg)
              transition-transform
              duration-200
              hover:-translate-y-0.5
              hover:opacity-90
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-(--accent)
            "
          >
            <LuMail size={16} aria-hidden="true" />
            entrar em contato
          </a>
        </div>

        <nav
          aria-label="Links de contato secundários"
          className="mt-10 flex justify-center gap-6 text-sm text-(--muted)"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-1.5
              transition-colors
              hover:text-(--text)
              focus-visible:outline-none
              focus-visible:underline
            "
          >
            <LuGithub size={18} aria-hidden="true" />
            GitHub
          </a>
        </nav>
      </div>
    </section>
  )
}