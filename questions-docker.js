/* Tema 2 - Docker */
const BANK_DOCKER = [
  {
    id: "dk-01", t: "DOCKER", k: "Teoría",
    q: "¿Qué es Docker?",
    o: [
      "Un proyecto de software libre que sistematiza el establecimiento de aplicaciones basadas en contenedores.",
      "Un hipervisor de tipo 1 que sustituye a VMware ESXi.",
      "Un sistema operativo Linux con kernel propio."
    ],
    c: 0,
    e: "Docker es un proyecto de software libre que sistematiza las aplicaciones basadas en contenedores y añade una capa de abstracción y automatización de la virtualización de aplicaciones en múltiples SO."
  },
  {
    id: "dk-02", t: "DOCKER", k: "Teoría",
    q: "¿Qué hace el daemon de Docker?",
    o: [
      "Crea y administra objetos Docker como imágenes, contenedores, redes y volúmenes.",
      "Es la interfaz gráfica del usuario.",
      "Es un registro público de imágenes."
    ],
    c: 0,
    e: "El daemon es el que hace el trabajo pesado: construir, ejecutar y distribuir contenedores, además de crear y administrar imágenes, redes y volúmenes. El cliente se comunica con él mediante la API."
  },
  {
    id: "dk-03", t: "DOCKER", k: "Teoría",
    q: "¿Cómo se comunican el cliente y el daemon de Docker?",
    o: [
      "Mediante una API REST, a través de sockets UNIX o de una interfaz de red.",
      "Únicamente mediante USB.",
      "Solo mediante FTP."
    ],
    c: 0,
    e: "Cliente y daemon pueden ejecutarse en el mismo sistema o en sistemas distintos. Se comunican con una API REST a través de sockets UNIX o de una interfaz de red."
  },
  {
    id: "dk-04", t: "DOCKER", k: "Teoría",
    q: "¿Qué es Docker Hub?",
    o: [
      "Un registro público de imágenes que cualquiera puede usar y que Docker consulta por defecto.",
      "El hipervisor que ejecuta los contenedores.",
      "Un tipo de Dockerfile."
    ],
    c: 0,
    e: "Un registro almacena imágenes. Docker Hub es el registro público por defecto; también se puede ejecutar un registro privado. Docker está configurado para buscar imágenes allí de manera predeterminada."
  },
  {
    id: "dk-05", t: "DOCKER", k: "Teoría",
    q: "¿Qué hace el comando docker pull?",
    o: [
      "Descarga una imagen desde el registro configurado.",
      "Sube una imagen al registro.",
      "Elimina un contenedor en ejecución."
    ],
    c: 0,
    e: "docker pull descarga las imágenes requeridas desde el registro configurado. docker push hace lo contrario: inserta una imagen en el registro."
  },
  {
    id: "dk-06", t: "DOCKER", k: "Teoría",
    q: "¿Qué hace el comando docker push?",
    o: [
      "Sube una imagen al registro configurado.",
      "Descarga una imagen del registro.",
      "Lista los volúmenes existentes."
    ],
    c: 0,
    e: "docker push inserta la imagen en el registro configurado. Es el complemento de docker pull, que la descarga."
  },
  {
    id: "dk-07", t: "DOCKER", k: "Teoría",
    q: "¿Qué es una imagen Docker?",
    o: [
      "Una plantilla de solo lectura con instrucciones para crear un contenedor.",
      "Una instancia en ejecución de un contenedor.",
      "Un contenedor que ya se ha detenido."
    ],
    c: 0,
    e: "La imagen es una plantilla de solo lectura que incluye todo lo necesario para ejecutar una aplicación. Normalmente se basa en otra imagen con personalizaciones adicionales."
  },
  {
    id: "dk-08", t: "DOCKER", k: "Teoría",
    q: "¿Cuántos contenedores se pueden crear a partir de una imagen?",
    o: [
      "Múltiples contenedores.",
      "Solo uno, y hay que borrarlo para crear otro.",
      "Ninguno: la imagen solo se almacena."
    ],
    c: 0,
    e: "Con una imagen se pueden crear múltiples contenedores. Cada contenedor es una instancia ejecutable de esa imagen, con su propia configuración."
  },
  {
    id: "dk-09", t: "DOCKER", k: "Teoría",
    q: "¿Qué es un contenedor Docker?",
    o: [
      "Una instancia ejecutable de una imagen.",
      "Una plantilla de solo lectura.",
      "Un registro privado de imágenes."
    ],
    c: 0,
    e: "El contenedor es una instancia ejecutable de una imagen. Se define por su imagen y por las opciones de configuración que se le proporcionan al crearlo o iniciarlo."
  },
  {
    id: "dk-10", t: "DOCKER", k: "Teoría",
    q: "¿Qué ocurre cuando se ejecuta una imagen Docker?",
    o: [
      "Se convierte automáticamente en un contenedor.",
      "Se convierte en otra imagen.",
      "No se puede ejecutar una imagen directamente."
    ],
    c: 0,
    e: "En cuanto se ejecuta una imagen, automáticamente se convierte en un contenedor. La imagen es la plantilla; el contenedor es la instancia en ejecución."
  },
  {
    id: "dk-11", t: "DOCKER", k: "Teoría",
    q: "En un Dockerfile, ¿qué crea cada instrucción?",
    o: [
      "Una capa en la imagen.",
      "Un contenedor nuevo.",
      "Un volumen persistente."
    ],
    c: 0,
    e: "Cada instrucción de un Dockerfile crea una capa en la imagen. Cuando se cambia el Dockerfile y se reconstruye, solo se reconstruyen las capas que han cambiado."
  },
  {
    id: "dk-12", t: "DOCKER", k: "Teoría",
    q: "Al reconstruir una imagen tras modificar el Dockerfile, ¿qué capas se reconstruyen?",
    o: [
      "Solo las capas que han cambiado.",
      "Siempre todas, desde cero.",
      "Ninguna: hay que crear una imagen nueva manualmente."
    ],
    c: 0,
    e: "Docker reutiliza las capas no modificadas y solo reconstruye las que han cambiado. Esto es parte de lo que hace que las imágenes sean ligeras, pequeñas y rápidas."
  },
  {
    id: "dk-13", t: "DOCKER", k: "Teoría",
    q: "¿Qué estructura básica tiene un Dockerfile?",
    o: [
      "Empieza con FROM y termina con CMD.",
      "Empieza con CMD y termina con FROM.",
      "No tiene un orden establecido."
    ],
    c: 0,
    e: "Un Dockerfile parte siempre de una línea inicial FROM y un comando final CMD. FROM indica la imagen base; CMD, el comando que se ejecuta en el contenedor."
  },
  {
    id: "dk-14", t: "DOCKER", k: "Teoría",
    q: "¿Qué comando genera una imagen a partir de un Dockerfile?",
    o: [
      "docker image build -t nombreimagen directorio",
      "docker run build nombreimagen",
      "docker pull build nombreimagen"
    ],
    c: 0,
    e: "Para generar una imagen se usa docker image build -t <nombreimagen> <directorio-Dockerfile>. docker run ejecuta contenedores y docker pull descarga imágenes."
  },
  {
    id: "dk-15", t: "DOCKER", k: "Teoría",
    q: "¿Dónde se almacenan los datos de un volumen Docker?",
    o: [
      "En una localización especial fuera del sistema de ficheros del contenedor (UFS).",
      "Dentro del contenedor, y se borran con él.",
      "Solo en la imagen original."
    ],
    c: 0,
    e: "Los volúmenes son localizaciones especiales fuera del UFS del contenedor para almacenar datos persistentes. Deben borrarse manualmente y pueden nombrarse para identificarlos."
  },
  {
    id: "dk-16", t: "DOCKER", k: "Teoría",
    q: "¿Qué es un bind mount en Docker?",
    o: [
      "Un mapeo de un fichero o directorio del host dentro de un fichero o directorio del contenedor.",
      "Un volumen gestionado por Docker fuera del host.",
      "Una instrucción obligatoria del Dockerfile."
    ],
    c: 0,
    e: "El bind mount monta un directorio local de la máquina dentro del contenedor. Son dos localizaciones apuntando al mismo fichero; no es un volumen gestionado por Docker."
  },
  {
    id: "dk-17", t: "DOCKER", k: "Teoría",
    q: "¿Se puede especificar un bind mount en el Dockerfile?",
    o: [
      "No; se especifica como parámetro del comando container run.",
      "Sí, con la instrucción FROM.",
      "Sí, siempre con CMD."
    ],
    c: 0,
    e: "Los bind mounts no se pueden especificar en el Dockerfile: se indican como parámetro del comando container run, con -v <pathEnHost:pathEnContenedor>. Los volúmenes también se asocian al ejecutar el contenedor."
  },
  {
    id: "dk-18", t: "DOCKER", k: "Teoría",
    q: "¿Qué comando lista los volúmenes existentes?",
    o: ["docker volume ls", "docker image ls", "docker container ls"],
    c: 0,
    e: "docker volume ls lista los volúmenes. docker image ls lista imágenes y docker container ls lista contenedores."
  },
  {
    id: "dk-19", t: "DOCKER", k: "Caso práctico",
    q: "En el comando docker container run -d --name mysql -v mysql-db:/var/lib/mysql mysql, ¿qué representa -v mysql-db:/var/lib/mysql?",
    o: [
      "Un volumen nombrado mysql-db montado en la ruta /var/lib/mysql del contenedor.",
      "Un bind mount de la carpeta /var/lib/mysql del host.",
      "La publicación del puerto 3306."
    ],
    c: 0,
    e: "La sintaxis -v <nombreVolumen>:<rutaContenedor> asocia un volumen nombrado a una ruta del contenedor. Un bind mount usaría una ruta del host antes de los dos puntos."
  },
  {
    id: "dk-20", t: "DOCKER", k: "Teoría",
    q: "¿Qué ocurre con los cambios realizados dentro de un contenedor si se elimina?",
    o: [
      "Se pierden, porque los contenedores son efímeros.",
      "Se guardan automáticamente en la imagen original.",
      "Se guardan siempre en un volumen sin configurarlo."
    ],
    c: 0,
    e: "Los contenedores son normalmente inmutables y efímeros: los cambios se conservan mientras se arrancan o paran, pero al borrar el contenedor se pierden. Para persistir datos se usan volúmenes o bind mounts."
  },
  {
    id: "dk-21", t: "DOCKER", k: "Teoría",
    q: "¿Qué ventaja de Docker se relaciona con CI/CD?",
    o: [
      "Los contenedores son excelentes para integración continua y entrega continua.",
      "Docker solo sirve para desarrollo local.",
      "Docker impide automatizar los despliegues."
    ],
    c: 0,
    e: "Docker ofrece entrega rápida y consistente: los contenedores son excelentes para integración continua y flujos de entrega continua (CI/CD), y permiten entornos estandarizados."
  },
  {
    id: "dk-22", t: "DOCKER", k: "Teoría",
    q: "¿Qué significa que Docker permite cargas de trabajo altamente portátiles?",
    o: [
      "Que pueden ejecutarse en el portátil, en máquinas físicas o virtuales del centro de datos, en la nube o en una combinación.",
      "Que solo funcionan en Linux.",
      "Que solo funcionan en un servidor físico concreto."
    ],
    c: 0,
    e: "Los contenedores Docker pueden ejecutarse en el portátil del desarrollador, en máquinas físicas o virtuales del centro de datos, en proveedores cloud o en combinación. Esa portabilidad es una ventaja clave."
  },
  {
    id: "dk-23", t: "DOCKER", k: "Teoría",
    q: "¿Por qué Docker permite ejecutar más cargas de trabajo en el mismo hardware?",
    o: [
      "Porque es ligero y rápido, al compartir el kernel y no necesitar una VM completa por aplicación.",
      "Porque requiere una máquina virtual por cada contenedor.",
      "Porque solo funciona en mainframes."
    ],
    c: 0,
    e: "Docker es ligero y rápido y ofrece una alternativa rentable a las VM basadas en hipervisor. Al compartir kernel se logra alta densidad: más cargas de trabajo con menos recursos."
  },
  {
    id: "dk-24", t: "DOCKER", k: "Teoría",
    q: "¿Cuál de las siguientes NO es una ventaja de Docker?",
    o: [
      "Proporcionar el mismo aislamiento completo de hardware que una máquina virtual.",
      "Entrega rápida y consistente de aplicaciones.",
      "Portabilidad y escalado de cargas de trabajo."
    ],
    c: 0,
    e: "Los contenedores comparten el kernel del host, por lo que su aislamiento no es equivalente al de una VM con su propio SO y hardware simulado. Las otras dos sí son ventajas de Docker."
  },
  {
    id: "dk-25", t: "DOCKER", k: "Caso práctico",
    q: "Un equipo tiene problemas porque el código funciona en desarrollo pero falla en producción. ¿Qué ventaja de Docker ataca directamente ese problema?",
    o: [
      "Entornos estandarizados y consistentes: el contenedor es el mismo en desarrollo, pruebas y producción.",
      "Mayor aislamiento de hardware que una VM.",
      "La sustitución del sistema operativo anfitrión."
    ],
    c: 0,
    e: "Docker empaqueta la aplicación y sus dependencias en una imagen, de modo que el entorno es consistente. Eso reduce los fallos por diferencias entre desarrollo y producción."
  },
  {
    id: "dk-26", t: "DOCKER", k: "Teoría",
    q: "¿Qué comparación usa el tema para explicar VM frente a contenedor?",
    o: [
      "La VM es como un chalet con sus propias instalaciones; el contenedor, como un apartamento que comparte infraestructura.",
      "La VM es un apartamento y el contenedor un chalet.",
      "Ambos son chalets independientes."
    ],
    c: 0,
    e: "La analogía del tema: las VM son chalets con calefacción, tuberías y aire acondicionado propios; los contenedores son apartamentos que comparten partes de la infraestructura. Ilustra el mayor peso de la VM."
  },
  {
    id: "dk-27", t: "DOCKER", k: "Teoría",
    q: "En un Dockerfile, ¿qué indica la instrucción EXPOSE 8080?",
    o: [
      "Que el contenedor estará escuchando en el puerto 8080 en tiempo de ejecución.",
      "Que se copie el puerto 8080 al host.",
      "Que se abra el puerto 8080 en el cortafuegos del host."
    ],
    c: 0,
    e: "EXPOSE documenta el puerto en el que el contenedor escuchará en ejecución. No publica el puerto en el host por sí sola; para eso se usa -p al ejecutar el contenedor."
  },
  {
    id: "dk-28", t: "DOCKER", k: "Teoría",
    q: "¿Cuáles de estas dos formas son válidas para ejecutar comandos en Docker?",
    o: [
      "docker container run y docker run.",
      "docker image run y docker container build.",
      "docker push run y docker pull run."
    ],
    c: 0,
    e: "Docker admite la forma con comando de gestión y subcomando (docker container run) y la forma abreviada (docker run). Para ver los comandos está docker --help."
  }
];
