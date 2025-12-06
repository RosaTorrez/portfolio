"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi"

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (formData.name && formData.email && formData.message) {
            console.log("Form submitted:", formData)
            setSubmitted(true)
            setTimeout(() => {
                setFormData({ name: "", email: "", message: "" })
                setSubmitted(false)
            }, 3000)
        }
    }

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contacto</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-12" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <HiMail className="text-accent-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-semibold mb-1">Email</h3>
                                    <a
                                        href="mailto:hello@example.com"
                                        className="text-text-muted hover:text-accent-primary transition-colors"
                                    >
                                        hello@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-accent-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <HiPhone className="text-accent-secondary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-semibold mb-1">Teléfono</h3>
                                    <a href="tel:+34123456789" className="text-text-muted hover:text-accent-secondary transition-colors">
                                        +34 123 456 789
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-accent-tertiary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <HiLocationMarker className="text-accent-tertiary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-semibold mb-1">Ubicación</h3>
                                    <p className="text-text-muted">Madrid, España</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary outline-none transition-colors text-foreground placeholder:text-text-muted"
                            />
                            <input
                                type="email"
                                placeholder="Tu email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary outline-none transition-colors text-foreground placeholder:text-text-muted"
                            />
                            <textarea
                                placeholder="Tu mensaje"
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary outline-none transition-colors text-foreground placeholder:text-text-muted resize-none"
                            />
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg text-background font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition-all disabled:opacity-50"
                            >
                                {submitted ? "✓ Mensaje enviado" : "Enviar Mensaje"}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact