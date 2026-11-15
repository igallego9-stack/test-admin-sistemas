/* Tema 1 - Sistemas de Información */
const BANK_T1 = [
  {
    id: "t1-01", t: "T1", k: "Teoría",
    q: "¿Qué es un Sistema de Información según el tema 1?",
    o: [
      "Un conjunto de aplicaciones ofimáticas y bases de datos que automatiza por completo la toma de decisiones.",
      "Un conjunto de elementos interrelacionados que capturan, almacenan y transforman datos para entregar información oportuna y precisa a quien la necesita.",
      "La infraestructura física de servidores, redes y almacenamiento, sin incluir personas ni procedimientos."
    ],
    c: 1,
    e: "El SI no es solo hardware o software: integra elementos interrelacionados cuyo cometido es capturar datos, almacenarlos, transformarlos y entregar la información oportuna y precisa, en el formato adecuado y a la persona que la necesita."
  },
  {
    id: "t1-02", t: "T1", k: "Teoría",
    q: "¿Cuál es la diferencia entre dato e información?",
    o: [
      "La información son los hechos sin procesar y los datos son el resultado de interpretarlos y agregarlos.",
      "Los datos son hechos sin procesar; la información son datos procesados, agregados y presentados de forma útil para alguien de la organización.",
      "Datos e información son equivalentes; la diferencia solo depende del formato en que se almacenen."
    ],
    c: 1,
    e: "Los datos son elementos simbólicos (letras, números) que reflejan hechos aún sin procesar. La información aparece cuando esos hechos se procesan, agregan y presentan de forma útil. De ahí la expresión «datos dotados de relevancia»."
  },
  {
    id: "t1-03", t: "T1", k: "Teoría",
    q: "La expresión «datos dotados de relevancia» se refiere a…",
    o: ["El conocimiento, porque exige experiencia previa", "El dato, porque es la unidad mínima sin interpretar", "La información"],
    c: 2,
    e: "La información es el resultado de procesar datos para que sean útiles y relevantes para la toma de decisiones. El conocimiento va un paso más allá y se apoya en la experiencia."
  },
  {
    id: "t1-04", t: "T1", k: "Teoría",
    q: "¿Qué ocurre cuando un Sistema de Información genera un exceso de información?",
    o: [
      "Mejora la toma de decisiones porque proporciona más perspectivas y contexto.",
      "Puede convertirse en un obstáculo en lugar de una ayuda para la toma de decisiones.",
      "Solo afecta al coste de almacenamiento, no a la capacidad de decidir."
    ],
    c: 1,
    e: "El tema advierte expresamente de que el exceso de información puede ser causa de problemas: dificulta centrar la atención y se convierte en un obstáculo para decidir."
  },
  {
    id: "t1-05", t: "T1", k: "Teoría",
    q: "Según el tema, ¿dónde reside el verdadero valor de un Sistema de Información?",
    o: [
      "En el grado de complejidad técnica y redundancia de la infraestructura.",
      "En el volumen de datos históricos que es capaz de conservar.",
      "En la utilización que la organización hace del sistema."
    ],
    c: 2,
    e: "El valor no está en la complejidad ni en la calidad del propio sistema, sino en el uso que la organización hace de él. Un sistema excelente que no se utiliza no aporta valor."
  },
  {
    id: "t1-06", t: "T1", k: "Caso práctico",
    q: "Los datos de origen no se registran bien porque se cometen errores frecuentes a nivel administrativo. ¿Qué característica de la información se está incumpliendo?",
    o: ["Exactitud", "Oportunidad, porque la información llega tarde a dirección", "Nivel de detalle, porque se registran demasiados datos"],
    c: 0,
    e: "La exactitud exige que la información sea precisa y esté libre de errores. Si los datos de entrada se registran mal, la información resultante no es exacta."
  },
  {
    id: "t1-07", t: "T1", k: "Caso práctico",
    q: "Se elabora un cuadro de mando para dirección con información excesiva, lo que impide centrarse en los aspectos clave. ¿Qué dimensión falla?",
    o: ["Economicidad, porque el cuadro de mando cuesta más de lo que aporta", "Verificabilidad, porque no se puede contrastar con otras fuentes", "Nivel de detalle"],
    c: 2,
    e: "La información debe presentar el nivel de detalle adecuado a la decisión a la que se destina. Un exceso de detalle para dirección oculta lo importante."
  },
  {
    id: "t1-08", t: "T1", k: "Caso práctico",
    q: "El sistema de precios es tan complejo que ni los responsables de comercio saben justificar algunas diferencias y resulta inoperativo. ¿Qué característica falla?",
    o: ["Comprensión", "Exactitud, porque los precios no reflejan los costes reales", "Confianza, porque los responsables no creen en el sistema"],
    c: 0,
    e: "La comprensión exige que la información sea inteligible para el usuario. Si no se entiende, no se puede utilizar para decidir aunque los datos sean correctos."
  },
  {
    id: "t1-09", t: "T1", k: "Teoría",
    q: "¿Qué significa la característica de economicidad de la información?",
    o: [
      "Que la información se obtenga en el menor tiempo posible, aunque cueste más.",
      "Que el coste de obtenerla sea menor que el beneficio que aporta.",
      "Que pueda comprobarse con fuentes independientes."
    ],
    c: 1,
    e: "Economicidad significa que el coste de obtener la información debe ser menor que el beneficio que se obtiene de ella. No basta con que sea útil: debe compensar económicamente."
  },
  {
    id: "t1-10", t: "T1", k: "Teoría",
    q: "¿Qué característica se refiere a entregar la información a la persona adecuada en el momento en que la necesita?",
    o: ["Oportunidad", "Completitud, porque incluye todos los datos disponibles", "Verificabilidad, porque se puede contrastar con otras fuentes"],
    c: 0,
    e: "La oportunidad tiene dos componentes: que llegue a la persona que corresponde y que llegue cuando se necesita. Información correcta pero tardía pierde valor."
  },
  {
    id: "t1-11", t: "T1", k: "Teoría",
    q: "¿Qué significa que la información sea verificable?",
    o: [
      "Que sea comprensible para el usuario.",
      "Que pueda ser contrastada y comprobada.",
      "Que tenga el nivel de detalle adecuado."
    ],
    c: 1,
    e: "Verificabilidad es la posibilidad de contrastar y comprobar la información. Si no se puede comprobar, no se puede dar crédito a lo que dice."
  },
  {
    id: "t1-12", t: "T1", k: "Teoría",
    q: "¿Cuál de las siguientes NO es una característica de la información del tema 1?",
    o: ["Confianza", "Oportunidad", "Redundancia"],
    c: 2,
    e: "El tema enumera exactitud, comprensión, completitud, economicidad, confianza, relevancia, nivel de detalle, oportunidad y verificabilidad. La redundancia no es una de ellas; de hecho, el exceso de información es un problema."
  },
  {
    id: "t1-13", t: "T1", k: "Teoría",
    q: "La planificación y el diseño de los Sistemas de Información requieren una perspectiva multidisciplinar con tres dimensiones. ¿Cuáles?",
    o: [
      "Humana, tecnológica y organizativa.",
      "Tecnológica, financiera y legal.",
      "Humana, hardware y software."
    ],
    c: 0,
    e: "El SI se compone de una dimensión humana, una tecnológica y una organizativa. Reducirlo solo a la parte tecnológica es un error clásico."
  },
  {
    id: "t1-14", t: "T1", k: "Teoría",
    q: "Las TIC afectan a las bases de la competencia de tres formas. ¿Cuál de las siguientes NO es una de ellas?",
    o: [
      "Crear ventajas competitivas nuevas.",
      "Cambiar la estructura del sector y las reglas de la competencia.",
      "Reducir la incertidumbre estratégica hasta hacer innecesario el análisis de la competencia."
    ],
    c: 2,
    e: "Las TIC pueden crear ventajas, cambiar la estructura del sector y facilitar nuevos negocios basados en la información, pero no garantizan el éxito por sí mismas: la estrategia y la organización siguen siendo clave."
  },
  {
    id: "t1-15", t: "T1", k: "Teoría",
    q: "¿Cómo se genera el conocimiento a partir de la información?",
    o: [
      "Al acumular información en repositorios cada vez más grandes.",
      "Mediante la experiencia, en la mente humana, apoyándose en la dimensión organizativa y humana.",
      "Al digitalizar la información y compartirla en la nube."
    ],
    c: 1,
    e: "El conocimiento se produce de forma invisible en la mente humana a partir de la experiencia. Por eso los SI orientados a la gestión del conocimiento son escasos: es difícil capturar esa dimensión."
  },
  {
    id: "t1-16", t: "T1", k: "Teoría",
    q: "Según la definición de la Agencia de Protección Ambiental de EE. UU., un centro de datos es…",
    o: [
      "El conjunto de servidores y equipos de red, sin incluir la energía ni el control ambiental.",
      "El equipamiento electrónico para procesar, almacenar y transmitir información digital, junto con energía fiable y control ambiental.",
      "Cualquier instalación informática de la organización, incluida la ofimática de los usuarios."
    ],
    c: 1,
    e: "La definición incluye tanto el equipamiento informático (servidores, almacenamiento y red) como el equipamiento especializado de energía y control ambiental necesarios para mantenerlo."
  },
  {
    id: "t1-17", t: "T1", k: "Teoría",
    q: "¿Cuál de las siguientes NO es una característica típica de un CPD?",
    o: [
      "Energía redundante con SAI y generadores.",
      "Control ambiental, detección y extinción de incendios.",
      "Una conexión de comunicaciones dimensionada para el pico máximo, sin redundancia."
    ],
    c: 2,
    e: "Un CPD típico tiene comunicaciones redundadas, energía redundada y de backup, control ambiental, detección de incendios y medidas de seguridad. Una única conexión sin redundancia es precisamente lo contrario."
  },
  {
    id: "t1-18", t: "T1", k: "Teoría",
    q: "¿Qué característica define a los mainframes?",
    o: [
      "Eran servidores departamentales de bajo coste que sustituyeron a los minicomputadores.",
      "Podían ejecutar varios sistemas operativos a la vez funcionando como varias máquinas virtuales, pero con un coste elevado.",
      "Ejecutaban un único sistema operativo y no permitían virtualización."
    ],
    c: 1,
    e: "Los mainframes eran computadoras de gran tamaño ubicadas en salas exclusivas, capaces de ejecutar varios SO simultáneamente como máquinas virtuales. Su gran problema era el elevado coste inicial y de puesta en marcha."
  },
  {
    id: "t1-19", t: "T1", k: "Teoría",
    q: "¿Qué papel tuvieron los minicomputadores en los años 70 y 80?",
    o: [
      "Sustituyeron a los mainframes como alternativa más pequeña y barata.",
      "Fueron los primeros equipos personales y sustituyeron a los mainframes.",
      "Eran mainframes reducidos que mantenían el mismo coste de instalación."
    ],
    c: 0,
    e: "Los minicomputadores se convirtieron en alternativa a los mainframes: eran más pequeños, más baratos y no necesitaban una ubicación tan específica."
  },
  {
    id: "t1-20", t: "T1", k: "Teoría",
    q: "¿Cuál fue uno de los principales problemas de la computación distribuida tras la llegada de los ordenadores personales?",
    o: [
      "La dispersión y los entornos caóticos: cada propietario gestionaba su equipo y cada vendedor tenía su propio sistema operativo.",
      "La centralización excesiva en un único CPD, que impedía el acceso de los usuarios.",
      "La dependencia de un único proveedor y la ausencia de redes locales."
    ],
    c: 0,
    e: "La libertad de la computación distribuida también trajo complejidad: dispersión, entornos caóticos y gestión heterogénea. Ese fue el punto de partida de la computación distribuida moderna."
  },
  {
    id: "t1-21", t: "T1", k: "Teoría",
    q: "¿Qué es el Grid Computing?",
    o: [
      "El uso de comunicaciones sobre internet para que varios ordenadores trabajen como un supercomputador; su auge fue en los 90.",
      "Un clúster de alta disponibilidad que replica datos entre dos CPDs.",
      "Una red de área local que agrupa servidores para compartir almacenamiento."
    ],
    c: 0,
    e: "Grid Computing utilizaba internet para agrupar recursos de varios ordenadores y funcionar como un supercomputador. Su cima fue en los años 90 y se usaba para aplicaciones que requerían gran cantidad de recursos."
  },
  {
    id: "t1-22", t: "T1", k: "Teoría",
    q: "¿Qué es un clúster según el tema 1?",
    o: [
      "Ordenadores unidos por una red de alta velocidad, vistos como una única unidad, con hardware básico y fácilmente reproducible.",
      "Un conjunto de servidores que comparten una única imagen de sistema operativo y memoria física.",
      "Una arquitectura de virtualización que consolida varios servidores en un único host."
    ],
    c: 0,
    e: "Los primeros clústeres aparecen a mediados de los 90: ordenadores unidos por red de alta velocidad, vistos como una unidad, con hardware básico (Ethernet estándar) y sin componentes personalizados, lo que los hace reproducibles."
  },
  {
    id: "t1-23", t: "T1", k: "Teoría",
    q: "¿Por qué aparece la virtualización en la evolución del CPD?",
    o: [
      "Para aumentar el número de servidores físicos y repartir mejor la carga.",
      "Para consolidar servidores y reducir la complejidad y el coste de gestionar muchos servidores.",
      "Para garantizar que cada servicio tenga su propio hardware dedicado."
    ],
    c: 1,
    e: "El aumento del número de servidores en los CPD incrementó la complejidad y el coste de gestión. La virtualización permitió compartir recursos físicos entre varias máquinas virtuales y consolidar servidores."
  },
  {
    id: "t1-24", t: "T1", k: "Teoría",
    q: "¿Qué caracteriza al Cloud Computing?",
    o: [
      "Externalizar el hardware pagando una cuota fija por adelantado, independientemente del uso.",
      "Ejecutar los servicios en un CPD propio con elasticidad limitada.",
      "Usar recursos a través de internet de forma flexible y pagar solo por el consumo efectuado."
    ],
    c: 2,
    e: "La nube permite utilizar recursos a través de internet de forma flexible y pagar por consumo. Incluye IaaS, PaaS y SaaS, no solo infraestructura."
  },
  {
    id: "t1-25", t: "T1", k: "Teoría",
    q: "¿Qué modelo de servicio cloud ofrece máquinas, almacenamiento y red como recursos?",
    o: ["IaaS", "PaaS, porque incluye el sistema operativo y el middleware, pero no la red", "SaaS, porque el proveedor gestiona toda la infraestructura y la aplicación"],
    c: 0,
    e: "IaaS (Infrastructure as a Service) ofrece infraestructura: cómputo, almacenamiento y red. PaaS ofrece plataforma para desarrollar y SaaS ofrece software listo para usar."
  },
  {
    id: "t1-26", t: "T1", k: "Teoría",
    q: "¿Qué es el CPD modular y qué ejemplo se cita?",
    o: [
      "Surge en 2007; el Proyecto Natick de Microsoft, instalado en el océano, es un ejemplo.",
      "Surge en los años 90 y su ejemplo es el Proyecto Natick de Microsoft.",
      "Es un CPD de Google instalado en el desierto de Nevada."
    ],
    c: 0,
    e: "El CPD modular es una de las innovaciones recientes más importantes (2007). El Proyecto Natick de Microsoft es un ejemplo de CPD modular instalado en el océano."
  },
  {
    id: "t1-27", t: "T1", k: "Teoría",
    q: "¿Cuál es la tendencia actual en la evolución de los CPD?",
    o: [
      "Distribuir los servidores en varias salas para reducir el consumo energético.",
      "Consolidar para reducir el número de dispositivos y simplificar la gestión.",
      "Sustituir la virtualización por contenedores en todos los casos."
    ],
    c: 1,
    e: "Hoy la tendencia vuelve a la consolidación: menos dispositivos que gestionar simplifican la infraestructura y permiten administrar el CPD con mayor eficiencia."
  },
  {
    id: "t1-28", t: "T1", k: "Teoría",
    q: "¿Qué se espera del administrador de sistemas?",
    o: [
      "Ser el primer nivel de respuesta ante crisis tecnológicas, con amplios conocimientos de hardware, software, datos y usuarios.",
      "Gestionar únicamente los servidores, sin responsabilidad sobre datos ni usuarios.",
      "Coordinar solo proyectos estratégicos, dejando la operación diaria a los usuarios."
    ],
    c: 0,
    e: "El administrador es el primer nivel de respuesta ante crisis, necesita amplios conocimientos de todo el sistema y capacidad para tomar decisiones. Los usuarios le hacen el trabajo más complicado."
  },
  {
    id: "t1-29", t: "T1", k: "Teoría",
    q: "¿Qué reto introduce el BYOD (bring your own device) al administrador?",
    o: [
      "Reduce la superficie de ataque porque los dispositivos no pertenecen a la empresa.",
      "Obliga a controlar una gran variedad de dispositivos sin dejar de garantizar la seguridad de la empresa.",
      "Simplifica la administración al no requerir equipos corporativos."
    ],
    c: 1,
    e: "Con BYOD los empleados usan sus propios dispositivos. El administrador debe controlar esa variedad y garantizar la seguridad, a la vez que los empleados tienen las herramientas necesarias."
  },
  {
    id: "t1-30", t: "T1", k: "Teoría",
    q: "¿Qué es DevOps y cuándo surge?",
    o: [
      "Una metodología que separa aún más desarrollo y administración; surge en 2008.",
      "Una metodología que acerca desarrollo y administración, con automatización y entornos de desarrollo iguales a producción; surge en 2008.",
      "Una metodología que externaliza la administración de sistemas al proveedor cloud."
    ],
    c: 1,
    e: "DevOps surge en 2008 para acercar los equipos de desarrollo y de sistemas. Implica automatización, colaboración y que el entorno de desarrollo sea igual al de producción."
  },
  {
    id: "t1-31", t: "T1", k: "Teoría",
    q: "¿Cuál es una estrategia recomendada para el administrador al hacer cambios?",
    o: [
      "Aplicar los cambios en producción y, si fallan, restaurar una copia de seguridad.",
      "Planearlos, hacerlos reversibles e incrementales y probarlos antes de publicarlos.",
      "Documentar solo los cambios que hayan causado incidentes."
    ],
    c: 1,
    e: "El administrador debe planear antes de cambiar, hacer cambios reversibles e incrementales y probarlos repetidamente antes de hacerlos públicos. También es recomendable un cuaderno de bitácora."
  },
  {
    id: "t1-32", t: "T1", k: "Teoría",
    q: "¿Qué equilibrio debe mantener el administrador de sistemas?",
    o: [
      "Autoridad y responsabilidad, junto con servicio y cooperación.",
      "Autoridad para decidir y cooperación con los usuarios, pero sin asumir responsabilidad sobre los resultados.",
      "Responsabilidad técnica y servicio, pero sin autoridad para aplicar cambios."
    ],
    c: 0,
    e: "El administrador debe tener autoridad y responsabilidad, pero también servicio y cooperación. Es un rol técnico y, a la vez, de atención a usuarios y de coordinación."
  }
];
