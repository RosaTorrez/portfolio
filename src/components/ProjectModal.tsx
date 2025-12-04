import { motion, AnimatePresence } from "framer-motion"
import { HiX } from "react-icons/hi"

interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    link: string
    demo: string
    details: string
}

interface ProjectModalProps {
    project?: Project
    onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    if (!project) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border"
                >
                    <button
                        onClick={onClose}
                        className="sticky top-0 right-0 p-4 hover:bg-background-secondary transition-colors float-right"
                    >
                        <HiX size={24} />
                    </button>

                    <div className="p-8 space-y-6">
                        <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-96 object-cover rounded-lg"
                        />
                        <div>
                            <h3 className="text-3xl font-bold text-foreground mb-2">{project.title}</h3>
                            <p className="text-text-muted">{project.details}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">Tecnologías</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-6 py-3 bg-accent-secondary text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-secondary/50 transition-all text-center"
                            >
                                Ver Código
                            </a>
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-6 py-3 border-2 border-accent-primary text-accent-primary rounded-lg font-semibold hover:bg-accent-primary/10 transition-colors text-center"
                            >
                                Ver Demo
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ProjectModal