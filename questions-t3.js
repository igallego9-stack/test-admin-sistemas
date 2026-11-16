/* Tema 3 - Gestión de dominios, Active Directory, GPO y PowerShell */
const BANK_T3 = [
  {
    id: "t3-01", t: "T3", k: "Teoría",
    q: "¿Qué es un grupo de trabajo en terminología Microsoft?",
    o: [
      "Una agrupación lógica de computadoras en red que comparten recursos de igual a igual, con una base de datos local de seguridad en cada equipo.",
      "Una agrupación de equipos que comparten un servidor de autenticación central y un espacio de nombres DNS común, pero sin directivas de grupo.",
      "Un conjunto de equipos que replican entre sí una copia parcial del directorio y se organizan en unidades organizativas."
    ],
    c: 0,
    e: "En un grupo de trabajo cada equipo mantiene su propia base de datos local de usuarios y permisos. La administración es descentralizada: no hay un servidor central que autentique a todos."
  },
  {
    id: "t3-02", t: "T3", k: "Teoría",
    q: "¿Cuál es una ventaja de un grupo de trabajo?",
    o: [
      "No requiere Windows Server, es sencillo de diseñar e implementar y sirve para pocos equipos cercanos.",
      "Ofrece autenticación única entre todos los equipos y aplica las mismas directivas a todos los usuarios.",
      "Incluye tolerancia a fallos y replicación automática de las cuentas locales entre todos los equipos."
    ],
    c: 0,
    e: "El grupo de trabajo no necesita Windows Server y es sencillo. Es adecuado para redes pequeñas con pocos equipos cercanos; en redes medianas o grandes la gestión se vuelve tediosa."
  },
  {
    id: "t3-03", t: "T3", k: "Teoría",
    q: "¿Cuál es el principal problema de los usuarios locales en un grupo de trabajo?",
    o: [
      "La sincronización: un cambio de contraseña debe repetirse en todas las máquinas del grupo.",
      "Que las cuentas locales no se pueden reutilizar en otro equipo y obligan a crear un dominio.",
      "Que cada equipo limita a un único usuario local y obliga a compartir una cuenta por departamento."
    ],
    c: 0,
    e: "Cada equipo tiene su propia base de datos. Un mismo usuario puede tener claves distintas en equipos distintos, y dar de alta o cambiar una contraseña obliga a repetirlo en cada máquina."
  },
  {
    id: "t3-04", t: "T3", k: "Teoría",
    q: "¿Qué es un servicio de directorio?",
    o: [
      "Una base de datos jerárquica y distribuida, optimizada para lectura y administración centralizada.",
      "Un protocolo de autenticación basado en tiques que valida credenciales sin transmitir contraseñas.",
      "Una base de datos relacional normalizada que garantiza transacciones ACID sobre los objetos de la red."
    ],
    c: 0,
    e: "El servicio de directorio almacena información de todos los objetos de la red (usuarios, grupos, equipos, recursos compartidos), distribuida jerárquicamente y optimizada para búsquedas y lectura."
  },
  {
    id: "t3-05", t: "T3", k: "Teoría",
    q: "¿Cuál de los siguientes NO es un servicio de directorio?",
    o: [
      "MySQL, porque es un sistema gestor de bases de datos relacional y no un directorio.",
      "Novell eDirectory, porque es un servicio de directorio jerárquico para redes corporativas.",
      "Oracle Internet Directory, porque es un servicio de directorio basado en estándares LDAP."
    ],
    c: 0,
    e: "Active Directory (Microsoft), OpenLDAP (Linux), Novell eDirectory y Oracle Internet Directory son servicios de directorio. MySQL es un sistema gestor de bases de datos relacional."
  },
  {
    id: "t3-06", t: "T3", k: "Teoría",
    q: "¿Qué es Active Directory?",
    o: [
      "La implementación de Microsoft de un servicio de directorio, basada en X.500, que usa objetos y GPO.",
      "El servicio de nombres de Microsoft basado en DNS que resuelve nombres de equipos y sus direcciones IP.",
      "La base de datos local de cuentas y grupos de un servidor Windows, almacenada en el archivo SAM."
    ],
    c: 0,
    e: "AD es el nombre que Microsoft da a su implementación de servicio de directorio en una red distribuida. Permite representar la infraestructura mediante objetos y controlar los recursos mediante GPOs; se basa en estándares X.500."
  },
  {
    id: "t3-07", t: "T3", k: "Teoría",
    q: "¿Qué es un objeto en Active Directory?",
    o: [
      "Un recurso de red con nombre y atributos; es el bloque de construcción básico del AD.",
      "Un contenedor jerárquico que solo puede albergar otros contenedores y nunca un recurso.",
      "Una entrada del esquema que define clases y atributos, sin representar un recurso concreto."
    ],
    c: 0,
    e: "Un objeto es un recurso de red con nombre y atributos que representa elementos de la infraestructura. Los hay hoja (usuarios, grupos, impresoras) y contenedores (OU, dominios, árboles, bosques)."
  },
  {
    id: "t3-08", t: "T3", k: "Teoría",
    q: "¿Cuáles de los siguientes son objetos contenedores del AD?",
    o: [
      "Unidad organizativa, dominio, árbol y bosque, que agrupan y estructuran otros objetos.",
      "Usuario, grupo, equipo e impresora, porque agrupan permisos y recursos compartidos.",
      "Solo las unidades organizativas y las GPO; el dominio y el bosque son particiones."
    ],
    c: 0,
    e: "Los objetos hoja son usuarios, grupos, impresoras, etc. Los contenedores son unidades organizativas, dominios, árboles y bosques, que agrupan y estructuran otros objetos."
  },
  {
    id: "t3-09", t: "T3", k: "Teoría",
    q: "¿Qué es un dominio en Active Directory?",
    o: [
      "La estructura principal del AD y una frontera de seguridad o administrativa: todos sus usuarios funcionan bajo la misma política.",
      "Una subdivisión puramente organizativa del bosque que no establece frontera de seguridad y hereda siempre las directivas del bosque.",
      "Un conjunto de árboles con espacios de nombres independientes que comparten un único esquema."
    ],
    c: 0,
    e: "El dominio es la estructura principal y una frontera de seguridad y administración. Las directivas, derechos administrativos y ACL no se comparten automáticamente entre dominios. También se le llama partición de un AD."
  },
  {
    id: "t3-10", t: "T3", k: "Teoría",
    q: "¿Cómo se identifica un dominio y cómo se forma el nombre completo de sus equipos?",
    o: [
      "Con un nombre en formato DNS; el equipo añade ese sufijo, por ejemplo equipo1.asidominio.com.",
      "Con un nombre NetBIOS de hasta 15 caracteres; el sufijo DNS solo se usa para las relaciones de confianza.",
      "Con el SID del dominio, que se añade al nombre del equipo para formar su nombre completo."
    ],
    c: 0,
    e: "Cada dominio se identifica con un nombre DNS y ese nombre es el sufijo principal de los equipos miembros. Si equipo1 pertenece a asidominio.com, su nombre completo será equipo1.asidominio.com."
  },
  {
    id: "t3-11", t: "T3", k: "Teoría",
    q: "¿Qué función tiene un controlador de dominio (CD)?",
    o: [
      "Autenticar a los usuarios que quieren acceder al dominio y mantener una réplica del directorio.",
      "Almacenar únicamente las GPO del dominio y distribuirlas a los equipos, sin intervenir en la autenticación.",
      "Resolver los nombres DNS del dominio y reenviar las consultas a los servidores de confianza."
    ],
    c: 0,
    e: "El CD es un servidor con una réplica del directorio y el servicio de Directorio Activo. Autentica las credenciales de los usuarios y replica la base de datos con los demás controladores del dominio."
  },
  {
    id: "t3-12", t: "T3", k: "Teoría",
    q: "¿Cuántos objetos puede contener aproximadamente un dominio?",
    o: [
      "Hasta un millón de objetos, aunque el límite práctico depende del hardware.",
      "Un máximo de 100.000 objetos, límite que se amplía creando un subdominio.",
      "Un millón de objetos por bosque, que se reparten entre todos los dominios."
    ],
    c: 0,
    e: "El tema indica que un dominio puede contener un número elevado de objetos, hasta un millón. El administrador del dominio tiene derechos absolutos dentro de él."
  },
  {
    id: "t3-13", t: "T3", k: "Teoría",
    q: "¿Qué es un árbol en Active Directory?",
    o: [
      "Un conjunto de dominios que comparten un espacio de nombres contiguo y derivan del mismo dominio raíz.",
      "Un conjunto de dominios con espacios de nombres independientes unidos por confianzas entre sus raíces.",
      "Una agrupación de unidades organizativas dentro de un mismo dominio que comparten directivas."
    ],
    c: 0,
    e: "Un árbol agrupa dominios con un espacio de nombres contiguo que descienden del mismo dominio raíz. El primer dominio es la raíz y los que se añaden son secundarios."
  },
  {
    id: "t3-14", t: "T3", k: "Teoría",
    q: "¿Qué tipo de relación de confianza se establece entre un dominio y su subdominio en un árbol?",
    o: [
      "Bidireccional y transitiva, porque ambos dominios confían mutuamente y heredan la confianza.",
      "Unidireccional y transitiva, del dominio raíz hacia el subdominio y sus descendientes.",
      "Bidireccional y no transitiva, porque solo afecta a esos dos dominios concretos."
    ],
    c: 0,
    e: "Un dominio y su subdominio establecen automáticamente una relación de confianza en los dos sentidos (A confía en B y B en A) y se aplica la propiedad transitiva."
  },
  {
    id: "t3-15", t: "T3", k: "Teoría",
    q: "¿Qué es un bosque en Active Directory?",
    o: [
      "Uno o más árboles con nombres independientes, conectados por confianzas entre sus dominios raíz.",
      "Un conjunto de dominios con un espacio de nombres contiguo que descienden de un mismo raíz.",
      "Una agrupación de OU y GPO dentro de un dominio, sin relación con los nombres DNS."
    ],
    c: 0,
    e: "El bosque agrupa árboles distintos que comparten relaciones de confianza bidireccionales y transitivas entre sus raíces. Permite mantener nombres independientes, por ejemplo tras una fusión de empresas."
  },
  {
    id: "t3-16", t: "T3", k: "Teoría",
    q: "¿Qué limitación importante tienen los bosques?",
    o: [
      "No se pueden mover dominios entre bosques, por lo que la estructura debe planificarse bien.",
      "No pueden contener más de un árbol de dominio, por lo que una fusión obliga a crear otro bosque.",
      "No admiten confianzas externas con dominios de otros bosques, solo confianzas internas."
    ],
    c: 0,
    e: "Los dominios no se pueden mover entre bosques. Por eso hay que planificar bien la estructura; el bosque es una frontera importante de cara a la organización."
  },
  {
    id: "t3-17", t: "T3", k: "Teoría",
    q: "¿Para qué sirve una unidad organizativa (OU)?",
    o: [
      "Para organizar objetos dentro de un dominio, aplicar GPOs de forma eficiente y delegar el control administrativo.",
      "Para crear una frontera de seguridad independiente del dominio, con su propia base de datos de cuentas y directivas.",
      "Para agrupar varios dominios con espacios de nombres distintos y establecer confianzas entre ellos."
    ],
    c: 0,
    e: "La OU organiza objetos dentro de un dominio. Una buena estructura de OUs permite aplicar políticas de grupo eficientemente y delegar la administración a nivel de OU. Su estructura no es permanente."
  },
  {
    id: "t3-18", t: "T3", k: "Teoría",
    q: "¿Qué recomienda Microsoft para el diseño lógico del AD?",
    o: [
      "Crear preferentemente un único dominio e incluir dentro diferentes OUs para organizar los objetos.",
      "Crear un subdominio por cada departamento para aislar sus directivas y delegar la administración.",
      "Crear un bosque independiente por cada unidad de negocio, aunque compartan el mismo espacio de nombres."
    ],
    c: 0,
    e: "La recomendación es intentar crear árboles con un único dominio e incluir dentro las diferentes OUs. Los subdominios se reservan para necesidades justificadas."
  },
  {
    id: "t3-19", t: "T3", k: "Teoría",
    q: "¿En cuál de estos casos se justifica crear un subdominio?",
    o: [
      "Conexiones WAN lentas, seguridad, fronteras administrativas, crecimiento o ámbito internacional.",
      "Cuando se quiere delegar la administración de una OU sin crear una nueva frontera de seguridad.",
      "Cuando el dominio supera el millón de objetos, ya que un dominio no puede crecer más."
    ],
    c: 0,
    e: "Se valora crear subdominios cuando hay WAN lentas que limitan la replicación, necesidades de seguridad, distintas fronteras administrativas, crecimiento futuro o alcance internacional. Microsoft aconseja poca profundidad: máximo 3, preferible 2, óptimo 1."
  },
  {
    id: "t3-20", t: "T3", k: "Caso práctico",
    q: "¿Cuál sería el nombre completo (DN) de Gema Escrivá en la OU Usuarios del dominio actividad.ejemploSOR.com?",
    o: [
      "CN=Gema Escrivá, OU=Usuarios, DC=actividad, DC=ejemploSOR, DC=com",
      "OU=Usuarios, CN=Gema Escrivá, DC=actividad, DC=ejemploSOR, DC=com",
      "CN=Gema Escrivá, DC=Usuarios, OU=actividad, OU=ejemploSOR, OU=com"
    ],
    c: 0,
    e: "El nombre completo o distinguido (DN) incluye la ruta jerárquica en orden: CN del objeto, OU contenedora y los DC del dominio. Invertir CN y OU o usar OU para los componentes del dominio no produce un DN válido."
  },
  {
    id: "t3-21", t: "T3", k: "Teoría",
    q: "¿Qué es el nombre completo relativo (RDN) de un objeto?",
    o: [
      "La ruta del objeto sin mencionar su dominio ni la unidad organizativa contenedora.",
      "El nombre del objeto junto con su OU contenedora, pero sin los DC del dominio.",
      "El nombre de inicio de sesión del usuario en formato usuario@dominio."
    ],
    c: 0,
    e: "El RDN define la ruta del objeto sin dominio ni OU contenedora. Pueden existir varios objetos con el mismo RDN dentro de un bosque si están en contenedores distintos."
  },
  {
    id: "t3-22", t: "T3", k: "Teoría",
    q: "¿Qué es el nombre principal de usuario (UPN)?",
    o: [
      "El nombre con el que el usuario se registra, por ejemplo rperez@ejemplo.com.",
      "La ruta jerárquica completa del objeto, incluidos CN, OU y DC.",
      "El identificador de seguridad que asigna el dominio y cambia al mover la cuenta."
    ],
    c: 0,
    e: "El UPN es el nombre de inicio de sesión del usuario, con formato usuario@dominio. El usuario necesita saber en qué dominio está su cuenta porque al autenticarse debe indicar ambas cosas."
  },
  {
    id: "t3-23", t: "T3", k: "Teoría",
    q: "¿Qué diferencia hay entre el SID y el GUID?",
    o: [
      "El SID depende del dominio y cambia si el objeto se mueve a otro dominio; el GUID nunca cambia.",
      "El SID es único global y nunca cambia; el GUID depende del dominio y se regenera al mover el objeto.",
      "Ambos son únicos globales, pero el SID cambia al renombrar el objeto y el GUID al cambiar de OU."
    ],
    c: 0,
    e: "El SID es un identificador de seguridad que depende del dominio, por lo que cambia si el objeto se mueve a otro dominio. El GUID es único global y nunca cambia."
  },
  {
    id: "t3-24", t: "T3", k: "Teoría",
    q: "¿Para qué se usa el nombre NetBIOS en Active Directory?",
    o: [
      "Para mantener compatibilidad hacia atrás con Windows NT y aplicaciones antiguas.",
      "Como nombre principal para las consultas DNS de los clientes modernos.",
      "Como identificador único global que se asigna al dominio al crear el bosque."
    ],
    c: 0,
    e: "El nombre NetBIOS permite compatibilidad con Windows NT y aplicaciones antiguas. Es recomendable que coincida con el nombre usado para Active Directory."
  },
  {
    id: "t3-25", t: "T3", k: "Teoría",
    q: "¿Qué es un sitio (site) en Active Directory?",
    o: [
      "Un segmento de red o rango de subredes IP conectados por una LAN de alta calidad.",
      "Una unidad organizativa que agrupa los equipos de una misma ubicación para aplicarles GPO.",
      "Un bosque con varios árboles que comparten un esquema y un catálogo global."
    ],
    c: 0,
    e: "El sitio representa la estructura física: subredes bien conectadas, normalmente LAN, con conectividad RPC. Los CD se asignan a sitios y los clientes se ubican según su subred IP."
  },
  {
    id: "t3-26", t: "T3", k: "Teoría",
    q: "¿Qué relación hay entre Active Directory y DNS?",
    o: [
      "Están relacionados: cada dominio AD necesita un dominio DNS para localizar sus servicios.",
      "Son lo mismo: el dominio DNS y el dominio AD comparten la misma base de datos y esquema.",
      "DNS solo se usa para la replicación entre controladores; la autenticación no depende de él."
    ],
    c: 0,
    e: "Un dominio DNS es una colección de registros de recursos; un dominio AD indica cómo se particionan los objetos. Cada dominio AD necesita un dominio DNS correspondiente y registra sus servicios y equipos para que los clientes los localicen."
  },
  {
    id: "t3-27", t: "T3", k: "Teoría",
    q: "¿Qué define el esquema de Active Directory?",
    o: [
      "Las clases de objetos que se pueden crear y sus atributos; se puede extender con nuevas clases.",
      "Las GPO que se aplican a cada OU y el orden de precedencia que siguen al aplicarse en cada nivel del dominio.",
      "La topología de sitios y la programación de la replicación entre los controladores del bosque."
    ],
    c: 0,
    e: "El esquema define qué clases de objetos se pueden crear, qué atributos debe tener una instancia, cuáles puede tener y qué clases pueden ser contenedor. Al instalar AD se crea un esquema predeterminado y se puede extender."
  },
  {
    id: "t3-28", t: "T3", k: "Teoría",
    q: "¿Qué es un RODC (Read-Only Domain Controller)?",
    o: [
      "Un controlador con copia de solo lectura del directorio, útil en sucursales poco seguras.",
      "Un controlador que permite administrar el dominio y alojar cualquier rol FSMO.",
      "Un servidor miembro que pertenece al dominio y mantiene su propia base de datos local de cuentas."
    ],
    c: 0,
    e: "El RODC contiene una copia de solo lectura del AD. Desde él no se puede administrar el dominio. Se recomienda en sucursales con poca seguridad para dar acceso rápido sin ser un punto de ataque, pero no se debe usar para tolerancia a fallos."
  },
  {
    id: "t3-29", t: "T3", k: "Teoría",
    q: "¿Qué es un servidor miembro?",
    o: [
      "Un servidor que pertenece al dominio pero no gestiona el Directorio Activo.",
      "Un servidor que no pertenece a ningún dominio y usa solo su base de datos local.",
      "Un controlador de dominio que solo alberga el catálogo global y no autentica."
    ],
    c: 0,
    e: "El servidor miembro pertenece al dominio, pero no gestiona AD. Para acceder a sus servicios se puede usar un usuario local o un usuario del dominio autenticado en el CD."
  },
  {
    id: "t3-30", t: "T3", k: "Teoría",
    q: "¿Qué es un servidor independiente?",
    o: [
      "Un servidor que no pertenece a ningún dominio y mantiene su propia base de datos de usuarios y grupos.",
      "Un servidor que pertenece al dominio pero no tiene el rol AD DS y autentica contra un controlador.",
      "Un dominio con un único controlador que no comparte su base de datos con otros dominios."
    ],
    c: 0,
    e: "El servidor independiente no pertenece a ningún dominio. Tiene su propia base de datos de usuarios y grupos, no compartida, y para acceder a él hay que autenticarse en él, no en un CD."
  },
  {
    id: "t3-31", t: "T3", k: "Teoría",
    q: "¿Cómo se calculan los permisos efectivos de un usuario que pertenece a varios grupos?",
    o: [
      "Sumando sus permisos explícitos más los permisos de todos los grupos a los que pertenece.",
      "Aplicando solo el permiso más restrictivo de todos sus grupos, porque la seguridad prevalece.",
      "Aplicando el permiso del grupo con mayor ámbito, ya que los grupos pequeños se ignoran."
    ],
    c: 0,
    e: "Los permisos del usuario son la suma de sus permisos explícitos y los de sus grupos. Además, las OU inciden sobre la funcionalidad y los grupos sobre la seguridad; no son lo mismo."
  },
  {
    id: "t3-32", t: "T3", k: "Teoría",
    q: "¿Cuándo se aplican las GPO de máquina y las de usuario?",
    o: [
      "Las de máquina al iniciar el SO; las de usuario al iniciar sesión en el equipo.",
      "Las de máquina al iniciar sesión del usuario; las de usuario al arrancar el SO.",
      "Ambas se aplican exclusivamente al apagar el equipo, cuando se descargan del controlador."
    ],
    c: 0,
    e: "La configuración de máquina se aplica en el arranque y afecta a cualquier usuario que use el dispositivo. La de usuario se aplica cuando ese usuario inicia sesión."
  },
  {
    id: "t3-33", t: "T3", k: "Teoría",
    q: "¿Cada cuánto se propagan los cambios de una GPO?",
    o: [
      "Cada 90 ± 30 minutos, sin necesidad de que el usuario vuelva a iniciar sesión.",
      "Cada 15 minutos, salvo que se configure una programación distinta en el sitio.",
      "Cada 24 horas o al reiniciar, porque las GPO no se actualizan en caliente."
    ],
    c: 0,
    e: "Los cambios en una GPO se propagan cada 90 ± 30 minutos. No es necesario esperar a que el usuario se vuelva a loguear ni a que la máquina se apague."
  },
  {
    id: "t3-34", t: "T3", k: "Teoría",
    q: "¿Cuál es el orden de aplicación de las GPO y qué prevalece en caso de conflicto?",
    o: [
      "Sitio > Dominio > OU > Grupo > Equipo > Usuario; prevalece la más específica.",
      "Usuario > Equipo > Grupo > OU > Dominio > Sitio; prevalece la más general.",
      "Dominio > Sitio > OU > Grupo > Equipo > Usuario; prevalece siempre la GPO más antigua."
    ],
    c: 0,
    e: "Las GPO son heredables y acumulativas. El orden es Sitio > Dominio > OU > Grupo > Equipo > Usuario y, si hay conflicto, prevalece la más específica. Después se pueden usar Block Inheritance y No Override."
  },
  {
    id: "t3-35", t: "T3", k: "Teoría",
    q: "¿Qué diferencia hay entre Block Inheritance y No Override?",
    o: [
      "Block Inheritance bloquea la herencia; No Override impide que niveles inferiores sobrescriban.",
      "Block Inheritance impide que las GPO inferiores sobrescriban; No Override bloquea la herencia superior.",
      "Ambos hacen lo mismo, pero No Override se aplica solo en el dominio raíz del bosque."
    ],
    c: 0,
    e: "Block Inheritance evita que se hereden GPO de niveles superiores. No Override lo usan los administradores de alto nivel para impedir que sus políticas sean sobrescritas por GPO inferiores. Si chocan, No Override prevalece."
  },
  {
    id: "t3-36", t: "T3", k: "Teoría",
    q: "¿Qué característica distintiva tiene PowerShell frente a los intérpretes de comandos tradicionales?",
    o: [
      "Está orientado a objetos: la entrada y la salida de cada etapa son objetos, no solo texto.",
      "Solo devuelve y recibe texto plano, igual que cmd.exe, pero con cmdlets más largos.",
      "Es un lenguaje compilado que genera binarios .NET antes de ejecutar cada comando."
    ],
    c: 0,
    e: "PowerShell es un intérprete orientado a objetos. La información de entrada y salida de cada cmdlet son instancias de objeto, a diferencia de los intérpretes tradicionales, que solo manejan texto."
  },
  {
    id: "t3-37", t: "T3", k: "Teoría",
    q: "¿Cuál es la historia correcta de PowerShell?",
    o: [
      "MONAD en 2003, PowerShell en 2006 y código abierto como PowerShell Core en 2016.",
      "Se creó en 2006 como MONAD, cambió a PowerShell en 2016 y cerró su código al pasar a Core.",
      "Nació en 2003 ya como PowerShell y en 2016 se renombró a Windows PowerShell sin publicar el código."
    ],
    c: 0,
    e: "Originalmente MONAD en 2003, pasó a llamarse PowerShell en su lanzamiento público el 25 de abril de 2006. En 2016 Microsoft publicó el código en GitHub y lo renombró PowerShell Core; la versión 6 usa licencia MIT."
  },
  {
    id: "t3-38", t: "T3", k: "Teoría",
    q: "¿Qué son los alias en PowerShell?",
    o: [
      "Nombres alternativos para un mismo comando; por ejemplo, dir, ls y gci muestran directorios.",
      "Accesos directos a scripts guardados que solo funcionan en el perfil del usuario actual.",
      "Comandos heredados de cmd.exe que PowerShell ejecuta en un proceso aparte del intérprete."
    ],
    c: 0,
    e: "PowerShell permite crear alias al estilo Unix: distintos nombres para el mismo comando. dir, ls y gci pueden referirse a la acción de mostrar directorios. Esto facilita el trabajo."
  },
  {
    id: "t3-39", t: "T3", k: "Teoría",
    q: "¿En qué sección de una GPO se incluyen los parámetros de seguridad, como las contraseñas?",
    o: [
      "Windows Settings, que incluye los parámetros de seguridad y las contraseñas.",
      "Software Settings, que gestiona la instalación y publicación de software.",
      "Administrative Templates, que controla aplicaciones y escritorio."
    ],
    c: 0,
    e: "Windows Settings permite crear y editar scripts de arranque/parada o logon/logoff e incluye los parámetros de seguridad, como las contraseñas. Software Settings gestiona software y Administrative Templates controla aplicaciones y escritorio."
  },
  {
    id: "t3-40", t: "T3", k: "Teoría",
    q: "¿Qué tipo de información puede gestionar PowerShell con una única sentencia?",
    o: [
      "Monitorizar contadores, apagar o detener servicios y modificar registros del sistema.",
      "Solo mostrar directorios y ejecutar programas, porque el resto requiere VBScript.",
      "Solo crear usuarios y grupos de AD, ya que los servicios se gestionan con net.exe."
    ],
    c: 0,
    e: "PowerShell permite automatizar tareas de administración: monitorizar contadores, apagar o detener servicios y modificar registros del sistema, entre otras. Es una herramienta central para el administrador."
  }
];
