const sharedSkills = {
    languages: ["JavaScript", "PHP", "Python", "SQL", "Java", "C#"],

    web: [
        "React",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "JSON",
        "XML",
        "WordPress",
        "WooCommerce",
        "JetEngine",
        "REST APIs",
    ],

    mobile: [
        "Kotlin",
        "Android",
        "Android Studio",
        "Firebase",
    ],

    db: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Oracle",
        "NoSQL",
    ],

    tools: [
        "Git",
        "GitHub",
        "GitLab",
        "Docker",
        "IntelliJ IDEA",
        "Eclipse",
        "XAMPP",
        "Jira",
        "Trello",
        "Slack",
    ],

    data: [
        "dbt",
        "Snowflake",
        "Power BI",
        "Python for Data",
        "Dimensional Modeling",
        "Medallion Architecture",
        "BigQuery",
        "Pandas",
        "ETL/ELT",
        "Data Warehousing",
        "Data Marts",
    ],

    other: [
        "Agile Methodologies",
        "SCRUM",
        "UI/UX Design",
        "Linux",
        "Windows",
        "Cybersecurity",
        "Blender",
        "Canva",
    ],
};

const projectsES = [
    {
        title: "Steam Games — Pipeline de Data Engineering",
        desc:
            "Proyecto final de la certificación en Data Engineering. Pipeline end-to-end sobre 67.000 juegos de Steam con arquitectura Medallion (Bronze → Silver → Gold) en Snowflake, transformación con dbt y visualización en Power BI. Incluye modelos incrementales sobre 400.000+ filas, snapshot SCD-2, testing en tres niveles, macros reutilizables y orquestación con jobs.",
        tags: [
            "Data Engineering",
            "dbt",
            "Snowflake",
            "Power BI",
            "Python",
            "SQL",
            "Modelado dimensional",
        ],
        link: "https://github.com/JaimeMGR/DBT_LSAT_PROJECT",
        image: "proyectos/steam-pipeline.png",
        featured: true,
        linkLabel: "GitHub",
        slug: "steam-games",
        slug: "steam-games",
        slug: "steam-games",
    },

    {
        title: "MNZone — Plataforma para centros gaming",
        desc:
            "Proyecto final de DAW: plataforma web para la gestión integral de un centro gaming. Incluye registro y autenticación, reservas de salas y equipos, catálogo y compras, testimonios, noticias y un panel de administración para gestionar el contenido. También incorpora una aplicación auxiliar en Python para la gestión de tiempos de uso.",
        tags: [
            "PHP",
            "JavaScript",
            "MySQL",
            "Python",
            "HTML5",
            "CSS",
            "Full Stack",
        ],
        link: "https://github.com/JaimeMGR/MNZone",
        image: "proyectos/MN.png",
        featured: true,
        linkLabel: "GitHub",
        slug: "mnzone",
    },

    {
        title: "MaxManga — Aplicación Android de lectura",
        desc:
            "Proyecto final de DAM centrado en el desarrollo de una aplicación Android para la lectura y gestión de libros en formato PDF. Incluye categorías, favoritos, comentarios y seguimiento de visualizaciones y descargas.",
        tags: [
            "Kotlin",
            "Android",
            "Firebase",
            "Android Studio",
            "JSON",
            "XML",
        ],
        link:
            "https://github.com/JaimeMGR/TFG-Desarrollo-de-aplicaciones-multiplataforma-2023-2024",
        image: "proyectos/maxmanga.png",
        featured: true,
        linkLabel: "GitHub",
        slug: "maxmanga",
    },

    {
        title: "MaxManga Community — Chat en tiempo real",
        desc:
            "Segundo proyecto de DAM orientado a la comunicación entre usuarios mediante una aplicación Android con chat en tiempo real, perfiles de usuario, autenticación, envío de mensajes e imágenes y notificaciones.",
        tags: [
            "Kotlin",
            "Android",
            "Firebase",
            "Android Studio",
            "Chat",
        ],
        link:
            "https://github.com/JaimeMGR/TFG-Desarrollo-de-aplicaciones-multiplataforma-2023-2024",
        image: "proyectos/MaxmangaC.png",
        featured: true,
        linkLabel: "GitHub",
        slug: "maxmanga-community",
    },

    {
        title: "Productos Arquelladas",
        desc:
            "Web corporativa desarrollada con Elementor en WordPress para una empresa familiar de Granada dedicada a la elaboración artesanal de dulces tradicionales.",
        tags: ["WordPress", "Elementor", "E-commerce"],
        link: "https://productosarquelladas.es/",
        image: "proyectos/arquelladas.png",
        linkLabel: "Visitar web",
    },

    {
        title: "Viveros Árboles del Sur",
        desc:
            "Web corporativa desarrollada con Elementor para un vivero especializado en plantaciones de olivo y pistacho.",
        tags: ["WordPress", "Elementor", "Desarrollo web"],
        link: "https://viverosarbolesdelsur.es/",
        image: "proyectos/viveros.png",
        linkLabel: "Visitar web",
    },

    {
        title: "MG Equilibrio Nutricional",
        desc:
            "Sitio web con Elementor para una consulta de nutrición, con blog, formulario de contacto y presentación de servicios.",
        tags: ["WordPress", "Elementor", "Desarrollo web"],
        link: "https://mgequilibrionutricional.es",
        image: "proyectos/mg-nutricion.png",
        linkLabel: "Visitar web",
    },

    {
        title: "Gamper Export",
        desc:
            "Web corporativa desarrollada con Elementor para una empresa dedicada a la exportación de productos alimenticios.",
        tags: ["WordPress", "Elementor", "Desarrollo web"],
        link: "https://gamperexport.com/",
        image: "proyectos/Gamper.png",
        linkLabel: "Visitar web",
    },

    {
        title: "Maderas Pavisuelos",
        desc:
            "Web corporativa desarrollada con Elementor para una empresa de venta de productos de madera y suelos.",
        tags: ["WordPress", "Elementor", "Desarrollo web"],
        link: "https://maderaspavisuelos.com/",
        image: "proyectos/pavisuelos.webp",
        linkLabel: "Visitar web",
    },

    {
        title: "Bodegas Pago de Almaráes",
        desc:
            "Web corporativa desarrollada con Elementor para una bodega de Granada, con catálogo de vinos, información histórica y datos de contacto.",
        tags: ["WordPress", "Elementor", "Desarrollo web"],
        link: "https://bodegaspagodealmaraes.com/",
        image: "proyectos/almanares.png",
        linkLabel: "Visitar web",
    },

    {
        title: "Atarfe Fighting",
        desc:
            "Aplicación web para un gimnasio con funcionalidades de registro, información de clases y contacto.",
        tags: ["HTML5", "CSS3", "JavaScript", "PHP"],
        image: "proyectos/AtarfeFighting.png",
    },

    {
        title: "DAMPONG",
        desc:
            "Juego 2D basado en el clásico Pong, desarrollado para experimentar con nuevas dinámicas y mecánicas en Unity.",
        tags: ["Unity", "C#", "Game Development"],
        image: "proyectos/dampong.png",
    },

    {
        title: "Diseños 3D con Blender",
        desc:
            "Repositorio personal con diseños 3D creados con Blender como proyecto de aprendizaje y hobby.",
        tags: ["Blender", "3D", "Diseño"],
        link: "https://github.com/JaimeMGR/Practicando-blender-por-diversi-n",
        image: "proyectos/blender.png",
        linkLabel: "GitHub",
    },

    {
        title: "Atlántida eSports",
        desc:
            "Organización de torneos de eSports para una comunidad juvenil, con retransmisiones en Twitch y gestión de eventos.",
        tags: ["eSports", "Twitch", "Eventos"],
        link: "https://www.twitch.tv/atlantida_esports?lang=ro",
        image: "proyectos/Atlantida.png",
        linkLabel: "Ver proyecto",
    },
];

