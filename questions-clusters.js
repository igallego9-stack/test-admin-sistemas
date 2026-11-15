/* Resumen - Tipos de clústers y tecnologías asociadas */
const BANK_CLUSTERS = [
  {
    id: "cl-01", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué es un clúster?",
    o: [
      "Un conjunto de computadoras interconectadas, llamadas nodos, que trabajan como una única unidad cohesionada para lograr objetivos específicos.",
      "Un servidor de gran capacidad con varios procesadores y memoria compartida que ejecuta un único sistema operativo.",
      "Una red de área local de equipos independientes que comparten recursos sin un objetivo común."
    ],
    c: 0,
    e: "El clúster se basa en computación distribuida: varios nodos interconectados trabajan como una sola unidad. Supera las limitaciones de los sistemas monolíticos cuando estos no alcanzan velocidad, volumen o continuidad."
  },
  {
    id: "cl-02", t: "CLUSTERS", k: "Teoría",
    q: "¿Cuáles son los cinco tipos de clúster del resumen?",
    o: [
      "HPC, HTC, HA, LB y almacenamiento distribuido.",
      "HPC, HTC, HA, LB y computación en la nube.",
      "HPC, HTC, HA, LB y bases de datos replicadas."
    ],
    c: 0,
    e: "El documento distingue cinco arquitecturas: HPC (alto rendimiento), HTC (alto throughput), HA (alta disponibilidad), LB (balanceo de carga) y almacenamiento distribuido."
  },
  {
    id: "cl-03", t: "CLUSTERS", k: "Teoría",
    q: "¿Cuál es la métrica de optimización de un clúster HPC?",
    o: [
      "La latencia o tiempo de solución (Time to Solution).",
      "El throughput o volumen de tareas completadas por unidad de tiempo.",
      "El RTO y el RPO del sistema de almacenamiento."
    ],
    c: 0,
    e: "HPC busca minimizar el Time to Solution (TTS), es decir, el tiempo que tarda en resolverse el problema. La latencia de comunicación es crítica."
  },
  {
    id: "cl-04", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué tipo de acoplamiento tienen las tareas en un clúster HPC?",
    o: [
      "Fuerte: la evolución de un nodo depende de la información de sus vecinos y deben sincronizarse.",
      "Débil: cada tarea es independiente y no requiere sincronización durante la ejecución.",
      "Medio: solo se sincronizan al final del trabajo, no durante las iteraciones."
    ],
    c: 0,
    e: "En HPC las tareas son altamente interdependientes (acoplamiento fuerte). Cualquier retraso significativo en la comunicación paraliza el clúster porque los nodos esperan la sincronización."
  },
  {
    id: "cl-05", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué tecnologías son típicas de un clúster HPC?",
    o: [
      "MPI, InfiniBand u OmniPath, y schedulers como Slurm o PBS.",
      "HTCondor, checkpointing y Grid Engine.",
      "Pacemaker, Corosync y fencing."
    ],
    c: 0,
    e: "HPC usa MPI como estándar de comunicación, redes de ultrabaja latencia como InfiniBand u OmniPath, y gestores de cola como Slurm o PBS/Torque. También puede usar GPU o FPGA."
  },
  {
    id: "cl-06", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué supone llevar HPC a la nube?",
    o: [
      "Externaliza el hardware y aporta elasticidad, pero no elimina la necesidad de personalizar y optimizar el entorno de ejecución.",
      "Elimina la necesidad de optimizar el SO y el software, porque el proveedor lo entrega todo configurado.",
      "Obliga a renunciar a la red de baja latencia, por lo que HPC no se puede ejecutar en la nube."
    ],
    c: 0,
    e: "HPC en la nube reduce la necesidad de construir CPD propios y ofrece aprovisionamiento dinámico, pero el usuario debe personalizar el SO y el software para cada carga. Se externaliza el hardware, no la complejidad de configuración."
  },
  {
    id: "cl-07", t: "CLUSTERS", k: "Teoría",
    q: "¿Cuál es la métrica de optimización de un clúster HTC?",
    o: [
      "El throughput: volumen de tareas completadas con éxito por unidad de tiempo.",
      "La latencia o tiempo de solución de una única tarea.",
      "El RTO y el RPO del servicio."
    ],
    c: 0,
    e: "HTC maximiza el número total de tareas finalizadas por unidad de tiempo. No le importa tanto la velocidad de una tarea individual como la eficiencia global del sistema de colas."
  },
  {
    id: "cl-08", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué tipo de tareas encajan en un clúster HTC?",
    o: [
      "Miles o millones de tareas completamente independientes, sin comunicación ni sincronización.",
      "Tareas fuertemente acopladas que intercambian datos en cada iteración.",
      "Una única tarea monolítica que debe ejecutarse en un solo nodo."
    ],
    c: 0,
    e: "HTC se emplea cuando el problema se divide en muchas tareas independientes. La comunicación de baja latencia no es un factor limitante, por lo que se pueden usar recursos heterogéneos y oportunistas."
  },
  {
    id: "cl-09", t: "CLUSTERS", k: "Teoría",
    q: "¿Cuál es la tecnología líder para gestionar cargas HTC?",
    o: ["HTCondor (HTCSS)", "Slurm con MPI", "Pacemaker con Corosync"],
    c: 0,
    e: "HTCondor (HTCSS) está diseñado para automatizar y gestionar cargas de alto throughput, incluso con recursos dispersos. Slurm con MPI se orienta a HPC y Pacemaker con Corosync a alta disponibilidad."
  },
  {
    id: "cl-10", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué papel tienen el checkpointing y la migración de trabajos en HTC?",
    o: [
      "Permiten detener y reanudar tareas en distintos nodos de forma transparente, gestionando fallos o reasignaciones.",
      "Sincronizan tareas fuertemente acopladas para que avancen al mismo ritmo.",
      "Reparten el tráfico HTTP entre los nodos backend."
    ],
    c: 0,
    e: "El checkpointing guarda el estado de una tarea y la migración la mueve a otro nodo. Así se gestionan fallos y reasignaciones sin que el usuario lo note, algo clave en entornos oportunistas."
  },
  {
    id: "cl-11", t: "CLUSTERS", k: "Teoría",
    q: "¿Cuál es la distinción fundamental entre HPC y HTC?",
    o: [
      "HPC optimiza latencia con tareas fuertemente acopladas; HTC optimiza throughput con tareas débilmente acopladas.",
      "HPC usa contenedores y HTC usa máquinas virtuales como base de ejecución.",
      "HTC exige redes de ultrabaja latencia y HPC se conforma con un scheduler de colas."
    ],
    c: 0,
    e: "La clave es latencia frente a throughput. Si las tareas dependen unas de otras, la red de baja latencia es imprescindible (HPC). Si son independientes, un buen scheduler de colas es suficiente (HTC)."
  },
  {
    id: "cl-12", t: "CLUSTERS", k: "Teoría",
    q: "¿Cuál es el objetivo primordial de un clúster HA?",
    o: [
      "Asegurar la continuidad operativa y mitigar el fallo del sistema primario mediante failover automático.",
      "Maximizar el número de tareas científicas completadas por hora.",
      "Distribuir el tráfico web entre servidores backend para escalar horizontalmente."
    ],
    c: 0,
    e: "HA busca continuidad y disponibilidad. Su diseño persigue RTO y RPO cercanos a cero mediante redundancia y conmutación por error automática y transparente."
  },
  {
    id: "cl-13", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué es el failover?",
    o: [
      "El cambio automático y transparente a un sistema de respaldo cuando el primario falla.",
      "La vuelta controlada al nodo primario tras repararlo y verificarlo.",
      "La distribución de tráfico entre todos los nodos activos."
    ],
    c: 0,
    e: "Failover es la conmutación automática al sistema de respaldo cuando falla el primario. Failback es el proceso inverso: devolver los servicios al primario una vez reparado y verificado."
  },
  {
    id: "cl-14", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué diferencia hay entre un clúster HA activo-pasivo y uno activo-activo?",
    o: [
      "Activo-pasivo tiene nodos en espera y es más simple; activo-activo usa todos los nodos, mejora el rendimiento pero complica la concurrencia y consistencia.",
      "Activo-pasivo usa todos los nodos y activo-activo mantiene uno en espera.",
      "Ambos usan todos los nodos; la única diferencia es el protocolo de heartbeat."
    ],
    c: 0,
    e: "En activo-pasivo uno o más nodos están en standby: es más simple y el failover es limpio, pero se desaprovechan recursos. En activo-activo todos trabajan: mayor throughput, pero mayor complejidad de concurrencia y consistencia."
  },
  {
    id: "cl-15", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué función tiene Pacemaker en un clúster HA?",
    o: [
      "Es el gestor de recursos de alto nivel que decide la salud de los servicios y automatiza el failover.",
      "Proporciona la capa de comunicación y heartbeat entre nodos.",
      "Balancea el tráfico HTTP entrante entre los nodos backend."
    ],
    c: 0,
    e: "Pacemaker es el gestor de recursos: utiliza la información de Corosync para saber si los servicios están sanos y mueve los recursos a un nodo superviviente cuando es necesario."
  },
  {
    id: "cl-16", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué aporta Corosync en un clúster HA?",
    o: [
      "La capa de pertenencia y comunicación (heartbeat) que permite detectar el estado de los nodos.",
      "La gestión de recursos y el failover de servicios.",
      "El almacenamiento distribuido de objetos compatible con S3."
    ],
    c: 0,
    e: "Corosync proporciona la pertenencia al clúster y el heartbeat. Los nodos se monitorizan entre sí y esa información es la base para detectar fallos; Pacemaker actúa sobre ella."
  },
  {
    id: "cl-17", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué es el failback?",
    o: [
      "Devolver los servicios y la carga al nodo primario original tras el failover, una vez reparado y verificado.",
      "El cambio automático al nodo de respaldo cuando el primario falla.",
      "La sincronización de datos entre el nodo primario y el de respaldo antes de la conmutación."
    ],
    c: 0,
    e: "Failback es la vuelta controlada al nodo primario después de repararlo y verificarlo. No debe confundirse con failover, que es la ida al respaldo."
  },
  {
    id: "cl-18", t: "CLUSTERS", k: "Teoría",
    q: "¿Cuál es la función principal de un clúster LB (Load Balancing)?",
    o: [
      "Distribuir el tráfico de red entrante entre varios servidores backend para mejorar capacidad, escalabilidad y disponibilidad.",
      "Garantizar RTO y RPO cercanos a cero mediante failover automático.",
      "Ejecutar tareas científicas fuertemente acopladas con MPI."
    ],
    c: 0,
    e: "LB reparte las solicitudes entrantes entre nodos backend. Aporta escalabilidad horizontal y redundancia: si un nodo falla, el tráfico se redirige a los restantes."
  },
  {
    id: "cl-19", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué es el algoritmo Weighted Round-Robin?",
    o: [
      "Un algoritmo estático que asigna pesos a los servidores según su capacidad o prioridad para que los más potentes reciban más tráfico.",
      "Un algoritmo dinámico que consulta la carga actual antes de enrutar cada solicitud.",
      "Un protocolo de heartbeat que detecta nodos caídos y activa el failover."
    ],
    c: 0,
    e: "Weighted Round-Robin es estático: reparte por turnos ponderados según capacidad o prioridad. Los algoritmos dinámicos, en cambio, consideran la carga y las conexiones activas antes de enrutar."
  },
  {
    id: "cl-20", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué caracteriza a los algoritmos dinámicos de balanceo de carga?",
    o: [
      "Consideran el estado actual de los servidores, como la carga o el número de conexiones activas, antes de enrutar.",
      "Asignan siempre el mismo tráfico a cada servidor según su capacidad.",
      "Solo funcionan con almacenamiento Ceph, porque necesitan conocer la latencia del disco."
    ],
    c: 0,
    e: "Los algoritmos dinámicos adaptan la decisión al estado actual de los servidores (carga, conexiones activas). Los estáticos usan una asignación fija por capacidad o prioridad."
  },
  {
    id: "cl-21", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué herramientas se citan para balanceo de carga?",
    o: ["HAProxy y NGINX / NGINX Plus", "Pacemaker y Corosync", "Ceph y GlusterFS"],
    c: 0,
    e: "HAProxy está especializado en balanceo y proxying. NGINX/NGINX Plus ofrece un conjunto más amplio, incluido servidor web, y NGINX Plus añade distribución dinámica avanzada."
  },
  {
    id: "cl-22", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué interfaces ofrece Ceph?",
    o: [
      "Almacenamiento de objetos compatible con S3, de bloques (RBD) y sistema de archivos distribuido (CephFS).",
      "Solo almacenamiento de bloques RBD; los objetos y archivos requieren GlusterFS.",
      "Solo sistema de archivos CephFS; el bloque y el objeto son funciones de Pacemaker."
    ],
    c: 0,
    e: "Ceph es una plataforma SDS unificada: objetos compatibles con S3, bloques con RBD y sistema de archivos distribuido con CephFS. Destaca por su robustez y arquitectura convergente."
  },
  {
    id: "cl-23", t: "CLUSTERS", k: "Teoría",
    q: "¿Cuál es la principal limitación de GlusterFS?",
    o: [
      "Su rendimiento de metadatos es bajo con un número elevado de archivos, por lo que no es ideal para cargas transaccionales.",
      "Su rendimiento cae con archivos grandes porque replica cada bloque a través de la red.",
      "No puede montarse por NFS ni SMB, solo mediante acceso nativo."
    ],
    c: 0,
    e: "GlusterFS destaca por simplicidad y escalabilidad (hasta 16 Exabytes), pero su rendimiento de metadatos es bajo con muchos archivos. No es adecuado para cargas transaccionales ni bloqueos estrictos."
  },
  {
    id: "cl-24", t: "CLUSTERS", k: "Teoría",
    q: "¿Cómo se elige entre Ceph y GlusterFS según el perfil de E/S?",
    o: [
      "GlusterFS para alto throughput de archivos grandes; Ceph para sensibilidad a latencia de metadatos y operaciones transaccionales.",
      "Siempre Ceph, porque su capacidad garantiza rendimiento en cualquier tipo de carga.",
      "Siempre GlusterFS, porque su arquitectura sin metadatos es mejor para transacciones."
    ],
    c: 0,
    e: "La capacidad no garantiza rendimiento para todas las cargas. GlusterFS va bien con archivos grandes y alto throughput; Ceph o soluciones de bloques dedicadas son mejores cuando la latencia de metadatos y las transacciones importan."
  },
  {
    id: "cl-25", t: "CLUSTERS", k: "Caso práctico",
    q: "Un centro de investigación simula el clima: cada celda depende de las vecinas y los nodos deben sincronizarse constantemente. ¿Qué clúster es adecuado?",
    o: [
      "HPC",
      "HTC con HTCondor, porque las celdas se reparten como tareas independientes.",
      "LB con HAProxy, porque sincroniza las peticiones entre los nodos."
    ],
    c: 0,
    e: "Es un problema fuertemente acoplado: la evolución de un nodo depende de sus vecinos y la comunicación es crítica. Necesita HPC con red de ultrabaja latencia y MPI."
  },
  {
    id: "cl-26", t: "CLUSTERS", k: "Caso práctico",
    q: "Un estudio de animación debe renderizar miles de fotogramas independientes con presupuesto limitado. ¿Qué enfoque encaja mejor?",
    o: [
      "HTC",
      "HPC con MPI, porque cada fotograma requiere sincronización entre nodos.",
      "HA con Pacemaker, porque el renderizado debe continuar si falla un nodo."
    ],
    c: 0,
    e: "Los fotogramas son tareas independientes: no necesitan sincronización constante. HTC maximiza el número de tareas terminadas y puede usar recursos heterogéneos y oportunistas, más económicos."
  },
  {
    id: "cl-27", t: "CLUSTERS", k: "Caso práctico",
    q: "Una empresa tiene una base de datos transaccional que debe estar disponible 24/7 y no puede perder datos. ¿Qué clúster prioriza?",
    o: [
      "HA",
      "HTC con checkpointing, porque así no se pierden transacciones.",
      "LB con Weighted Round-Robin, porque reparte las consultas y evita perder datos."
    ],
    c: 0,
    e: "Es un servicio de misión crítica: se busca continuidad con failover automático y RTO/RPO cercanos a cero. HA es la arquitectura adecuada; LB reparte tráfico, no garantiza la consistencia de la base de datos."
  },
  {
    id: "cl-28", t: "CLUSTERS", k: "Caso práctico",
    q: "Una web recibe miles de solicitudes por segundo y necesita añadir servidores según la demanda sin cortar el servicio. ¿Qué clúster es adecuado?",
    o: [
      "LB",
      "HPC con Slurm, porque añade nodos de cómputo según la demanda.",
      "Almacenamiento distribuido con Ceph, porque replica las sesiones entre servidores."
    ],
    c: 0,
    e: "LB distribuye el tráfico entrante entre nodos backend, permite escalabilidad horizontal y redundancia. Si un nodo falla, el tráfico se redirige a los restantes."
  },
  {
    id: "cl-29", t: "CLUSTERS", k: "Caso práctico",
    q: "Una empresa necesita petabytes de datos con interfaces de bloque, objeto y archivo, y tolerancia a fallos. ¿Qué solución encaja?",
    o: [
      "Ceph",
      "HAProxy, porque distribuye los datos entre los nodos backend.",
      "Pacemaker, porque conmuta el almacenamiento entre nodos activo y pasivo."
    ],
    c: 0,
    e: "Ceph es almacenamiento definido por software que ofrece bloque (RBD), objeto (S3) y archivo (CephFS), con distribución y replicación entre nodos. HAProxy y Pacemaker no son almacenamiento."
  },
  {
    id: "cl-30", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué es la escalabilidad vertical?",
    o: [
      "Aumentar la capacidad añadiendo más recursos (CPU, RAM, almacenamiento) a un único nodo.",
      "Aumentar la capacidad agregando más nodos al clúster.",
      "Distribuir el tráfico entre varios servidores para aprovechar su capacidad."
    ],
    c: 0,
    e: "La escalabilidad vertical crece dentro de un nodo añadiendo recursos, y está limitada por el hardware máximo conectable. La horizontal añade más nodos o máquinas al clúster."
  }
];
