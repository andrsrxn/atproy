import {
  LogoArteInmobilario,
  LogoCondado,
  LogoFMLogistics,
  LogoGrupoMacro,
  LogoMaya,
  LogoSpectrum
} from '@/assets/clients'
import {
  ImagenCarretera,
  ImagenEquipo,
  ImagenGraficos,
  ImagenMaqueta,
  ImagenPaneles,
  ImagenPavimento,
  ImagenPlanos,
  ImagenSubestacion,
  ImagenTierra1,
  ImagenUrbanizacion,
  ImagenUrbanizacion1
} from '@/assets/images'
import {
  Briefcase,
  Building2,
  CheckCheck,
  CircuitBoard,
  FileSignature,
  Globe,
  Globe2,
  Home,
  LayoutDashboard,
  Lightbulb,
  Mail,
  Map,
  MapPin,
  Phone,
  Puzzle,
  Split,
  UtilityPole
} from 'lucide-astro'

export const navLinks = [
  {
    label: 'Acerca de',
    url: '/acerca-de'
  },
  {
    label: 'Proyectos',
    url: '/proyectos'
  },
  {
    label: 'Servicios',
    url: '/servicios'
  },
 
  {
    label: 'Contacto',
    url: '/contacto',
    icon: Mail
  }
]

export const clients = [
  {
    name: 'Arte Inmobilario',
    image: LogoArteInmobilario,
    url: null
  },
  {
    name: 'Condado Naranjo',
    image: LogoCondado,
    url: null
  },
  {
    name: 'FM Logistics',
    image: LogoFMLogistics,
    url: null
  },
  {
    name: 'Grupo Macro',
    image: LogoGrupoMacro,
    url: null
  },
  {
    name: 'Grupo Maya',
    image: LogoMaya,
    url: null
  },
  {
    name: 'Spectrum',
    image: LogoSpectrum,
    url: null
  }
]

