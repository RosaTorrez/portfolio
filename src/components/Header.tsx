import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = ["Inicio", "Sobre mí", "Proyectos", "Habilidades", "Contacto"]

    const scrollToSection = (index: number) => {
        setIsOpen(false)
        const sections = ["hero", "about", "projects", "skills", "contact"]
        const element = document.getElementById(sections[index])
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <div className="w-8 h-8 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">D</span>
                    </div>
                    <span className="text-lg font-bold text-foreground hidden sm:inline">Dev Portfolio</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 items-center">
                    {navItems.map((item, index) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(index)}
                            className="text-text-muted hover:text-accent-primary transition-colors text-sm font-medium"
                        >
                            {item}
                        </button>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg text-background font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition-all"
                    >
                        Contactar
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 hover:bg-background-secondary rounded-lg transition-colors"
                >
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background-secondary border-b border-border">
                    <div className="px-4 py-4 flex flex-col gap-4">
                        {navItems.map((item, index) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(index)}
                                className="text-foreground hover:text-accent-primary transition-colors text-left py-2"
                            >
                                {item}
                            </button>
                        ))}
                        <a
                            href="#contact"
                            className="px-4 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg text-background font-semibold text-center"
                        >
                            Contactar
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header