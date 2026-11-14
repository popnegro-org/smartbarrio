export type LandingConfig = {
  metadata: { title: string; description: string };
  brand: { name: string; tagline: string; location: string };
  navigation: { label: string; href: string }[];
  whatsapp: { phoneE164: string; message: string; ariaLabel: string };
  hero: {
    eyebrow: string; title: string; highlight: string; description: string;
    primaryCta: string; secondaryCta: string; trustPoints: string[]; deliveryNote: string;
  };
  problems: {
    eyebrow: string; title: string; description: string;
    items: { title: string; description: string }[]; conclusion: string;
  };
  solutions: {
    eyebrow: string; title: string; description: string;
    items: {
      id: "google-maps" | "smartweb-express" | "mercado-libre";
      number: string; badge: string; title: string; description: string;
      benefits: string[]; idealFor: string; cta: string; featured: boolean;
    }[];
  };
  process: {
    eyebrow: string; title: string; description: string;
    steps: { number: string; title: string; description: string }[];
  };
  plans: {
    eyebrow: string; title: string; description: string;
    model: { title: string; description: string }[];
    modules: { id: string; title: string; description: string; features: string[]; cta: string; recommended: boolean }[];
    note: string;
  };
  faq: {
    eyebrow: string; title: string; description: string;
    items: { question: string; answer: string }[];
  };
  finalCta: { eyebrow: string; title: string; description: string; button: string; note: string };
  footer: { description: string; copyright: string; links: { label: string; href: string }[] };
};

