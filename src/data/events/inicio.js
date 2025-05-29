export const intro_1 = {
  id: "intro_1",
  title: "Hace siglos",
  text: "Hace siglos, el cielo estalló como un cristal maldito.\n\nTormentas de éter desgarraban los cielos, consumiendo bosques, pueblos y almas.\n\nLas formas conocidas se retorcían… y la realidad dejó de obedecer.",
  text_en:
    "Centuries ago, the skies shattered like a cursed crystal.\n\nEther storms tore through the heavens, devouring forests, villages, and souls.\n\nWhat was once familiar twisted… and reality ceased to obey.",
  background: require("../../../assets/backgrounds/intro/intro_1.png"),
  options: [
    {
      text: "Avanzar",
      text_en: "Continue",
      next: "intro_2",
    },
  ],
};

export const intro_2 = {
  id: "intro_2",
  title: "El éxodo",
  text: "En medio del terror, cuando la noche ya no distinguía el día,\n\nun grupo de sabios, soldados y familias encontró refugio.\n\nUn claro oculto, rodeado por piedras de obsidiana azul que ardían sin fuego…\n\nFue allí donde nació la esperanza.",
  text_en:
    "In the midst of terror, when night no longer distinguished day,\n\na group of sages, soldiers, and families found shelter.\n\nA hidden glade, encircled by blue obsidian stones that burned without fire…\n\nIt was there that hope was born.",
  background: require("../../../assets/backgrounds/intro/intro_2.png"),
  options: [
    {
      text: "Avanzar",
      text_en: "Continue",
      next: "intro_3",
    },
  ],
};

export const intro_3 = {
  id: "intro_3",
  title: "La fundación",
  text: "Con sangre y piedra, alzaron una muralla tan alta como su miedo.\n\nDel refugio nació una ciudad.\n\nSu nombre era Ambur… y su lema, 'La muralla es vida'.",
  text_en:
    "With blood and stone, they raised a wall as tall as their fear.\n\nFrom the refuge, a city was born.\n\nIts name was Ambur… and its motto, 'The wall is life.'",
  background: require("../../../assets/backgrounds/intro/intro_3.png"),
  options: [
    {
      text: "Avanzar",
      text_en: "Continue",
      next: "intro_3b",
    },
  ],
};

export const intro_3b = {
  id: "intro_3b",
  title: "El legado",
  text: "Los años pasaron, y con ellos la magia se volvió ley.\n\nSolo unos pocos podían estudiarla dentro de las murallas. El resto del mundo… fue condenado al olvido.\n\nEn Ambur, el poder se enseña. En las Afueras, se teme.",
  text_en:
    "Years passed, and with them magic became law.\n\nOnly a few were allowed to study it within the walls.\n\nThe rest of the world… was condemned to oblivion.\n\nIn Ambur, power is taught. In the Outskirts, it is feared.",
  background: require("../../../assets/backgrounds/intro/intro_3b.png"),
  options: [
    {
      text: "Avanzar",
      text_en: "Continue",
      next: "intro_4",
    },
  ],
};

export const intro_4 = {
  id: "intro_4",
  title: "Tu destino",
  text: "Una voz te habla entre sueños...\n\nAhora es tu turno. Esta es tu historia.",
  text_en:
    "On the threshold of dreams, a voice calls to you.\n\nIt has no face, but it knows you.\n\nIt has no name, but it waits.\n\nThe world has changed, and now it's your turn to leave a mark.",
  background: require("../../../assets/backgrounds/intro/intro_4.png"),
  options: [
    {
      text: "Resistir",
      text_en: "Endure",
      etiquetas: ["perfil_errante"],
      next: "intro_5",
    },
    {
      text: "Preguntar",
      text_en: "Question",
      etiquetas: ["perfil_brujo"],
      next: "intro_5",
    },
    {
      text: "Exigir",
      text_en: "Demand",
      etiquetas: ["perfil_noble"],
      next: "intro_5",
    },
  ],
};

export const intro_5 = {
  id: "intro_5",
  title: "Tu esencia",
  text: "Recordás un momento decisivo en tu vida...",
  text_en: "You recall a pivotal moment in your life...",
  background: require("../../../assets/backgrounds/intro/intro_5.png"),
  options: [
    {
      text: "Proteger",
      text_en: "Protect",
      etiquetas: ["perfil_huerfano"],
      next: "intro_6",
    },
    {
      text: "Observar",
      text_en: "Observe",
      etiquetas: ["perfil_brujo"],
      next: "intro_6",
    },
    {
      text: "Escapar",
      text_en: "Escape",
      etiquetas: ["perfil_errante"],
      next: "intro_6",
    },
  ],
};

export const intro_6 = {
  id: "intro_6",
  title: "Tu reflejo",
  text: "Alguien te mira en un charco de agua. Te ves por dentro.",
  text_en: "Someone looks at you through a puddle. You see yourself within.",
  background: require("../../../assets/backgrounds/intro/intro_6.png"),
  options: [
    {
      text: "Planear",
      text_en: "Plan",
      etiquetas: ["perfil_noble"],
      next: "intro_resultado",
    },
    {
      text: "Sobrevivir",
      text_en: "Survive",
      etiquetas: ["perfil_huerfano"],
      next: "intro_resultado",
    },
    {
      text: "Sentir",
      text_en: "Feel",
      etiquetas: ["perfil_brujo"],
      next: "intro_resultado",
    },
  ],
};

export const intro_resultado = {
  id: "intro_resultado",
  title: "Tu reflejo final",
  text: "Ahora sabés quién sos.\nEl mundo te espera.",
  text_en: "Now you know who you are.\nThe world awaits.",
  background: require("../../../assets/backgrounds/inicio.png"),
  options: [
    {
      text: "Trascender",
      text_en: "Transcend",

      condition: { etiquetasIncluye: ["perfil_brujo"] },
      next: "origen_brujo",
    },
    {
      text: "Ascender",
      text_en: "Rise",
      condition: { etiquetasIncluye: ["perfil_noble"] },
      next: "origen_noble",
    },
    {
      text: "Resurgir",
      text_en: "Reclaim",
      condition: { etiquetasIncluye: ["perfil_huerfano"] },
      next: "origen_huerfano_1",
    },
    {
      text: "Revelarte",
      text_en: "Reveal",
      condition: { etiquetasIncluye: ["perfil_errante"] },
      next: "origen_errante",
    },
  ],
};

export const inicio_origen = {
  id: "inicio_origen",
  title: "Orígenes del viajero",
  text: "¿De dónde venís?",
  options: [
    {
      title: "Negarte a recordar (errante)",
      text: "Negarte a recordar (errante)",
      effects: { respeto: 1 },
      next: "origen_errante",
    },
  ],
  randomOptions: {
    from: ["origen_noble", "origen_orfano", "origen_brujo"],
    max: 2,
  },
  background: require("../../../assets/backgrounds/inicio.png"),
};