export const services = [
  {
    name: 'Servicios Civiles',
    description:
      'Obras completas para el entorno de la sociedad que mejoran su calidad de vida y la del territorio',
    slug: 'civiles',
    subservices: [
      {
        name: 'Topografía',

        icon: Globe2,
        keyword: 'de Topografía',
        services: [
          'Urbanización en el trazo de lotes y calles',
          'Estudio para carreteras, agua potable, drenajes',
          'Estudio hidrológico para la construcción de puentes y/o cultivos agrícolas',
          'Obra de arte sobre drenajes transversales y/o acometidas de agua potable'
        ]
      },
      {
        name: 'Obra civil',
        icon: Building2,
        keyword: 'de Obra civil',

        services: [
          'Cimentaciones',
          'Levantado de mampostería',
          'Funciones "In situ"',
          'Toma de muestra de tierra y chequeo base y sub-base de suelos',
          'Asfalto y concreto de pavimentos'
        ]
      },
      {
        name: 'Remodelación de Casas y Oficinas',

        icon: Home,
        keyword: 'de Remodelación de casas y oficinas',
        services: [
          'Pintura (Interior y exterior)',
          'Albañilería',
          'Plomería (agua/gas)',
          'Instalaciones eléctricas domiciliares e industriales en baja tensión',
          'Herrería',
          'Redes de computación'
        ]
      },
      {
        name: 'Otros',
        icon: CheckCheck,
        keyword: 'de Otros servicios civiles',

        services: [
          'Señalización de vías en municipalidades',
          'Ingeniería legal de trámites y permisos'
        ]
      }
    ]
  },
  {
    name: 'Servicios Eléctricos',
    description:
      'Aplicamos estudios de electricidad, electromagnetismo y electromecánica en distintos tipos de operaciones',
    slug: 'electricos',
    subservices: [
      {
        name: 'Topografía, Diseño, Planos y Construcción',
        icon: CircuitBoard,
        keyword: 'de Topografía, diseño, planos y construcción',

        services: [
          'Redes eléctricas de media tensión de 13.2 kV y 34.5 kV. y líneas de transmisión 69 kV.',
          'Instalaciones eléctricas residenciales, comerciales e industriales.',
          'Ampliaciones y remodelaciones en el sistema de distribución 13.2 kV y 34.5 kV para aldeas, caseríos, cantones y urbanizaciones. ',
          'Energías Renovables (Hidroeléctricas, Sistemas Fotovoltaicos y Eólicos)',
          'Estudios energéticos',
          'Subestaciones eléctricas de 69/34.5kV/13.2kV',
          'Acometidas subterráneas y para DEORSA-DEOCSA y EEGSA',
          'Relevamiento de Activos Unión Fenosa',
          'Creación de anillos que interconectan dos subestaciones eléctricas',
          'Sistemas de tierras',
          'Remodelaciones de cascos urbanos',
          'Mantenimiento preventivo y correctivo de instalaciones eléctricas',
          'Levantamiento de activos de instalaciones eléctricas en corriente directa y alterna.',
          'Conversión de sistemas de distribución monofásicos a sistemas bifásicos y trifásicos'
        ]
      },
      {
        name: 'Comercial',
        icon: Lightbulb,
        keyword: 'Comerciales de electricidad',

        services: [
          'Estudios de costo de energía',
          'Negociación de compra-venta de energía y potencia eléctrica',
          'Análisis y evaluación económica de ofertas de suministro eléctrico',
          'Análisis, revisión y elaboración de contratos de suministro',
          'Asesoría en tipos de contratos del Mercado a Término del Mercado Mayorista',
          'Cursos de cómo comprar energía eléctrica de manera eficiente',
          'Trámites y gestiones ante MEM, CNEE y AMM'
        ]
      },
      {
        name: 'Legal y Regulatoria',
        icon: FileSignature,
        keyword: 'Legales y regulatorios',

        services: [
          'Solución de conflictos',
          'Formulación y redacción de reclamos',
          'Memoriales para presentar solicitudes o entrega de documentación',
          'Aplicación de Leyes y Normas eléctricas (técnicas, comerciales y operativas)',
          'Defensa de casos',
          'Representación en caso de negociaciones, multas o conflictos',
          'Cursos de Regulación y Mercados'
        ]
      },
      {
        name: 'Suministro de Equipos',
        icon: Briefcase,
        keyword: 'de Suministro de equipos',

        services: [
          'Transformadores tipo Pad Mounted, tipo subestación, convencionales y autoprotegidos y de medición para línea primaria',
          'Pararrayos con dispositivo de cebado',
          'Equipos para pruebas de transformadores',
          'Equipo para subestaciones eléctricas'
        ]
      }
    ]
  },
  {
    name: 'De Telecomunicaciones',
    description:
      'Resolvemos la transmisión, recepción y mantenimiento de señales e interconexión de redes.',
    slug: 'de-telecomunicaciones',
    subservices: [
      {
        name: 'Servicios Generales',
        icon: UtilityPole,
        keyword: 'de telecomunicaciones',

        services: [
          'Ingenieria total',
          'Correción de "Downtilt" en antenas',
          'Instalación de redes de tierra'
        ]
      }
    ]
  },
  {
    name: 'De Diseño (En conjunto con Planifica)',
    description:
      'Trabajamos con los mejores proveedores para ofrecer una mayor gama de servicios',
    slug: 'de-diseño',
    subservices: [
      {
        name: 'Planos',
        icon: Map,
        keyword: 'de Diseño de planos',

        services: [
          'Planos de contrucción para casas, centros comerciales y edificios',
          'Planos de contrucción para carreteras, planta-perfil de rasantes y secciones transversales',
          'Planos para urbanizaciones, rasantes, plataformas, drenajes sanitarios, drenajes pluviales y cálculo de movimiento de tierras',
          'Impresión de planos'
        ]
      },
      {
        name: 'Proyectos',
        icon: LayoutDashboard,
        keyword: 'de Proyectos de diseño',

        services: [
          'Creación de maquetas',
          'Levantamientos topográficos de polígonos y nivelación de terrenos para curvas de nivel'
        ]
      }
    ]
  }
]

export const featuredServices = [
  {
    name: 'Energías renovables',
    image: ImagenPaneles,
    slug: 'electricos'
  },
  {
    name: 'Subestaciones eléctricas',
    image: ImagenSubestacion,
    slug: 'electricos'
  },
  {
    name: 'Asfalto y concreto de pavimentos',
    image: ImagenPavimento,
    slug: 'civiles'
  },
  {
    name: 'Diseño de Urbanización',
    image: ImagenUrbanizacion1,
    slug: 'civiles'
  },
]

