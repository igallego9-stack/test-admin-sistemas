/* Banco combinado */
const TOPICS = {
  T1:       { label: "Tema 1 · Sistemas de Información", short: "Tema 1", color: "#6366f1" },
  T2:       { label: "Tema 2 · Virtualización",           short: "Virtualización", color: "#0ea5e9" },
  DOCKER:   { label: "Tema 2 · Docker",                  short: "Docker", color: "#14b8a6" },
  T3:       { label: "Tema 3 · Dominios y AD",           short: "Dominios/AD", color: "#f59e0b" },
  ADAMP:    { label: "Tema 3 · AD (ampliación)",         short: "AD ampliación", color: "#8b5cf6" },
  CLUSTERS: { label: "Clústers y tecnologías",           short: "Clústers", color: "#ec4899" }
};

/* Secciones dirigidas: filtran por el subtema (campo s) */
const SECTIONS = [
  {
    id: "HPC vs HTC",
    label: "HPC vs HTC",
    badge: "HPC vs HTC",
    topic: "CLUSTERS",
    color: "#ec4899",
    desc: "Casos prácticos para decidir entre alto rendimiento y alto throughput."
  },
  {
    id: "Replicación y GPO",
    label: "Tiempos AD",
    badge: "Tiempos AD",
    topic: "ADAMP",
    color: "#8b5cf6",
    desc: "Replicación de la base de datos y actualización de directivas."
  }
];

const BANK = [
  ...BANK_T1,
  ...BANK_T2,
  ...BANK_DOCKER,
  ...BANK_T3,
  ...BANK_ADAMP,
  ...BANK_CLUSTERS
];

/* Distribución del simulacro de 40 preguntas */
const EXAM_DISTRIBUTION = {
  T1: 6,
  T2: 9,
  DOCKER: 7,
  T3: 7,
  ADAMP: 6,
  CLUSTERS: 5
};
