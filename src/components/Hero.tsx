import { motion } from "framer-motion"
import { HiArrowRight } from "react-icons/hi"

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section
            id="hero"
            className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-b from-background to-background-secondary"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div>
                        <p className="text-accent-primary text-lg font-semibold mb-2">¡Hola! Soy</p>
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                            Desarrollador
                            <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
                                {" "}
                                Fullstack
                            </span>
                        </h1>
                    </div>

                    <p className="text-text-muted text-lg leading-relaxed max-w-md">
                        Creo experiencias web modernas y funcionales. Especializado en React, TypeScript y diseño responsivo.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button
                            onClick={scrollToProjects}
                            className="px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg text-background font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-accent-primary/50 transition-all"
                        >
                            Ver Proyectos <HiArrowRight size={20} />
                        </button>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-accent-primary text-accent-primary rounded-lg font-semibold hover:bg-accent-primary/10 transition-colors"
                        >
                            Contactar
                        </a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary p-1">
                        <div className="w-full h-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                            <img src="/developer-portrait.jpg" alt="Developer" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero