import { useState } from "react"
import { motion } from "framer-motion"
import { HiExternalLink, HiCode } from "react-icons/hi"
import ProjectModal from "./ProjectModal"

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)

    const projects = [
        {
            id: 1,
            title: "Plataforma E-commerce",
            description: "Tienda en línea con carrito de compras, pagos y gestión de inventario.",
            image: "/ecommerce-website.jpg",
            technologies: ["React", "TypeScript", "Stripe", "Node.js"],
            link: "https://github.com",
            demo: "https://example.com",
            details:
                "Plataforma completa de e-commerce con integración de pagos mediante Stripe, gestión de usuarios y análisis de ventas.",
        },
        {
            id: 2,
            title: "App de Tareas Colaborativa",
            description: "Aplicación para gestionar tareas en equipo con tiempo real.",
            image: "/task-management-app.jpg",
            technologies: ["React", "Firebase", "Tailwind"],
            link: "https://github.com",
            demo: "https://example.com",
            details: "App con actualizaciones en tiempo real, roles de usuario y notificaciones.",
        },
        {
            id: 3,
            title: "Dashboard Analítico",
            description: "Dashboard interactivo con gráficos y análisis de datos.",
            image: "/analytics-dashboard.png",
            technologies: ["React", "D3.js", "API REST"],
            link: "https://github.com",
            demo: "https://example.com",
            details: "Visualización de datos compleja con gráficos interactivos y exportación de reportes.",
        },
    ]

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Proyectos</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-12" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedProject(project.id)}
                                className="group cursor-pointer"
                            >
                                <div className="bg-background rounded-lg overflow-hidden border border-border hover:border-accent-primary transition-all hover:shadow-lg hover:shadow-accent-primary/20">
                                    <div className="relative overflow-hidden h-48">
                                        <img
                                            src={`/portfolio/${project.image || "/portfolio/placeholder.svg"}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-text-muted">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-full font-semibold"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-4 pt-4">
                                            <a
                                                href={project.link}
                                                className="inline-flex items-center gap-2 text-accent-secondary hover:text-accent-primary transition-colors"
                                            >
                                                <HiCode size={18} />
                                                Código
                                            </a>
                                            <a
                                                href={project.demo}
                                                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors"
                                            >
                                                <HiExternalLink size={18} />
                                                Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <ProjectModal project={projects.find((p) => p.id === selectedProject)} onClose={() => setSelectedProject(null)} />
        </section>
    )
}

export default Projects