const projectsEN = [
    {
        title: "Steam Games — Data Engineering Pipeline",
        desc:
            "Final project of the Data Engineering certification. End-to-end pipeline over 67,000 Steam games using Medallion Architecture (Bronze → Silver → Gold) on Snowflake, transformations with dbt and Power BI visualization. Includes incremental models over 400,000+ rows, an SCD-2 snapshot, three-level testing, reusable macros and job orchestration.",
        tags: [
            "Data Engineering",
            "dbt",
            "Snowflake",
            "Power BI",
            "Python",
            "SQL",
            "Dimensional Modeling",
        ],
        link: "https://github.com/JaimeMGR/DBT_LSAT_PROJECT",
        image: "proyectos/steam-pipeline.png",
        featured: true,
        linkLabel: "GitHub",
        slug: "steam-games",
    },

    {
        title: "MNZone — Gaming Center Platform",
        desc:
            "Final DAW project: a full-stack web platform for comprehensive gaming center management. It includes registration and authentication, room and equipment bookings, products and purchases, testimonials, news and an administration panel for content management. It also includes a complementary Python application for usage-time management.",
        tags: [
            "PHP",
            "JavaScript",
            "MySQL",
            "Python",
            "HTML5",
            "CSS",
            "Full Stack",
        ],
        link: "https://github.com/JaimeMGR/MNZone",
        image: "proyectos/MN.png",
        featured: true,
        linkLabel: "GitHub",
        slug: "mnzone",
    },

    {
        title: "MaxManga — Android Reading App",
        desc:
            "DAM final project focused on the development of an Android application for reading and managing PDF books. It includes categories, favorites, comments and view/download tracking.",
        tags: [
            "Kotlin",
            "Android",
            "Firebase",
            "Android Studio",
            "JSON",
            "XML",
        ],
        link:
            "https://github.com/JaimeMGR/TFG-Desarrollo-de-aplicaciones-multiplataforma-2023-2024",
        image: "proyectos/maxmanga.png",
        featured: true,
        linkLabel: "GitHub",
        slug: "maxmanga",
    },

    {
        title: "MaxManga Community — Real-time Chat",
        desc:
            "Second DAM project focused on communication between users through an Android application with real-time chat, user profiles, authentication, text and image messages and notifications.",
        tags: [
            "Kotlin",
            "Android",
            "Firebase",
            "Android Studio",
            "Chat",
        ],
        link:
            "https://github.com/JaimeMGR/TFG-Desarrollo-de-aplicaciones-multiplataforma-2023-2024",
        image: "proyectos/MaxmangaC.png",
        featured: true,
        linkLabel: "GitHub",
        slug: "maxmanga-community",
    },

    {
        title: "Productos Arquelladas",
        desc:
            "Corporate website built with Elementor on WordPress for a family business in Granada specializing in traditional artisan sweets.",
        tags: ["WordPress", "Elementor", "E-commerce"],
        link: "https://productosarquelladas.es/",
        image: "proyectos/arquelladas.png",
        linkLabel: "Visit website",
    },

    {
        title: "Viveros Árboles del Sur",
        desc:
            "Corporate website built with Elementor for a nursery specializing in olive and pistachio plantations.",
        tags: ["WordPress", "Elementor", "Web Development"],
        link: "https://viverosarbolesdelsur.es/",
        image: "proyectos/viveros.png",
        linkLabel: "Visit website",
    },

    {
        title: "MG Equilibrio Nutricional",
        desc:
            "Elementor website for a nutrition practice, including a blog, contact form and service presentation.",
        tags: ["WordPress", "Elementor", "Web Development"],
        link: "https://mgequilibrionutricional.es",
        image: "proyectos/mg-nutricion.png",
        linkLabel: "Visit website",
    },

    {
        title: "Gamper Export",
        desc:
            "Corporate website built with Elementor for a company focused on food product exports.",
        tags: ["WordPress", "Elementor", "Web Development"],
        link: "https://gamperexport.com/",
        image: "proyectos/Gamper.png",
        linkLabel: "Visit website",
    },

    {
        title: "Maderas Pavisuelos",
        desc:
            "Corporate website built with Elementor for a company selling wood products and flooring.",
        tags: ["WordPress", "Elementor", "Web Development"],
        link: "https://maderaspavisuelos.com/",
        image: "proyectos/pavisuelos.webp",
        linkLabel: "Visit website",
    },

    {
        title: "Bodegas Pago de Almaráes",
        desc:
            "Corporate website built with Elementor for a winery in Granada, including wine catalog, company history and contact information.",
        tags: ["WordPress", "Elementor", "Web Development"],
        link: "https://bodegaspagodealmaraes.com/",
        image: "proyectos/almanares.png",
        linkLabel: "Visit website",
    },

    {
        title: "Atarfe Fighting",
        desc:
            "Web application for a gym with registration, class information and contact functionality.",
        tags: ["HTML5", "CSS3", "JavaScript", "PHP"],
        image: "proyectos/AtarfeFighting.png",
    },

    {
        title: "DAMPONG",
        desc:
            "2D game inspired by the classic Pong, developed to experiment with new mechanics and gameplay ideas in Unity.",
        tags: ["Unity", "C#", "Game Development"],
        image: "proyectos/dampong.png",
    },

    {
        title: "3D Blender Designs",
        desc:
            "Personal repository with 3D designs created in Blender as a learning project and hobby.",
        tags: ["Blender", "3D", "Design"],
        link: "https://github.com/JaimeMGR/Practicando-blender-por-diversi-n",
        image: "proyectos/blender.png",
        linkLabel: "GitHub",
    },

    {
        title: "Atlántida eSports",
        desc:
            "eSports tournament organization for a youth community, including Twitch broadcasts and event management.",
        tags: ["eSports", "Twitch", "Events"],
        link: "https://www.twitch.tv/atlantida_esports?lang=ro",
        image: "proyectos/Atlantida.png",
        linkLabel: "View project",
    },
];

