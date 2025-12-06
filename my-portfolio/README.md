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

bash
# 1. Crear proyecto Vite

npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio

# 2. Instalar dependencias
npm install
npm install react-router-dom axios react-icons framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3.Ejecutar en desarrollo

npm run dev
\`\`\`

## 📁 Estructura del Proyecto (Esperada)

\`\`\`
my-portfolio/
├── src/
|   ├── assets
│   │   ├── Header.tsx
│   ├── components/   
│   │   ├── ui
## 📁 Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   
│   ├── styles/                  # Estilos globales
│   │   └── index.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/                      # Archivos estáticos
│   ├── cv.pdf
│   └── avatar.jpg

├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── package.json

\`\`\`
<img width="169" height="568" alt="image" src="https://github.com/user-attachments/assets/0c984af7-1492-42bf-b2b0-9f2d2045ec60" />
<img width="173" height="591" alt="image" src="https://github.com/user-attachments/assets/4625ed8f-d797-48f1-98a4-dc5e42ca6f82" />



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

## 📚 Documentación Scrum 

## Día 1 - Inicialización del Proyecto
- **Completado**: Setup Vite + React + TypeScript + Git
- **Hoy**: Crear estructura de componentes base
- **Bloqueos**: Ninguno
- **Notas**: Proyecto inicializado correctamente

## Día 2 - Header
- **Completado**: Header responsivo con navegación
- **Hoy**: Implementar Hero section
- **Bloqueos**: Ninguno
- **Notas**: Mobile menu funcionando perfectamente

## Día 3 - Hero
- **Completado**: Hero con avatar y CTAs
- **Hoy**: Sección About
- **Bloqueos**: Ninguno
- **Notas**: Animaciones con Framer Motion añadidas

## Día 4 - About
- **Completado**: About section con experiencia
- **Hoy**: Componentes Projects
- **Bloqueos**: Ninguno
- **Notas**: Sistema de design tokens implementado

## Día 5 - Projects
- **Completado**: Projects grid + ProjectModal
- **Hoy**: Skills component
- **Bloqueos**: Ninguno
- **Notas**: Modal interactivo funcionando

## Día 6 - Skills
- **Completado**: Skills con barras de progreso
- **Hoy**: Contact form
- **Bloqueos**: Ninguno
- **Notas**: Animaciones de barras completadas

## Día 7 - Contact & Footer
- **Completado**: Contact form + Footer
- **Hoy**: Responsive polish
- **Bloqueos**: Ninguno
- **Notas**: Validación básica implementada

## Día 8-10 - Polish & Testing
- **Completado**: Responsive adjustments
- **Hoy**: Testing cross-browser
- **Bloqueos**: Ninguno
- **Notas**: Todos los breakpoints funcionando

## Día 11-12 - Documentación
- **Completado**: README + documentación
- **Hoy**: Screenshots y preparación final
- **Bloqueos**: Ninguno
- **Notas**: Documentación completa

## Día 13 - Deploy
- **Completado**: Preparación para deploy
- **Hoy**: Deploy en Vercel/GitHub Pages
- **Bloqueos**: Ninguno
- **Notas**: Proyecto listo

## Día 14 - Sprint Review & Retro
- **Completado**: Todo el Sprint Goal
- **Resultados**: 100% de funcionalidades completadas

## 🎨 Paleta de Colores

- **Cyan**: `#06B6D4` (Primario)
- **Purple**: `#A855F7` (Secundario)
- **Pink**: `#EC4899` (Acento)
- **Slate-900**: `#0f172a` (Fondo)
- **Slate-50**: `#f8fafc` (Texto claro)

## 🚀 Comandos Principales

\`\`\`bash
## Desarrollo
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

[Rosa Mariana Torrez Quispe]  
[rosatorrez23@gmail.com ]  
[Tu Portfolio]

## 📄 Licencia

MIT - Libre para usar y modificar

---

# Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse en GitHub Pages bajo el subdirectorio `/portfolio/`. Para asegurar que todos los recursos y enlaces funcionen correctamente, la ruta base ha sido establecida en la configuración de Vite.

## Cambios clave en la configuración

- En `vite.config.ts`, la opción `base` está configurada como `'/portfolio/'`.

```ts
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // https://backendhub-1i8n.github.io/portfolio/
  base: "/portfolio/",
});
```

## Rutas de recursos

Todas las rutas de recursos en el proyecto han sido actualizadas para incluir el prefijo `/portfolio/`. Por ejemplo, ahora las imágenes se referencian como `/portfolio/developer-portrait.jpg` en lugar de `/developer-portrait.jpg`. Esto asegura que los recursos se ubiquen correctamente cuando el sitio esté alojado en GitHub Pages.
Ejemplo desde `Hero.tsx`:

```tsx
<img
  src="/portfolio/developer-portrait.jpg"
  alt="Developer"
  className="w-full h-full object-cover"
/>
```

## Comando de previsualización

El script `preview` en `package.json` ha sido actualizado para especificar un puerto para la previsualización local:

```json
"preview": "vite preview --port 8080"
```

Esto te permite previsualizar la compilación localmente en el puerto 8080, asegurando que la ruta base funcione como se espera antes de desplegar en GitHub Pages.

## Despliegue

Al desplegar el proyecto en GitHub Pages, asegúrate de que la configuración del repositorio esté ajustada para servir el sitio desde el subdirectorio `/portfolio/`. Esta configuración permitirá que los usuarios accedan correctamente al portafolio en `https://<username>.github.io/portfolio/`.

- crea todas las carpetas y archivos necesarios para el despliegue

```bash
mkdir -p .github/workflows
touch .github/workflows/deploy.yml
```

- agrega el flujo de despliegue en `.github/workflows/deploy.yml`

```yaml
# Flujo simple para desplegar contenido estático en GitHub Pages
name: Deploy static content to Pages

on:
  # Se ejecuta en pushes dirigidos a la rama principal
  push:
    branches: ["main"]

  # Permite ejecutar este flujo manualmente desde la pestaña Actions
  workflow_dispatch:

# Configura los permisos de GITHUB_TOKEN para permitir el despliegue en GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Permite un despliegue concurrente
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Trabajo único de despliegue ya que solo estamos desplegando
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v5
      - name: Set up Node
        uses: actions/setup-node@v6
        with:
          node-version: lts/*
          cache: "npm"
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v4
        with:
          # Subir carpeta dist
          path: "./dist"
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

# Configuración de GitHub Pages

Para asegurar que GitHub Pages sirva el sitio correctamente desde el subdirectorio `/portfolio/`, asegúrate de configurar los ajustes del repositorio de la siguiente manera:

1. Ve al repositorio en GitHub.
2. Haz clic en la pestaña "Settings".
3. En la barra lateral izquierda, haz clic en "Pages".
4. En "Source", selecciona la opción `GitHub Actions`.
5. Haz clic en "Save".
6. Asegúrate de que la URL del sitio refleje el subdirectorio `/portfolio/`, por ejemplo: `https://<username>.github.io/portfolio/`.
