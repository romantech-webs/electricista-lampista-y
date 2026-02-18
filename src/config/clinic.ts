export const clinic = {
  name: "Electricista, Lampista y Fontanero URGENCIA 24/7",
  logo: "/images/logo.png",
  tagline: "Electricista y Fontanero 24/7 en Barcelona - Urgencias",
  description: "Electricista, Lampista y Fontanero URGENCIA 24/7 en Barcelona ofrece servicios de emergencia las 24 horas. Especializados en reparación de fugas, instalaciones eléctricas, sistemas de filtración y cambio de grifería. Con 5 estrellas en Google y 42 reseñas que avalan nuestra rapidez, profesionalidad y eficacia. Atendemos urgencias inmediatas con garantía de calidad.",
  colors: {
    primary: "#0964ff",
    secondary: "#031e4d",
    accent: "#005aff",
    neutral: "#ebf3ff"
  },
  phone: "666 52 66 61",
  whatsapp: "+34666526661",
  whatsappMessage: "Hola, me gustaría solicitar presupuesto para un trabajo en mi domicilio.",
  email: "",
  address: {
    street: "Carrer de la Mare de Déu del Remei, 32, Sants-Montjuïc, 08004 Barcelona, España",
    city: "Barcelona",
    province: "Toledo",
    postalCode: "08004",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=11461420068349125559&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Electricista%2C%20Lampista%20y%20Fontanero%20URGENCIA%2024%2F7%20%4041.373%2C2.15713&z=16&output=embed",
  coordinates: {
    lat: 41.373,
    lng: 2.15713
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "8:00–21:00"
    },
    {
      days: "sábado",
      hours: "8:00–19:30"
    },
    {
      days: "domingo",
      hours: "9:00–19:30"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 42,
    url: "https://maps.google.com/?cid=11461420068349125559&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Caroline Boulant",
        rating: 5,
        text: "Estoy muy agradecida de su trabajo, todo funciona perfectamente, la fuga se paró, me recomiendó dos grifos muy bien adaptados ! Cambió dos lamparas rapidamente. Da buenos consejos. Muchas gracias por todo !\nLe llamaré de nuevo si necesito !",
        date: "Hace 3 meses"
      },
      {
        author: "Ingrid Martínez Armengol",
        rating: 5,
        text: "Profesionalidad, agilidad, amabilidad y servicio de 10. Muy recomendable. Tuvo que hacer varias instalaciones de sistemas de filtración y muy experto en fontaneria",
        date: "Hace 4 meses"
      },
      {
        author: "ana rodriguez nuñez",
        rating: 5,
        text: "Muy satisfecho con el servicio, fueron puntuales, trabajaron con seriedad y dejaron todo en perfecto estado. Totalmente recomendables.",
        date: "Hace 3 meses"
      },
      {
        author: "Jesus Nube",
        rating: 5,
        text: "Muy buen servicio, rápidos y eficaces. Solucionaron el problema sin complicaciones y con un trato excelente.",
        date: "Hace 3 meses"
      },
      {
        author: "Clara Cambra Agustí",
        rating: 5,
        text: "Muy rápido y eficiente! Se ha ido espabilando él solo sin necesidad de explicaciones o ayuda. Recomendable!",
        date: "Hace 1 mes"
      }
    ]
  },
  services: [
    {
      id: "reparacion-fugas",
      name: "Reparación de Fugas",
      description: "Detectamos y reparamos todo tipo de fugas de agua en tuberías, grifos, cisternas y calentadores. Actuación inmediata para evitar daños mayores en tu hogar. Servicio disponible 24/7 con desplazamiento urgente.",
      benefits: [
        "Detección rápida del origen de la fuga",
        "Reparación definitiva sin obras innecesarias",
        "Disponibilidad inmediata las 24 horas"
      ],
      icon: "Droplet"
    },
    {
      id: "instalacion-griferia",
      name: "Instalación de Grifería",
      description: "Instalamos y cambiamos grifos de cocina, baño y ducha con asesoramiento personalizado. Te recomendamos los modelos más adecuados según tus necesidades y presupuesto. Instalación profesional con garantía de estanqueidad.",
      benefits: [
        "Asesoramiento en la elección de grifos",
        "Instalación perfecta sin goteos",
        "Amplia experiencia en todo tipo de griferías"
      ],
      icon: "Droplet"
    },
    {
      id: "sistemas-filtracion",
      name: "Sistemas de Filtración",
      description: "Instalación experta de sistemas de filtración de agua para mejorar la calidad del agua en tu hogar. Desde filtros bajo fregadero hasta sistemas completos de osmosis. Asesoramiento técnico especializado.",
      benefits: [
        "Expertos en instalaciones de filtración",
        "Mejora la calidad del agua de tu hogar",
        "Instalación profesional garantizada"
      ],
      icon: "Droplet"
    },
    {
      id: "instalaciones-electricas",
      name: "Instalaciones Eléctricas",
      description: "Realizamos todo tipo de instalaciones eléctricas: puntos de luz, enchufes, cuadros eléctricos y boletines. Trabajamos con rapidez y dejamos todo en perfecto estado. Cumplimos toda la normativa vigente.",
      benefits: [
        "Instalaciones seguras y certificadas",
        "Trabajo limpio y ordenado",
        "Boletines eléctricos oficiales"
      ],
      icon: "Zap"
    },
    {
      id: "reparacion-averias-electricas",
      name: "Reparación de Averías Eléctricas",
      description: "Solucionamos averías eléctricas urgentes: cortocircuitos, diferenciales que saltan, enchufes que no funcionan y problemas en el cuadro eléctrico. Diagnóstico rápido y reparación eficaz sin complicaciones.",
      benefits: [
        "Diagnóstico preciso de la avería",
        "Reparación rápida y eficaz",
        "Servicio de urgencia 24/7"
      ],
      icon: "Zap"
    },
    {
      id: "cambio-lamparas",
      name: "Cambio de Lámparas y Luminarias",
      description: "Instalación y cambio rápido de lámparas, plafones, focos LED y todo tipo de luminarias. Asesoramiento sobre las mejores opciones de iluminación para cada espacio. Trabajo ágil y eficiente.",
      benefits: [
        "Instalación rápida y profesional",
        "Asesoramiento en iluminación LED",
        "Servicio inmediato"
      ],
      icon: "Zap"
    },
    {
      id: "fontaneria-general",
      name: "Fontanería General",
      description: "Todo tipo de trabajos de fontanería: instalación de sanitarios, cambio de tuberías, reparación de cisternas, instalación de calentadores. Trabajamos con seriedad y dejamos todo impecable.",
      benefits: [
        "Amplia experiencia en fontanería",
        "Materiales de calidad garantizada",
        "Limpieza total al finalizar"
      ],
      icon: "Droplet"
    },
    {
      id: "desatascos",
      name: "Desatascos Urgentes",
      description: "Desatascamos tuberías, desagües, inodoros y bajantes con equipamiento profesional. Servicio de urgencia disponible 24/7 para resolver atascos que no pueden esperar. Solución rápida y garantizada.",
      benefits: [
        "Equipos profesionales de desatasco",
        "Solución inmediata del problema",
        "Disponibilidad 24 horas"
      ],
      icon: "Droplet"
    }
  ],
  process: [
    {
      step: 1,
      title: "Llamada Urgente",
      description: "Llámanos al 666 52 66 61 y cuéntanos tu problema. Atendemos tu urgencia inmediatamente, 24 horas al día, 7 días a la semana. Te damos una primera orientación por teléfono."
    },
    {
      step: 2,
      title: "Desplazamiento Rápido",
      description: "Nos desplazamos a tu domicilio en Barcelona con rapidez. Evaluamos la avería o trabajo a realizar y te damos un presupuesto cerrado antes de empezar. Sin sorpresas en el precio final."
    },
    {
      step: 3,
      title: "Reparación Profesional",
      description: "Ejecutamos el trabajo con profesionalidad, agilidad y materiales de calidad. Trabajamos de forma autónoma y eficiente, dejando todo en perfecto estado y completamente limpio al terminar."
    },
    {
      step: 4,
      title: "Garantía y Factura",
      description: "Entregamos el trabajo finalizado con garantía de calidad. Te damos consejos para el mantenimiento y factura detallada. Si necesitas cualquier cosa en el futuro, puedes volver a llamarnos."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas en Google",
      description: "Contamos con una valoración perfecta de 5 estrellas basada en 42 reseñas reales de clientes satisfechos en Google. Nuestros clientes destacan nuestra rapidez, profesionalidad, eficacia y trato excelente. Una garantía de calidad contrastada.",
      icon: "Award"
    },
    {
      title: "Disponibilidad 24/7",
      description: "Atendemos urgencias las 24 horas del día, los 7 días de la semana, incluidos festivos. Cuando tienes una fuga o una avería eléctrica no puede esperar, por eso estamos siempre disponibles para acudir rápidamente y resolver tu emergencia.",
      icon: "Clock"
    },
    {
      title: "Rapidez y Eficacia",
      description: "Nuestros clientes valoran especialmente nuestra agilidad y capacidad resolutiva. Trabajamos de forma eficiente, sin complicaciones innecesarias, y solucionamos el problema en el menor tiempo posible. Nos desplazamos rápido y ejecutamos con profesionalidad.",
      icon: "Zap"
    },
    {
      title: "Trabajo Impecable",
      description: "Dejamos todo en perfecto estado al finalizar. Trabajamos con seriedad, limpieza y atención al detalle. Además, te damos buenos consejos para el mantenimiento y te asesoramos sobre las mejores soluciones adaptadas a tus necesidades específicas.",
      icon: "CheckCircle"
    }
  ],
  team: [
    {
      name: "Equipo de Electricista, Lampista y Fontanero URGENCIA 24/7",
      role: "Técnicos Profesionales",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales del hogar comprometidos con la calidad. En Electricista, Lampista y Fontanero URGENCIA 24/7 resolvemos cualquier problema de tu casa con rapidez, garantía y precios justos."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Electricista, Lampista y Fontanero URGENCIA 24/7 - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Electricista, Lampista y Fontanero URGENCIA 24/7 - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Electricista, Lampista y Fontanero URGENCIA 24/7 - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Electricista, Lampista y Fontanero URGENCIA 24/7 - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Electricista, Lampista y Fontanero URGENCIA 24/7 - Imagen 5"
    },
    {
      src: "/images/hero.webp",
      alt: "Electricista, Lampista y Fontanero URGENCIA 24/7 - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "Electricista, Lampista y Fontanero URGENCIA 24/7 - Imagen 8"
    },
    {
      src: "/images/gallery/9.webp",
      alt: "Electricista, Lampista y Fontanero URGENCIA 24/7 - Imagen 9"
    },
    {
      src: "/images/gallery/10.webp",
      alt: "Electricista, Lampista y Fontanero URGENCIA 24/7 - Imagen 10"
    }
  ],
  faq: [
    {
      question: "¿Atendéis urgencias las 24 horas?",
      answer: "Sí, Electricista, Lampista y Fontanero URGENCIA 24/7 está disponible las 24 horas del día, los 7 días de la semana, incluidos festivos. Atendemos emergencias de fontanería y electricidad con desplazamiento inmediato en Barcelona. Llámanos al 666 52 66 61 en cualquier momento y acudiremos rápidamente."
    },
    {
      question: "¿Cuánto tardáis en llegar en caso de urgencia?",
      answer: "Nuestro tiempo de respuesta es muy rápido. Dependiendo de la zona de Barcelona y el momento del día, normalmente llegamos en menos de una hora. En casos de emergencias graves como fugas importantes, priorizamos el desplazamiento para minimizar los daños en tu hogar."
    },
    {
      question: "¿Dais presupuesto antes de empezar el trabajo?",
      answer: "Sí, siempre. Nos desplazamos, evaluamos el problema y te damos un presupuesto cerrado antes de comenzar cualquier trabajo. No hay sorpresas en el precio final. Solo empezamos cuando tú apruebas el presupuesto y estás de acuerdo con las condiciones."
    },
    {
      question: "¿Qué tipo de trabajos de fontanería realizáis?",
      answer: "En Electricista, Lampista y Fontanero URGENCIA 24/7 realizamos todo tipo de trabajos de fontanería: reparación de fugas, instalación y cambio de grifería, instalación de sistemas de filtración, desatascos, cambio de sanitarios, instalación de calentadores y cualquier reparación urgente. Contamos con amplia experiencia avalada por nuestras 42 reseñas de 5 estrellas."
    },
    {
      question: "¿Instaláis sistemas de filtración de agua?",
      answer: "Sí, somos expertos en la instalación de sistemas de filtración de agua. Instalamos filtros bajo fregadero, sistemas de osmosis y todo tipo de equipos de filtración. Te asesoramos sobre el sistema más adecuado para tu hogar y realizamos una instalación profesional con garantía de funcionamiento."
    },
    {
      question: "¿Hacéis instalaciones eléctricas con boletín?",
      answer: "Sí, realizamos todo tipo de instalaciones eléctricas cumpliendo la normativa vigente y entregamos los boletines eléctricos oficiales cuando son necesarios. Instalamos puntos de luz, enchufes, cuadros eléctricos y cualquier instalación que necesites con todas las garantías legales."
    },
    {
      question: "¿Dejáis todo limpio al terminar?",
      answer: "Por supuesto. Nuestros clientes destacan en sus reseñas que dejamos todo en perfecto estado y completamente limpio al finalizar. Trabajamos con seriedad, orden y respeto por tu hogar. La limpieza final está incluida en todos nuestros servicios."
    },
    {
      question: "¿Qué garantía ofrecéis en vuestros trabajos?",
      answer: "Todos nuestros trabajos tienen garantía de calidad. Utilizamos materiales profesionales y técnicas contrastadas para asegurar reparaciones duraderas. Si surge cualquier problema relacionado con nuestro trabajo, volvemos sin coste adicional. Además, te entregamos factura detallada con toda la información del servicio realizado."
    }
  ],
  seo: {
    titleTemplate: "%s | Electricista, Lampista y Fontanero URGENCIA 24/7",
    defaultTitle: "Electricista y Fontanero 24h Barcelona | Urgencias",
    defaultDescription: "Electricista y fontanero de urgencia 24/7 en Barcelona. Reparamos fugas, averías eléctricas e instalamos grifería y sistemas de filtración. 5★ en Google. Llama al 666 52 66 61",
    keywords: [
      "electricista Barcelona",
      "fontanero Barcelona",
      "urgencias 24 horas Barcelona",
      "reparación fugas Barcelona",
      "electricista urgente Barcelona",
      "lampista Barcelona",
      "instalación grifería Barcelona",
      "sistemas filtración Barcelona",
      "fontanero 24 horas Barcelona",
      "averías eléctricas Barcelona",
      "desatascos Barcelona",
      "Electricista Lampista Fontanero URGENCIA 24/7"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Electricista, Lampista y Fontanero URGENCIA 24/7",
    cif: "",
    registeredAddress: "Carrer de la Mare de Déu del Remei, 32, Sants-Montjuïc, 08004 Barcelona, España, Barcelona, Toledo"
  },
  heroHeadline: [
    "Tu Profesional del",
    "Hogar",
    "en Barcelona"
  ],
  heroDescription: "Servicio de electricidad y fontanería de urgencia 24/7 en Barcelona. Resolvemos fugas, averías eléctricas, instalaciones de grifería y sistemas de filtración con rapidez y profesionalidad. Más de 42 clientes satisfechos nos avalan con 5 estrellas en Google.",
  specialty: "Urgencias 24/7",
  ctaLabel: "Tu Hogar",
  ctaHeadline: "¿Tienes una avería urgente en casa?",
  ctaDescription: "Llámanos ahora al 666 52 66 61 y un profesional se desplazará inmediatamente. Disponibles 24 horas, 7 días a la semana para resolver tu emergencia.",
  statsLabel: "Trabajos",
  schemaType: "HomeAndConstructionBusiness",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Lo que hacemos por ti",
    servicesDescription: "Soluciones profesionales para tu vehículo y hogar con garantía y precios transparentes.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu presupuesto en 4 pasos",
    processDescription: "Un proceso claro y transparente para tu tranquilidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Confianza y profesionalidad",
    whyUsDescription: "Profesionales certificados, precios sin sorpresas y garantía en todos nuestros trabajos.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros clientes",
    galleryLabel: "Trabajos",
    galleryTitle: "Nuestros trabajos realizados",
    galleryDescription: "Ejemplos de trabajos que hemos realizado para nuestros clientes",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros clientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales cualificados",
    teamDescription: "Experiencia y compromiso al servicio de nuestros clientes"
  }
}

export type Clinic = typeof clinic
