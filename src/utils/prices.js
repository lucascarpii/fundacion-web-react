export const pricingWebsites = [
  {
    name: "Básico",
    description: "Ideal para landing pages simples",
    price: "385.000",
    popular: false,
    features: [
      { text: "Hasta 3 páginas", value: true },
      { text: "Diseño básico", value: true },
      { text: "Diseño responsive", value: true },
      { text: "Sin animaciones", value: false },
      { text: "Iconos de redes sociales", value: true },
      { text: "Revisiones ilimitadas", value: true },
    ],
    animation: {
      duration: 1,
      delay: 0.3,
    },
    button: {
      text: "Me interesa",
      message: "Hola, estoy interesado en el plan de Web Básico",
    },
  },
  {
    name: "Estándar",
    description: "Ideal para marcas",
    price: "825.000",
    popular: true,
    features: [
      { text: "Hasta 5 páginas", value: true },
      { text: "Diseño atractivo", value: true },
      { text: "Formularios de contacto", value: true },
      { text: "Galerías de fotos", value: true },
      { text: "Optimización básica de SEO", value: true },
      { text: "Paleta de colores de la marca", value: true },
      { text: "Animaciones simples", value: true },
    ],
    animation: {
      duration: 1,
      delay: 0,
    },
    button: {
      text: "Me interesa",
      message: "Hola, estoy interesado en el plan de Web Estándar",
    },
  },
  {
    name: "Premium",
    description: "Sitios web interactivos",
    price: "1.660.000",
    popular: false,
    features: [
      { text: "Hasta 10 páginas", value: true },
      { text: "Diseño personalizado", value: true },
      { text: "Optimización avanzada de SEO", value: true },
      { text: "Pasarela de pagos con ML", value: true },
      { text: "Gestion de E-Commerce", value: true },
      { text: "Animaciones avanzadas", value: true },
      { text: "Sitio funcional", value: true },
    ],
    animation: {
      duration: 1,
      delay: 0.3,
    },
    button: {
      text: "Me interesa",
      message: "Hola, estoy interesado en el plan de Web Premium",
    },
  },
];

export const pricingWebApps = [
  {
    name: "Básico",
    description: "Aplicaciones web pequeñas",
    price: "1.440.000",
    popular: false,
    features: [
      { text: "Base de datos hasta 5 tablas", value: true },
      { text: "Diseño de componentes Tamnora", value: true },
      { text: "Funciones esenciales (registro, login)", value: true },
      { text: "Diseño estilo tamnora", value: true },
      { text: "Integraciones avanzadas (Sistemas de pago, Mapas interactivos, APIs", value: false },
      { text: "Soporte técnico por 1 mes", value: true },
    ],
    animation: {
      duration: 1,
      delay: 0.3,
    },
    button: {
      text: "Me interesa",
      message: "Hola, estoy interesado en el plan Básico para aplicaciones web.",
    },
  },
  {
    name: "Estándar",
    description: "Aplicaciones web medianas",
    price: "3.000.000",
    popular: true,
    features: [

      { text: "Incluye todo lo del plan Básico", value: true },
      { text: "Base de datos hasta 15 tablas", value: true },
      { text: "Componentes personalizados", value: true },
      { text: "Diseño al estilo de la marca", value: true },
      { text: "Integraciones avanzadas (Sistemas de pago, Mapas interactivos, APIs", value: true },
      { text: "Soporte técnico por 3 meses", value: true },
    ],
    animation: {
      duration: 1,
      delay: 0,
    },
    button: {
      text: "Me interesa",
      message: "Hola, estoy interesado en el plan Estándar para aplicaciones web.",
    },
  },
  {
    name: "Premium",
    description: "Software empresarial completo",
    price: "6.200.000",
    popular: false,
    features: [

      { text: "Incluye todo lo del plan Estándar", value: true },
      { text: "Base de datos sin límite de tablas", value: true },
      { text: "Creación de componentes únicos", value: true },
      { text: "Diseño exclusivo personalizado", value: true },
      { text: "Integraciones avanzadas (Sistemas de pago, Mapas interactivos, APIs", value: true },
      { text: "Soporte técnico incluido por 6 meses", value: true },
    ],
    animation: {
      duration: 1,
      delay: 0.3,
    },
    button: {
      text: "Me interesa",
      message: "Hola, estoy interesado en el plan Premium para aplicaciones empresariales.",
    },
  },
];
