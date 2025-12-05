# ✔ Definition of Done (DoD)

Un trabajo se considera **Done** solo si cumple TODOS los siguientes puntos:

### 🧪 Funcionalidad
- [ ] La funcionalidad cumple todos los criterios de aceptación.
- [ ] No quedan errores visibles ni advertencias relevantes.

### 🧹 Calidad de Código
- [ ] El código pasa Prettier y ESLint sin errores.
- [ ] El código es legible y modular.
- [ ] No hay archivos innecesarios.

### 🧪 Testing
- [ ] Pruebas básicas de render (React Testing Library).
- [ ] No se rompen pruebas existentes.

### 📄 Documentación
- [ ] Se actualiza el README si se agregó una nueva sección.
- [ ] Se documenta el componente si es necesario.
- [ ] Se incluye evidencia (capturas, gifs, comportamiento final).

### 🔀 Control de Versiones
- [ ] La rama se mantiene actualizada con `develop` mediante `git pull --rebase`.
- [ ] El commit tiene un mensaje siguiendo Conventional Commits.
- [ ] Existe un Pull Request con:
  - Descripción clara  
  - Screenshots  
  - Checklist  
  - Relación con la historia del backlog  

### 🚀 Deploy / Build
- [ ] El build se genera sin errores (`npm run build`).
- [ ] La vista se prueba en navegador móvil y desktop.

