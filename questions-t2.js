/* Tema 2 - Virtualización */
const BANK_T2 = [
  {
    id: "t2-01", t: "T2", k: "Teoría",
    q: "¿Qué es la virtualización?",
    o: [
      "Una tecnología software que abstrae los recursos de un computador y da acceso lógico a los físicos.",
      "Un programa que elimina el SO anfitrión y ejecuta las aplicaciones directamente sobre el firmware.",
      "Un protocolo de red que conecta centros de datos y reparte el almacenamiento entre ellos."
    ],
    c: 0,
    e: "La virtualización separa lógicamente la petición de un servicio de los recursos físicos que lo proporcionan. Permite ejecutar varios SO y aplicaciones sobre el mismo equipo físico."
  },
  {
    id: "t2-02", t: "T2", k: "Teoría",
    q: "¿Cuáles son las dos aproximaciones históricas de la virtualización?",
    o: [
      "Dividir un computador en varias máquinas virtuales o agregar varios equipos en uno solo.",
      "La paravirtualización y la virtualización completa, según se modifique o no el SO invitado.",
      "La virtualización de recursos y la de aplicaciones, que sustituyen a la de plataforma."
    ],
    c: 0,
    e: "El tema distingue dos enfoques: dividir un equipo en varias máquinas virtuales o agregar varios equipos para que funcionen como uno (Grid Computing o Server Aggregation)."
  },
  {
    id: "t2-03", t: "T2", k: "Teoría",
    q: "¿Qué objetivo tenía el ordenador Atlas (1962) relacionado con la virtualización?",
    o: [
      "Fue el primer sistema de contenedores ligeros y el precursor directo de Docker.",
      "Permitir que muchos usuarios compartieran un ordenador mediante terminales y recursos repartidos.",
      "Fue un clúster HPC de los años 90 diseñado para simulación climática y cálculo numérico avanzado."
    ],
    c: 1,
    e: "Atlas buscaba resolver los problemas del uso común de un ordenador por muchos trabajadores a través de terminales: repartía procesador y disco, y garantizaba que un trabajo no interfiriera con otro. Así nació la necesidad de particionar recursos."
  },
  {
    id: "t2-04", t: "T2", k: "Teoría",
    q: "¿Qué es una máquina virtual (VM)?",
    o: [
      "Un proceso ligero que comparte el kernel del host y se limita a aislar la aplicación.",
      "Un contenedor software aislado que incluye hardware simulado, sistema operativo y aplicaciones.",
      "Un disco virtual con extensión .vmdk que contiene el SO, las aplicaciones y los datos."
    ],
    c: 1,
    e: "La VM es un contenedor software perfectamente aislado e independiente, formado por hardware simulado + sistema operativo + aplicaciones. No es un simple proceso ni un disco."
  },
  {
    id: "t2-05", t: "T2", k: "Teoría",
    q: "¿Cuál es la función del hipervisor o Virtual Machine Monitor (VMM)?",
    o: [
      "Desvincular las máquinas virtuales del host y asignar dinámicamente los recursos a cada VM.",
      "Ser el sistema operativo invitado que se ejecuta dentro de cada máquina virtual.",
      "Almacenar los snapshots y los ficheros .vmdk que pertenecen a las máquinas virtuales."
    ],
    c: 0,
    e: "El hipervisor desvincula las VM del host y asigna recursos dinámicamente según las necesidades. Puede ejecutarse directamente sobre el hardware o sobre un SO anfitrión."
  },
  {
    id: "t2-06", t: "T2", k: "Teoría",
    q: "¿Qué es un hipervisor de tipo 1?",
    o: [
      "El que se ejecuta sobre un sistema operativo anfitrión, como VMware Workstation.",
      "El que se ejecuta directamente sobre el hardware del servidor, como VMware ESXi.",
      "El que se instala como una aplicación dentro de Windows y usa sus controladores."
    ],
    c: 1,
    e: "Los hipervisores de tipo 1 o bare-metal corren directamente sobre el hardware. Ejemplo típico: VMware ESXi. Al tener acceso directo al hardware ofrecen mayor rendimiento."
  },
  {
    id: "t2-07", t: "T2", k: "Teoría",
    q: "¿Qué es un hipervisor de tipo 2?",
    o: [
      "El que se ejecuta sobre un SO anfitrión, como VMware Workstation o VirtualBox.",
      "El que se ejecuta directamente sobre el hardware y ofrece mayor rendimiento y aislamiento.",
      "El que no necesita un SO anfitrión porque incorpora sus propios controladores."
    ],
    c: 0,
    e: "Los hipervisores de tipo 2 corren sobre un SO anfitrión que ofrece servicios de virtualización. Ejemplos: VMware Workstation, VirtualBox, Parallels o VirtualPC."
  },
  {
    id: "t2-08", t: "T2", k: "Teoría",
    q: "¿Qué ventaja relativa presenta un hipervisor de tipo 2 frente al tipo 1?",
    o: [
      "Mayor rendimiento y estabilidad al no depender del SO anfitrión.",
      "Mayor compatibilidad de hardware y funciones como VMware Tools.",
      "Acceso directo al hardware y menor latencia en las operaciones de E/S."
    ],
    c: 1,
    e: "El tipo 2 tiene mayor compatibilidad de hardware y funciones adicionales, pero su rendimiento y estabilidad son menores porque toda la carga recae sobre el SO anfitrión."
  },
  {
    id: "t2-09", t: "T2", k: "Teoría",
    q: "¿Qué caracteriza a la virtualización asistida por hardware?",
    o: [
      "Añade instrucciones a la CPU que se ejecutan en ring -1 y aceleran las transiciones con el VMM.",
      "Elimina el hipervisor y permite que cada VM acceda directamente a todos los dispositivos.",
      "Solo se aplica a contenedores Docker porque todos comparten el kernel del host."
    ],
    c: 0,
    e: "La virtualización asistida por hardware añade un conjunto de instrucciones a la CPU (Intel VT / AMD-V) que se ejecutan en ring -1. Permiten VMMs en modo privilegiado y aceleran las transiciones por hardware en vez de por software."
  },
  {
    id: "t2-10", t: "T2", k: "Teoría",
    q: "En virtualización asistida por hardware, ¿en qué anillo cree el SO invitado que se ejecuta?",
    o: [
      "En ring 0, porque el hardware oculta al invitado que el VMM está en ring -1.",
      "En ring 3, porque el VMM lo degrada para aislarlo del hardware real.",
      "En ring -1, porque el hardware lo eleva por encima del propio VMM."
    ],
    c: 0,
    e: "El SO invitado cree que se ejecuta en ring 0 (modo privilegiado), aunque realmente el VMM está en ring -1. El hardware captura las llamadas y guarda/restaura el estado de la CPU."
  },
  {
    id: "t2-11", t: "T2", k: "Teoría",
    q: "¿Cuál es la diferencia entre virtualización y Cloud Computing?",
    o: [
      "Son lo mismo: la nube es solo virtualización ejecutada en un CPD ajeno.",
      "La virtualización crea entornos aislados; cloud automatiza recursos bajo demanda mediante APIs.",
      "La virtualización automatiza recursos bajo demanda y la nube se limita a crear entornos aislados."
    ],
    c: 1,
    e: "No son lo mismo. La virtualización es un componente que permite la nube. En virtualización el administrador gestiona el hipervisor y las VM; en cloud esas tareas se automatizan mediante APIs."
  },
  {
    id: "t2-12", t: "T2", k: "Teoría",
    q: "¿Qué abstrae la virtualización de plataforma?",
    o: [
      "Un recurso individual del sistema, como la conexión de red o la memoria virtual.",
      "Todo el hardware de una plataforma, permitiendo ejecutar varios SO independientes.",
      "Solo las aplicaciones, que se encapsulan junto con su propio runtime de ejecución."
    ],
    c: 1,
    e: "La virtualización de plataforma abstrae un sistema completo: el hardware subyacente. Así múltiples instancias de SO pueden ejecutarse de forma independiente."
  },
  {
    id: "t2-13", t: "T2", k: "Teoría",
    q: "¿Qué es la paravirtualización?",
    o: [
      "El hipervisor ofrece APIs (hypercalls) y el SO invitado debe estar modificado para usarlas.",
      "El hipervisor emula todo el hardware y el SO invitado no necesita ninguna modificación.",
      "Los invitados comparten el kernel del host y se crean instancias independientes y aisladas."
    ],
    c: 0,
    e: "En paravirtualización el hipervisor no emula necesariamente todo el hardware: ofrece hypercalls y el SO invitado debe estar modificado para aprovecharlas. Es una colaboración entre SO e hipervisor."
  },
  {
    id: "t2-14", t: "T2", k: "Teoría",
    q: "¿Qué caracteriza a la virtualización completa?",
    o: [
      "Exige modificar el SO invitado para que use las hypercalls que ofrece el hipervisor.",
      "No requiere que los SO invitados colaboren con el hipervisor ni que se modifiquen.",
      "Solo funciona con Linux porque aprovecha el kernel del sistema anfitrión."
    ],
    c: 1,
    e: "La virtualización completa es similar a la paravirtualización, pero no requiere que los SO invitados colaboren ni se modifiquen. El hipervisor se encarga de todo."
  },
  {
    id: "t2-15", t: "T2", k: "Teoría",
    q: "¿Qué es la virtualización a nivel de sistema operativo?",
    o: [
      "Los SO de las VM comparten el kernel del host y se crean instancias independientes.",
      "Cada VM tiene su propio kernel y hardware simulado, pero comparte las aplicaciones.",
      "Solo virtualiza el escritorio remoto y no permite ejecutar servicios en el servidor."
    ],
    c: 0,
    e: "En la virtualización de SO los invitados comparten el kernel del host y se crean instancias independientes. Es la base de los contenedores; en Linux convierte el núcleo en hipervisor."
  },
  {
    id: "t2-16", t: "T2", k: "Teoría",
    q: "¿Qué es la emulación nativa?",
    o: [
      "Se emula una arquitectura en otra y se replica el hardware para ejecutar varias VM a la vez.",
      "Se comparte el kernel del host y se crean contenedores aislados con sus dependencias.",
      "Se ejecuta el mismo SO en host e invitado sin simular hardware ni compartir kernel."
    ],
    c: 0,
    e: "La emulación nativa emula una arquitectura en otra y replica el hardware, de modo que varias VM pueden ejecutarse concurrentemente. Es distinta de la paravirtualización y de la virtualización de SO."
  },
  {
    id: "t2-17", t: "T2", k: "Teoría",
    q: "¿Cuál es un ejemplo de virtualización de recursos?",
    o: [
      "La memoria virtual con swap en Linux, que abstrae la memoria física disponible.",
      "La ejecución de una aplicación Java sobre la JVM, que oculta el sistema operativo.",
      "La creación de un snapshot de VMware para revertir cambios en una máquina virtual."
    ],
    c: 0,
    e: "La virtualización de recursos abstrae recursos individuales: memoria (swap), red (VPN), entrada/salida, etc. La memoria virtual con swap es el ejemplo clásico."
  },
  {
    id: "t2-18", t: "T2", k: "Teoría",
    q: "¿Cuáles son ejemplos de virtualización de aplicaciones?",
    o: [
      "Wine, la JVM y CLR, que encapsulan la aplicación y simulan su entorno habitual.",
      "VMware ESXi y Hyper-V, que virtualizan el hardware completo del servidor.",
      "Ceph y GlusterFS, que virtualizan el almacenamiento distribuido entre nodos."
    ],
    c: 0,
    e: "La virtualización de aplicaciones encapsula la aplicación para que crea que interactúa con el SO habitual. Ejemplos: Wine (aplicaciones Windows sobre Linux), JVM y CLR (.NET)."
  },
  {
    id: "t2-19", t: "T2", k: "Teoría",
    q: "¿Qué es la virtualización de escritorio?",
    o: [
      "El escritorio se ejecuta en un servidor remoto y el usuario accede desde varios dispositivos.",
      "Ejecutar el escritorio completo en cada cliente y sincronizar solo los perfiles de usuario.",
      "Un clúster de alta disponibilidad que replica el escritorio en dos CPDs distintos."
    ],
    c: 0,
    e: "La virtualización de escritorio abstrae el almacenamiento físico del entorno de escritorio. El escritorio está en un servidor central y se accede remotamente desde ordenadores, móviles, etc. Ejemplo: Citrix."
  },
  {
    id: "t2-20", t: "T2", k: "Teoría",
    q: "¿Cuál de las siguientes es una causa o razón para virtualizar?",
    o: [
      "Hardware de servidores infrautilizado, espacio agotado en el CPD y necesidad de eficiencia energética.",
      "Tener servidores físicos perfectamente utilizados y espacio de sobra en el CPD y en la sala.",
      "Reducir el número de aplicaciones y eliminar la administración de sistemas y de usuarios de la red completa."
    ],
    c: 0,
    e: "La virtualización responde a la infrautilización del hardware, la falta de espacio en los CPD, la demanda de eficiencia energética y los costes de administración."
  },
  {
    id: "t2-21", t: "T2", k: "Teoría",
    q: "¿Qué ventaja aporta la consolidación de servidores?",
    o: [
      "Reduce el número de servidores y aumenta el porcentaje de utilización.",
      "Aumenta el número de servidores para repartir mejor la carga.",
      "Elimina la necesidad de copias de seguridad y de monitorización."
    ],
    c: 0,
    e: "Consolidar consiste en reducir el número de servidores físicos aumentando su utilización. Con ello se simplifica la administración y se reduce el consumo y el coste."
  },
  {
    id: "t2-22", t: "T2", k: "Teoría",
    q: "¿Cómo mejora la virtualización la alta disponibilidad?",
    o: [
      "Si falla un sistema físico, las VM pueden migrarse o distribuirse en caliente a otros sistemas.",
      "Si falla el host, todas las VM se pierden inevitablemente porque dependen de él.",
      "Solo funciona con VM apagadas, porque el hipervisor no permite migraciones en caliente."
    ],
    c: 0,
    e: "La virtualización permite migrar o distribuir las VM en caliente a otros hosts si falla uno. También facilita mantener réplicas redundantes sin costes adicionales de hardware."
  },
  {
    id: "t2-23", t: "T2", k: "Teoría",
    q: "¿Por qué la virtualización mejora la eficiencia energética?",
    o: [
      "Porque al haber menos servidores físicos el consumo de potencia es menor.",
      "Porque cada VM consume más energía que un servidor físico dedicado.",
      "Porque elimina la refrigeración del CPD y el consumo de los servidores."
    ],
    c: 0,
    e: "Al consolidar varios servidores en menos hardware físico, el consumo de potencia y las necesidades de refrigeración disminuyen. Es una de las ventajas clave."
  },
  {
    id: "t2-24", t: "T2", k: "Teoría",
    q: "¿Cuál es el inconveniente de rendimiento de la virtualización?",
    o: [
      "Una VM nunca ofrece un rendimiento igual o superior al de ejecutarse directamente sobre el hardware.",
      "Una VM siempre rinde más que el hardware físico porque el hipervisor optimiza los recursos.",
      "El rendimiento es idéntico al físico porque el hipervisor no añade ninguna capa."
    ],
    c: 0,
    e: "La ejecución de un SO y aplicaciones en una VM nunca ofrece un rendimiento igual, y mucho menos superior, al de ejecutarse directamente sobre el servidor físico. Siempre hay una capa de virtualización."
  },
  {
    id: "t2-25", t: "T2", k: "Teoría",
    q: "¿Por qué se dice que el anfitrión es un punto único de fallo?",
    o: [
      "Porque una avería del servidor anfitrión puede tirar múltiples VM y sus servicios.",
      "Porque cada VM falla de forma independiente y no afecta a las demás del host.",
      "Porque el host no necesita monitorización ni redundancia si las VM están aisladas."
    ],
    c: 0,
    e: "Varias VM dependen del mismo host. Si el anfitrión falla, todas las VM que contiene pueden caer, con un impacto grande en la organización. Por eso se usan clústeres y alta disponibilidad."
  },
  {
    id: "t2-26", t: "T2", k: "Teoría",
    q: "¿Qué limitación impone el hardware en la virtualización?",
    o: [
      "No se puede utilizar hardware que no esté soportado por el hipervisor.",
      "Todo el hardware funciona siempre, porque el hipervisor emula cualquier dispositivo.",
      "Solo afecta a la configuración de red, nunca al almacenamiento ni a la GPU."
    ],
    c: 0,
    e: "El hipervisor debe soportar el hardware. Si un dispositivo no está soportado, no se puede utilizar en la VM. Es un inconveniente a tener en cuenta al elegir hardware."
  },
  {
    id: "t2-27", t: "T2", k: "Teoría",
    q: "¿Qué contiene el fichero .vmx de una máquina virtual VMware?",
    o: [
      "La configuración de la VM en texto plano, con dispositivos y opciones de arranque.",
      "El estado de la BIOS de la VM y la configuración de arranque del firmware virtual.",
      "El contenido del disco duro virtual y los snapshots que se han creado sobre él."
    ],
    c: 0,
    e: "El .vmx es el fichero raíz de configuración, en texto plano, y almacena la configuración de la máquina virtual. El estado de la BIOS está en .nvram."
  },
  {
    id: "t2-28", t: "T2", k: "Teoría",
    q: "¿Qué almacena el fichero .nvram?",
    o: [
      "El estado de la BIOS de la máquina virtual y sus parámetros de arranque.",
      "La configuración de red del host y las rutas estáticas que utiliza el hipervisor.",
      "Los metadatos de los snapshots y el estado completo de la máquina virtual."
    ],
    c: 0,
    e: "El .nvram almacena el estado de la BIOS de la VM y se sitúa en el mismo directorio que el .vmx. Los metadatos de snapshots están en .vmsd."
  },
  {
    id: "t2-29", t: "T2", k: "Teoría",
    q: "¿Qué es un fichero .vmdk?",
    o: [
      "Un disco virtual, que puede estar formado por uno o varios ficheros.",
      "La memoria RAM de la VM y su estado en el momento del snapshot.",
      "El log principal de la VM y los cambios pendientes de la BIOS."
    ],
    c: 0,
    e: "El .vmdk representa un disco virtual y puede estar compuesto por varios ficheros. En el .vmx se indica el primero y el resto apunta al siguiente."
  },
  {
    id: "t2-30", t: "T2", k: "Teoría",
    q: "¿Qué almacena el fichero .vmsd?",
    o: [
      "Información y metadatos sobre los snapshots creados en la máquina virtual.",
      "El estado completo de la VM en el momento exacto en que se creó el snapshot.",
      "El estado de la BIOS y la configuración del hardware virtual de la máquina."
    ],
    c: 0,
    e: "El .vmsd centraliza información y metadatos sobre los snapshots y se guarda en el directorio de trabajo. El estado de la VM en el snapshot está en .vmsn."
  },
  {
    id: "t2-31", t: "T2", k: "Teoría",
    q: "¿Qué caracteriza el nivel II de convergencia (infraestructura convergente)?",
    o: [
      "Añade una capa de virtualización a los sistemas integrados, manteniendo la arquitectura inferior.",
      "Elimina el hipervisor y las VM para ejecutar todo directamente sobre el hardware físico.",
      "Es la nube pública de AWS, que sustituye por completo al CPD tradicional de la empresa."
    ],
    c: 0,
    e: "El nivel II integra los tres componentes del nivel I (cómputo, almacenamiento y red) y añade una capa de virtualización, normalmente de un único fabricante. La arquitectura subyacente sigue siendo la misma."
  },
  {
    id: "t2-32", t: "T2", k: "Teoría",
    q: "¿Qué caracteriza el nivel III de convergencia (infraestructura hiperconvergente)?",
    o: [
      "Integra servidores, almacenamiento y red; elimina switches y controladoras y usa SDS local.",
      "Mantiene obligatoriamente una SAN centralizada y añade una capa de virtualización.",
      "Solo añade una capa de virtualización a un sistema integrado, sin cambiar el almacenamiento."
    ],
    c: 0,
    e: "La hiperconvergencia integra nativamente servidores, almacenamiento y red en un único dispositivo gestionado por software. Elimina switches y controladoras, usa SDS y ya no necesita SAN."
  },
  {
    id: "t2-33", t: "T2", k: "Teoría",
    q: "En una operación de escritura en un clúster hiperconvergente, ¿qué ocurre?",
    o: [
      "La VM escribe, el hipervisor redirige al controlador, este guarda en flash local y replica el dato.",
      "La VM escribe directamente en una SAN central y el controlador replica el dato en otro CPD.",
      "La escritura se guarda solo en el disco local del usuario y no se replica en ningún nodo."
    ],
    c: 0,
    e: "El hipervisor redirige la escritura al controlador, que la almacena en el disco flash local y replica el dato en múltiples nodos. Así se combina rendimiento local con tolerancia a fallos."
  },
  {
    id: "t2-34", t: "T2", k: "Teoría",
    q: "¿Cómo gestiona la hiperconvergencia las lecturas?",
    o: [
      "Los datos calientes se mantienen en flash; los fríos pasan a discos y vuelven si se solicitan.",
      "Todos los datos se guardan siempre en cintas y se leen de forma secuencial para ahorrar espacio en flash.",
      "Solo se lee de una SAN central y la flash se usa únicamente para las operaciones de escritura."
    ],
    c: 0,
    e: "La hiperconvergencia coloca los datos calientes en flash y mueve los fríos a discos mecánicos. Si un dato vuelve a solicitarse con frecuencia, se migra de nuevo a flash. Es una gestión automática por uso."
  },
  {
    id: "t2-35", t: "T2", k: "Teoría",
    q: "En AWS, ¿qué es una Availability Zone (AZ)?",
    o: [
      "Un grupo de CPDs dentro de una región, separados para evitar fallos comunes.",
      "Una región geográfica completa que agrupa varios países y sus centros de datos.",
      "Un único servidor físico dentro de un CPD que aloja varias máquinas virtuales."
    ],
    c: 0,
    e: "Una región es un área geográfica independiente. Una Availability Zone es un grupo de CPDs dentro de una región. Las aplicaciones suelen distribuirse entre varias AZ para ganar disponibilidad."
  },
  {
    id: "t2-36", t: "T2", k: "Teoría",
    q: "¿Qué servicio de AWS se utiliza para almacenamiento de objetos?",
    o: [
      "S3, porque es el servicio de almacenamiento de objetos de AWS.",
      "EC2, porque ofrece almacenamiento elástico de bloques para instancias.",
      "VPC, porque gestiona los objetos dentro de la red privada virtual."
    ],
    c: 0,
    e: "S3 (Simple Storage Service) es almacenamiento de objetos. EC2 es cómputo elástico y VPC es una red privada virtual."
  },
  {
    id: "t2-37", t: "T2", k: "Teoría",
    q: "¿Qué afirmación es correcta sobre los contenedores frente a las máquinas virtuales?",
    o: [
      "Los contenedores son procesos que comparten el kernel y no son mini máquinas virtuales.",
      "Los contenedores tienen su propio kernel y hardware simulado, como una VM ligera.",
      "Los contenedores siempre son más pesados porque incluyen un SO completo y sus controladores."
    ],
    c: 0,
    e: "Los contenedores no son mini VM: son procesos limitados a los recursos que pueden acceder, comparten el mismo kernel y se ejecutan directamente en la máquina host. Acaban cuando termina el proceso."
  },
  {
    id: "t2-38", t: "T2", k: "Caso práctico",
    q: "Una empresa necesita ejecutar varios servicios aislados, pero con la máxima densidad posible en el mismo hardware y sin el coste de un SO completo por servicio. ¿Qué encaja mejor?",
    o: [
      "Contenedores, porque comparten el kernel del host y ofrecen más densidad que las VM.",
      "Máquinas virtuales con hipervisor de tipo 1, porque siempre son más ligeras que un contenedor.",
      "Máquinas virtuales con hipervisor de tipo 2, porque comparten el kernel del host."
    ],
    c: 0,
    e: "Los contenedores comparten kernel y son ligeros, lo que permite alta densidad. Las VM ofrecen mayor aislamiento pero incluyen un SO completo y son más pesadas."
  }
];