const base = {
    name: "Jaime Molina Granados",
    greeting: {
        es: "Hola, soy",
        en: "Hi, I'm",
    },
    email: "jaimemg1312@gmail.com",
    github: "https://github.com/JaimeMGR",
    linkedin:
        "https://www.linkedin.com/in/jaime-m-a27794138/",
    skills: sharedSkills,
};

export const portfolioData = {
    es: {
        ...base,
        cv: "/cv/CV_Jaime_Molina_Portfolio_ES.pdf",
        title: "Full Stack Developer | Data Engineering",
        location: "Granada, España",
        englishLevel: "Inglés: Nivel B2",

        about:
            "Desarrollador Full Stack con experiencia en WordPress, JavaScript y PHP, y formación especializada en Data Engineering. Trabajo con React, SQL y Python y he desarrollado soluciones que van desde aplicaciones web y móviles hasta pipelines de datos end-to-end.",

        sections: {
            experience: "Experiencia",
            education: "Formación",
            projects: "Proyectos destacados",
            otherProjects: "Otros proyectos",
            skills: "Stack técnico",
            contact: "Contacto",
            certifications: "Certificaciones",
        },

        ui: {
            downloadCV: "Descargar CV",
            sendEmail: "Enviar correo",
            recommendation: "Carta de recomendación",
            close: "Cerrar",
            downloadPDF: "Descargar PDF",
            changeLanguage: "Cambiar idioma",
            menu: "Abrir menú",
            skip: "Saltar al contenido",
            moreOnGitHub: "Más proyectos en GitHub →",
        },

        experiences: [
            {
                role: "Desarrollador web junior",
                company: "WIT Creativo (prácticas)",
                dates: "03/2025 – 06/2025",
                picture: "empresas/WIT-CREATIVO.png",
                bullets: [
                    "Desarrollo y personalización de sitios web con WordPress y Elementor.",
                    "Integración de funcionalidades mediante JetEngine y WooCommerce.",
                    "Edición de contenidos y optimización del rendimiento web.",
                    "Gestión de proyectos web de principio a fin.",
                ],
                recommendationLink:
                    "empresas/recomendacion_Jaime_Molina_Granados_firmado.pdf",
            },

            {
                role: "Desarrollador Full Stack junior",
                company: "OYR Solutions (prácticas)",
                dates: "03/2024 – 06/2024",
                picture: "empresas/oyr.jpeg",
                bullets: [
                    "Desarrollo de aplicaciones web full stack con enfoque en UX/UI.",
                    "Programación front-end con JavaScript y back-end con lógica de servidor y bases de datos.",
                    "Colaboración en estrategias digitales y análisis de feedback de usuarios.",
                ],
            },

            {
                role: "Director de IT",
                company: "Love 2 Learn (Erasmus+)",
                dates: "06/2022 – 08/2022",
                picture: "empresas/L2L.png",
                bullets: [
                    "Mantenimiento de equipos informáticos y administración de cuentas.",
                    "Soporte técnico y documentación digital en un entorno internacional.",
                ],
            },

            {
                role: "Diseñador gráfico",
                company:
                    "Property Partners Phelan Herterich (Erasmus+)",
                dates: "06/2022 – 08/2022",
                picture: "empresas/ppph.jpg",
                bullets: [
                    "Diseño de material publicitario y edición de imágenes y vídeos con Canva y Adobe Photoshop.",
                    "Creación de contenido visual para campañas publicitarias.",
                ],
            },

            {
                role: "Técnico microinformático",
                company: "TecnoSecond (prácticas)",
                dates: "03/2022 – 06/2022",
                picture: "empresas/tecnosecond.jpg",
                bullets: [
                    "Reparación, mantenimiento y optimización de equipos informáticos.",
                    "Atención al cliente y soporte técnico integral.",
                ],
            },
        ],

        education: [
            {
                title:
                    "Data Engineering: Fundamentos, SQL, dbt, Snowflake, BigQuery y Power BI",
                org: "Cívica",
                dates: "03/2026 – 05/2026",
                image: "proyectos/civica.png",
            },
            {
                title:
                    "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
                org: "Atlántida CIDEP",
                dates: "2022 – 2025",
                image: "proyectos/Atlantida.png",
            },
            {
                title:
                    "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
                org: "Atlántida CIDEP",
                dates: "2022 – 2024",
                image: "proyectos/Atlantida.png",
            },
            {
                title:
                    "Grado Medio en Sistemas Microinformáticos y Redes",
                org: "I.E.S. Aricel",
                dates: "2019 – 2022",
                image: "proyectos/ies-aricel.png",
            },
        ],

        certifications: [
            {
                title: "App móvil con chat (Kotlin + Firebase) — Udemy",
                date: "29/05/2024",
            },
            {
                title:
                    "Aplicación Android para PDF (Kotlin + Firebase) — Udemy",
                date: "10/12/2023",
            },
            {
                title: "Certificado de nivel B1 en inglés — Cambridge",
                date: "29/10/2020",
                recommendationLink:
                    "certificados/B1JaimeCambridge.pdf",
            },
        ],

        projects: projectsES,
    },

    en: {
        ...base,
        cv: "/cv/CV_Jaime_Molina_Portfolio_EN.pdf",
        title: "Full Stack Developer | Data Engineering",
        location: "Granada, Spain",
        englishLevel: "English: B2 level",

        about:
            "Full Stack Developer with experience in WordPress, JavaScript and PHP, plus specialized Data Engineering training. I work with React, SQL and Python and build solutions ranging from web and mobile applications to end-to-end data pipelines.",

        sections: {
            experience: "Experience",
            education: "Education",
            projects: "Featured projects",
            otherProjects: "Other projects",
            skills: "Technical stack",
            contact: "Contact",
            certifications: "Certifications",
        },

        ui: {
            downloadCV: "Download CV",
            sendEmail: "Send email",
            recommendation: "Recommendation letter",
            close: "Close",
            downloadPDF: "Download PDF",
            changeLanguage: "Change language",
            menu: "Open menu",
            skip: "Skip to content",
            moreOnGitHub: "More projects on GitHub →",
        },

        experiences: [
            {
                role: "Junior Web Developer",
                company: "WIT Creativo (internship)",
                dates: "03/2025 – 06/2025",
                picture: "empresas/WIT-CREATIVO.png",
                bullets: [
                    "Development and customization of WordPress sites with Elementor.",
                    "Feature integrations using JetEngine and WooCommerce.",
                    "Content editing and web performance optimization.",
                    "End-to-end management of web projects.",
                ],
                recommendationLink:
                    "empresas/recomendacion_Jaime_Molina_Granados_firmado.pdf",
            },

            {
                role: "Junior Full Stack Developer",
                company: "OYR Solutions (internship)",
                dates: "03/2024 – 06/2024",
                picture: "empresas/oyr.jpeg",
                bullets: [
                    "Full-stack web development with a UX/UI focus.",
                    "Front-end development with JavaScript and back-end logic and databases.",
                    "Collaboration on digital strategies and user feedback analysis.",
                ],
            },

            {
                role: "IT Director",
                company: "Love 2 Learn (Erasmus+)",
                dates: "06/2022 – 08/2022",
                picture: "empresas/L2L.png",
                bullets: [
                    "IT equipment maintenance and account administration.",
                    "Technical support and digital documentation in an international environment.",
                ],
            },

            {
                role: "Graphic Designer",
                company:
                    "Property Partners Phelan Herterich (Erasmus+)",
                dates: "06/2022 – 08/2022",
                picture: "empresas/ppph.jpg",
                bullets: [
                    "Advertising material design and image/video editing using Canva and Adobe Photoshop.",
                    "Visual content creation for advertising campaigns.",
                ],
            },

            {
                role: "Microcomputer Technician",
                company: "TecnoSecond (internship)",
                dates: "03/2022 – 06/2022",
                picture: "empresas/tecnosecond.jpg",
                bullets: [
                    "Computer repair, maintenance and performance optimization.",
                    "Customer service and technical support.",
                ],
            },
        ],

        education: [
            {
                title:
                    "Data Engineering: Fundamentals, SQL, dbt, Snowflake, BigQuery and Power BI",
                org: "Cívica",
                dates: "03/2026 – 05/2026",
                image: "proyectos/civica.png",
            },
            {
                title:
                    "Higher Degree in Web Application Development (DAW)",
                org: "Atlántida CIDEP",
                dates: "2022 – 2025",
                image: "proyectos/Atlantida.png",
            },
            {
                title:
                    "Higher Degree in Multiplatform Application Development (DAM)",
                org: "Atlántida CIDEP",
                dates: "2022 – 2024",
                image: "proyectos/Atlantida.png",
            },
            {
                title:
                    "Intermediate Degree in Microcomputer Systems and Networks",
                org: "I.E.S. Aricel",
                dates: "2019 – 2022",
                image: "proyectos/ies-aricel.png",
            },
        ],

        certifications: [
            {
                title:
                    "Mobile app with chat (Kotlin + Firebase) — Udemy",
                date: "29/05/2024",
            },
            {
                title:
                    "Android PDF application (Kotlin + Firebase) — Udemy",
                date: "10/12/2023",
            },
            {
                title: "Cambridge English B1 Certificate",
                date: "29/10/2020",
                recommendationLink:
                    "certificados/B1JaimeCambridge.pdf",
            },
        ],

        projects: projectsEN,
    },
};