export const landingConfig: LandingConfig = {
  metadata: {
    title: "SmartWeb | Presencia digital para negocios de barrio",
    description: "Hacé que tu negocio sea más fácil de encontrar en Google. SmartWeb Express, presencia local y crecimiento digital para comercios de Maipú y Mendoza.",
  },
  brand: {
    name: "SmartWeb",
    tagline: "Infraestructura digital para negocios de barrio",
    location: "Maipú, Mendoza, Argentina",
  },
  navigation: [
    { label: "Soluciones", href: "#soluciones" },
    { label: "Cómo funciona", href: "#proceso" },
    { label: "Planes", href: "#planes" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ],
  whatsapp: {
    phoneE164: process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "",
    message: "Hola, quiero conocer cómo SmartWeb puede ayudar a mi negocio a tener más presencia en Internet.",
    ariaLabel: "Consultar por WhatsApp",
  },
  hero: {
    eyebrow: "SOLUCIONES DIGITALES PARA COMERCIOS DE MAIPÚ Y MENDOZA",
    title: "Tu negocio merece ser encontrado.",
    highlight: "Que tus próximos clientes te encuentren en Google.",
    description: "Creamos la presencia digital que tu comercio necesita para recibir más consultas, transmitir confianza y estar disponible para tus clientes, incluso cuando el local está cerrado.",
    primaryCta: "Quiero hacer crecer mi negocio",
    secondaryCta: "Conocer las soluciones",
    trustPoints: [
      "Implementación en menos de 24 horas",
      "Pensado para negocios de barrio",
      "Nosotros nos ocupamos de toda la parte técnica",
    ],
    deliveryNote: "SmartWeb Express está diseñado para implementarse en menos de 24 horas, una vez recibida la información y los accesos necesarios.",
  },
  problems: {
    eyebrow: "EL PROBLEMA",
    title: "Tu negocio trabaja todos los días. ¿Pero te encuentran cuando te buscan?",
    description: "Tener un buen comercio ya no alcanza si los vecinos no pueden encontrarte fácilmente en Internet.",
    items: [
      { title: "Dependés de las redes sociales", description: "Tus clientes tienen que encontrar tu perfil entre publicaciones, anuncios y muchas otras opciones." },
      { title: "No aparecés cuando te buscan", description: "Un vecino busca un producto o servicio cerca de su casa y tu negocio no aparece entre sus opciones." },
      { title: "Perdés consultas fuera de horario", description: "Si alguien quiere conocer tus productos, ubicación o servicios, necesita encontrar esa información fácilmente." },
      { title: "No tenés tiempo para ocuparte de todo", description: "Entre proveedores, clientes y tareas diarias, mantener tu presencia digital termina quedando para después." },
    ],
    conclusion: "Tu negocio ya existe en el barrio. Ahora necesita tener una presencia propia en Internet.",
  },
  solutions: {
    eyebrow: "NUESTRAS SOLUCIONES",
    title: "Todo lo que tu negocio necesita para crecer en Internet.",
    description: "Empezamos por lo esencial y sumamos nuevas herramientas cuando tu comercio está preparado para dar el siguiente paso.",
    items: [
      {
        id: "google-maps", number: "01", badge: "VISIBILIDAD LOCAL",
        title: "Que te encuentren en Google Maps.",
        description: "Preparamos y optimizamos la presencia de tu comercio en Google para que los vecinos puedan encontrarte cuando buscan lo que ofrecés cerca de ellos.",
        benefits: ["Alta y configuración de tu ficha comercial.", "Asesoramiento y gestión de la verificación.", "Optimización de horarios, ubicación y contacto.", "Información preparada para búsquedas locales."],
        idealFor: "Para comercios que quieren atraer clientes de su zona.",
        cta: "Quiero aparecer en Google", featured: false,
      },
      {
        id: "smartweb-express", number: "02", badge: "PRODUCTO PRINCIPAL",
        title: "Tu negocio abierto en Internet las 24 horas.",
        description: "SmartWeb Express te proporciona una presencia digital profesional, preparada para recibir consultas y acompañar el crecimiento de tu comercio.",
        benefits: ["Sitio profesional adaptado a celulares.", "Acceso directo a WhatsApp.", "Formulario para recibir consultas.", "Información de servicios y productos.", "Ubicación y datos de contacto.", "Alojamiento y mantenimiento administrados."],
        idealFor: "Para negocios que necesitan profesionalizar su presencia digital sin complicaciones.",
        cta: "Quiero mi SmartWeb Express", featured: true,
      },
      {
        id: "mercado-libre", number: "03", badge: "EXPANSIÓN COMERCIAL",
        title: "Llevá tus productos a todo el país.",
        description: "Incorporamos el módulo comercial para que tu negocio pueda comenzar a vender a través de Mercado Libre con un catálogo inicial organizado.",
        benefits: ["Configuración inicial de la tienda.", "Carga y organización del catálogo.", "Optimización de publicaciones iniciales.", "Configuración de Mercado Envíos según elegibilidad.", "Orientación para gestionar pedidos."],
        idealFor: "Para comercios con productos de stock duradero y posibilidades de venta nacional.",
        cta: "Quiero vender online", featured: false,
      },
    ],
  },
  process: {
    eyebrow: "SIMPLE Y SIN COMPLICACIONES",
    title: "De tu negocio al mundo digital en tres pasos.",
    description: "No necesitás aprender herramientas nuevas ni ocuparte de cuestiones técnicas.",
    steps: [
      { number: "01", title: "Conocemos tu negocio", description: "Nos contás qué vendés, dónde estás y qué necesitás. Reunimos la información y los materiales necesarios." },
      { number: "02", title: "Implementamos tu presencia digital", description: "Configuramos las soluciones contratadas y preparamos tu negocio para que sus clientes puedan encontrarte y contactarte." },
      { number: "03", title: "Seguimos creciendo juntos", description: "Nos ocupamos del mantenimiento y podés incorporar nuevas herramientas cuando tu comercio las necesite." },
    ],
  },
  plans: {
    eyebrow: "UN SISTEMA QUE CRECE CON VOS",
    title: "Empezá con lo necesario. Crecé cuando estés listo.",
    description: "No necesitás contratar todo desde el primer día. Construimos tu presencia digital por etapas.",
    model: [
      { title: "Implementación inicial", description: "Preparamos y ponemos en funcionamiento las soluciones elegidas." },
      { title: "Mantenimiento continuo", description: "Nos encargamos de que tu presencia digital siga funcionando correctamente." },
      { title: "Evolución modular", description: "Sumás nuevas capacidades cuando tu negocio está preparado para crecer." },
    ],
    modules: [
      { id: "express", title: "SmartWeb Express", description: "La base digital profesional para tu comercio.", features: ["Landing profesional.", "Diseño adaptable a celulares.", "Integración con WhatsApp.", "Formulario de contacto.", "Ubicación y datos comerciales.", "Alojamiento administrado.", "Mantenimiento continuo."], cta: "Consultar SmartWeb Express", recommended: true },
      { id: "local", title: "Presencia Local", description: "Para que los vecinos puedan encontrarte en Google.", features: ["Alta de ficha comercial.", "Configuración de ubicación.", "Horarios y datos de contacto.", "Optimización de información comercial.", "Orientación para administrar tu ficha."], cta: "Consultar Presencia Local", recommended: false },
      { id: "marketplace", title: "Expansión Comercial", description: "Para comercios que quieren llegar a nuevos mercados.", features: ["Configuración de tienda.", "Catálogo inicial.", "Optimización de publicaciones.", "Configuración de envíos según elegibilidad.", "Orientación comercial inicial."], cta: "Consultar Expansión Comercial", recommended: false },
    ],
    note: "La inversión se define según las necesidades del comercio, el alcance de la implementación y los módulos contratados. Consultanos para recibir una propuesta.",
  },
  faq: {
    eyebrow: "PREGUNTAS FRECUENTES",
    title: "Lo que necesitás saber antes de empezar.",
    description: "Resolvemos las dudas habituales para que puedas tomar una decisión con tranquilidad.",
    items: [
      { question: "¿SmartWeb es una página web tradicional?", answer: "No. SmartWeb es una infraestructura digital diseñada para negocios de barrio. Comenzás con una presencia profesional y podés incorporar nuevas capacidades sin tener que empezar de cero." },
      { question: "¿Cuánto demora la implementación?", answer: "SmartWeb Express está diseñado para implementarse en menos de 24 horas, una vez que recibimos toda la información, los materiales y los accesos necesarios." },
      { question: "¿Necesito saber de tecnología?", answer: "No. Nosotros nos encargamos de la implementación, la configuración y el mantenimiento. Vos podés concentrarte en atender tu negocio." },
      { question: "¿Mi negocio se va a ver bien en celulares?", answer: "Sí. La experiencia está pensada para que tus clientes puedan consultar tu información y contactarte cómodamente desde celulares, tablets y computadoras." },
      { question: "¿Tengo que contratar todos los módulos?", answer: "No. Podés comenzar con SmartWeb Express y sumar otras soluciones cuando tu negocio las necesite." },
      { question: "¿Me garantizan aparecer primero en Google?", answer: "Trabajamos para mejorar tu presencia y relevancia en las búsquedas locales, pero Google determina sus resultados y nadie puede garantizar una posición específica." },
      { question: "¿Qué necesito para comenzar?", answer: "Principalmente, los datos de tu comercio, ubicación, horarios, información de contacto y fotografías o materiales disponibles. También necesitaremos los accesos correspondientes cuando sean necesarios." },
      { question: "¿Puedo vender mis productos en Mercado Libre?", answer: "Sí. Podemos acompañarte con la configuración inicial de la tienda y un catálogo de productos. Es una solución especialmente indicada para comercios con productos aptos para la venta y el envío a nivel nacional." },
    ],
  },
  finalCta: {
    eyebrow: "TU PRÓXIMO PASO EMPIEZA HOY",
    title: "Hacé que tu negocio sea más fácil de encontrar.",
    description: "Contanos qué tipo de comercio tenés y te ayudamos a identificar la solución digital que mejor se adapta a tus necesidades.",
    button: "Hablar con SmartWeb",
    note: "Atención comercial para negocios de Maipú y Mendoza.",
  },
  footer: {
    description: "Infraestructura digital para que los negocios de barrio puedan ser encontrados, recibir consultas y crecer.",
    copyright: "SmartWeb. Infraestructura digital para negocios de barrio.",
    links: [
      { label: "Soluciones", href: "#soluciones" },
      { label: "Planes", href: "#planes" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
};