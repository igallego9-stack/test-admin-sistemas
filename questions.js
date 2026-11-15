/* Banco combinado */
const TOPICS = {
  T1:       { label: "Tema 1 · Sistemas de Información", short: "Tema 1", color: "#6366f1" },
  T2:       { label: "Tema 2 · Virtualización",           short: "Virtualización", color: "#0ea5e9" },
  DOCKER:   { label: "Tema 2 · Docker",                  short: "Docker", color: "#14b8a6" },
  T3:       { label: "Tema 3 · Dominios y AD",           short: "Dominios/AD", color: "#f59e0b" },
  CLUSTERS: { label: "Clústers y tecnologías",           short: "Clústers", color: "#ec4899" }
};

const BANK = [
  ...BANK_T1,
  ...BANK_T2,
  ...BANK_DOCKER,
  ...BANK_T3,
  ...BANK_CLUSTERS
];

/* Distribución del simulacro de 40 preguntas */
const EXAM_DISTRIBUTION = {
  T1: 7,
  T2: 11,
  DOCKER: 8,
  T3: 8,
  CLUSTERS: 6
};
