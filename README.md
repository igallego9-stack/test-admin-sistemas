# Test de Administración de Sistemas Inteligentes

Aplicación web de repaso para el examen de **Administración de Sistemas Inteligentes**. Funciona directamente en el navegador, sin instalación ni conexión a internet.

## Contenido

- **168 preguntas** tipo test con 3 opciones y una única respuesta correcta.
- Temas incluidos:
  - Tema 1: Sistemas de Información.
  - Tema 2: Virtualización (ventajas, desventajas, hipervisores y tipos).
  - Docker: imágenes, contenedores, volúmenes, redes y casos de uso.
  - Dominios, Active Directory, GPO y PowerShell.
  - Clústers: alta disponibilidad, balanceo de carga, HPC y almacenamiento distribuido.
- **Simulacro de 40 preguntas** con una distribución orientativa del examen real.
- **Práctica por temas** con selector de número de preguntas.
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
| `questions-clusters.js` | Preguntas de clústers |

## Aviso

Material de estudio personal basado en los apuntes de la asignatura. No son preguntas oficiales del examen. La nota que muestra la aplicación es orientativa.
