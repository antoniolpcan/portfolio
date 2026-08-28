import { LuMail } from "react-icons/lu"
import ThemeSelector from "./ThemeSelector"
import type { ThemeName } from "../theme/themes"
import { NAV_ITEMS } from "../data/portfolio"

type HeaderProps = {
  theme: ThemeName
  onThemeChange: (theme: ThemeName) => void
}

export default function Header({ theme, onThemeChange }: HeaderProps) {
  return (
    <header className="fixed left-0 top-5 z-50 w-full px-4">
      <nav
        aria-label="Navegação principal"
        className="
          relative
          mx-auto
          flex
          max-w-full
          w-fit
          items-center
          gap-1
          rounded-full
          border
          border-(--border)
          bg-(--surface)
          p-1.5
          shadow-sm
          transition-colors
          duration-500
        "
      >
        <ul className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="
                  block
                  whitespace-nowrap
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  transition-colors
                  hover:bg-(--soft)
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-(--accent)
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          aria-label="Ir para contato"
          className="
            ml-1
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            text-(--soft)
            bg-(--accent)
            transition-colors
            hover:bg-(--accent-hover)
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-(--accent)
          "
        >
          <LuMail size={16} aria-hidden="true" />
        </a>

        <div className="shrink-0">
          <ThemeSelector
            theme={theme}
            onThemeChange={onThemeChange}
          />
        </div>
      </nav>
    </header>
  )
}