import huerfanoAvatar from "../../../assets/avatars/huerfano.png";

export const origen_huerfano_1 = {
  id: "origen_huerfano_1",
  title: "La noche del eco",
  avatar: huerfanoAvatar,
  text: "Despertás por un ruido. Voces. Tu madre te abraza fuerte, te dice que no hagas ruido.\n\nLa puerta se rompe. Gritos. Luces extrañas. Y luego… silencio.",
  text_en:
    "You wake up to a noise. Voices. Your mother hugs you tightly, tells you not to make a sound.\n\nThe door breaks. Screams. Strange lights. And then... silence.",
  background: require("../../../assets/backgrounds/huerfano/huerfano_1.png"),
  // sound: require("../../../assets/sfx/whispers_door_crash.mp3"),
  options: [
    {
      text: "Llamar",
      text_en: "Call out",
      etiquetas: ["recuerdo_madre"],
      next: "origen_huerfano_1a",
    },
    {
      text: "Esconderse",
      text_en: "Hide",
      etiquetas: ["recuerdo_miedo"],
      next: "origen_huerfano_1b",
    },
    {
      text: "Observar",
      text_en: "Watch",
      etiquetas: ["recuerdo_curiosidad"],
      next: "origen_huerfano_1c",
    },
  ],
};

export const origen_huerfano_1a = {
  id: "origen_huerfano_1a",
  title: "Grito",
  text: "No entendés. Solo gritás su nombre. Un destello azul te ciega.\n\nCuando volvés a abrir los ojos, la casa está vacía. Solo quedó tu manta y el eco del silencio.",
  text_en:
    "You don’t understand. You just scream her name. A blue flash blinds you.\n\nWhen you open your eyes again, the house is empty. Only your blanket remains... and the echo of silence.",
  background: require("../../../assets/backgrounds/huerfano/huerfano_1.png"),
  options: [
    {
      text: "Seguir",
      text_en: "Continue",
      next: "origen_huerfano_2",
    },
  ],
};

export const origen_huerfano_1b = {
  id: "origen_huerfano_1b",
  title: "Debajo de la cama",
  text: "Te metés bajo la cama como te enseñaron. Contás hasta diez… hasta cien. Escuchás su nombre. Su voz. Luego, pasos. Gritos. Nada.\n\nCuando salís, todo terminó.",
  text_en:
    "You crawl under the bed, just like they taught you. You count to ten... to a hundred. You hear her name. Her voice. Then footsteps. Screams. Nothing.\n\nWhen you come out, everything is over.",
  background: require("../../../assets/backgrounds/huerfano/huerfano_1.png"),
  options: [
    {
      text: "Seguir",
      text_en: "Continue",
      next: "origen_huerfano_2",
    },
  ],
};

export const origen_huerfano_1c = {
  id: "origen_huerfano_1c",
  title: "Entre las sombras",
  text: "Espiás desde la puerta entreabierta. Hombres con capas y símbolos. Un círculo de luz. Tu madre llorando. Tu padre intentando detenerlos…\n\nDespués, todo se oscurece.",
  text_en:
    "You peek through the half-open door. Men in cloaks and symbols. A circle of light. Your mother crying. Your father trying to stop them...\n\nThen, everything fades to black.",
  background: require("../../../assets/backgrounds/huerfano/huerfano_1.png"),
  options: [
    {
      text: "Seguir",
      text_en: "Continue",
      next: "origen_huerfano_2",
    },
  ],
};

export const origen_huerfano_2 = {
  id: "origen_huerfano_2",
  title: "El traslado",
  text: "Dijeron que era por tu bien. Que tus padres rompieron las reglas. Una carreta llegó al amanecer y te llevó lejos de casa.\n\nNadie respondió tus preguntas.",
  text_en:
    "They said it was for your own good. That your parents broke the rules. A carriage came at dawn and took you far from home.\n\nNo one answered your questions.",
  background: require("../../../assets/backgrounds/huerfano/huerfano_2.png"),
  options: [
    {
      text: "Aceptar",
      text_en: "Accept",
      next: "origen_huerfano_3",
    },
  ],
};
