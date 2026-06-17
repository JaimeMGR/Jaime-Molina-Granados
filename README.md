<h1 align="center">Portfolio · Jaime Molina Granados</h1>

<p align="center">
  <b>Desarrollador Full Stack & Data Engineering</b><br>
  <i>Granada, España</i>
</p>

<p align="center">
  <a href="https://jaime-molina-granados.vercel.app">
    <img src="https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/>
  </a>
  <a href="https://www.linkedin.com/in/jaime-molina-granados-a27794138">
    <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
</p>

---

## 📖 Sobre el proyecto

Portfolio personal desarrollado en **React + Vite + Tailwind CSS**, diseñado para presentar mi perfil profesional, proyectos y experiencia. Incluye soporte multiidioma (Español e Inglés), diseño responsive y animaciones suaves con Framer Motion.

🔗 **Ver en vivo:** [jaime-molina-granados.vercel.app](https://jaime-molina-granados.vercel.app)

---

## ✨ Características

- 🌐 **Multiidioma** (ES / EN) con cambio dinámico
- 📱 **Responsive design** adaptado a móvil, tablet y escritorio
- 🎨 **Tema oscuro** moderno con acentos en azul
- ⚡ **Animaciones fluidas** con Framer Motion
- 📄 **CV descargable** en PDF directamente desde la web
- 🔗 **Enlaces a redes** sociales y proyectos en GitHub
- 📊 **Vercel Analytics** integrado para seguimiento de visitas

---

## 🛠️ Stack tecnológico

| Categoría | Tecnologías |
|---|---|
| **Frontend** | React 18, Vite |
| **Estilos** | Tailwind CSS, Bootstrap |
| **Animaciones** | Framer Motion |
| **Despliegue** | Vercel |
| **Analytics** | Vercel Analytics |

---

## 🚀 Instalación y uso local

### Requisitos previos
- Node.js (versión 18 o superior)
- npm

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/JaimeMGR/Jaime-Molina-Granados.git

# Entrar al directorio
cd Jaime-Molina-Granados

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Otros comandos disponibles

```bash
npm run build      # Genera el build de producción
npm run preview    # Previsualiza el build de producción
npm run lint       # Ejecuta ESLint
```

---

## 📂 Estructura del proyecto

```bash
Jaime-Molina-Granados/
├── public/
│   ├── empresas/          # Logos de empresas donde he trabajado
│   ├── proyectos/         # Imágenes de proyectos
│   ├── jaime.jpg          # Foto de perfil
│   └── JaimeMolinaGranados.pdf  # CV en PDF
├── src/
│   ├── components/
│   │   └── ContactButton.jsx
│   ├── App.jsx            # Componente principal con todas las secciones
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales y variables CSS
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
---
```


## 🎨 Personalización

Todo el contenido del portfolio está centralizado en el objeto `data` dentro de `src/App.jsx`, dividido en dos secciones (`es` y `en`). Para añadir un nuevo proyecto, experiencia o habilidad, basta con editar las arrays correspondientes.

Ejemplo de cómo añadir un proyecto:

```javascript
projects: [
  {
    title: "Nombre del proyecto",
    desc: "Descripción del proyecto...",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/usuario/proyecto",
    image: "proyectos/nombre-imagen.png", // opcional
  },
  // ...
]
```

---

## 📦 Despliegue

El portfolio está desplegado en **Vercel** con despliegue automático desde la rama `main`. Cada push a `main` genera un nuevo build y se publica automáticamente.

---

## 📬 Contacto

- 🌐 **Portfolio**: [jaime-molina-granados.vercel.app](https://jaime-molina-granados.vercel.app)
- 💼 **LinkedIn**: [linkedin.com/in/jaime-molina-granados](https://www.linkedin.com/in/jaime-molina-granados-a27794138)
- 🐱 **GitHub**: [github.com/JaimeMGR](https://github.com/JaimeMGR)
- 📧 **Email**: jaimemg1312@gmail.com

---

<p align="center">
  Hecho con ☕ por Jaime Molina Granados
</p>
