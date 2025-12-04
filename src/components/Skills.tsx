import { motion } from "framer-motion"

const Skills = () => {
    const skillCategories = [
        {
            name: "Frontend",
            skills: [
                { name: "React", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Tailwind CSS", level: 95 },
                { name: "HTML/CSS", level: 98 },
            ],
        },
        {
            name: "Backend",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express", level: 85 },
                { name: "Bases de datos", level: 80 },
                { name: "REST APIs", level: 90 },
            ],
        },
        {
            name: "Herramientas",
            skills: [
                { name: "Git", level: 95 },
                { name: "Docker", level: 75 },
                { name: "Figma", level: 85 },
                { name: "VS Code", level: 98 },
            ],
        },
    ]

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Habilidades</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-12" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-background-secondary p-8 rounded-lg border border-border hover:border-accent-primary transition-colors"
                            >
                                <h3 className="text-xl font-bold text-accent-primary mb-6">{category.name}</h3>
                                <div className="space-y-6">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-foreground font-semibold">{skill.name}</span>
                                                <span className="text-accent-primary text-sm">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    viewport={{ once: true }}
                                                    className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills