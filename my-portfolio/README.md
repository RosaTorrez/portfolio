# Portafolio Web - Práctica N°2 Scrum 14 días

Portafolio web profesional desarrollado con **Vite + React + TypeScript** siguiendo **metodología Scrum**.

## 🎯 Sprint Goal

Desarrollar un portafolio web responsivo, moderno con todas las secciones esenciales, buenas prácticas Git y documentación Scrum completa en 14 días.

## 📋 Características Principales

- ✅ **Header responsivo** con navegación móvil (Día 2)
- ✅ **Hero section** con presentación y CTA (Día 3)
- ✅ **About section** con CV descargable (Día 4)
- ✅ **Projects gallery** con modal interactivo (Día 5)
- ✅ **Skills section** con barras de progreso (Día 6)
- ✅ **Contact form** con validación (Día 7)
- ✅ **Footer** con redes sociales (Día 8)
- ✅ **Diseño responsive** mobile-first (Día 9)
- ✅ **Animaciones** con Framer Motion (Día 8-10)
- ✅ **SEO y documentación** (Día 10-14)

## 🚀 Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18.2+ | Framework UI |
| TypeScript | 5.3+ | Tipado estático |
| Vite | 5.0+ | Build tool |
| Tailwind CSS | 3.4+ | Estilos |
| Framer Motion | 10.16+ | Animaciones |
| React Router | 6.20+ | Enrutamiento |
| React Icons | 5.0+ | Iconografía |
| Axios | 1.6+ | HTTP requests |

## 📦 Instalación Rápida

\`\`\`bash
# 1. Crear proyecto Vite
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio

# 2. Instalar dependencias
npm install
npm install react-router-dom axios react-icons framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Ejecutar en desarrollo
npm run dev
\`\`\`

## 📁 Estructura del Proyecto (Esperada)

\`\`\`
my-portfolio/
├── src/
│   ├── components/              # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/                    # Datos estáticos
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── experience.ts
│   ├── styles/                  # Estilos globales
│   │   └── index.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/                      # Archivos estáticos
│   ├── cv.pdf
│   └── avatar.jpg
├── scrum/                       # Documentación Scrum
│   ├── daily-standup.md
│   ├── sprint-review.md
│   └── retrospective.md
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── SPRINT_PLAN.md
\`\`\`

## 🔀 Estrategia Git - Flujo Completo

### Ramas Principales
- **main**: Producción (releases)
- **develop**: Integración (rama base para features)

### Ramas Feature
Creadas desde `develop`, una por historia de usuario:
- `feature/header` (Día 2)
- `feature/hero` (Día 3)
- `feature/about` (Día 4)
- `feature/projects` (Día 5)
- `feature/skills` (Día 6)
- `feature/contact` (Día 7)
- `feature/footer` (Día 8)
- `feature/responsive` (Día 9)

### Flujo Diario
\`\`\`bash
# 1. Crear rama feature
git checkout -b feature/[nombre]

# 2. Hacer cambios y commits
git add .
git commit -m "type(scope): description"

# 3. Push a remoto
git push origin feature/[nombre]

# 4. Crear Pull Request en GitHub
# 5. Mergear a develop después de revisar
# 6. Eliminar rama local y remota
git branch -d feature/[nombre]
git push origin --delete feature/[nombre]
\`\`\`

## 📝 Convenciones de Commits

Formato: `type(scope): subject`

**Types válidos:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Cambios de estilos (Tailwind, CSS)
- `refactor`: Refactorización de código
- `test`: Tests
- `chore`: Setup, config, build

**Scope:** Componente o área (header, hero, contact, etc.)

**Ejemplos:**
\`\`\`bash
feat(header): add responsive mobile navigation
fix(hero): correct image alignment on mobile
style(contact): update button colors with Tailwind
refactor(projects): extract ProjectCard component
docs(readme): update installation instructions
chore(setup): configure tailwind and postcss
\`\`\`

## 📚 Documentación Scrum Incluida

- **SPRINT_PLAN.md**: Plan detallado de 14 días
- **scrum/daily-standup.md**: Template para standups diarios
- **scrum/sprint-review.md**: Revisión del sprint
- **scrum/retrospective.md**: Retrospectiva del sprint

## 🎨 Paleta de Colores

- **Cyan**: `#06B6D4` (Primario)
- **Purple**: `#A855F7` (Secundario)
- **Pink**: `#EC4899` (Acento)
- **Slate-900**: `#0f172a` (Fondo)
- **Slate-50**: `#f8fafc` (Texto claro)

## 🚀 Comandos Principales

\`\`\`bash
# Desarrollo
npm run dev          # Inicia servidor local (puerto 3000)

# Build
npm run build        # Build para producción
npm run preview      # Previsualiza build

# Linting
npm run lint         # Verifica código
\`\`\`

## 📋 Checklist - Día 1

- [ ] Crear proyecto con `npm create vite@latest my-portfolio -- --template react-ts`
- [ ] Instalar dependencias
- [ ] Configurar Tailwind CSS
- [ ] Inicializar Git y crear ramas (main, develop)
- [ ] Crear estructura de carpetas
- [ ] Primer commit: `chore: initial vite react-ts setup`
- [ ] Push a GitHub
- [ ] Rellenar `scrum/daily-standup.md` con progreso

## 📖 Recursos

- [Documentación Vite](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

## 👤 Autor

[Tu Nombre]  
[Tu Email]  
[Tu Portfolio]

## 📄 Licencia

MIT - Libre para usar y modificar

---

**Última actualización:** Día 1 - Setup Inicial
