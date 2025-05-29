// Importación en la parte superior del archivo
import wolfGrowl from "../../../assets/sfx/lobo.mp3";
import swordSlash from "../../../assets/sfx/swordSlash.mp3";

export const combate_lobo = {
  id: "combate_lobo",
  title: "Claro del bosque",
  text: "Un lobo salvaje aparece entre los arbustos... o al menos lo hizo alguna vez.",
  background: require("../../../assets/backgrounds/forest.png"),
  sound: wolfGrowl,
  generateCombatOptions: true,

  condition: {
    etiquetasExcluye: ["lobo_derrotado"],
  },

  options: [
    {
      text: "Seguir caminando.",
      condition: {
        etiquetasIncluye: ["lobo_derrotado"],
      },
      next: "evento_falso_bosque",
    },
  ],

  enemy: {
    name: "Lobo",
    hp: 2,
    dmg: 1,
    dificultad: 2,
    recompensa: { respeto: 1 },
  },

  nextOnSuccess: "post_lobo",
  nextOnFail: "herido_por_lobo",
  nextOnEscape: "primer_cruce",
};

export const post_lobo = {
  id: "post_lobo",
  title: "Tras el combate",
  text: "Sobreviviste al lobo.",
  options: [
    {
      text: "Seguir",
      etiquetas: ["lobo_derrotado"], // 👈 Agregamos la etiqueta acá
      next: "primer_cruce",
    },
  ],
  sound: swordSlash,
};

export const herido_por_lobo = {
  id: "herido_por_lobo",
  title: "Fuiste herido",
  text: "Intentaste defenderte, pero el lobo te alcanzó. Lográs escapar, sangrando.",
  effects: { salud: -2, respeto: -1 }, // Puedes ajustar esto según dificultad
  options: [
    {
      text: "Volver al cruce",
      next: "primer_cruce",
    },
  ],
  background: require("../../../assets/backgrounds/forest.png"),
  sound: swordSlash, // o quizás un sonido de herida
};
