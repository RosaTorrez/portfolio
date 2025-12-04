import { HiMail } from "react-icons/hi"
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Links */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#hero" className="text-text-muted hover:text-accent-primary transition-colors">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-text-muted hover:text-accent-primary transition-colors">
                                    Sobre mí
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-text-muted hover:text-accent-primary transition-colors">
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-text-muted hover:text-accent-primary transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Redes Sociales</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-background-secondary rounded-lg hover:bg-accent-primary/20 transition-colors text-accent-primary"
                                aria-label="GitHub"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-background-secondary rounded-lg hover:bg-accent-secondary/20 transition-colors text-accent-secondary"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-background-secondary rounded-lg hover:bg-accent-tertiary/20 transition-colors text-accent-tertiary"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={24} />
                            </a>
                            <a
                                href="mailto:hello@example.com"
                                className="p-2 bg-background-secondary rounded-lg hover:bg-accent-primary/20 transition-colors text-accent-primary"
                                aria-label="Email"
                            >
                                <HiMail size={24} />
                            </a>
                        </div>
                    </div>

                    {/* About Footer */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Acerca de</h4>
                        <p className="text-text-muted text-sm">
                            Portafolio construido con React, TypeScript y Tailwind CSS. Diseño moderno y responsivo.
                        </p>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">© {currentYear} Tu Nombre. Todos los derechos reservados.</p>
                    <p className="text-text-muted text-sm">
                        Diseñado y desarrollado con <span className="text-accent-primary">♥</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer