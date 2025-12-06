import { motion } from "framer-motion"
import { HiDownload } from "react-icons/hi"

const About = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Sobre mí</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-12" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Bio */}
                        <div className="space-y-4">
                            <p className="text-text-muted text-lg leading-relaxed">
                                Soy un desarrollador apasionado por crear soluciones web innovadoras. Con experiencia en React,
                                TypeScript y diseño responsivo, me enfoco en construir interfaces intuitivas y funcionales.
                            </p>
                            <p className="text-text-muted text-lg leading-relaxed">
                                Me encanta aprender nuevas tecnologías y trabajar en proyectos desafiantes que impacten positivamente la
                                experiencia del usuario.
                            </p>
                        </div>

                        {/* Education & Experience */}
                        <div className="space-y-6">
                            <div className="bg-background-secondary p-6 rounded-lg border border-border hover:border-accent-primary transition-colors">
                                <h3 className="text-accent-primary font-semibold mb-2">Educación</h3>
                                <p className="text-foreground font-semibold">Licenciatura en Desarrollo Web</p>
                                <p className="text-text-muted text-sm">2022 - Presente</p>
                            </div>

                            <div className="bg-background-secondary p-6 rounded-lg border border-border hover:border-accent-secondary transition-colors">
                                <h3 className="text-accent-secondary font-semibold mb-2">Experiencia</h3>
                                <p className="text-foreground font-semibold">Desarrollador Frontend Freelance</p>
                                <p className="text-text-muted text-sm">2 años de experiencia</p>
                            </div>

                            <a
                                href="/cv.pdf"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition-all"
                            >
                                <HiDownload size={20} />
                                Descargar CV
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About