import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: {
        home: 'Inicio',
        about: 'Sobre mí',
        skills: 'Tecnologías',
        projects: 'Proyectos',
        contact: 'Contacto',
        "about.greeting": "Hola, soy <0>Lautaro</0>.",
        "about.description": "¡Bienvenido a mi portfolio! Explora mi mundo a través de proyectos, conoce un poco más sobre mí y, si deseas ponerte en contacto, ¡estoy a solo un mensaje de distancia!",
        "about.resume": "Curriculum",
        "about.title": "Sobre <0>Mi</0>",
        "description": "Hola, mi nombre es <0 class='different'>Lautaro Rodriguez Collins</0>. Mi interés por la tecnología y la programación surgió mientras cursaba una Tecnicatura Universitaria en Producción y Automatización, donde en mi clase de informática tuve mi primer contacto con el mundo de la programación. Motivado por la curiosidad, continué estudiando de manera autodidacta, luego en una Tecnicatura de grado Universitaria enfocada en el <0 class='different'>desarrollo de software</0>, además de realizar diversos cursos. Siempre estoy comprometido con un constante crecimiento y mejora en mis habilidades. Actualmente, me desempeño como<0 class='different'> desarrollador de software full-stack </0>, con un enfoque en el desarrollo <0 class='different'>front-end</0> y la experiencia del usuario <0 class='different'>(UX/UI)</0>.",
        "lenguaje" : "<0>Idiomas : </0>",
        "esp": "<0>Español.</0>",
        "ing": "<0>Ingles.</0>",
        "title2": "Mi <0>Camino</0>",
        "lin2": "Soporte Técnico",
        "lin3": "Tecnicatura Universitaria en Producción y Automatización",
        "lin03": "Universidad Nacional de Cuyo (uncuyo)",
        "lin13": "Automatismo y Robótica - Informática - Electrónica - Gestión Empresarial - Diseño y Producción Industrial",
        "lin4": "Diseñador de CAD",
        "lin04": "Diseño Asistido por Computadora",
        "lin14": "Autocad - Solidworks - Solidedge",
        "lin5": "Tecnicatura Universitaria en Desarrollo de Software",
        "lin05": "Universidad Nacional de Cuyo (uncuyo)",
        "lin15": "Desarrollo de Software Full Stack - Programación - Ciencias de la Computación - Lógica Matemática - Contenido Multimedia - Bases de Datos",
        "lin6": "Cursos, Licencias y Capacitaciones - Universidad Tecnológica Nacional (UTN)",
        "lin06": "Diseño Web Avanzado (UTN) - Desarrollo Frontend en React (UTN) - Desarrollo Backend con Node.js (UTN)",
        "lin7": "Desarrollador de Software Freelancer",
        "lin07": "Autónomo",
        "lin17": "Diseño UX/UI - Frontend - Backend",
        "teckstacks": "<0>Tecnologías</0> y herramientas",
        "proylau": "MIS <0>PROYECTOS</0>",
        "cita1": "- Matemático, Lógico y padre de la ciencia de la computación.",
        "quote1": "Solo podemos ver poco del futuro, pero lo suficiente para darnos cuenta de que hay mucho que hacer.",
        "cita2": "- Exjugador de la NBA y leyenda del deporte.",
        "quote2": "Siempre he creído que si pones el trabajo, los resultados vendrán.",
        "cita3": "- Economista y Teórico de la Escuela Austriaca.",
        "quote3":"La acción es el medio más fundamental para mejorar nuestras condiciones. No esperes a que las cosas cambien, ¡cámbialas tú mismo!",
        "cita4": "- Fundador de la Lógica Matemática.",
        "quote4": "La mente que se abre a una nueva idea nunca volverá a su tamaño original.",
        "cita5": "- Filósofa, Novelista y creadora del objetivismo.",
        "quote5": "La razón y la lógica son las herramientas fundamentales para la toma de decisiones y la mejora personal.",
        "contacto": "Mi <0>contacto</0>",
        "talks":"<0>Hablemos!</0>",
        "name": "Nombre :",
        "mailt": "Correo electrónico :",
        "sendm": "Enviar Mensaje",
        "sendname": "Ingrese su nombre...*",
        "sende":"Ingrese su correo electronico ...*",
        "sendmes":"Ingrese su mensaje ...*",
        "verpag": "Vista previa",
        "vercod": "Ver Codigo",
        "vermas": "ver más en mi github",
        "massag": "Mensaje :",
        "linvegna": "Frontend Web Developer",
        "vegnaskils": "React - Astro - JavaScript - TypeScript - CSS - Bootstrap - Tailwind",
      },
    },
    en: {
      translation: {
        home: 'Home',
        about: 'About me',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        "about.greeting": "Hello, I'm <0>Lautaro</0>.",
        "about.description": "Welcome to my portfolio! Explore my world through projects, get to know a bit more about me, and if you wish to get in touch, I'm just a message away!",
        "about.resume": "Resume",
        "about.title": "About <0>Me</0>",
        "description": "Hello, my name is <0 class='different'>Lautaro Rodriguez Collins</0>. My interest for technology and programming arose while I was pursuing a University Technical Degree in Production and Automation, where in my computer science class, I had my first contact with the world of programming. Motivated by curiosity, I continued to study independently, then in a University Degree Technical Course focused on <0 class='different'>software development</0>, in addition to taking various courses. I am always committed to constant growth and improvement in my skills. Currently, I work as a <0 class='different'>full-stack software developer</0>, with a focus on <0 class='different'>front-end</0> development and user experience <0 class='different'>(UX/UI)</0>.",
        "lenguaje": "<0>languages : </0>",
        "esp": "<0>Spanish.</0>",
        "ing": "<0>English.</0>",
        "title2": "My <0>way</0>",

        "lin2": "IT Support",
        "lin3": "University Technician in Production and Automation",
        "lin03": "National University of Cuyo (uncuyo)",
        "lin13": "Automation and Robotics - Computer Science - Electronics - Business Management - Industrial Design and Production",
        "lin4": "CAD Designer",
        "lin04": "Computer Aided Design (CAD)",
        "lin14": "Autocad - Solidworks - Solidedge",
        "lin5": "University Technician in Software Development",
        "lin05": "National University of Cuyo (uncuyo)",
        "lin15": "Full Stack Software Development - Programming - Computer Science - Mathematical Logic - Multimedia Content - Databases",
        "lin6": "Courses, Certifications, and Training - National Technological University (UTN)",
        "lin06": "Advanced Web Design (UTN) - Frontend Development in React (UTN) - Backend Development with Node.js (UTN)",
        "lin7": "Software Developer",
        "lin07": "Freelance Software Developer",
        "lin17": "UX/UI Design - Frontend - Backend",
        "coding": "Days in <0>coding</0>",
        "teckstacks": "<0>skills</0>",
        "proylau": "MY <0>PROJECTS</0>",
        "cita1": "- Mathematician, logician, and father of computer science.",
        "quote1": "We can only see a little of the future, but enough to realize that there is much to be done.",
        "cita2": "- Former NBA player and sports legend.",
        "quote2": "I have always believed that if you put in the work, the results will come.",
        "cita3": "- Economist and Theorist of the Austrian School.",
        "quote3":"Action is the most fundamental means to improve our circumstances. Don't wait for things to change, change them yourself!",
        "cita4": "- Founder of Mathematical Logic.",
        "quote4": "A mind that is stretched by a new idea will never return to its original size.",
        "cita5": "- Philosopher, Novelist, and creator of Objectivism.",
        "quote5": "Reason and logic are the fundamental tools for decision-making and personal improvement",
        "contacto": "My <0>contact</0>",
        "talks":"<0>Let's talk!</0>",
        "name": "Name :",
        "mailt": "Email :",
        "sendm": "Send Message",
        "sendname": "Enter your name...*",
        "sende":"Enter your email...*",
        "sendmes":"Enter your message...*",
        "verpag": "Preview",
        "vercod": "See Code",
        "vermas": "see more on my github",
        "massag": "Message :",
        "linvegna": "Frontend Web Developer",
        "vegnaskils": "React - Astro - JavaScript - TypeScript - CSS - Bootstrap - Tailwind",
      },
    },
  },
});

export default i18n;