export const featuredSpecifications = [
  {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptate?',
    image: ImagenGraficos
  },
  {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptate?',
    image: ImagenPlanos
  },
  {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptate?',
    image: ImagenEquipo
  }
]

export const projects = [
  {
    type: 'Diseño de carreteras',
    imageUrl: ImagenCarretera,
    activities: [
      'Diseño de construcción de calle pavimentada de 19Km. en Santa María Ixhuatán',
      'Diseño para construcción de calle pavimentada de 4Km. en Caserío Nueva Joya, Palencia',
      'Diseño para construcción de Boulevard de ingreso de 800mts. a Rancho Santa Clara, Villa Nueva',
      'Diseño para construcción de calle de acceso hacia área administrativa, Alimentos Maravilla Honduras.'
    ]
  },

  {
    type: 'Planificación de centros comerciales',
    imageUrl: ImagenEquipo,
    activities: [
      'Centro Comercial Villa Flores, Boca del Monte',
      'Centro Comercial Alux Center, San Lucas ',
      'Centro Indutrial Agua Pura Salvavidas, Poptún, Peten',
      'Carry Boy, Zona 9'
    ]
  },
  {
    type: 'Elaboración de maquetas',
    imageUrl: ImagenMaqueta,
    activities: ['Hidro-Xacbal', 'Enel-Guatemala', 'Deocsa']
  },
  {
    type: 'Cálculo de movimiento de tierra',
    imageUrl: ImagenTierra1,
    activities: [
      'Edificio de apartamentos Caledonia, Zona 16',
      'Colegio Agustiniano, El Naranjo',
      'Hidroeléctrica El Libertador',
      'Hidroeléctrica El Panal',
      'Hidroeléctrica El Salto Marínala, Escuintla',
      'Hidroeléctrica Pontila',
      'Mina San Rafael'
    ]
  },

  {
    type: 'Diseño de Urbanizaciones',
    imageUrl: ImagenUrbanizacion,
    activities: [
      'Bosques de la Fontana, Mixco, San Nicolás',
      'Campos de San Isidro 2, Zona 16',
      'Muxbal, Carretera al Salvador',
      'Villa Vermont 1 y 2, Carretera al Salvador',
      'Torres Nimajuyú, Zona 21',
      'Jardines del Edén, Ciudad Quetzal',
      'Alamedas de San Isidro sector B, C y D.',
      'Y más de 30 diseños...'
    ]
  }
]

export const projectsBenefits = [
  {
    icon: Globe,
    title: 'Estándar Internacional',
    description:
      'Utilizando los mejores elementos tecnológicos de equipo, sistemas operativos, aplicaciones y servicios.'
  },
  {
    icon: Puzzle,
    title: 'Adaptabilidad',
    description:
      'A las necesidades y condiciones culturales, económicas, legales, climáticas, y ecológicas de la región.'
  },
  {
    icon: Split,
    title: 'Flexibilidad',
    description:
      'Establecemos facilidad de comunicación con nuestros clientes y adaptación de acuerdo a sus necesidades.'
  },
  {
    icon: Lightbulb,
    title: 'Conocimiento',
    description:
      'Facilitamos y capacitamos al cliente acerca de las aplicaciones explícitas e implícitas de los sistemas implementados.'
  }
]

export const contactLinks = [
  {
    link: 'tel:+50253067848',
    label: '+502 5306-7848',
    icon: Phone,
    type: 'Número telefónico'
  },
  {
    link: 'mailto:info@grupoatproy.com',
    label: 'info@grupoatproy.com',
    icon: Mail,
    type: 'Correo electrónico'
  },
  {
    link: 'https://www.google.com/maps/search/9%C2%AA.+Avenida+Fuentes+de+Minerva+II,+Mixco,+Guatemala/@14.6756351,-90.5492384,749m/data=!3m1!1e3',
    label: 'Mixco, Guatemala, Guatemala',
    icon: MapPin,
    type: 'Ubicación'
  }
]
