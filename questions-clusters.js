/* Resumen - Tipos de clústers y tecnologías asociadas */
const BANK_CLUSTERS = [
  {
    id: "cl-01", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué es un clúster?",
    o: [
      "Un conjunto de computadoras interconectadas, llamadas nodos, que trabajan como una única unidad.",
      "Un servidor de gran capacidad con varios procesadores y memoria compartida que ejecuta un único SO.",
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
    id: "cl-03", t: "CLUSTERS", s: "HPC vs HTC", k: "Teoría",
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
    id: "cl-04", t: "CLUSTERS", s: "HPC vs HTC", k: "Teoría",
    q: "¿Qué tipo de acoplamiento tienen las tareas en un clúster HPC?",
    o: [
      "Fuerte: la evolución de un nodo depende de sus vecinos y todos deben sincronizarse.",
      "Débil: cada tarea es independiente y no requiere sincronización durante la ejecución.",
      "Medio: solo se sincronizan al final del trabajo, no durante las iteraciones."
    ],
    c: 0,
    e: "En HPC las tareas son altamente interdependientes (acoplamiento fuerte). Cualquier retraso significativo en la comunicación paraliza el clúster porque los nodos esperan la sincronización."
  },
  {
    id: "cl-05", t: "CLUSTERS", s: "HPC vs HTC", k: "Teoría",
    q: "¿Qué tecnologías son típicas de un clúster HPC?",
    o: [
      "MPI, InfiniBand u OmniPath, y schedulers como Slurm o PBS.",
      "HTCondor, checkpointing y Grid Engine, orientados a tareas independientes.",
      "Pacemaker, Corosync y fencing, orientados a la alta disponibilidad del servicio."
    ],
    c: 0,
    e: "HPC usa MPI como estándar de comunicación, redes de ultrabaja latencia como InfiniBand u OmniPath, y gestores de cola como Slurm o PBS/Torque. También puede usar GPU o FPGA."
  },
  {
    id: "cl-06", t: "CLUSTERS", s: "HPC vs HTC", k: "Teoría",
    q: "¿Qué supone llevar HPC a la nube?",
    o: [
      "Externaliza el hardware y da elasticidad, pero no elimina la necesidad de optimizar el entorno.",
      "Elimina la necesidad de optimizar el SO y el software, porque el proveedor lo entrega todo configurado.",
      "Obliga a renunciar a la red de baja latencia, por lo que HPC no se puede ejecutar en la nube."
    ],
    c: 0,
    e: "HPC en la nube reduce la necesidad de construir CPD propios y ofrece aprovisionamiento dinámico, pero el usuario debe personalizar el SO y el software para cada carga. Se externaliza el hardware, no la complejidad de configuración."
  },
  {
    id: "cl-07", t: "CLUSTERS", s: "HPC vs HTC", k: "Teoría",
    q: "¿Cuál es la métrica de optimización de un clúster HTC?",
    o: [
      "El throughput: volumen de tareas completadas con éxito por unidad de tiempo.",
      "La latencia o tiempo de solución de una única tarea fuertemente acoplada.",
      "El RTO y el RPO del servicio, medidos en minutos y horas de indisponibilidad."
    ],
    c: 0,
    e: "HTC maximiza el número total de tareas finalizadas por unidad de tiempo. No le importa tanto la velocidad de una tarea individual como la eficiencia global del sistema de colas."
  },
  {
    id: "cl-08", t: "CLUSTERS", s: "HPC vs HTC", k: "Teoría",
    q: "¿Qué tipo de tareas encajan en un clúster HTC?",
    o: [
      "Miles o millones de tareas independientes, sin comunicación ni sincronización entre ellas.",
      "Tareas fuertemente acopladas que intercambian datos en cada iteración y exigen MPI.",
      "Una única tarea monolítica que debe ejecutarse en un solo nodo y no se puede dividir."
    ],
    c: 0,
    e: "HTC se emplea cuando el problema se divide en muchas tareas independientes. La comunicación de baja latencia no es un factor limitante, por lo que se pueden usar recursos heterogéneos y oportunistas."
  },
  {
    id: "cl-09", t: "CLUSTERS", s: "HPC vs HTC", k: "Teoría",
    q: "¿Cuál es la tecnología líder para gestionar cargas HTC?",
    o: ["HTCondor (HTCSS)", "Slurm con MPI", "Pacemaker con Corosync"],
    c: 0,
    e: "HTCondor (HTCSS) está diseñado para automatizar y gestionar cargas de alto throughput, incluso con recursos dispersos. Slurm con MPI se orienta a HPC y Pacemaker con Corosync a alta disponibilidad."
  },
  {
    id: "cl-10", t: "CLUSTERS", s: "HPC vs HTC", k: "Teoría",
    q: "¿Qué papel tienen el checkpointing y la migración de trabajos en HTC?",
    o: [
      "Detener y reanudar tareas en distintos nodos de forma transparente ante fallos o reasignaciones.",
      "Sincronizan tareas fuertemente acopladas para que todos los nodos avancen exactamente al mismo ritmo.",
      "Reparten el tráfico HTTP entre los nodos backend del balanceador de carga y comprueban su salud."
    ],
    c: 0,
    e: "El checkpointing guarda el estado de una tarea y la migración la mueve a otro nodo. Así se gestionan fallos y reasignaciones sin que el usuario lo note, algo clave en entornos oportunistas."
  },
  {
    id: "cl-11", t: "CLUSTERS", s: "HPC vs HTC", k: "Teoría",
    q: "¿Cuál es la distinción fundamental entre HPC y HTC?",
    o: [
      "HPC prioriza latencia con tareas acopladas; HTC prioriza throughput con tareas sueltas.",
      "HPC se apoya en contenedores y HTC en máquinas virtuales como base de ejecución de cada tarea.",
      "HTC exige redes de ultrabaja latencia y HPC se conforma con un sencillo scheduler de colas."
    ],
    c: 0,
    e: "La clave es latencia frente a throughput. Si las tareas dependen unas de otras, la red de baja latencia es imprescindible (HPC). Si son independientes, un buen scheduler de colas es suficiente (HTC)."
  },
  {
    id: "cl-12", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Cuál es el objetivo primordial de un clúster HA?",
    o: [
      "Mantener la continuidad del servicio y mitigar el fallo del primario con failover automático.",
      "Maximizar el número de tareas científicas completadas por hora y el rendimiento global del clúster.",
      "Distribuir el tráfico web entre servidores backend para escalar horizontalmente la aplicación."
    ],
    c: 0,
    e: "HA busca continuidad y disponibilidad. Su diseño persigue RTO y RPO cercanos a cero mediante redundancia y conmutación por error automática y transparente."
  },
  {
    id: "cl-13", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué es el failover?",
    o: [
      "El cambio automático al sistema de respaldo cuando el primario falla.",
      "La vuelta controlada al nodo primario después de repararlo y verificar su estado.",
      "La distribución de tráfico entre todos los nodos activos del clúster."
    ],
    c: 0,
    e: "Failover es la conmutación automática al sistema de respaldo cuando falla el primario. Failback es el proceso inverso: devolver los servicios al primario una vez reparado y verificado."
  },
  {
    id: "cl-14", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué diferencia hay entre un clúster HA activo-pasivo y uno activo-activo?",
    o: [
      "Activo-pasivo mantiene nodos en espera; activo-activo usa todos y complica la concurrencia.",
      "Activo-pasivo usa todos los nodos y activo-activo mantiene uno en espera para el failover.",
      "Ambos usan todos los nodos; la única diferencia es el protocolo de heartbeat utilizado."
    ],
    c: 0,
    e: "En activo-pasivo uno o más nodos están en standby: es más simple y el failover es limpio, pero se desaprovechan recursos. En activo-activo todos trabajan: mayor throughput, pero mayor complejidad de concurrencia y consistencia."
  },
  {
    id: "cl-15", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué función tiene Pacemaker en un clúster HA?",
    o: [
      "Es el gestor de recursos que decide la salud de los servicios y automatiza el failover.",
      "Proporciona la capa de comunicación y heartbeat entre todos los nodos del clúster.",
      "Balancea el tráfico HTTP entrante entre los nodos backend de la aplicación."
    ],
    c: 0,
    e: "Pacemaker es el gestor de recursos: utiliza la información de Corosync para saber si los servicios están sanos y mueve los recursos a un nodo superviviente cuando es necesario."
  },
  {
    id: "cl-16", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué aporta Corosync en un clúster HA?",
    o: [
      "La capa de pertenencia y comunicación (heartbeat) que permite detectar el estado de los nodos.",
      "La gestión de recursos y el failover automático de los servicios entre todos los nodos del clúster.",
      "El almacenamiento distribuido de objetos compatible con S3 y con CephFS."
    ],
    c: 0,
    e: "Corosync proporciona la pertenencia al clúster y el heartbeat. Los nodos se monitorizan entre sí y esa información es la base para detectar fallos; Pacemaker actúa sobre ella."
  },
  {
    id: "cl-17", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué es el failback?",
    o: [
      "Devolver los servicios al nodo primario tras repararlo y verificar su estado.",
      "El cambio automático al nodo de respaldo en cuanto el primario deja de responder.",
      "La sincronización de datos entre el primario y el respaldo antes de conmutar."
    ],
    c: 0,
    e: "Failback es la vuelta controlada al nodo primario después de repararlo y verificarlo. No debe confundirse con failover, que es la ida al respaldo."
  },
  {
    id: "cl-18", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Cuál es la función principal de un clúster LB (Load Balancing)?",
    o: [
      "Repartir el tráfico entrante entre servidores backend para escalar y ganar disponibilidad.",
      "Garantizar RTO y RPO cercanos a cero mediante failover automático entre nodos.",
      "Ejecutar tareas científicas fuertemente acopladas con MPI y una red de ultrabaja latencia dedicada."
    ],
    c: 0,
    e: "LB reparte las solicitudes entrantes entre nodos backend. Aporta escalabilidad horizontal y redundancia: si un nodo falla, el tráfico se redirige a los restantes."
  },
  {
    id: "cl-19", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué es el algoritmo Weighted Round-Robin?",
    o: [
      "Un algoritmo estático que reparte por turnos según pesos fijados por la capacidad de cada servidor.",
      "Un algoritmo dinámico que mide la carga y las conexiones activas de cada servidor antes de enrutar.",
      "Un protocolo de heartbeat que detecta nodos caídos y activa el failover automáticamente."
    ],
    c: 0,
    e: "Weighted Round-Robin es estático: reparte por turnos ponderados según capacidad o prioridad. Los algoritmos dinámicos, en cambio, consideran la carga y las conexiones activas antes de enrutar."
  },
  {
    id: "cl-20", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué caracteriza a los algoritmos dinámicos de balanceo de carga?",
    o: [
      "Tienen en cuenta el estado actual de los servidores, como su carga o conexiones activas.",
      "Asignan siempre el mismo tráfico a cada servidor según la capacidad configurada de fábrica.",
      "Solo funcionan con almacenamiento Ceph, porque necesitan conocer la latencia del disco."
    ],
    c: 0,
    e: "Los algoritmos dinámicos adaptan la decisión al estado actual de los servidores (carga, conexiones activas). Los estáticos usan una asignación fija por capacidad o prioridad."
  },
  {
    id: "cl-21", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué herramientas se citan para balanceo de carga?",
    o: ["HAProxy y NGINX / NGINX Plus", "Pacemaker y Corosync", "Ceph y GlusterFS"],
    c: 0,
    e: "HAProxy está especializado en balanceo y proxying. NGINX/NGINX Plus ofrece un conjunto más amplio, incluido servidor web, y NGINX Plus añade distribución dinámica avanzada."
  },
  {
    id: "cl-22", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué interfaces ofrece Ceph?",
    o: [
      "Almacenamiento de objetos compatible con S3, de bloques RBD y archivo distribuido CephFS.",
      "Solo almacenamiento de bloques RBD; los objetos y archivos requieren GlusterFS o NFS.",
      "Solo sistema de archivos CephFS; el bloque y el objeto son funciones de Pacemaker y HAProxy."
    ],
    c: 0,
    e: "Ceph es una plataforma SDS unificada: objetos compatibles con S3, bloques con RBD y sistema de archivos distribuido con CephFS. Destaca por su robustez y arquitectura convergente."
  },
  {
    id: "cl-23", t: "CLUSTERS", k: "Teoría",
    q: "¿Cuál es la principal limitación de GlusterFS?",
    o: [
      "Bajo rendimiento de metadatos con muchos archivos, poco adecuado para cargas transaccionales.",
      "Su rendimiento cae con archivos grandes porque replica cada bloque a través de la red del clúster.",
      "No puede montarse por NFS ni SMB, solo mediante acceso nativo desde cada cliente."
    ],
    c: 0,
    e: "GlusterFS destaca por simplicidad y escalabilidad (hasta 16 Exabytes), pero su rendimiento de metadatos es bajo con muchos archivos. No es adecuado para cargas transaccionales ni bloqueos estrictos."
  },
  {
    id: "cl-24", t: "CLUSTERS", k: "Teoría",
    q: "¿Cómo se elige entre Ceph y GlusterFS según el perfil de E/S?",
    o: [
      "GlusterFS para archivos grandes; Ceph para latencia de metadatos y transacciones.",
      "Siempre Ceph, porque su capacidad garantiza rendimiento en cualquier tipo de carga.",
      "Siempre GlusterFS, porque su arquitectura sin metadatos es mejor para transacciones."
    ],
    c: 0,
    e: "La capacidad no garantiza rendimiento para todas las cargas. GlusterFS va bien con archivos grandes y alto throughput; Ceph o soluciones de bloques dedicadas son mejores cuando la latencia de metadatos y las transacciones importan."
  },
  {
    id: "cl-25", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Un centro de investigación simula el clima: cada celda depende de las vecinas y los nodos deben sincronizarse constantemente. ¿Qué clúster es adecuado?",
    o: [
      "HPC, porque las celdas dependen entre sí y necesitan una red de ultrabaja latencia.",
      "HTC con HTCondor, porque las celdas se reparten como tareas completamente independientes.",
      "LB con HAProxy, porque distribuye y sincroniza las peticiones entre todos los nodos."
    ],
    c: 0,
    e: "Es un problema fuertemente acoplado: la evolución de un nodo depende de sus vecinos y la comunicación es crítica. Necesita HPC con red de ultrabaja latencia y MPI."
  },
  {
    id: "cl-26", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Un estudio de animación debe renderizar miles de fotogramas independientes con presupuesto limitado. ¿Qué enfoque encaja mejor?",
    o: [
      "HTC, porque los fotogramas son tareas independientes y se maximiza el throughput.",
      "HPC con MPI, porque cada fotograma requiere sincronización constante entre nodos.",
      "HA con Pacemaker, porque el renderizado debe continuar si falla un nodo."
    ],
    c: 0,
    e: "Los fotogramas son tareas independientes: no necesitan sincronización constante. HTC maximiza el número de tareas terminadas y puede usar recursos heterogéneos y oportunistas, más económicos."
  },
  {
    id: "cl-27", t: "CLUSTERS", s: "HA y LB", k: "Caso práctico",
    q: "Una empresa tiene una base de datos transaccional que debe estar disponible 24/7 y no puede perder datos. ¿Qué clúster prioriza?",
    o: [
      "HA, porque busca continuidad con failover automático y RTO y RPO cercanos a cero.",
      "HTC con checkpointing, porque así no se pierden transacciones al migrar las tareas.",
      "LB con Weighted Round-Robin, porque reparte las consultas y evita perder datos."
    ],
    c: 0,
    e: "Es un servicio de misión crítica: se busca continuidad con failover automático y RTO/RPO cercanos a cero. HA es la arquitectura adecuada; LB reparte tráfico, no garantiza la consistencia de la base de datos."
  },
  {
    id: "cl-28", t: "CLUSTERS", s: "HA y LB", k: "Caso práctico",
    q: "Una web recibe miles de solicitudes por segundo y necesita añadir servidores según la demanda sin cortar el servicio. ¿Qué clúster es adecuado?",
    o: [
      "LB, porque reparte el tráfico entre servidores y permite escalar horizontalmente.",
      "HPC con Slurm, porque añade nodos de cómputo según la demanda de la aplicación.",
      "Almacenamiento distribuido con Ceph, porque replica las sesiones entre servidores."
    ],
    c: 0,
    e: "LB distribuye el tráfico entrante entre nodos backend, permite escalabilidad horizontal y redundancia. Si un nodo falla, el tráfico se redirige a los restantes."
  },
  {
    id: "cl-29", t: "CLUSTERS", k: "Caso práctico",
    q: "Una empresa necesita petabytes de datos con interfaces de bloque, objeto y archivo, y tolerancia a fallos. ¿Qué solución encaja?",
    o: [
      "Ceph, porque ofrece bloque, objeto y archivo con replicación y tolerancia a fallos.",
      "HAProxy, porque distribuye los datos y el tráfico entre los nodos backend del clúster.",
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
      "Aumentar la capacidad agregando más nodos al clúster para repartir la carga.",
      "Distribuir el tráfico entre varios servidores para aprovechar mejor su capacidad."
    ],
    c: 0,
    e: "La escalabilidad vertical crece dentro de un nodo añadiendo recursos, y está limitada por el hardware máximo conectable. La horizontal añade más nodos o máquinas al clúster."
  },
  {
    id: "cl-31", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Un laboratorio ejecuta millones de simulaciones de Monte Carlo independientes y solo agrega los resultados al final. ¿Qué arquitectura prioriza?",
    o: [
      "HTC, porque cada simulación es independiente y prima completar muchas por hora.",
      "HPC, porque cada simulación exige sincronizar sus nodos en cada iteración del cálculo.",
      "HA, porque el laboratorio no puede permitirse perder ninguna simulación aunque sea lenta."
    ],
    c: 0,
    e: "Las simulaciones de Monte Carlo de este caso son tareas independientes: no comparten estado ni se sincronizan. HTC maximiza el throughput, es decir, cuántas terminan por unidad de tiempo. HPC se reserva para cálculos fuertemente acoplados y HA para mantener un servicio disponible."
  },
  {
    id: "cl-32", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Un equipo de aerodinámica divide un ala en celdas y cada nodo intercambia datos con sus vecinos en cada paso temporal. ¿Qué necesita?",
    o: [
      "HPC con MPI y una red de baja latencia, porque las celdas están fuertemente acopladas.",
      "HTC con HTCondor, porque cada celda se puede procesar de forma independiente y sin esperar.",
      "LB con HAProxy, porque reparte las peticiones entre los nodos del clúster y equilibra la carga."
    ],
    c: 0,
    e: "La malla está particionada, pero las celdas vecinas intercambian datos en cada iteración. Ese acoplamiento fuerte exige HPC, MPI y una red de ultrabaja latencia; HTC y LB no resuelven la sincronización."
  },
  {
    id: "cl-33", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Una editorial digitaliza dos millones de páginas y aplica OCR a cada página por separado. ¿Qué enfoque encaja mejor?",
    o: [
      "HTC, porque cada página es una tarea independiente y se busca completar el lote cuanto antes.",
      "HPC, porque el OCR de cada página requiere comunicación constante entre todos los nodos.",
      "HA, porque si falla una página el servicio completo debe conmutar a otro nodo."
    ],
    c: 0,
    e: "Cada página se puede procesar sin comunicación con las demás y el objetivo es terminar el lote. Es un caso típico de HTC: muchas tareas independientes, recursos heterogéneos y reintentos si alguna falla."
  },
  {
    id: "cl-34", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Un grupo entrena una red neuronal con sincronización de gradientes entre 64 GPU en cada paso. ¿Qué arquitectura necesita?",
    o: [
      "HPC, porque la latencia de comunicación es crítica y todos los nodos deben sincronizarse.",
      "HTC, porque cada GPU puede entrenar una red distinta y agregar los modelos al final.",
      "LB, porque reparte las peticiones de entrenamiento entre las GPU disponibles del clúster."
    ],
    c: 0,
    e: "El entrenamiento síncrono intercambia gradientes en cada paso: si una GPU llega tarde, todas esperan. Es un patrón HPC con comunicación colectiva y red de baja latencia. HTC encajaría si cada modelo fuese independiente."
  },
  {
    id: "cl-35", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Un servicio de genómica alinea millones de lecturas cortas y cada lectura se procesa por separado. ¿Qué prioriza?",
    o: [
      "HTC, porque hay muchas tareas independientes y lo importante es el número de lecturas por hora.",
      "HPC, porque cada lectura necesita una red de ultrabaja latencia y sincronización con MPI.",
      "HA, porque el servicio debe seguir disponible aunque falle un nodo y se pierdan lecturas."
    ],
    c: 0,
    e: "El alineamiento de lecturas cortas se divide en millones de trabajos independientes; interesa el throughput y tolerar fallos por tarea. HTC con un buen scheduler y checkpointing es el enfoque habitual."
  },
  {
    id: "cl-36", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Una petrolera simula ondas sísmicas en un modelo 3D y los nodos intercambian fronteras en cada paso. ¿Qué arquitectura es adecuada?",
    o: [
      "HPC con MPI, porque la simulación está fuertemente acoplada y depende de la comunicación.",
      "HTC con HTCondor, porque cada punto del modelo se calcula sin comunicarse con los demás.",
      "LB con NGINX, porque distribuye las consultas sísmicas entre los servidores backend."
    ],
    c: 0,
    e: "La propagación de ondas requiere intercambiar las fronteras de cada subdominio en cada paso temporal. Es un cálculo fuertemente acoplado, propio de HPC con MPI y red de baja latencia."
  },
  {
    id: "cl-37", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Un estudio convierte 50.000 vídeos a varios formatos y cada conversión es independiente y reintentable. ¿Qué enfoque encaja?",
    o: [
      "HTC, porque cada vídeo es una tarea independiente y se maximiza el throughput.",
      "HPC, porque todas las conversiones deben sincronizarse en cada fotograma.",
      "HA, porque el estudio necesita failover automático entre los nodos de conversión."
    ],
    c: 0,
    e: "Cada conversión es independiente y se puede reintentar sin afectar a las demás. HTC prioriza completar el lote y aprovechar recursos heterogéneos; HPC solo tendría sentido si las tareas se sincronizaran."
  },
  {
    id: "cl-38", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Un centro meteorológico quiere reducir el tiempo que tarda en resolverse una simulación con malla particionada y MPI. ¿Qué métrica prioriza?",
    o: [
      "El Time to Solution de HPC, porque importa la latencia de la tarea acoplada.",
      "El throughput de HTC, porque importa completar muchas simulaciones por hora.",
      "El RTO y el RPO de HA, porque importa recuperar el servicio tras un fallo."
    ],
    c: 0,
    e: "Si el objetivo es que una simulación acoplada termine antes, la métrica es el Time to Solution (TTS) de HPC. El throughput de HTC mide tareas terminadas por hora, no la latencia de una única tarea."
  },
  {
    id: "cl-39", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Una empresa procesa cada noche millones de facturas independientes, algunas fallan y se reintentan. ¿Qué prioriza?",
    o: [
      "HTC con checkpointing, porque busca completar el lote y tolerar fallos por tarea.",
      "HPC con MPI, porque todas las facturas deben sincronizarse en cada paso.",
      "HA con failover, porque cada factura necesita un nodo de respaldo dedicado."
    ],
    c: 0,
    e: "Las facturas son tareas independientes y el objetivo es terminar el lote antes del amanecer. HTC con checkpointing y reintentos tolera fallos sin reiniciar todo el proceso; HPC no aporta nada aquí."
  },
  {
    id: "cl-40", t: "CLUSTERS", s: "HPC vs HTC", k: "Caso práctico",
    q: "Una universidad aprovecha ordenadores de aulas cuando están libres para ejecutar prácticas independientes. ¿Qué modelo encaja?",
    o: [
      "HTC oportunista con HTCondor, porque usa recursos dispersos y tareas independientes.",
      "HPC dedicado con InfiniBand, porque necesita una red de ultrabaja latencia.",
      "HA activo-pasivo, porque los equipos de las aulas deben conmutar entre sí."
    ],
    c: 0,
    e: "Los equipos están dispersos, no son dedicados y las prácticas son independientes. HTC con HTCondor y checkpointing aprovecha esos recursos oportunistas; HPC exige un clúster dedicado y una red de baja latencia."
  },
  {
    id: "cl-41", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué es un nodo dentro de un clúster?",
    o: [
      "Un equipo independiente que aporta sus recursos al conjunto.",
      "Un proceso del sistema que reparte las tareas entre los discos.",
      "Un conmutador de red que conecta los servidores del clúster."
    ],
    c: 0,
    e: "Cada nodo es una máquina independiente, física o virtual, con su propio sistema operativo y recursos. El clúster los coordina para que trabajen como una sola unidad."
  },
  {
    id: "cl-42", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué es el almacenamiento distribuido?",
    o: [
      "Datos repartidos entre nodos, con replicación y acceso como una sola unidad.",
      "Un único disco externo conectado por fibra a todos los servidores del clúster.",
      "Una copia de seguridad en cinta guardada fuera de las instalaciones del CPD."
    ],
    c: 0,
    e: "El almacenamiento distribuido reparte los datos entre varios nodos y los replica, de modo que el conjunto se presenta como un único sistema de almacenamiento. No es un disco externo ni una copia de seguridad."
  },
  {
    id: "cl-43", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué es un punto único de fallo (SPOF)?",
    o: [
      "Un componente cuya caída deja sin servicio a todo el sistema.",
      "Un nodo que ejecuta tareas de cómputo y almacena los resultados.",
      "Un algoritmo que reparte las peticiones entre varios servidores."
    ],
    c: 0,
    e: "Un SPOF es cualquier componente sin redundancia cuya caída interrumpe el servicio: un único balanceador, un solo enlace, un solo CPD o una única fuente de alimentación."
  },
  {
    id: "cl-44", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué ventaja tiene la escalabilidad horizontal frente a la vertical?",
    o: [
      "Añade nodos sin depender del límite físico de un único servidor.",
      "Añade CPU y RAM a un nodo hasta el máximo que admite la placa.",
      "Reduce el número de servidores necesarios para atender la carga."
    ],
    c: 0,
    e: "La escala horizontal añade nodos y no está limitada por la placa de un servidor; la vertical añade CPU o RAM dentro de un nodo y tiene un techo físico."
  },
  {
    id: "cl-45", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué aporta la elasticidad en un clúster?",
    o: [
      "Ajustar los recursos a la demanda, añadiendo o quitando nodos.",
      "Mantener los recursos fijos para evitar picos de facturación.",
      "Duplicar el hardware para que nunca haya cambios de capacidad."
    ],
    c: 0,
    e: "La elasticidad permite crecer o decrecer según la demanda. Es una ventaja del aprovisionamiento dinámico, sobre todo en la nube, frente a mantener recursos fijos."
  },
  {
    id: "cl-46", t: "CLUSTERS", k: "Caso práctico",
    q: "Una empresa agota la CPU y la RAM de su único servidor y ya no admite más ampliación. ¿Qué opción es más razonable?",
    o: [
      "Escalar horizontalmente y añadir nodos que repartan la carga de trabajo.",
      "Escalar verticalmente con un servidor mayor, aunque el límite se repita.",
      "Mantener el servidor y añadir un balanceador que genere más capacidad."
    ],
    c: 0,
    e: "Si el servidor ha agotado su capacidad y ya no admite más ampliación, la salida es añadir nodos y repartir la carga. Un balanceador por sí solo no genera capacidad."
  },
  {
    id: "cl-47", t: "CLUSTERS", k: "Caso práctico",
    q: "Una empresa tiene discos locales infrautilizados en muchos servidores y quiere sumar su capacidad. ¿Qué solución encaja?",
    o: [
      "Almacenamiento distribuido, que agrega y replica el espacio de los nodos.",
      "Un balanceador de carga, que reparte los archivos entre los discos libres.",
      "Un clúster HA, que conmuta los discos al nodo pasivo cuando hace falta."
    ],
    c: 0,
    e: "El almacenamiento distribuido agrega el espacio de varios nodos, replica los datos y los presenta como una sola unidad. Un balanceador y HA no convierten discos locales en almacenamiento compartido."
  },
  {
    id: "cl-48", t: "CLUSTERS", k: "Teoría",
    q: "¿Qué significa que el clúster sea transparente para el usuario?",
    o: [
      "Que accede al servicio sin conocer la topología ni el nodo que lo atiende.",
      "Que puede ver y administrar cada nodo por separado sin restricciones.",
      "Que el clúster replica sus datos en todos los equipos del usuario final."
    ],
    c: 0,
    e: "La transparencia significa que el usuario final usa el servicio sin conocer la topología ni el nodo que lo atiende; la administración sigue siendo posible para el equipo técnico."
  },
  {
    id: "cl-49", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué mide el RTO (Recovery Time Objective)?",
    o: [
      "El tiempo máximo aceptable para restaurar el servicio tras un fallo.",
      "La cantidad máxima de datos que el servicio acepta perder en un fallo.",
      "El número de nodos en espera que debe tener configurado el clúster HA."
    ],
    c: 0,
    e: "El RTO es el tiempo objetivo de recuperación: cuánto puede tardar el servicio en volver a estar operativo tras un fallo. El RPO mide los datos que se acepta perder."
  },
  {
    id: "cl-50", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué mide el RPO (Recovery Point Objective)?",
    o: [
      "La cantidad máxima de datos que se acepta perder tras un fallo.",
      "El tiempo máximo que tarda el servicio en volver a estar activo.",
      "El porcentaje de tráfico que el balanceador envía al nodo pasivo."
    ],
    c: 0,
    e: "El RPO es el punto de recuperación objetivo: cuántos datos puede perder el servicio. Un RPO de cero exige replicación síncrona o copias sin pérdida."
  },
  {
    id: "cl-51", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué es el split-brain en un clúster HA?",
    o: [
      "Dos nodos creen ser el primario y acceden a la vez a los mismos recursos.",
      "Un nodo secundario se apaga y el primario absorbe toda la carga.",
      "El heartbeat detecta un fallo y activa el failover de forma ordenada."
    ],
    c: 0,
    e: "En split-brain ambos nodos se creen primarios y pueden escribir a la vez sobre los mismos recursos, lo que provoca corrupción. Se evita con quórum y fencing."
  },
  {
    id: "cl-52", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Para qué sirve el quórum en un clúster HA?",
    o: [
      "Para que solo la parte con mayoría de votos pueda actuar como primaria.",
      "Para repartir el tráfico entre todos los nodos activos del clúster.",
      "Para sincronizar los datos entre el nodo primario y el de respaldo."
    ],
    c: 0,
    e: "El quórum exige mayoría de votos para que una partición del clúster pueda operar como primaria. Sin mayoría, el nodo se detiene o se aísla para evitar el split-brain."
  },
  {
    id: "cl-53", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué es el fencing (STONITH) en alta disponibilidad?",
    o: [
      "Aislar o apagar el nodo caído para que no acceda a los recursos compartidos.",
      "Repartir las conexiones entre los nodos sanos cuando uno deja de responder.",
      "Replicar el almacenamiento del primario en el secundario antes del failover."
    ],
    c: 0,
    e: "Fencing o STONITH aísla el nodo que no responde, por red o apagándolo, para garantizar que no siga usando el almacenamiento compartido mientras el secundario toma el relevo."
  },
  {
    id: "cl-54", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué diferencia hay entre alta disponibilidad y tolerancia a fallos?",
    o: [
      "HA conmuta con una breve interrupción; la tolerancia mantiene la ejecución sin parar.",
      "HA mantiene la ejecución sin parar; la tolerancia conmuta con una breve interrupción.",
      "Ambas son idénticas: solo cambia el nombre comercial que usa cada fabricante."
    ],
    c: 0,
    e: "La alta disponibilidad conmuta al respaldo y puede haber una interrupción breve. La tolerancia a fallos mantiene la ejecución sin interrupción, normalmente con hardware redundante y sincronizado."
  },
  {
    id: "cl-55", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué es una VIP (IP virtual) en un clúster HA?",
    o: [
      "Una dirección flotante que se mueve al nodo activo durante el failover.",
      "Una dirección fija asignada a cada nodo para administrarlo por separado.",
      "Un rango de direcciones que el balanceador reparte entre los clientes."
    ],
    c: 0,
    e: "La VIP es una dirección flotante asociada al servicio, no al nodo. Durante el failover se mueve al nuevo primario y los clientes siguen usando la misma dirección."
  },
  {
    id: "cl-56", t: "CLUSTERS", s: "HA y LB", k: "Caso práctico",
    q: "Dos nodos HA pierden el heartbeat entre sí, pero ambos siguen activos y escriben en el mismo disco. ¿Qué riesgo aparece?",
    o: [
      "Split-brain: ambos se creen primarios y pueden corromper los datos.",
      "Failback: el nodo secundario devuelve los servicios al primario.",
      "Round-Robin: el balanceador reparte las escrituras entre los dos nodos."
    ],
    c: 0,
    e: "Si los dos nodos siguen activos y comparten disco sin quórum, se produce split-brain. El fencing y el quórum evitan que ambos escriban a la vez."
  },
  {
    id: "cl-57", t: "CLUSTERS", s: "HA y LB", k: "Caso práctico",
    q: "Un servicio exige recuperarse en menos de 5 minutos y no perder ninguna transacción. ¿Qué diseño encaja?",
    o: [
      "HA con failover automático y replicación síncrona de los datos.",
      "HTC con checkpointing y reintentos de las tareas transaccionales.",
      "LB con Round-Robin y varias copias del servicio en cada nodo."
    ],
    c: 0,
    e: "Un RTO de 5 minutos y un RPO de cero encajan con HA y replicación síncrona: el secundario tiene los mismos datos y puede asumir el servicio con conmutación automática."
  },
  {
    id: "cl-58", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué es el heartbeat en un clúster HA?",
    o: [
      "Una señal periódica entre nodos para detectar si el otro sigue vivo.",
      "Un algoritmo que reparte las peticiones según la carga de cada nodo.",
      "Una copia síncrona de los datos que se envía al nodo de respaldo."
    ],
    c: 0,
    e: "El heartbeat es la señal periódica que intercambian los nodos para comprobar que siguen vivos. Si deja de llegar, el clúster puede declarar el fallo y activar el failover."
  },
  {
    id: "cl-59", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué diferencia hay entre un balanceo de capa 4 y uno de capa 7?",
    o: [
      "El de capa 4 reparte por IP y puerto; el de capa 7 decide por contenido HTTP.",
      "El de capa 4 decide por contenido HTTP; el de capa 7 reparte por IP y puerto.",
      "El de capa 4 solo funciona con UDP; el de capa 7 solo funciona con TCP."
    ],
    c: 0,
    e: "El balanceo de capa 4 trabaja con IP, puerto y protocolo de transporte; el de capa 7 inspecciona la petición HTTP y puede enrutar por URL, cabecera o cookie."
  },
  {
    id: "cl-60", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué son las sesiones persistentes (sticky sessions) en un balanceador?",
    o: [
      "Enviar las peticiones de un mismo cliente siempre al mismo servidor backend.",
      "Guardar la sesión en el balanceador y borrarla cuando el cliente se desconecta.",
      "Repartir cada petición del cliente entre todos los servidores por turnos."
    ],
    c: 0,
    e: "Las sticky sessions fijan al cliente a un backend concreto para que mantenga su sesión. Si el backend cae, esa sesión se pierde salvo que se comparta o replique."
  },
  {
    id: "cl-61", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué es un health check en un balanceador de carga?",
    o: [
      "Una comprobación periódica para saber si cada backend puede atender tráfico.",
      "Un registro que guarda el tiempo de respuesta de cada petición atendida.",
      "Una copia de la configuración del balanceador en el nodo de respaldo."
    ],
    c: 0,
    e: "El health check comprueba periódicamente si el backend responde y, si falla, el balanceador deja de enviarle tráfico hasta que se recupere."
  },
  {
    id: "cl-62", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Cómo reparte el algoritmo Round-Robin las peticiones?",
    o: [
      "Por turnos equitativos entre todos los servidores disponibles.",
      "Siempre al servidor con menos conexiones activas en ese momento.",
      "Según el peso o la capacidad configurada para cada servidor."
    ],
    c: 0,
    e: "Round-Robin reparte por turnos equitativos. Weighted Round-Robin usa pesos y Least Connections elige el servidor con menos conexiones activas."
  },
  {
    id: "cl-63", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Qué algoritmo envía cada nueva petición al servidor con menos conexiones activas?",
    o: ["Least Connections", "Weighted Round-Robin", "Source IP Hash"],
    c: 0,
    e: "Least Connections es un algoritmo dinámico: consulta el estado actual y elige el backend con menos conexiones. Weighted Round-Robin reparte por pesos fijos y Source IP Hash mantiene al cliente en el mismo servidor."
  },
  {
    id: "cl-64", t: "CLUSTERS", s: "HA y LB", k: "Teoría",
    q: "¿Cuál es la diferencia principal entre un clúster LB y uno HA?",
    o: [
      "LB reparte carga entre nodos activos; HA conmuta al respaldo si el primario falla.",
      "LB conmuta al nodo de respaldo; HA reparte la carga entre todos los nodos.",
      "Ambos solo se diferencian en el protocolo de heartbeat que utiliza cada nodo."
    ],
    c: 0,
    e: "LB distribuye tráfico entre nodos activos para escalar; HA mantiene un primario y conmuta al respaldo cuando falla. Son objetivos distintos y pueden combinarse."
  },
  {
    id: "cl-65", t: "CLUSTERS", s: "HA y LB", k: "Caso práctico",
    q: "Una aplicación guarda la sesión del usuario en la memoria de cada backend y hay varios servidores. ¿Qué necesitas configurar?",
    o: [
      "Persistencia de sesión para que cada usuario vuelva a su mismo backend.",
      "Round-Robin puro para que las peticiones cambien de servidor en cada clic.",
      "Fencing para apagar el backend que pierde la sesión del usuario."
    ],
    c: 0,
    e: "Si la sesión vive en la memoria de cada backend, el balanceador debe mantener al usuario en el mismo servidor o compartir la sesión entre todos. Round-Robin puro rompería la sesión."
  },
  {
    id: "cl-66", t: "CLUSTERS", s: "HA y LB", k: "Caso práctico",
    q: "La web de una empresa usa un único balanceador y este se convierte en un punto único de fallo. ¿Qué solución lo evita?",
    o: [
      "Desplegar dos balanceadores redundantes con una IP virtual compartida.",
      "Añadir más servidores backend para repartir mejor la carga entre ellos.",
      "Activar el checkpointing para reanudar las sesiones en otro servidor."
    ],
    c: 0,
    e: "Un único balanceador es un SPOF. La solución es redundarlo, normalmente con dos nodos y una VIP compartida, para que el fallo de uno no corte el servicio."
  }
];
