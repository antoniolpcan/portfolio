import { useState } from "react"

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Stack from "./components/Stack"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import {
  themes,
  getThemeStyle,
  type ThemeName,
} from "./theme/themes"

function App() {
  const [theme, setTheme] = useState<ThemeName>("dark")

  return (
    <div
      style={getThemeStyle(themes[theme])}
      className="min-h-screen bg-(--bg) text-(--text) transition-colors duration-500"
    >
      <Header theme={theme} onThemeChange={setTheme}/>
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App