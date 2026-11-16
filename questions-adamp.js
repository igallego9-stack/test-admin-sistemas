/* Tema 3 - AD (ampliación): bloques, presentación, controladores, niveles funcionales, replicación y GPO */
const BANK_ADAMP = [
  {
    id: "ad-01", t: "ADAMP", s: "3.1 Bloques y dominios", k: "Teoría",
    q: "En Active Directory, ¿qué es un bosque?",
    o: [
      "Una agrupación de árboles que comparten un esquema único y confianzas entre sus raíces.",
      "Un conjunto de dominios que comparten un espacio de nombres contiguo y un mismo raíz.",
      "Una unidad organizativa de primer nivel que agrupa objetos y delega su administración."
    ],
    c: 0,
    e: "El bosque agrupa árboles con espacios de nombres independientes, comparte un único esquema y conecta sus dominios raíz mediante confianzas. El conjunto de dominios con nombres contiguos es un árbol."
  },
  {
    id: "ad-02", t: "ADAMP", s: "3.1 Bloques y dominios", k: "Teoría",
    q: "¿Qué representa un dominio en Active Directory?",
    o: [
      "Una entidad administrativa y de seguridad que alberga usuarios y equipos y en la que se definen directivas.",
      "Un contenedor exclusivamente organizativo, sin frontera de seguridad, que solo sirve para agrupar OU.",
      "Una agrupación de árboles con espacios de nombres independientes y un esquema compartido."
    ],
    c: 0,
    e: "El dominio es una entidad administrativa y de seguridad: alberga usuarios y equipos y constituye el perímetro en el que se definen las directivas. La agrupación de árboles con nombres independientes es el bosque."
  },
  {
    id: "ad-03", t: "ADAMP", s: "3.1 Bloques y dominios", k: "Teoría",
    q: "¿Qué diferencia a un árbol de dominio de un bosque?",
    o: [
      "El árbol agrupa dominios con un espacio de nombres continuo; el bosque reúne varios árboles con nombres distintos.",
      "El árbol agrupa dominios con nombres no continuos; el bosque exige que todos compartan el mismo sufijo DNS.",
      "El árbol es una OU de nivel superior y el bosque es el conjunto de OU de un mismo dominio."
    ],
    c: 0,
    e: "Un árbol se forma con dominios que comparten un espacio de nombres continuo, por ejemplo us.nextinfo.priv y es.nextinfo.priv bajo nextinfo.priv. Un bosque puede reunir varios árboles con espacios de nombres distintos."
  },
  {
    id: "ad-04", t: "ADAMP", s: "3.1 Bloques y dominios", k: "Teoría",
    q: "¿Qué es el dominio raíz del bosque?",
    o: [
      "El primer dominio instalado, que actúa como raíz de la jerarquía y alberga los grupos administrativos.",
      "El dominio con mayor número de usuarios, elegido automáticamente al crear el segundo árbol.",
      "El único dominio que puede contener un controlador de dominio de solo lectura y sus réplicas."
    ],
    c: 0,
    e: "El primer dominio instalado es el dominio raíz del bosque. Es la raíz de la jerarquía y en él se ubican grupos como Administradores de empresa y Administradores del esquema."
  },
  {
    id: "ad-05", t: "ADAMP", s: "3.1 Bloques y dominios", k: "Teoría",
    q: "¿Para qué sirven las relaciones de confianza entre dominios?",
    o: [
      "Permitir que usuarios de un dominio accedan a recursos de otro sin duplicar cuentas.",
      "Para replicar automáticamente la base de datos de seguridad de un dominio en todos los demás.",
      "Para convertir varios dominios en una única OU con las mismas directivas."
    ],
    c: 0,
    e: "Las confianzas permiten la autenticación y el acceso a recursos entre dominios. No convierten los dominios en uno solo ni replican la base de datos de seguridad de un dominio en otro."
  },
  {
    id: "ad-06", t: "ADAMP", s: "3.1 Bloques y dominios", k: "Teoría",
    q: "¿Qué afirmación es correcta sobre el esquema de un bosque?",
    o: [
      "Es único en el bosque, todos los DC tienen una réplica y solo el maestro de esquema puede cambiarlo.",
      "Cada dominio mantiene su propio esquema independiente y los cambios se replican solo dentro de él.",
      "Todos los controladores de dominio pueden modificar el esquema directamente, sin rol especializado."
    ],
    c: 0,
    e: "El esquema es único en el bosque. Todos los DC tienen una réplica de solo lectura y únicamente el controlador con el rol de maestro de esquema puede realizar cambios."
  },
  {
    id: "ad-07", t: "ADAMP", s: "3.1 Bloques y dominios", k: "Caso práctico",
    q: "Una empresa matriz usa el dominio nextinfo.priv y compra otra compañía con el dominio otraempresa.com. Deciden mantener ambos nombres, compartir un único esquema y establecer confianzas. ¿Qué estructura han creado?",
    o: [
      "Un bosque con dos árboles de dominio, uno por cada espacio de nombres independiente.",
      "Un único árbol con dos dominios secundarios que comparten el mismo espacio de nombres.",
      "Un grupo de trabajo con dos dominios locales independientes y sin esquema compartido."
    ],
    c: 0,
    e: "Al mantener espacios de nombres no continuos dentro de una misma estructura con un esquema compartido y confianzas, se crea un bosque con dos árboles. Un árbol exigiría un espacio de nombres continuo."
  },
  {
    id: "ad-08", t: "ADAMP", s: "3.1 Bloques y dominios", k: "Teoría",
    q: "¿Cuál es la función del dominio como perímetro de seguridad?",
    o: [
      "Delimitar el ámbito de las directivas y la administración, sin compartir ACL automáticamente.",
      "Impedir que un usuario de un dominio pueda autenticarse en cualquier otro dominio del bosque.",
      "Sustituir al bosque como límite máximo de confianza y eliminar las relaciones de confianza."
    ],
    c: 0,
    e: "El dominio delimita la aplicación de directivas y la administración de objetos. Las ACL y derechos no se comparten automáticamente entre dominios; para atravesar esa frontera se usan confianzas."
  },
  {
    id: "ad-09", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Sobre qué arquitectura de directorio se construyen los Servicios de dominio de Active Directory (AD DS)?",
    o: [
      "LDAP (Lightweight Directory Access Protocol), accesible mediante TCP/IP.",
      "Kerberos, que actúa como base de datos jerárquica y almacena los objetos del directorio.",
      "DNS, que almacena los objetos y atributos del dominio y autentica a los usuarios."
    ],
    c: 0,
    e: "AD DS se basa en una arquitectura de directorio LDAP accesible por TCP/IP. Kerberos es el protocolo de autenticación predeterminado y DNS se usa para localizar servicios, no para almacenar los objetos del directorio."
  },
  {
    id: "ad-10", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Dónde se encuentra por defecto la base de datos de Active Directory?",
    o: [
      "En %SYSTEMROOT%\\NTDS\\ntds.dit.",
      "En %SYSTEMROOT%\\System32\\config\\SAM.",
      "En %SYSTEMROOT%\\SYSVOL\\domain\\ntds.dit."
    ],
    c: 0,
    e: "La base de datos es ntds.dit y se ubica por defecto en %SYSTEMROOT%\\NTDS. La carpeta SYSVOL contiene scripts y directivas, no la base de datos; SAM es la base de cuentas locales."
  },
  {
    id: "ad-11", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Qué puertos TCP usa LDAP en un controlador de dominio normal y en uno que actúa como catálogo global?",
    o: [
      "389 para el controlador normal y 3268 para el catálogo global.",
      "3268 para el controlador normal y 389 para el catálogo global.",
      "636 para el controlador normal y 3269 para el catálogo global."
    ],
    c: 0,
    e: "LDAP usa el puerto 389 en un DC normal. El catálogo global escucha además en el 3268. Los puertos 636 y 3269 corresponden a LDAP sobre SSL/TLS, no a la consulta LDAP ordinaria."
  },
  {
    id: "ad-12", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Qué papel cumple el archivo edb.log en un controlador de dominio?",
    o: [
      "Almacena las transacciones pendientes de integrar en ntds.dit; tiene un tamaño fijo de 10 MB.",
      "Es el punto de control que marca las transacciones ya confirmadas en la base de datos.",
      "Es la copia de seguridad completa del directorio que se replica entre todos los controladores."
    ],
    c: 0,
    e: "Las modificaciones se escriben primero en edb.log y después se integran en ntds.dit. El archivo tiene un tamaño fijo de 10 MB. El punto de control es edb.chk."
  },
  {
    id: "ad-13", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Para qué sirve el archivo edb.chk?",
    o: [
      "Como punto de control para saber qué transacciones se han registrado correctamente en la base de datos.",
      "Como registro temporal de las transacciones que aún no han llegado a edb.log.",
      "Como reserva de espacio en disco para que Active Directory siga funcionando si el disco se llena."
    ],
    c: 0,
    e: "edb.chk es el checkpoint de la base de datos: registra las transacciones ejecutadas correctamente y permite saber si se han volcado a ntds.dit. La reserva de espacio la hacen los archivos .jrs."
  },
  {
    id: "ad-14", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Qué ventaja característica ofrece el Centro de administración de Active Directory (ADAC)?",
    o: [
      "Cada acción de su interfaz gráfica genera comandos de PowerShell que quedan registrados en el historial.",
      "Permite administrar AD solo desde un controlador de dominio y nunca desde un equipo cliente.",
      "Sustituye por completo a PowerShell y elimina la necesidad de usar cmdlets para administrar AD."
    ],
    c: 0,
    e: "ADAC se basa en PowerShell: las operaciones de la interfaz emiten cmdlets y pueden consultarse en el historial. No impide usar PowerShell ni exige ejecutarse en un DC."
  },
  {
    id: "ad-15", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Para qué se utilizan las RSAT (Remote Server Administration Tools)?",
    o: [
      "Para instalar las consolas de administración de AD en un equipo cliente sin el rol AD DS.",
      "Para convertir un equipo cliente en controlador de dominio de solo lectura.",
      "Para replicar la base de datos ntds.dit entre dominios sin usar controladores de dominio."
    ],
    c: 0,
    e: "RSAT permite administrar AD desde estaciones de trabajo Windows que no tienen el rol AD DS. No convierte al cliente en DC ni replica la base de datos."
  },
  {
    id: "ad-16", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Qué contiene la partición de configuración de Active Directory?",
    o: [
      "La información sobre dominios, sitios, programación de replicación y topología del bosque.",
      "Las clases de objetos y atributos que se pueden crear y modificar en el directorio.",
      "Todos los objetos de usuario, grupo y equipo que pertenecen a un dominio concreto."
    ],
    c: 0,
    e: "La partición de configuración es única en el bosque y describe dominios, sitios, replicación y topología. El esquema define clases y atributos; la partición de dominio contiene los objetos de ese dominio."
  },
  {
    id: "ad-17", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Qué afirmación describe correctamente la partición de esquema?",
    o: [
      "Es única en el bosque, se replica en todos los DC y solo el maestro de esquema puede modificarla.",
      "Es propia de cada dominio, que puede definir sus propias clases de objetos y atributos independientes.",
      "Se replica solo en el dominio raíz y los demás dominios la consultan por LDAP."
    ],
    c: 0,
    e: "El esquema es único en el bosque y se replica en todos los controladores. Las copias son de solo lectura salvo en el DC que posee el rol de maestro de esquema."
  },
  {
    id: "ad-18", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "En la autenticación Kerberos, ¿qué entrega primero el KDC al usuario?",
    o: [
      "Un TGT (Ticket Granting Ticket), que después se presenta para obtener los tiques de servicio.",
      "Un TGS (Ticket Granting Service) para cada servidor de archivos antes de autenticarse.",
      "Un SPN (Service Principal Name) con el nombre del servicio al que quiere acceder."
    ],
    c: 0,
    e: "El KDC autentica al usuario y le entrega un TGT. Con el TGT, el usuario solicita los TGS de los servicios concretos. El SPN identifica al servicio, no es un tique de acceso."
  },
  {
    id: "ad-19", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Qué es un SPN y cuándo hay que registrarlo manualmente?",
    o: [
      "Un nombre principal de servicio que identifica una instancia; con cuenta de dominio se registra manualmente.",
      "Un grupo de seguridad del dominio que autoriza el acceso Kerberos y se crea automáticamente con cada servicio nuevo.",
      "Un registro DNS que sustituye al TGT y permite al cliente saltarse la autenticación del KDC."
    ],
    c: 0,
    e: "El SPN identifica el servicio para Kerberos. Con cuentas integradas se registra automáticamente; con una cuenta de usuario de dominio hay que registrarlo manualmente, por ejemplo con setspn -s."
  },
  {
    id: "ad-20", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Qué requisito y limitación tiene la papelera de reciclaje de Active Directory?",
    o: [
      "Requiere elevar el nivel funcional del bosque a 2008 R2 y, una vez activada, no se puede desactivar.",
      "Se puede activar en cualquier nivel funcional y desactivar cuando se quiera sin perder objetos.",
      "Solo está disponible en dominios con nivel funcional 2016 y se desactiva al reiniciar el DC."
    ],
    c: 0,
    e: "La papelera de reciclaje requiere al menos el nivel funcional de bosque Windows Server 2008 R2. Una vez activada no se puede deshabilitar; los objetos eliminados se recuperan desde el contenedor Deleted Objects."
  },
  {
    id: "ad-21", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Qué consola se abre con el comando dsa.msc?",
    o: [
      "Usuarios y equipos de Active Directory, para administrar cuentas y equipos del dominio.",
      "Centro de administración de Active Directory (ADAC), para tareas de administración avanzada.",
      "Sitios y servicios de Active Directory, para la topología física y la replicación."
    ],
    c: 0,
    e: "dsa.msc abre Usuarios y equipos de Active Directory. ADAC es una consola distinta y Sitios y servicios se usa para la topología física y la replicación."
  },
  {
    id: "ad-22", t: "ADAMP", s: "3.2 Presentación de AD", k: "Teoría",
    q: "¿Qué comando de PowerShell crea una unidad organizativa llamada Servidores dentro de OU=NEXTINFO,DC=Nextinfo,DC=priv?",
    o: [
      "New-ADOrganizationalUnit -Name Servidores -Path \"OU=NEXTINFO,DC=Nextinfo,DC=priv\"",
      "New-ADUser -Name Servidores -Path \"OU=NEXTINFO,DC=Nextinfo,DC=priv\" -Verbose",
      "New-ADGroup -Name Servidores -Path \"OU=NEXTINFO,DC=Nextinfo,DC=priv\" -Verbose"
    ],
    c: 0,
    e: "New-ADOrganizationalUnit crea una OU. New-ADUser crea una cuenta de usuario y New-ADGroup un grupo; ninguna de las dos crea un contenedor organizativo."
  },
  {
    id: "ad-23", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Qué tipos de controladores de dominio distingue el documento?",
    o: [
      "Controladores de dominio en escritura y controladores de dominio de solo lectura (RODC).",
      "Controladores primarios y secundarios, con réplica manual del primero al segundo.",
      "Controladores de esquema y controladores de dominio, según el rol FSMO que tengan."
    ],
    c: 0,
    e: "El documento distingue DC en escritura y RODC. Los términos primario/secundario corresponden a modelos antiguos y los roles FSMO son funciones que puede alojar un DC, no tipos de DC."
  },
  {
    id: "ad-24", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Cuántos roles FSMO existen y cómo se reparten?",
    o: [
      "Cinco: dos exclusivos del bosque y tres exclusivos de cada dominio.",
      "Cinco: tres exclusivos del bosque y dos exclusivos de cada dominio.",
      "Tres: esquema, RID y PDC, todos exclusivos del bosque."
    ],
    c: 0,
    e: "Hay cinco roles FSMO. En el bosque: maestro de esquema y maestro de nomenclatura de dominios. En cada dominio: maestro RID, maestro de infraestructura y emulador PDC."
  },
  {
    id: "ad-25", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Qué dos roles FSMO son exclusivos del bosque?",
    o: [
      "Maestro de esquema y maestro de nomenclatura, exclusivos del bosque.",
      "Maestro RID y emulador PDC, que son exclusivos de cada dominio.",
      "Maestro de infraestructura y emulador PDC, exclusivos de cada dominio."
    ],
    c: 0,
    e: "El maestro de esquema y el maestro de nomenclatura de dominios son únicos en el bosque. RID, infraestructura y PDC son únicos en cada dominio."
  },
  {
    id: "ad-26", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Qué tres roles FSMO son exclusivos de cada dominio?",
    o: [
      "Maestro RID, maestro de infraestructura y emulador PDC en cada dominio.",
      "Maestro de esquema, maestro RID y maestro de infraestructura en cada dominio.",
      "Maestro de nomenclatura de dominios, emulador PDC y maestro de esquema."
    ],
    c: 0,
    e: "En cada dominio hay un maestro RID, un maestro de infraestructura y un emulador PDC. El esquema y la nomenclatura de dominios son roles del bosque."
  },
  {
    id: "ad-27", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Qué función tiene el maestro de esquema?",
    o: [
      "Ser el único controlador que puede modificar el esquema y residir en un catálogo global.",
      "Asignar los grupos de RID a los controladores para que generen identificadores SID únicos.",
      "Gestionar los cambios de contraseña y el bloqueo de cuentas del dominio."
    ],
    c: 0,
    e: "El maestro de esquema es el único que puede escribir en el esquema. Además, debe residir en un DC que sea catálogo global. La asignación de RID corresponde al maestro RID y las contraseñas al emulador PDC."
  },
  {
    id: "ad-28", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Para qué sirve el maestro de nomenclatura de dominios?",
    o: [
      "Agregar o eliminar dominios del bosque; debe residir en un catálogo global.",
      "Crear y eliminar unidades organizativas dentro de un dominio y delegar su administración.",
      "Controlar la replicación entre sitios y los servidores puente que la conectan."
    ],
    c: 0,
    e: "El maestro de nomenclatura de dominios gestiona la incorporación y eliminación de dominios en el bosque. Si no está accesible, la operación falla; debe estar en un catálogo global."
  },
  {
    id: "ad-29", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Cómo evita el maestro RID que dos controladores generen SID duplicados?",
    o: [
      "Asigna a cada DC grupos de RID únicos; cuando un DC agota su grupo, solicita otro al maestro RID.",
      "Genera todos los SID del dominio en un único controlador y los demás solo los copian.",
      "Replica el mismo grupo de RID a todos los DC y coordina el uso mediante bloqueos de base de datos."
    ],
    c: 0,
    e: "El maestro RID entrega bloques de RID a cada DC. Cada DC compone los SID con su bloque, garantizando unicidad. Cuando se agota, pide otro bloque al maestro RID."
  },
  {
    id: "ad-30", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Con qué se relaciona principalmente el maestro de infraestructura?",
    o: [
      "Con actualizar las referencias a usuarios de otros dominios dentro de los grupos locales de su dominio.",
      "Con la creación de nuevos dominios y la comprobación de que su nombre DNS no está repetido.",
      "Con la emisión de tiques Kerberos, la sincronización horaria y la autenticación de los usuarios del dominio."
    ],
    c: 0,
    e: "El maestro de infraestructura actualiza la lista de miembros de grupos cuando los usuarios provienen de otro dominio. No crea dominios ni emite tiques Kerberos."
  },
  {
    id: "ad-31", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Cuál de estas funciones corresponde al emulador PDC?",
    o: [
      "Gestionar contraseñas y bloqueos de cuenta y actuar como reloj principal del dominio.",
      "Asignar bloques de RID y mantener el identificador único de los objetos nuevos.",
      "Modificar el esquema y autorizar la instalación de nuevas clases de objetos."
    ],
    c: 0,
    e: "El emulador PDC participa en la actualización de contraseñas, gestiona el bloqueo de cuentas, las GPO del dominio y actúa como reloj principal. Los RID son del maestro RID y el esquema del maestro de esquema."
  },
  {
    id: "ad-32", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Qué es el catálogo global?",
    o: [
      "Una réplica parcial de los objetos del bosque que permite localizarlos y autenticar sesiones.",
      "Una copia completa de la partición de dominio de cada dominio, replicada en todos los DC del bosque.",
      "La partición que contiene únicamente el esquema y la topología de replicación del bosque."
    ],
    c: 0,
    e: "El catálogo global contiene una réplica parcial de todos los objetos del bosque. Es un índice para localizarlos y participa en el inicio de sesión interdominio y en la comprobación de grupos universales. No es una copia completa de cada dominio."
  },
  {
    id: "ad-33", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Qué comando permite identificar rápidamente qué controladores albergan los roles FSMO?",
    o: [
      "netdom query fsmo",
      "repadmin /syncall",
      "gpupdate /force"
    ],
    c: 0,
    e: "netdom query fsmo muestra los titulares de los cinco roles FSMO. repadmin /syncall fuerza la replicación y gpupdate /force actualiza las directivas de grupo."
  },
  {
    id: "ad-34", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Qué requisito NO es imprescindible para clonar un controlador de dominio virtualizado?",
    o: [
      "Disponer de un hipervisor Hyper-V; el clonado también puede hacerse con otros hipervisores compatibles.",
      "Que el nivel funcional del dominio sea al menos Windows Server 2012.",
      "Crear el archivo DCCloneConfig.xml y autorizar al DC de origen en el grupo de controladores clonables."
    ],
    c: 0,
    e: "El clonado no exige Hyper-V: basta con que el hipervisor sea compatible con los ID de generación. Sí se requiere nivel funcional 2012 o superior, autorizar el origen y crear DCCloneConfig.xml."
  },
  {
    id: "ad-35", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "Antes de elevar un controlador de dominio a Windows Server 2016, ¿qué comandos de adprep se ejecutan?",
    o: [
      "adprep /forestprep y, después, adprep /domainprep.",
      "adprep /domainprep y, después, adprep /forestprep.",
      "adprep /rodcprep y adprep /gpprep, sin necesidad de preparar el bosque."
    ],
    c: 0,
    e: "Primero se prepara el bosque con adprep /forestprep y después el dominio con adprep /domainprep. /rodcprep y /gpprep no sustituyen a estos pasos."
  },
  {
    id: "ad-36", t: "ADAMP", s: "3.3 Controladores de dominio", k: "Teoría",
    q: "¿Qué caracteriza a un RODC frente a un DC en escritura?",
    o: [
      "Mantiene una copia de solo lectura, se orienta a sucursales y no sirve para tolerancia a fallos.",
      "Puede alojar cualquier rol FSMO, modificar el esquema del bosque y autenticar como un DC normal.",
      "Es el único controlador que puede autenticar usuarios de otros dominios del bosque."
    ],
    c: 0,
    e: "El RODC tiene una copia de solo lectura, no permite administrar el dominio y no debe usarse para tolerancia a fallos. No puede alojar roles FSMO ni modificar el esquema."
  },
  {
    id: "ad-37", t: "ADAMP", s: "3.4 Niveles funcionales", k: "Teoría",
    q: "¿Qué determinan los niveles funcionales de dominio y bosque?",
    o: [
      "Las funciones disponibles y los sistemas operativos que pueden alojar el rol de DC.",
      "El número máximo de usuarios y equipos que puede contener un dominio del bosque.",
      "La capacidad de almacenamiento y el número máximo de sitios que se pueden crear."
    ],
    c: 0,
    e: "Los niveles funcionales determinan las funcionalidades disponibles y los SO que pueden actuar como DC. No fijan cuotas de usuarios, almacenamiento ni número de sitios."
  },
  {
    id: "ad-38", t: "ADAMP", s: "3.4 Niveles funcionales", k: "Teoría",
    q: "¿Qué niveles funcionales de bosque permite instalar Windows Server 2016?",
    o: [
      "Windows Server 2008, 2008 R2, 2012, 2012 R2 y 2016.",
      "Windows Server 2003, 2008, 2008 R2, 2012 y 2016.",
      "Windows Server 2008 R2, 2012, 2012 R2, 2016 y 2019."
    ],
    c: 0,
    e: "Windows Server 2016 admite cinco niveles de bosque: 2008, 2008 R2, 2012, 2012 R2 y 2016. Los niveles de 2003 han desaparecido por el fin de su ciclo de vida."
  },
  {
    id: "ad-39", t: "ADAMP", s: "3.4 Niveles funcionales", k: "Teoría",
    q: "¿Qué funcionalidad se activa con el nivel funcional de bosque Windows Server 2008?",
    o: [
      "La implementación de controladores de dominio de solo lectura y el renombrado de dominios.",
      "La papelera de reciclaje de Active Directory para recuperar objetos eliminados.",
      "La caducidad de la pertenencia a grupos, con una duración limitada para cada miembro."
    ],
    c: 0,
    e: "El nivel de bosque 2008 habilita RODC, la conversión de InetOrgPerson en Usuario, el cambio de nombre de dominio y las confianzas entre bosques. La papelera llega con 2008 R2 y la caducidad de grupos con 2016."
  },
  {
    id: "ad-40", t: "ADAMP", s: "3.4 Niveles funcionales", k: "Teoría",
    q: "¿Qué nivel funcional de bosque es necesario como mínimo para activar la papelera de reciclaje de Active Directory?",
    o: [
      "Windows Server 2008 R2.",
      "Windows Server 2008.",
      "Windows Server 2016."
    ],
    c: 0,
    e: "La papelera de reciclaje se introdujo con el nivel funcional de bosque Windows Server 2008 R2. No basta con el nivel 2008."
  },
  {
    id: "ad-41", t: "ADAMP", s: "3.4 Niveles funcionales", k: "Teoría",
    q: "¿Qué funcionalidad aporta el nivel funcional de bosque Windows Server 2016?",
    o: [
      "Definir la caducidad de la pertenencia a un grupo, añadiendo usuarios por tiempo limitado.",
      "Habilitar la papelera de reciclaje y la recuperación de objetos eliminados del directorio.",
      "Permitir el renombrado de dominios y la conversión de objetos InetOrgPerson del bosque."
    ],
    c: 0,
    e: "El nivel de bosque 2016 añade la caducidad de la pertenencia a grupos. La papelera es de 2008 R2; el renombrado y la conversión de InetOrgPerson son de 2008."
  },
  {
    id: "ad-42", t: "ADAMP", s: "3.4 Niveles funcionales", k: "Teoría",
    q: "¿Cuál de estas funcionalidades corresponde al nivel funcional de dominio Windows Server 2008?",
    o: [
      "Las directivas de contraseña por grupo y el cifrado Kerberos AES de 128 y 256 bits.",
      "La papelera de reciclaje del bosque y la caducidad de la pertenencia a grupos.",
      "La lectura de tokens de AD FS para aplicaciones federadas, introducida en Windows Server 2008 R2."
    ],
    c: 0,
    e: "El nivel de dominio 2008 incluye directivas de contraseña específicas, AES para Kerberos, LastLogonTimestamp, DFS-R para SYSVOL y RODC. La papelera es de bosque 2008 R2 y la lectura de tokens de AD FS es de dominio 2008 R2."
  },
  {
    id: "ad-43", t: "ADAMP", s: "3.4 Niveles funcionales", k: "Teoría",
    q: "¿Qué funcionalidad introduce el nivel funcional de dominio Windows Server 2008 R2 en entornos federados?",
    o: [
      "La lectura del contenido de los tokens de AD FS para cada acceso a una aplicación federada.",
      "La creación de controladores de dominio de solo lectura y el renombrado de dominios del bosque.",
      "La caducidad de la pertenencia a grupos y las directivas de contraseña específicas."
    ],
    c: 0,
    e: "El nivel de dominio 2008 R2 habilita funcionalidades avanzadas de inicio de sesión y Kerberos, incluida la lectura de tokens de AD FS. RODC y renombrado son de 2008; la caducidad de grupos es de bosque 2016."
  },
  {
    id: "ad-44", t: "ADAMP", s: "3.4 Niveles funcionales", k: "Teoría",
    q: "¿Qué novedad aportan los niveles funcionales de dominio Windows Server 2012 y 2012 R2?",
    o: [
      "Ninguna funcionalidad suplementaria respecto al nivel anterior.",
      "La papelera de reciclaje y la caducidad de la pertenencia a grupos.",
      "El renombrado de controladores de dominio con Netdom.exe."
    ],
    c: 0,
    e: "El documento indica que los niveles de dominio 2012 y 2012 R2 no añaden funcionalidades suplementarias. La papelera es de bosque 2008 R2 y el renombrado con Netdom es de dominio 2008."
  },
  {
    id: "ad-45", t: "ADAMP", s: "3.4 Niveles funcionales", k: "Teoría",
    q: "¿Qué precaución hay que tener al elevar el nivel funcional del bosque?",
    o: [
      "No se puede restaurar a un nivel inferior una vez elevado.",
      "Solo se puede elevar si antes se eliminan todos los RODC.",
      "El cambio es reversible durante los primeros 30 días."
    ],
    c: 0,
    e: "El nivel funcional del bosque no se puede devolver a un nivel inferior. Por eso hay que planificar la elevación y comprobar la compatibilidad de los DC y aplicaciones."
  },
  {
    id: "ad-46", t: "ADAMP", s: "3.4 Niveles funcionales", k: "Teoría",
    q: "¿Por qué el documento no desarrolla el nivel funcional Windows Server 2003?",
    o: [
      "Porque ha quedado fuera de soporte y solo aporta compatibilidad con versiones antiguas.",
      "Porque Windows Server 2016 no puede instalarlo ni crear dominios con ese nivel.",
      "Porque ese nivel solo existe para bosques y no se puede aplicar a dominios."
    ],
    c: 0,
    e: "El nivel 2003 ha quedado fuera por el fin del ciclo de vida y solo aporta compatibilidad con versiones anteriores. No tiene sentido usarlo en producción con Windows Server 2016."
  },
  {
    id: "ad-47", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "En la replicación intra-sitio, ¿cada cuánto notifica un controlador de dominio un cambio a sus socios?",
    o: [
      "Cada 15 segundos, con una pausa de 3 segundos para evitar respuestas simultáneas.",
      "Cada 3 segundos, con una pausa de 15 segundos entre notificaciones a los socios.",
      "Cada 180 minutos, con una pausa de 15 minutos entre notificaciones a los socios."
    ],
    c: 0,
    e: "Dentro del mismo sitio, el DC notifica el cambio a sus socios cada 15 segundos y espera 3 segundos entre notificaciones. Los 180 minutos y los 15 minutos corresponden a la replicación entre sitios."
  },
  {
    id: "ad-48", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Cuál es el intervalo de replicación predeterminado entre sitios diferentes?",
    o: [
      "180 minutos, aunque el administrador puede ajustarlo.",
      "15 minutos, sin posibilidad de modificarlo.",
      "90 minutos, con un desfase aleatorio de 30 minutos."
    ],
    c: 0,
    e: "Entre sitios, el intervalo predeterminado es de 180 minutos (3 horas). El mínimo configurable es de 15 minutos. Los 90 ± 30 minutos corresponden a la actualización de GPO."
  },
  {
    id: "ad-49", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Cuál es el intervalo mínimo configurable para la replicación entre sitios?",
    o: [
      "15 minutos.",
      "3 minutos.",
      "180 minutos."
    ],
    c: 0,
    e: "El intervalo mínimo entre sitios es de 15 minutos. El valor predeterminado es 180 minutos, y 3 segundos es la pausa entre notificaciones intra-sitio."
  },
  {
    id: "ad-50", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Qué función tienen los servidores puente (bridgehead servers) en la replicación entre sitios?",
    o: [
      "Gestionan el tráfico de replicación entre sitios, por lo que su rendimiento es crucial.",
      "Autentican a los usuarios de las sucursales y almacenan sus contraseñas en la caché local.",
      "Sustituyen al catálogo global en los dominios que no tienen conectividad WAN."
    ],
    c: 0,
    e: "En la replicación entre sitios, los bridgehead servers concentran y gestionan el tráfico. Su rendimiento afecta directamente a la replicación. No sustituyen al catálogo global ni autentican por sí solos."
  },
  {
    id: "ad-51", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Qué herramienta permite forzar la replicación de Active Directory desde la línea de comandos?",
    o: [
      "repadmin /syncall",
      "gpupdate /force",
      "netdom query fsmo"
    ],
    c: 0,
    e: "repadmin /syncall fuerza la replicación. gpupdate /force actualiza las GPO y netdom query fsmo consulta los titulares de los roles FSMO."
  },
  {
    id: "ad-52", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Cada cuánto actualizan los clientes Windows sus GPO en segundo plano?",
    o: [
      "Cada 90 minutos, con un desfase aleatorio de hasta 30 minutos para no saturar la red.",
      "Cada 15 minutos, sin desfase aleatorio, coincidiendo con la replicación intra-sitio.",
      "Cada 180 minutos, con un desfase de hasta 15 minutos, igual que entre sitios."
    ],
    c: 0,
    e: "La actualización en segundo plano de GPO se produce cada 90 minutos, con un desfase aleatorio de hasta 30 minutos para no saturar la red. Un reinicio o inicio de sesión también fuerza la actualización."
  },
  {
    id: "ad-53", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Qué comando fuerza una actualización completa de las GPO en un equipo local y cuál se usa para un equipo remoto?",
    o: [
      "gpupdate /force en local e Invoke-GPUpdate -Computer \"nombre\" -Force en remoto.",
      "Invoke-GPUpdate -Force en local y gpupdate /force -Computer en remoto.",
      "repadmin /syncall en local y gpupdate /remote en remoto."
    ],
    c: 0,
    e: "gpupdate /force se ejecuta en el equipo local. Para equipos remotos se usa el cmdlet Invoke-GPUpdate con los parámetros -Computer y -Force. repadmin se usa para replicación de AD."
  },
  {
    id: "ad-54", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Cómo se fuerza la actualización de GPO para todos los equipos de una unidad organizativa desde la GPMC?",
    o: [
      "Con el botón derecho sobre la OU y la opción Actualización de directiva de grupo.",
      "Ejecutando gpupdate /force en el controlador de dominio principal.",
      "Deshabilitando y volviendo a habilitar la GPO desde el editor de directivas."
    ],
    c: 0,
    e: "La GPMC permite enviar una notificación de actualización a todos los equipos de una OU con la opción Actualización de directiva de grupo. gpupdate /force solo afecta al equipo donde se ejecuta y deshabilitar la GPO no fuerza la actualización."
  },
  {
    id: "ad-55", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Qué limitación existe en la actualización en segundo plano de las GPO?",
    o: [
      "No todas las políticas se aplican en segundo plano: algunas requieren reinicio o inicio de sesión.",
      "Todas las políticas se aplican siempre en segundo plano, sin excepciones ni necesidad de reiniciar.",
      "Solo se actualizan las políticas de usuario; las de equipo nunca se actualizan en segundo plano."
    ],
    c: 0,
    e: "Las extensiones del lado del cliente (CSE) condicionan la aplicación. Algunas configuraciones, como la instalación de software, necesitan un reinicio o un inicio de sesión para aplicarse por completo."
  },
  {
    id: "ad-56", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Cuánto tiempo se conservan por defecto los objetos eliminados de Active Directory antes de purgarse?",
    o: [
      "180 días, el tombstone lifetime predeterminado en dominios actuales.",
      "60 días, el valor fijo que no se puede modificar en el bosque.",
      "12 horas, el mismo intervalo que usa la recolección de basura."
    ],
    c: 0,
    e: "El tombstone lifetime por defecto es de 180 días en dominios creados con Windows Server 2003 SP1 o posterior; en versiones anteriores eran 60 días. Durante ese plazo los objetos eliminados se conservan como tombstones y pueden recuperarse."
  },
  {
    id: "ad-57", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Cada cuánto ejecuta cada controlador de dominio la recolección de basura (garbage collection)?",
    o: [
      "Cada 12 horas, eliminando los tombstones más antiguos que el tombstone lifetime.",
      "Cada 15 minutos, coincidiendo con el recálculo de topología que hace el KCC.",
      "Cada 180 días, justo cuando caduca el tombstone lifetime configurado en el bosque."
    ],
    c: 0,
    e: "La recolección de basura se ejecuta cada 12 horas en cada DC y elimina definitivamente los tombstones que superan el tombstone lifetime. No confundir con el KCC (15 minutos) ni con la caducidad del tombstone (180 días)."
  },
  {
    id: "ad-58", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Cada cuánto recalcula el KCC la topología de replicación de Active Directory?",
    o: [
      "Cada 15 minutos, ajustando las conexiones entre controladores de dominio.",
      "Cada 15 segundos, con una pausa de 3 segundos entre notificaciones.",
      "Cada 180 minutos, igual que el intervalo entre sitios predeterminado."
    ],
    c: 0,
    e: "El Knowledge Consistency Checker revisa y ajusta la topología cada 15 minutos. No confundir con la notificación intra-sitio (15 segundos) ni con el intervalo entre sitios (180 minutos)."
  },
  {
    id: "ad-59", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Cada cuánto comprueban los controladores de dominio los cambios en las GPO de equipo?",
    o: [
      "Cada 5 minutos, un intervalo más corto que el de los equipos cliente.",
      "Cada 90 minutos, con un desfase aleatorio de hasta 30 minutos en cada equipo.",
      "Cada 16 horas, igual que el refresco periódico de las directivas de seguridad."
    ],
    c: 0,
    e: "Los controladores de dominio comprueban los cambios de directiva de equipo cada 5 minutos. Los clientes y servidores miembro lo hacen cada 90 minutos con un desfase aleatorio de hasta 30 minutos."
  },
  {
    id: "ad-60", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Cada cuánto se reaplican las directivas de seguridad aunque la GPO no haya cambiado?",
    o: [
      "Cada 16 horas, incluso si no se ha modificado ninguna directiva.",
      "Cada 90 minutos, con el mismo desfase aleatorio que las demás GPO.",
      "Cada 5 minutos, porque los controladores de dominio las refrescan siempre."
    ],
    c: 0,
    e: "Las directivas de seguridad se aplican cada 16 horas (960 minutos) aunque la GPO no cambie. No deben confundirse con el refresco general de GPO (90 ± 30 minutos) ni con el de los DC (5 minutos)."
  },
  {
    id: "ad-61", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Cuál de estos cambios dispara una replicación urgente entre controladores del mismo sitio?",
    o: [
      "El bloqueo de una cuenta o un cambio en la política de contraseñas del dominio.",
      "La modificación de la descripción de un usuario o de su número de teléfono.",
      "La creación de una unidad organizativa nueva dentro de un dominio del bosque."
    ],
    c: 0,
    e: "La replicación urgente se activa con cambios críticos: bloqueo de cuenta, secretos LSA, contraseña de la cuenta de equipo del DC, cambio del maestro RID, política de bloqueo y política de contraseñas. No se usa para cambios ordinarios de atributos."
  },
  {
    id: "ad-62", t: "ADAMP", s: "Replicación y GPO", k: "Caso práctico",
    q: "Un usuario se bloquea en un DC y otro DC del mismo sitio debe enterarse. ¿Cuándo se replica el bloqueo?",
    o: [
      "De inmediato, porque el bloqueo activa la replicación urgente.",
      "En la siguiente notificación ordinaria, unos 15 segundos después.",
      "Cuando el KCC recalcule la topología, cada 15 minutos."
    ],
    c: 0,
    e: "El bloqueo de cuenta es uno de los cambios que activan la replicación urgente: se notifica de inmediato a los socios del mismo sitio, sin esperar el ciclo normal de 15 segundos."
  },
  {
    id: "ad-63", t: "ADAMP", s: "Replicación y GPO", k: "Caso práctico",
    q: "Una sede remota con un enlace WAN lento replica con el centro de datos. ¿Qué configuración es la habitual?",
    o: [
      "Intervalo de 180 minutos, con horario de replicación y compresión entre sitios.",
      "Notificación cada 15 segundos, con una pausa de 3 segundos entre socios.",
      "Refresco cada 5 minutos, igual que las GPO de los controladores de dominio."
    ],
    c: 0,
    e: "Entre sitios, el intervalo predeterminado es de 180 minutos y puede ajustarse con un horario para no saturar el WAN. La notificación de 15 segundos con pausa de 3 segundos es intra-sitio."
  },
  {
    id: "ad-64", t: "ADAMP", s: "Replicación y GPO", k: "Caso práctico",
    q: "Acabas de cambiar una GPO y un portátil no la aplica. ¿Qué haces para forzarla sin esperar al refresco normal?",
    o: [
      "Ejecutar gpupdate /force y, si es política de usuario, cerrar y abrir sesión.",
      "Ejecutar repadmin /syncall y reiniciar el servicio de directivas del cliente.",
      "Esperar 16 horas, porque las GPO solo se reaplican en ese intervalo."
    ],
    c: 0,
    e: "gpupdate /force reaplica la configuración en el equipo local. Las políticas de usuario pueden requerir cerrar y abrir sesión, y algunas de equipo requieren reinicio. repadmin /syncall se usa para replicar AD, no para refrescar GPO."
  },
  {
    id: "ad-65", t: "ADAMP", s: "Replicación y GPO", k: "Caso práctico",
    q: "Un controlador de dominio ha estado apagado 200 días. ¿Por qué no conviene reconectarlo directamente al bosque?",
    o: [
      "Porque supera el tombstone lifetime de 180 días y puede reintroducir objetos eliminados.",
      "Porque el KCC lo expulsa del bosque a los 15 minutos y hay que volver a promoverlo.",
      "Porque la recolección de basura borra su base de datos cada 12 horas sin avisar."
    ],
    c: 0,
    e: "Si un DC está desconectado más tiempo que el tombstone lifetime (180 días por defecto), puede conservar objetos que ya se eliminaron en el resto del bosque y reintroducirlos como lingering objects. Hay que limpiarlo o restaurarlo de forma controlada."
  },
  {
    id: "ad-66", t: "ADAMP", s: "Replicación y GPO", k: "Teoría",
    q: "¿Qué hace exactamente la recolección de basura de Active Directory?",
    o: [
      "Elimina definitivamente los tombstones más antiguos que el tombstone lifetime.",
      "Replica de inmediato los cambios urgentes entre los controladores del sitio.",
      "Actualiza las GPO de los clientes cada 90 minutos con un desfase aleatorio."
    ],
    c: 0,
    e: "La recolección de basura purga del directorio los tombstones que ya superaron el tombstone lifetime. La replicación urgente y la actualización de GPO son procesos distintos."
  }
];
