import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import { ContactButton } from "./components/ContactButton";


const githubUser = "JaimeMGR";
const CV_PDF_URL = "/JaimeMolinaGranados.pdf";

const data = {
  es: {
    name: "Jaime Molina Granados",
    title: "Desarrollador web full stack",
    location: "Granada, España",
    email: "jaimemg1312@gmail.com",
    phone: "+34 668 533 704",
    ingles: "Inglés: Nivel B2",
    about:
      "Desarrollador web con experiencia práctica en WordPress, JavaScript y PHP. Me especializo en crear soluciones funcionales enfocadas en la experiencia del usuario y el rendimiento. Interés en proyectos full stack y aplicaciones que integren bases de datos y lógica de servidor.",
    sections: {
      experience: "Experiencia",
      education: "Formación",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      certifications: "Certificaciones",
    },
    experiences: [
      {
        role: "Desarrollador web junior",
        company: "Wit Creativo (prácticas)",
        dates: "03/2025 – 06/2025",
        picture: "empresas/WIT-CREATIVO.png",
        bullets: [
          "Desarrollo y personalización de sitios web con WordPress y Elementor.",
          "Integración de funcionalidades mediante plugins como JetEngine y WooCommerce.",
          "Edición de contenidos y optimización del rendimiento web.",
          "Gestión de proyectos web de principio a fin.",
        ],
      },
      {
        role: "Desarrollador full stack junior",
        company: "OYR Solutions (prácticas)",
        dates: "03/2024 – 06/2024",
        picture: "empresas/oyr.jpeg",
        bullets: [
          "Desarrollo de aplicaciones web full stack con enfoque en UX/UI.",
          "Programación front-end (JavaScript) y back-end (lógica de servidor y BD).",
          "Colaboración en estrategias digitales y análisis de feedback de usuarios.",
        ],
      },
      {
        role: "Director de IT",
        company: "Love 2 Learn (Erasmus+)",
        dates: "06/2021 – 08/2021",
        picture: "empresas/L2L.png",
        bullets: [
          "Mantenimiento de equipos informáticos y administración de cuentas.",
          "Soporte técnico y documentación digital en un entorno internacional.",
        ],
      },
      {
        role: "Diseñador gráfico",
        company: "Property Partners Phelan Herterich (Erasmus+)",
        dates: "06/2021 – 08/2021",
        picture: "empresas/ppph.jpg",
        bullets: [
          "Diseño de material publicitario y edición de imágenes y vídeos utilizando Canva y Adobe Photoshop.",
          "Creación de contenido visual para campañas publicitarias.",
        ],
      },
      {
        role: "Técnico microinformático",
        company: "TecnoSecond (Prácticas)",
        dates: "03/2021 – 06/2021",
        picture: "empresas/tecnosecond.jpg",
        bullets: [
          "Reparación, mantenimiento y optimización de equipos informáticos.",
          "Atención al cliente y soporte técnico integral.",
        ],
      },
    ],
    education: [
      {
        title: "Grado superior en desarrollo de aplicaciones web",
        org: "Atlántida CIDEP",
        dates: "2021 – 2025",
        image: "proyectos/Atlantida.png",
      },
      {
        title: "Grado superior en desarrollo de aplicaciones multiplataforma",
        org: "Atlántida CIDEP",
        dates: "2021 – 2024",
        image: "proyectos/Atlantida.png",
      },
      {
        title: "Grado medio en sistemas microinformáticos y redes",
        org: "I.E.S. Aricel",
        image: "proyectos/ies-aricel.png",
        dates: "2019 – 2021",
      },
    ],
    projects: [
      {
        title: "Mis Repositorios",
        desc:
          "Aquí encontrarás mi repositorio personal en GitHub, donde voy a ir actualizando poco a poco mis nuevos proyectos que vaya realizando a lo largo del tiempo.",
        tags: ["GitHub", "Desarrollo", "Desarrollo web", "Desarrollo multiplataforma"],
        link: "https://github.com/JaimeMGR/Proyectos",
      },
      {
        title: "MNZone (TFG Desarrollo web)",
        desc:
          "MNZone es una aplicación web desarrollada en PHP, Python y MySQL para la gestión integral de un centro gaming. Permite a los usuarios registrarse, reservar salas de juego como PS5, VR o simuladores, comprar productos, y dejar testimonios. A su vez, ofrece a los administradores un panel completo para controlar reservas, productos, noticias y estadísticas de uso. Es un sistema pensado para digitalizar y modernizar locales de ocio electrónico.",
        tags: [
          "GitHub",
          "Desarrollo",
          "Desarrollo web",
          "Desarrollo multiplataforma",
          "PHP",
          "Python",
          "MySQL",
          "API CRUD",
          "Bootstrap",
        ],
        link: "https://github.com/JaimeMGR/MNZone",
      },
      {
        title: "Mis Diseños 3D",
        desc:
          "Repositorio personal en GitHub donde voy subiendo los diseños 3D hechos con Blender. La verdad es que esto me lo tomo como hobbie.",
        tags: ["Blender", "3D", "Diseño"],
        link: "https://github.com/JaimeMGR/Practicando-blender-por-diversi-n",
      },
      {
        title: "Productos Arquelladas",
        desc:
          "Web corporativa desarrollada con Elementor en WordPress para empresa familiar de Granada dedicada a la elaboración artesanal de dulces tradicionales.",
        tags: ["Desarrollo web", "WordPress", "Elementor", "E-commerce"],
        link: "https://productosarquelladas.es/",
      },
      {
        title: "Viveros Árboles del Sur",
        desc:
          "Web corporativa con Elementor en WordPress para un vivero especializado en plantaciones de olivo y pistacho.",
        tags: ["Desarrollo web", "WordPress", "Elementor"],
        link: "https://viverosarbolesdelsur.es/",
      },
      {
        title: "MG Equilibrio Nutricional",
        desc:
          "Sitio web con Elementor para consulta de nutrición, con blog, formulario de contacto y servicios nutricionales.",
        tags: ["Desarrollo web", "WordPress", "Elementor"],
        link: "https://mgequilibrionutricional.es",
      },
      {
        title: "Gamper Export",
        desc:
          "Web corporativa con Elementor para empresa de exportación de productos alimenticios.",
        tags: ["Desarrollo web", "WordPress", "Elementor"],
        link: "https://gamperexport.com/",
      },
      {
        title: "Maderas Pavisuelos",
        desc:
          "Web corporativa con Elementor para empresa de venta de productos de madera y suelos.",
        tags: ["Desarrollo web", "WordPress", "Elementor"],
        link: "https://maderaspavisuelos.com/",
      },
      {
        title: "Bodegas Pago de Almaráes",
        desc:
          "Web corporativa con Elementor para bodega en Granada, con catálogo de vinos, información histórica y detalles de contacto.",
        tags: ["Desarrollo web", "WordPress", "Elementor"],
        link: "https://bodegaspagodealmaraes.com/",
      },
      {
        title: "Atlántida eSports",
        desc:
          "Organización de torneos de eSports para la comunidad juvenil, con transmisiones en vivo por Twitch para fomentar competencia sana y desarrollo de habilidades.",
        tags: ["eSports", "Twitch", "Eventos"],
        link: "https://www.twitch.tv/atlantida_esports?lang=ro",
      },
      {
        title: "MaxManga",
        desc:
          "Aplicación móvil multiplataforma que permite a los usuarios leer y organizar libros en formatos digitales.",
        tags: ["Desarrollo multiplataforma", "Android", "Firebase", "Kotlin"],
      },
      {
        title: "DAMPONG",
        desc:
          "Juego 2D basado en el clásico Pong, con nuevas dinámicas para hacerlo más atractivo en dispositivos modernos.",
        tags: ["Unity2D", "C#", "Juego"],
      },
      {
        title: "MaxManga Community",
        desc:
          "Aplicación móvil que permite a los usuarios registrarse, chatear con otros usuarios y enviar archivos multimedia.",
        tags: ["Android", "Firebase", "Kotlin"],
      },
      {
        title: "Atarfe Fighting",
        desc:
          "Aplicación web para un gimnasio con funcionalidades de registro, información de clases y contacto.",
        tags: ["HTML5", "CSS3", "JavaScript", "PHP"],
      },
    ],
    skills: {
      languages: [
        "⭐ JavaScript",
        "⭐ Java",
        "⭐ PHP",
        "Python",
        "C#",
        "⭐ SQL"
      ],
      web: [
        "⭐ HTML5",
        "⭐ CSS3",
        "React",
        "Node.js",
        "⭐ Tailwind CSS",
        "Bootstrap",
        "Microservicios",
        "Java API",
        "⭐ API CRUD",
        "⭐ Desarrollo de aplicaciones PHP",
        "JSON",
        "XML",
        "⭐ WordPress",
        "⭐ WooCommerce",
        "⭐ Joomla",
        "Drupal",
        "Moodle",
        "⭐ JetEngine"
      ],
      multiplataforma: [
        "⭐ Kotlin",
        "Desarrollo Android",
        "Android",
        "iOS",
        "⭐ Android Studio",
        "Docker"
      ],
      db: [
        "⭐ MySQL",
        "PostgreSQL",
        "MongoDB",
        "⭐ Firebase",
        "⭐ Oracle",
        "NoSQL"
      ],
      tools: [
        "⭐ Git",
        "⭐ GitHub",
        "GitLab",
        "⭐ IntelliJ IDEA",
        "⭐ Eclipse",
        "⭐ XAMPP",
        "Slack",
        "Trello",
        "Jira",
        "Microsoft Office",
        "⭐ Office 365",
        "Google Docs",
        "LibreOffice",
        "⭐ OBS",
        "Shotcut"
      ],
      design: [
        "UI/UX Design",
        "Diseño gráfico",
        "Diseño web",
        "Diseño de interfaces",
        "Diseño de logotipos",
        "Photoshop",
        "⭐ Adobe XD",
        "⭐ GIMP",
        "⭐ Canva",
        "Blender",
        "Publicidad en internet",
        "Google Ads"
      ],
      systems: [
        "⭐ Windows",
        "⭐ Linux",
        "Windows Server",
        "Mac",
        "Arquitectura de redes",
        "Redes inalámbricas",
        "Gestión de redes",
        "Seguridad informática",
        "⭐ Mantenimiento de equipos informáticos"
      ],
      methodologies: [
        "⭐ Metodologías ágiles",
        "⭐ SCRUM",
        "Gestión de proyectos",
        "AI (Inteligencia Artificial)",
        "Trabajo en equipo",
        "Resolución de problemas",
        "Atención al detalle",
        "Liderazgo organizacional",
        "Gestión de ventas",
        "Gestión de eventos"
      ]
    },
    certifications: [
      {
        title: "App móvil con chat (Kotlin + Firebase) - Udemy",
        date: "29/05/2024",
      },
      {
        title: "Aplicación Android para PDF (Kotlin + Firebase) - Udemy",
        date: "10/12/2023",
      },
    ],
    githubReposTitle: "Repos recientes de GitHub",
    moreOnGitHub: "Más en mi GitHub →",
  },
  en: {
    name: "Jaime Molina Granados",
    title: "Full stack web developer",
    location: "Granada, Spain",
    email: "jaimemg1312@gmail.com",
    phone: "+34 668 533 704",
    ingles: "English: Level B2",
    about:
      "Web developer with hands-on experience in WordPress, JavaScript and PHP. I specialize in creating functional solutions focused on user experience and performance. Interested in full stack projects and apps integrating databases and server logic.",
    sections: {
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      certifications: "Certifications",
    },
    experiences: [
      {
        role: "Junior web developer",
        company: "Wit Creativo (internship)",
        dates: "03/2025 – 06/2025",
        picture: "empresas/WIT-CREATIVO.png",
        bullets: [
          "Development and customization of WordPress sites using Elementor.",
          "Integrations using plugins such as JetEngine and WooCommerce.",
          "Content editing and web performance optimization.",
        ],
      },
      {
        role: "Junior full stack developer",
        company: "OYR Solutions (internship)",
        dates: "03/2024 – 06/2024",
        picture: "empresas/oyr.jpeg",
        bullets: [
          "Full stack web development with UX/UI focus.",
          "Front-end (JavaScript) and back-end logic and databases.",
        ],
      },
      {
        role: "IT Director",
        company: "Love 2 Learn (summer)",
        dates: "06/2021 – 08/2021",
        picture: "empresas/L2L.png",
        bullets: [
          "Maintenance of IT equipment and account administration.",
          "Technical support and documentation in an international environment.",
        ],
      },
      {
        role: "Graphic designer",
        company: "Property Partners Phelan Herterich (Erasmus+)",
        dates: "06/2021 – 08/2021",
        picture: "empresas/ppph.jpg",
        bullets: [
          "Design of advertising material and image/video editing using Canva and Adobe Photoshop.",
          "Creation of visual content for advertising campaigns.",
        ],
      },
      {
        role: "Microcomputer technician",
        company: "TecnoSecond (internship)",
        dates: "03/2021 – 06/2021",
        picture: "empresas/tecnosecond.jpg",
        bullets: [
          "Repair, maintenance and optimization of computer equipment.",
          "Customer service and comprehensive technical support.",
        ],
      },
    ],
    education: [
      {
        title: "Higher degree in web application development (DAW)",
        org: "Atlántida CIDEP",
        dates: "2021 – 2025",
        image: "proyectos/Atlantida.png",
      },
      {
        title: "Higher degree in multiplatform application development (DAM)",
        org: "Atlántida CIDEP",
        dates: "2021 – 2024",
        image: "proyectos/Atlantida.png",
      },
      {
        title: "Intermediate degree in microcomputer systems and networks (ASIR)",
        org: "I.E.S. Aricel",
        dates: "2019 – 2021",
        image: "proyectos/ies-aricel.png",

      },
    ],
    projects: [
      {
        title: "My Repositories",
        desc:
          "Here you will find my personal repository on GitHub, where I will gradually update my new projects over time.",
        tags: ["GitHub", "Development", "Web Development", "Multiplatform Development"],
        link: "https://github.com/JaimeMGR/Proyectos",
      },
      {
        title: "MNZone (Final Degree Project Web Development)",
        desc:
          "MNZone is a web application developed in PHP, Python, and MySQL for the comprehensive management of a gaming center. It allows users to register, book game rooms such as PS5, VR, or simulators, buy products, and leave testimonials. It also provides administrators with a full panel to control bookings, products, news, and usage statistics. It's a system designed to digitalize and modernize electronic leisure venues.",
        tags: [
          "GitHub",
          "Development",
          "Web Development",
          "Multiplatform Development",
          "PHP",
          "Python",
          "MySQL",
          "API CRUD",
          "Bootstrap",
        ],
        link: "https://github.com/JaimeMGR/MNZone",
      },
      {
        title: "My 3D Designs",
        desc:
          "Personal repository on GitHub where I upload 3D designs made with Blender. Honestly, I do this as a hobby.",
        tags: ["Blender", "3D", "Design"],
        link: "https://github.com/JaimeMGR/Practicando-blender-por-diversi-n",
      },
      {
        title: "Productos Arquelladas",
        desc:
          "Corporate website developed with Elementor on WordPress for a family business in Granada dedicated to the artisan production of traditional sweets.",
        tags: ["Web Development", "WordPress", "Elementor", "E-commerce"],
        link: "https://productosarquelladas.es/",
      },
      {
        title: "Viveros Árboles del Sur",
        desc:
          "Corporate website with Elementor on WordPress for a nursery specialized in olive and pistachio plantations.",
        tags: ["Web Development", "WordPress", "Elementor"],
        link: "https://viverosarbolesdelsur.es/",
      },
      {
        title: "MG Equilibrio Nutricional",
        desc:
          "Website with Elementor for nutrition consultation, including a blog, contact form, and nutritional services.",
        tags: ["Web Development", "WordPress", "Elementor"],
        link: "https://mgequilibrionutricional.es",
      },
      {
        title: "Gamper Export",
        desc:
          "Corporate website with Elementor for a food products export company.",
        tags: ["Web Development", "WordPress", "Elementor"],
        link: "https://gamperexport.com/",
      },
      {
        title: "Maderas Pavisuelos",
        desc:
          "Corporate website with Elementor for a company selling wood products and flooring.",
        tags: ["Web Development", "WordPress", "Elementor"],
        link: "https://maderaspavisuelos.com/",
      },
      {
        title: "Bodegas Pago de Almaráes",
        desc:
          "Corporate website with Elementor for a winery in Granada, with a wine catalog, historical information, and contact details.",
        tags: ["Web Development", "WordPress", "Elementor"],
        link: "https://bodegaspagodealmaraes.com/",
      },
      {
        title: "Atlántida eSports",
        desc:
          "Organization of eSports tournaments for the youth community, with live Twitch streams to promote healthy competition and skills development.",
        tags: ["eSports", "Twitch", "Events"],
        link: "https://www.twitch.tv/atlantida_esports?lang=ro",
      },
      {
        title: "MaxManga",
        desc:
          "Multiplatform mobile app that allows users to read and organize books in digital formats.",
        tags: ["Multiplatform Development", "Android", "Firebase", "Kotlin"],
      },
      {
        title: "DAMPONG",
        desc:
          "2D game based on the classic Pong, with new dynamics to make it more attractive on modern devices.",
        tags: ["Unity2D", "C#", "Game"],
      },
      {
        title: "MaxManga Community",
        desc:
          "Mobile app that allows users to register, chat with other users, and send multimedia files.",
        tags: ["Android", "Firebase", "Kotlin"],
      },
      {
        title: "Atarfe Fighting",
        desc:
          "Web app for a gym with features such as registration, class information, and contact details.",
        tags: ["HTML5", "CSS3", "JavaScript", "PHP"],
      },
    ],
    skills: {
      languages: [
        "⭐ JavaScript",
        "⭐ Java",
        "⭐ PHP",
        "Python",
        "C#",
        "⭐ SQL"
      ],
      web: [
        "⭐ HTML5",
        "⭐ CSS3",
        "React",
        "Node.js",
        "⭐ Tailwind CSS",
        "Bootstrap",
        "Microservices",
        "Java API",
        "⭐ API CRUD",
        "⭐ PHP Applications Development",
        "JSON",
        "XML",
        "⭐ WordPress",
        "⭐ WooCommerce",
        "⭐ Joomla",
        "Drupal",
        "Moodle",
        "⭐ etEngine"
      ],
      multiplataforma: [
        "⭐ Kotlin",
        "Android Development",
        "Android",
        "iOS",
        "⭐ Android Studio",
        "Docker"
      ],
      db: [
        "⭐ MySQL",
        "PostgreSQL",
        "MongoDB",
        "⭐ Firebase",
        "⭐ Oracle",
        "NoSQL"
      ],
      tools: [
        "⭐ Git",
        "⭐ GitHub",
        "GitLab",
        "⭐ IntelliJ IDEA",
        "⭐ Eclipse",
        "⭐ XAMPP",
        "Slack",
        "Trello",
        "Jira",
        "Microsoft Office",
        "⭐ Office 365",
        "Google Docs",
        "LibreOffice",
        "⭐ OBS",
        "Shotcut"
      ],
      design: [
        "UI/UX Design",
        "Graphic Design",
        "Web Design",
        "Interface Design",
        "Logo Design",
        "Photoshop",
        "⭐ Adobe XD",
        "⭐ GIMP",
        "⭐ Canva",
        "Blender",
        "Online Advertising",
        "Google Ads"
      ],
      systems: [
        "⭐ Windows",
        "⭐ Linux",
        "Windows Server",
        "Mac",
        "Network Architecture",
        "Wireless Networks",
        "Network Management",
        "Cybersecurity",
        "⭐ Computer Maintenance"
      ],
      methodologies: [
        "⭐ Agile Methodologies",
        "⭐ SCRUM",
        "Project Management",
        "AI (Artificial Intelligence)",
        "Teamwork",
        "Problem Solving",
        "Attention to Detail",
        "Organizational Leadership",
        "Sales Management",
        "Event Management"
      ]
    },
    certifications: [
      {
        title: "Mobile app with chat (Kotlin + Firebase) - Udemy",
        date: "29/05/2024",
      },
      {
        title: "Android app for PDF (Kotlin + Firebase) - Udemy",
        date: "10/12/2023",
      },
    ],
    githubReposTitle: "Recent GitHub Repos",
    moreOnGitHub: "More on my GitHub →",
  },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

export default function App() {
  const [lang, setLang] = useState("es");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = data[lang];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-black/30 border-b border-slate-700/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="text-sky-400 font-bold">{"<JM/>"}</div>
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-slate-400 -mt-0.5">{t.title}</div>
              <div className="text-xs text-slate-400 mt-1">{t.ingles}</div>
            </div>
          </div>

          {/* Menú de escritorio */}
          <nav className="hidden lg:flex items-center gap-4">
            <a href="#projects" className="text-sm hover:text-sky-400 text-decoration-none">
              {t.sections.projects}
            </a>
            <a href="#experience" className="text-sm hover:text-sky-400 text-decoration-none">
              {t.sections.experience}
            </a>
            <a href="#education" className="text-sm hover:text-sky-400 text-decoration-none">
              {t.sections.education}
            </a>
            <a href="#contact" className="text-sm hover:text-sky-400 text-decoration-none">
              {t.sections.contact}
            </a>

            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="ml-4 px-3 py-1 rounded-xl bg-slate-800/60 hover:bg-yellow-400 transition text-xs"
              aria-label="Cambiar idioma"
            >
              {lang === "es" ? "🇬🇧 English" : "🇪🇸 Español"}
            </button>
            <a
              href={CV_PDF_URL}
              className="ml-3 px-3 py-1 rounded-lg bg-sky-500 hover:bg-sky-600 text-black text-sm font-medium no-underline"
            >
              CV
            </a>
          </nav>

          {/* Menú hamburguesa */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-sky-400 text-3xl"
              aria-label="Abrir menú"
            >
              &#9776;
            </button>
          </div>
        </div>
      </header>

      {/* Menú lateral */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-all ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleMenu} // Cerrar el menú al hacer clic fuera
      >
        <div
          className={`absolute top-0 right-0 bg-slate-900 w-64 h-full p-6 flex flex-col gap-4 transition-all ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          style={{ marginTop: "64px" }} // Añadir margen superior para evitar que tape el header
        >
          <a href="#projects" className="text-sm text-sky-400 no-underline" onClick={toggleMenu}>
            {t.sections.projects}
          </a>
          <a href="#experience" className="text-sm text-sky-400 no-underline" onClick={toggleMenu}>
            {t.sections.experience}
          </a>
          <a href="#education" className="text-sm text-sky-400 no-underline" onClick={toggleMenu}>
            {t.sections.education}
          </a>
          <a href="#contact" className="text-sm text-sky-400 no-underline" onClick={toggleMenu}>
            {t.sections.contact}
          </a>

          {/* Quiero poner un botón junto a otro en u div */}
          <div className=" flex flex-raw gap-3">

            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="mt-4 px-3 py-1 rounded-xl bg-slate-800/60 hover:bg-yellow-500 transition text-xs"
              aria-label="Cambiar idioma"
            >
              {lang === "es" ? "🇬🇧 English" : "🇪🇸 Español"}
            </button>
            <a
              href={CV_PDF_URL}
              className="mt-4 px-3 py-1 rounded-lg bg-sky-500 hover:bg-sky-600 text-black text-sm font-medium no-underline"
              onClick={toggleMenu}
            >
              CV
            </a>
          </div>
        </div>
      </div>

      {/* Resto del contenido */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-10">
        {/* Hero Section */}
        <section className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
            className="md:col-span-2"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              {lang === "es" ? "Hola, soy" : "Hi, I'm"}{" "}
              <span className="text-sky-400">{t.name}</span>
            </h1>
            <p className="text-slate-400 max-w-3xl mb-6">{t.about}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={CV_PDF_URL}
                className="inline-block bg-sky-500 text-black px-4 py-2 rounded-xl font-medium shadow hover:bg-sky-600 transition no-underline"
              >
                {lang === "es" ? "Descargar CV" : "Download CV"}
              </a>
              <ContactButton lang={lang} />



            </div>
          </motion.div>
          <motion.aside
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="bg-slate-800/60 rounded-2xl p-6 shadow-lg text-center"
          >
            <div className="w-28 h-28 rounded-full bg-sky-500 text-black mx-auto flex items-center justify-center text-3xl font-bold mb-4 transform transition-transform duration-300 hover:scale-110">
              <img src="jaime.jpg" alt="Jaime Molina Granados" className="rounded-full" />
            </div>
            <div className="font-semibold">{t.title}</div>
            <div className="text-slate-400 text-sm">{t.location}</div>

            <div className="mt-4 text-xs text-slate-400">
              <div>{t.email}</div>
            </div>


            <div className="mt-4 flex flex-col gap-2">
              <a
                href={`https://github.com/${githubUser}`}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center gap-2 px-4 py-2 border border-[#0f172a] rounded-xl bg-slate-900/40 hover:bg-sky-500/10 transition text-white no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.8 1.31 3.49 1.01.11-.77.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.8c1.02.01 2.05.14 3.02.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.65-2.81 5.66-5.49 5.96.43.38.82 1.12.82 2.26 0 1.63-.01 2.94-.01 3.34 0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>


              <a
                href="https://www.linkedin.com/in/jaime-molina-granados-a27794138"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-sm transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 
    16 1.146v13.708c0 .633-.526 1.146-1.175 
    1.146H1.175C.526 16 0 15.487 0 
    14.854V1.146zM4.943 13.569V6.169H2.542v7.4h2.401zm-1.2-8.43c.837 
    0 1.358-.554 1.358-1.248-.015-.709-.52-1.247-1.341-1.247S2.4 
    3.182 2.4 3.891c0 .694.52 1.248 1.326 
    1.248h.017zM13.458 13.569V9.359c0-2.252-1.204-3.301-2.81-3.301-1.295 
    0-1.872.713-2.197 1.213v-1.04H6.05c.03.688 
    0 7.338 0 7.338h2.401v-4.099c0-.219.016-.437.08-.593.176-.437.577-.89 
    1.25-.89.881 0 1.234.671 1.234 
    1.654v3.928h2.443z"/>
                </svg>
                LinkedIn
              </a>



            </div>
          </motion.aside>


        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-sky-400 mb-6"
          >
            {t.sections.projects}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.map((p, i) => (
              <motion.article
                key={p.title + i}
                whileHover={{ y: -6 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariant}
                className="bg-slate-800/60 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-sky-400/10 text-sky-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-sky-300 hover:underline"
                  >
                    {lang === "es" ? "Ver proyecto" : "View project"}
                  </a>
                )}
              </motion.article>
            ))}

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <a
                href={`https://github.com/${githubUser}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-[#0f172a] rounded-xl bg-slate-900/40 hover:bg-sky-500/10 transition text-white no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.8 1.31 3.49 1.01.11-.77.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.8c1.02.01 2.05.14 3.02.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.65-2.81 5.66-5.49 5.96.43.38.82 1.12.82 2.26 0 1.63-.01 2.94-.01 3.34 0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {t.moreOnGitHub}
              </a>
            </motion.div>

          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mt-12">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            {t.sections.experience}
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {t.experiences.map((exp, idx) => (
              <motion.div
                key={exp.role + idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariant}
                className="bg-slate-800/60 rounded-2xl px-5 py-4 shadow-md"
              >
                <div className="flex flex-row gap-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{exp.role}</h4>
                    <div className="text-sm text-slate-400">{exp.company}</div>
                    <div className="text-xs text-slate-500">{exp.dates}</div>
                  </div>

                  <div>
                    <img src={exp.picture} className="w-20 rounded-2xl"></img>
                  </div>

                </div>
                <div className="pt-3 px-0">
                  <ul className="ps-0 space-y-1 text-slate-400 list-disc list-inside">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>


              </motion.div>
            ))}

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mt-12">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6 text-sky-400"
          >
            {t.sections.education}
          </motion.h2>

          <div className="grid sm:grid-cols-1 gap-6">
            {t.education.map((edu, i) => (
              <motion.div
                key={edu.title + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariant}
                className="bg-slate-800/60 rounded-2xl p-5 shadow-md"
              >
                <div className="flex flex-row gap-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{edu.title}</h4>
                    <div className="text-sm text-slate-400">{edu.org}</div>
                    <div className="text-xs text-slate-500">{edu.dates}</div>
                  </div>

                  <div>
                    <img src={edu.image} className="w-20 rounded-2xl"></img>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mt-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold mb-4"
          >
            {t.sections.certifications}
          </motion.h2>

          <div className="flex flex-wrap gap-3">
            {t.certifications.map((c, i) => (
              <div
                key={c.title + i}
                className="bg-slate-800/60 rounded-lg px-4 py-2 text-sm text-slate-300"
              >
                <div className="font-medium">{c.title}</div>
                <div className="text-xs text-slate-500">{c.date}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mt-12">
          {/* Título Habilidades en Español */}
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            {lang === "es" ? "Habilidades" : "Skills"}
          </motion.h2>

          {/* Habilidades en español */}
          {lang === "es" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Lenguajes</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.languages.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Web</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.web.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Multiplataforma</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.multiplataforma.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold mb-2">Bases de datos</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.db.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Herramientas</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.tools.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Diseño</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.design.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Sistemas</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.systems.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Metodologías</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.methodologies.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Habilidades en inglés */}
          {lang === "en" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Languages</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.languages.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Web</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.web.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Multiplatform</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.multiplataforma.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Databases</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.db.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Tools</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.tools.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Design</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.design.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Systems</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.systems.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-4 shadow-md">
                <div className="font-semibold capitalize mb-2">Methodologies</div>
                <div className="flex flex-wrap gap-2">
                  {t.skills.methodologies.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-slate-900/40 text-sky-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>


          )}
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-12 mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-6"
          >
            {t.sections.contact}
          </motion.h2>

          <div className="bg-slate-800/60 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <div className="text-xl font-semibold">{t.name}</div>
              <div className="text-slate-400 text-sm">{t.title} — {t.location}</div>


            </div>

            <div className="flex gap-3">
              <a
                href={CV_PDF_URL}
                className="px-4 py-2 rounded-lg bg-sky-500 text-black font-medium hover:bg-sky-600 transition no-underline"
              >
                {lang === "es" ? "Descargar CV" : "Download CV"}
              </a>

              <a
                href={`https://github.com/${githubUser}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-[#3d444d] rounded-xl bg-slate-900/40 hover:bg-sky-500/10 transition text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.8 1.31 3.49 1.01.11-.77.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 6.8c1.02.01 2.05.14 3.02.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.65-2.81 5.66-5.49 5.96.43.38.82 1.12.82 2.26 0 1.63-.01 2.94-.01 3.34 0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>


            </div>
          </div>
        </section>

      </main>

      <footer className="text-center text-slate-500 text-sm py-6 border-t border-slate-700/30">
        © {new Date().getFullYear()} {t.name} — {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
      </footer>
    </div>
  );
}
