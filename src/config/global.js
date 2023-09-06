export default {
  global: {
    componenteFormativo:
      'Procesos contables y financieros de la empresa avícola ',
    descripcionCurso:
      'Conocer el proceso productivo y aprender las metodologías necesarias para determinar los costos permite una toma de decisiones fundamentadas en el área de producción. Elaborar informes financieros y comprender su funcionamiento haciendo uso de herramientas como los indicadores financieros, posibilitará llevar el control de la evolución de los procesos y el planteamiento de estrategias de mejoramiento continuo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Costos de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normativa contable',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Metodología de costos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cálculo',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Informes financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estado de costos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estado de resultados',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estado de situación financiera',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Presentación de estados financieros',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Indicadores financieros',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Acciones de mejora',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Elementos',
      referencia:
        'Oliveros R. (2016) Ms Excel 5 Fórmulas nómina completa [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KdZLNPyLGmk.',
    },
    {
      tema: '1.5. Cálculo',
      referencia:
        'VideoTups Docentes (2015) Costos I - Costos indirectos de fabricación [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oGrkHeP5pY4.',
    },
    {
      tema: '2.4 Presentación de estados financieros',
      referencia:
        'Instituto Nacional de Contadores Públicos de Colombia (2021). Guía para elaboración de estados financieros para pymes.',
      tipo: 'Guía digital',
      link: 'https://incp.org.co/wp-content/uploads/2021/01/guia-208.pdf.',
    },
    {
      tema: '2.5 Indicadores financieros',
      referencia:
        'Instituto Nacional de Contadores Públicos de Colombia (2012) Principales indicadores financieros y de gestión.',
      tipo: 'Guía digital',
      link: 'https://incp.org.co/Site/2012/agenda/7-if.pdf.',
    },
  ],
  glosario: [
    {
      termino: 'Persona natural',
      significado: 'individuo de la raza humana con derechos y obligaciones.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'figura jurídica compuesta por una o más personas naturales con identidad propia, pero sin la capacidad de actuar por sí misma. Es diferente a todas las personas que la componen, y requiere de un representante legal para actuar.',
    },
    {
      termino: 'Erogación',
      significado: 'disponer o hacer uso de recursos.',
    },
    {
      termino: 'Partida',
      significado: 'cuenta o rubro de un estado financiero.',
    },
    {
      termino: 'Productos en proceso',
      significado:
        'producto en estado de transformación. Es la etapa intermedia entre la materia prima y el producto terminado disponible para la venta.',
    },
    {
      termino: 'Prestación social',
      significado:
        'beneficios económicos en dinero o en especie para el trabajador. No es retributivo de los servicios prestados, dado que surgen por el simple hecho de existir una relación laboral.',
    },
    {
      termino: 'Seguridad social',
      significado:
        'sistema de entidades que garantizan la prevención de la salud y capacidad laboral de los empleados. Se compone por los servicios de salud, pensión y riesgos laborales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Burbano A. (2006) Costos y presupuestos. Segunda edición. Ediciones Uniandes. Publicación digital. Decreto ley 3743 de 1951. [Presidencia de la República] Por el cual se expide el Código Sustantivo del Trabajo. Diciembre 20 de 1950.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1535683',
    },
    {
      referencia:
        'Decreto 2420 de 2015 [Presidencia de la República] Por el cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones. Diciembre 14 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745.',
    },
    {
      referencia:
        'Delgado F. (2020). Ejercicio de Kardex con promedio ponderado en EXCEL con plantilla GRATIS [video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=xYpt2IRFfgQ.',
    },
    {
      referencia:
        'Guarnizo, F. C. y Cárdenas, S. M. (2015). “Costos por órdenes de producción y por procesos”. Universidad la Salle.',
      link:
        'https://books.google.com.co/books/about?id=xe_6DwAAQBAJ&redir_esc=y',
    },
    {
      referencia:
        'Ministerio del trabajo (2019) “Cotización a la Seguridad Social - Aportes”',
      link:
        'https://www.mintrabajo.gov.co/empleo-y-pensiones/empleo/subdireccion-de-formalizacion-y-proteccion-del-empleo/formalizacion-laboral/cotizacion-a-la-seguridad-social-aportes.',
    },
    {
      referencia:
        'Ministerio del trabajo (2019) “MiPymes representan más de 90% del sector productivo nacional y generan el 80% del empleo en Colombia: ministra Alicia Arango”',
      link:
        'https://www.mintrabajo.gov.co/prensa/comunicados/2019/septiembre/mipymes-representan-mas-de-90-del-sector-productivo-nacional-y-generan-el-80-del-empleo-en-colombia-ministra-alicia-arango.',
    },
    {
      referencia:
        'Rincón C. y Narváez J. (2017) Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL. Ediciones de la U.',
      link:
        'https://books.google.com.co/books/about/Presupuestos.html?hl=es&id=8zOjDwAAQBAJ&redir_esc=y',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios (CIES)',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
