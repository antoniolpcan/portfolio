export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-(--border) px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-(--subtle) sm:flex-row">
        <p>Desenvolvido com React + TypeScript</p>

        <p>© {currentYear} • Todos os direitos reservados</p>
      </div>
    </footer>
  )
}