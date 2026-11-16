# Test de Administración de Sistemas Inteligentes

Aplicación web de repaso para el examen de **Administración de Sistemas Inteligentes**. Funciona directamente en el navegador, sin instalación ni conexión a internet.

## ▶️ Abrir el test

**[Haz clic aquí para abrir el test](https://igallego9-stack.github.io/test-admin-sistemas/)**

No hace falta cuenta de GitHub, ni descargar archivos, ni instalar nada. Se abre directamente en el navegador.

## Contenido

- **270 preguntas** tipo test con 3 opciones, una única respuesta correcta y opciones en orden aleatorio en cada intento.
- Distractores equilibrados en longitud: la respuesta correcta no destaca por ser la más larga ni la más corta.
- Temas incluidos:
  - Tema 1: Sistemas de Información.
  - Tema 2: Virtualización (ventajas, desventajas, hipervisores y tipos).
  - Docker: imágenes, contenedores, volúmenes, redes y casos de uso.
  - Dominios, Active Directory, GPO y PowerShell.
  - **Ampliación de AD**: bloques y dominios, presentación de AD, controladores de dominio, niveles funcionales, replicación de la base de datos y actualización de GPO.
  - Clústers: teoría general, alta disponibilidad (RTO/RPO, quórum, split-brain, fencing), balanceo de carga (L4/L7, sticky sessions, health checks) y almacenamiento distribuido.
- **Simulacro de 40 preguntas** con una distribución orientativa del examen real: Tema 1 · 6, Virtualización · 9, Docker · 7, Dominios/AD · 7, Ampliación de AD · 6 y Clústers · 5.
- Cada pregunta muestra el **tema** al que pertenece y, cuando aplica, el **subtema** concreto.
- **Secciones dirigidas**: HPC vs HTC (21 preguntas entre teoría y casos prácticos), Tiempos AD (20 preguntas de replicación y GPO) y HA y LB (30 preguntas de alta disponibilidad y balanceo).
- **Práctica por temas** con selector de número de preguntas.
- Navegación con botones **Anterior**, **Saltar** y **Siguiente**; al retroceder se conserva la respuesta y su corrección.
- **Repaso de fallos** guardado en el navegador.
- Corrección inmediata con explicación breve de cada error.
- Penalización de **−0,5 por fallo** (las preguntas en blanco no restan).
- Cronómetro opcional de 45 minutos para el simulacro.
- Estadísticas por tema, revisión completa y chuleta rápida.
- Tema claro y oscuro.

## Cómo usarlo

1. Descarga o clona el repositorio.
2. Abre `index.html` con doble clic en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
3. Elige un modo: simulacro, práctica por temas o repaso de fallos.

No hace falta instalar nada. El progreso se guarda en el `localStorage` del navegador.

## Publicarlo con GitHub Pages

1. Crea un repositorio público en GitHub.
2. Sube todos los archivos de esta carpeta a la raíz del repositorio (no subas la carpeta como tal: `index.html` debe quedar en la raíz).
3. Entra en **Settings → Pages**.
4. En **Source**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`. Guarda.
6. En unos minutos estará disponible en:

   `https://TU-USUARIO.github.io/TU-REPOSITORIO/`

Puedes compartir ese enlace con tus compañeros.

## Estructura

| Archivo | Contenido |
| --- | --- |
| `index.html` | Interfaz, estilos y vistas |
| `app.js` | Lógica del test, puntuación, cronómetro y estadísticas |
| `questions.js` | Banco combinado y configuración de temas |
| `questions-t1.js` | Preguntas del Tema 1 |
| `questions-t2.js` | Preguntas de virtualización |
| `questions-docker.js` | Preguntas de Docker |
| `questions-t3.js` | Preguntas de dominios, AD, GPO y PowerShell |
| `questions-adamp.js` | Preguntas de ampliación de AD con subtemas |
| `questions-clusters.js` | Preguntas de clústers |

## Aviso

Material de estudio personal basado en los apuntes de la asignatura. No son preguntas oficiales del examen. La nota que muestra la aplicación es orientativa.
