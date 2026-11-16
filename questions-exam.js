/* Examen de otro año: preguntas 6-15 y 21-35 (faltan las páginas 1-5 y 16-20) */
const BANK_EXAM = [
  {
    id: "ex-06", t: "T1", s: "Examen de otro año", k: "Examen",
    q: "¿Cuál de las siguientes NO es una estrategia del administrador de sistemas?",
    o: [
      "Planearlo todo antes de hacer un cambio.",
      "Hacer cambios irreversibles en producción.",
      "Conocer cómo funcionan realmente las cosas."
    ],
    c: 1,
    e: "El administrador debe planear los cambios, hacerlos reversibles e incrementales y probarlos antes de publicarlos. Hacer cambios irreversibles es justo lo contrario de una buena estrategia."
  },
  {
    id: "ex-07", t: "T1", s: "Examen de otro año", k: "Examen",
    q: "Respecto al BYOD (Bring Your Own Device)...",
    o: [
      "Es una tendencia que complica el trabajo de los administradores de sistemas.",
      "Cada empleado trae sus dispositivos, así que el administrador no debe gestionarlos.",
      "Es una tendencia que ya no tiene demasiado recorrido en las empresas actuales."
    ],
    c: 0,
    e: "BYOD complica la administración: hay que gestionar y proteger dispositivos muy variados aunque no sean propiedad de la empresa. No exime al administrador de responsabilidad."
  },
  {
    id: "ex-08", t: "T1", s: "Examen de otro año", k: "Examen",
    q: "La tendencia DevOps...",
    o: [
      "Implica que sistemas y desarrollo comprenden las tareas del otro y colaboran.",
      "Implica que cada equipo se centra solo en sus tareas y no colabora.",
      "Es una tendencia que no tiene demasiado futuro en la administración."
    ],
    c: 0,
    e: "DevOps acerca a los equipos de desarrollo y de sistemas: comparten tareas, automatizan y trabajan de forma colaborativa. No consiste en separar aún más ambos mundos."
  },
  {
    id: "ex-09", t: "T2", s: "Examen de otro año", k: "Examen",
    q: "La virtualización es:",
    o: [
      "La abstracción de recursos lógicos que proporciona otro nivel de acceso lógico.",
      "La abstracción de recursos físicos que proporciona acceso lógico a los mismos.",
      "La abstracción de recursos lógicos que proporciona acceso físico a los mismos."
    ],
    c: 1,
    e: "La virtualización abstrae los recursos físicos (CPU, memoria, disco, red) y ofrece acceso lógico a ellos. No se limita a recursos lógicos ni proporciona acceso físico."
  },
  {
    id: "ex-10", t: "T2", s: "Examen de otro año", k: "Examen",
    q: "Respecto a Cloud Computing y Virtualización...",
    o: [
      "Es exactamente lo mismo; solo cambia el nombre comercial.",
      "El Cloud Computing es un componente dentro de la Virtualización.",
      "La Virtualización es un componente dentro del Cloud Computing."
    ],
    c: 2,
    e: "No son lo mismo: la virtualización es una tecnología que permite abstraer recursos y es un componente clave del Cloud Computing, que añade autoservicio, elasticidad y pago por uso."
  },
  {
    id: "ex-11", t: "T2", s: "Examen de otro año", k: "Examen",
    q: "¿Qué cosas se pueden virtualizar hoy en día?",
    o: [
      "Plataformas, sistemas completos y aplicaciones de usuario.",
      "Recursos hardware como la memoria RAM y escritorios completos.",
      "Todas las opciones anteriores son correctas en la actualidad."
    ],
    c: 2,
    e: "Hoy se virtualizan plataformas y sistemas completos, aplicaciones, recursos hardware como RAM, CPU o almacenamiento, y escritorios. Todas las opciones son correctas."
  },
  {
    id: "ex-12", t: "T2", s: "Examen de otro año", k: "Examen",
    q: "En la virtualización de plataforma...",
    o: [
      "Existen tres tipos: para-virtualización, virtualización de SO y completa.",
      "La emulación no se puede considerar una forma de virtualización de plataforma.",
      "Todas las opciones anteriores son correctas en el contexto de plataforma."
    ],
    c: 0,
    e: "La virtualización de plataforma incluye la paravirtualización, la virtualización de sistema operativo y la virtualización completa. La emulación es una técnica histórica, pero no se considera uno de esos tres tipos."
  },
  {
    id: "ex-13", t: "T2", s: "Examen de otro año", k: "Examen",
    q: "La virtualización se puede implementar:",
    o: [
      "Sólo mediante software.",
      "Sólo mediante hardware.",
      "Por software o por hardware."
    ],
    c: 2,
    e: "La virtualización puede implementarse por software (hipervisores, contenedores) o por hardware (asistencia del procesador, SR-IOV, etc.). No está limitada a una sola vía."
  },
  {
    id: "ex-14", t: "T2", s: "Examen de otro año", k: "Examen",
    q: "Un hipervisor de tipo 1 (o bare-metal)...",
    o: [
      "Se ejecuta sobre el hardware, sin un SO que intermedie entre las VM y el host.",
      "No se puede considerar un hipervisor real; solo los de tipo 2 lo son.",
      "Todas las opciones anteriores son correctas para un hipervisor de tipo 1."
    ],
    c: 0,
    e: "El hipervisor de tipo 1 o bare-metal se ejecuta directamente sobre el hardware, sin un sistema operativo anfitrión que intermedie. El tipo 2, en cambio, corre sobre un SO anfitrión."
  },
  {
    id: "ex-15", t: "T2", s: "Examen de otro año", k: "Examen",
    q: "En una infraestructura hiperconvergente:",
    o: [
      "En un mismo rack se integran cómputo, almacenamiento y red, pero no la virtualización.",
      "Sobre los tres componentes del rack se añade una capa de virtualización, sin integrarlos.",
      "Cómputo, almacenamiento, red y virtualización se integran en un único dispositivo."
    ],
    c: 2,
    e: "La hiperconvergencia integra en un único dispositivo el cómputo, el almacenamiento, la red y la capa de virtualización, gestionados por software. No es solo un rack con componentes separados."
  },
  {
    id: "ex-21", t: "T3", s: "Examen de otro año", k: "Examen",
    q: "Los objetos del Active Directory...",
    o: [
      "Pueden contener otros objetos (contenedores) o no contenerlos (hoja).",
      "Pueden contener otros objetos (hoja) o no contenerlos (contenedores).",
      "No pueden contener nunca otros objetos dentro del directorio."
    ],
    c: 0,
    e: "En AD hay objetos contenedor, como OU, dominios o bosques, que pueden contener otros objetos, y objetos hoja, como usuarios, grupos o impresoras, que no contienen a otros."
  },
  {
    id: "ex-22", t: "T3", s: "Examen de otro año", k: "Examen",
    q: "Respecto al Active Directory y los dominios...",
    o: [
      "Un Active Directory tiene que tener al menos un dominio.",
      "Un dominio tiene que tener al menos un controlador de dominio.",
      "Todas las opciones anteriores son correctas sin excepción."
    ],
    c: 2,
    e: "Un bosque de AD contiene al menos un dominio, y cada dominio necesita al menos un controlador de dominio que almacene y autentique su directorio. Las dos afirmaciones son ciertas."
  },
  {
    id: "ex-23", t: "T3", s: "Examen de otro año", k: "Examen",
    q: "Una Unidad Organizativa:",
    o: [
      "Es un objeto que permite organizar de forma física otros objetos.",
      "Es un objeto que permite organizar de forma lógica otros objetos.",
      "Es un objeto que permite organizar de forma física y lógica a la vez."
    ],
    c: 1,
    e: "La OU es un contenedor lógico dentro de un dominio. Sirve para organizar objetos, aplicar GPO y delegar administración; no representa una ubicación física."
  },
  {
    id: "ex-24", t: "T3", s: "Examen de otro año", k: "Examen",
    q: "Si tengo un usuario llamado Lola Mento que pertenece a la OU Llorería del dominio comomola.administraciondesistemas.com, su nombre completo sería:",
    o: [
      "CN=Lola Mento; OU=Llorería; DC=comomola.administraciondesistemas.com (un solo DC).",
      "CN=Lola Mento; OU=Llorería; DC=comomola; DC=administraciondesistemas.",
      "CN=Lola Mento; OU=Llorería; DC=comomola; DC=administraciondesistemas; DC=com."
    ],
    c: 2,
    e: "El DN incluye la ruta completa: CN del usuario, OU contenedora y cada componente del dominio como un DC distinto. Para comomola.administraciondesistemas.com son DC=comomola, DC=administraciondesistemas y DC=com."
  },
  {
    id: "ex-25", t: "T3", s: "Examen de otro año", k: "Examen",
    q: "Cuando creamos un nuevo dominio en un árbol, el controlador de dominio de este nuevo dominio almacenará la siguiente información:",
    o: [
      "La partición de directorio de dominio.",
      "La partición del directorio de esquema.",
      "Todas las opciones anteriores son correctas."
    ],
    c: 2,
    e: "El nuevo DC almacena la partición de dominio, la partición de esquema y la partición de configuración del bosque. Por eso las dos primeras opciones son correctas."
  },
  {
    id: "ex-26", t: "T3", s: "Examen de otro año", k: "Examen",
    q: "Un controlador de dominio RODC (Read-Only)...",
    o: [
      "Contiene una copia de sólo lectura del directorio activo.",
      "Se puede usar para tolerancia a fallos del Active Directory.",
      "Todas las opciones anteriores son correctas en este caso."
    ],
    c: 0,
    e: "El RODC mantiene una copia de solo lectura y se orienta a sucursales poco seguras. No se considera una solución de tolerancia a fallos del AD; para eso se usan DC en escritura."
  },
  {
    id: "ex-27", t: "T3", s: "Examen de otro año", k: "Examen",
    q: "Respecto a las Unidades Organizativas y los Grupos...",
    o: [
      "Las OU inciden sobre la funcionalidad y los grupos sobre la seguridad.",
      "Las OU inciden sobre la seguridad y los grupos sobre la funcionalidad.",
      "Ninguna de las afirmaciones anteriores es correcta en este contexto."
    ],
    c: 0,
    e: "Las OU organizan objetos y afectan a la funcionalidad (GPO, delegación); los grupos se usan para asignar permisos y afectan a la seguridad."
  },
  {
    id: "ex-28", t: "T3", s: "Examen de otro año", k: "Examen",
    q: "Las GPO (Directivas de Grupo)...",
    o: [
      "Tienen tres tipos básicos: máquina, usuario y software, este último al iniciar una aplicación.",
      "Tienen dos tipos básicos: configuración de máquina al iniciar el SO y de usuario al iniciar sesión.",
      "Tienen dos tipos básicos, máquina y usuario, que se aplican instantáneamente al configurarlas."
    ],
    c: 1,
    e: "Una GPO tiene dos tipos básicos: configuración de equipo, que se aplica al arrancar, y configuración de usuario, que se aplica al iniciar sesión. No se aplican instantáneamente al configurarlas en el servidor."
  },
  {
    id: "ex-29", t: "T3", s: "Examen de otro año", k: "Examen",
    q: "¿Qué sucede cuando dos políticas entran en conflicto?",
    o: [
      "La GPO menos específica prevalece siempre sobre la más específica.",
      "Con Block inheritance y No override, prevalece Block inheritance.",
      "Ninguna de las afirmaciones anteriores es correcta en este caso."
    ],
    c: 2,
    e: "En un conflicto normal prevalece la GPO más específica. Además, No override tiene prioridad sobre Block inheritance, así que las dos primeras afirmaciones son falsas."
  },
  {
    id: "ex-30", t: "T1", s: "Examen de otro año", k: "Examen",
    q: "Respecto a los sistemas RAID:",
    o: [
      "Se pueden implementar tanto por hardware como por software.",
      "Mejoran la fiabilidad, la disponibilidad y el rendimiento del almacenamiento.",
      "Todas las afirmaciones anteriores son correctas y se aplican a RAID."
    ],
    c: 2,
    e: "RAID se puede implementar por hardware o por software y busca mejorar la fiabilidad, la disponibilidad y el rendimiento. Por eso las dos primeras opciones son correctas."
  },
  {
    id: "ex-31", t: "T1", s: "Examen de otro año", k: "Examen",
    q: "Para implementar almacenamiento en red, podemos hacer uso de las siguientes soluciones:",
    o: [
      "NAS, con acceso a nivel de bloque mediante LUN, y SAN, con acceso a nivel de fichero.",
      "DAS, directamente conectado al servidor, NAS con acceso a bloque mediante LUN y SAN con acceso a fichero.",
      "DAS, directamente conectado al servidor, NAS con acceso a nivel de fichero y SAN con acceso a bloque mediante LUN."
    ],
    c: 2,
    e: "DAS son unidades conectadas directamente al servidor; NAS ofrece acceso a nivel de fichero; SAN ofrece acceso a nivel de bloque mediante LUN. Las opciones que intercambian NAS y SAN son incorrectas."
  },
  {
    id: "ex-32", t: "T1", s: "Examen de otro año", k: "Examen",
    q: "En la solución SAN:",
    o: [
      "El sistema de ficheros se encuentra en el nodo cliente que usa la LUN.",
      "El sistema de ficheros se encuentra en el nodo servidor de la SAN.",
      "El sistema de ficheros puede estar en cualquier nodo, cliente o servidor."
    ],
    c: 0,
    e: "SAN proporciona acceso a bloque: el almacenamiento no gestiona el sistema de ficheros. Es el nodo cliente que monta la LUN quien tiene y gestiona su sistema de ficheros."
  },
  {
    id: "ex-33", t: "T1", s: "Examen de otro año", k: "Examen",
    q: "¿Qué es una cuota de disco?",
    o: [
      "Una limitación lógica del espacio disponible en un disco físico.",
      "Una limitación física del espacio disponible en un disco lógico.",
      "Ninguna de las afirmaciones anteriores es correcta."
    ],
    c: 0,
    e: "La cuota de disco es una limitación lógica del espacio que un usuario o grupo puede usar en un volumen; no es una limitación física del disco lógico."
  },
  {
    id: "ex-34", t: "T1", s: "Examen de otro año", k: "Examen",
    q: "Respecto al plan de contingencia:",
    o: [
      "Es un plan para actuar en caso de que pase lo peor.",
      "Está formado por el DRP y el BCP de la empresa.",
      "Todas las afirmaciones anteriores son correctas."
    ],
    c: 2,
    e: "El plan de contingencia prepara la respuesta ante un desastre y engloba el DRP (recuperación ante desastres) y el BCP (continuidad del negocio). Por eso las dos primeras opciones son correctas."
  },
  {
    id: "ex-35", t: "T1", s: "Examen de otro año", k: "Examen",
    q: "Si quiero implementar una política de copias de seguridad lo más eficiente posible (tarde lo menos posible en copiar y, ante una caída, recupere todo lo más rápido posible), debo implementar:",
    o: [
      "Copias completas.",
      "Copias incrementales.",
      "Copias diferenciales."
    ],
    c: 2,
    e: "Las copias diferenciales son el mejor equilibrio: copian solo lo cambiado desde la última copia completa y, para restaurar, basta la última completa más la última diferencial. Las incrementales copian menos, pero obligan a encadenar muchas copias al restaurar."
  }
];
