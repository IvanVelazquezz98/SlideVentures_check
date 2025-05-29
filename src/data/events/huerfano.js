import huerfanoAvatar from "../../../assets/avatars/huerfano.png";

//-------------- ORIGEN HUERFANO -------------------------------------------------------------------------
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
      next: "reformatorio_llegada",
    },
  ],
};

// -------- ARCO REFORMATORIO -----------------------------------------------------
export const reformatorio_llegada = {
  id: "reformatorio_llegada",
  title: "Puertas cerradas",
  avatar: huerfanoAvatar,
  text: "La carreta cruza una reja oxidada. Las ruedas hacen crujir la grava del patio.\n\nFrente a vos: un edificio rectangular, de paredes rugosas, sin ventanas. En la entrada, una figura encapuchada te espera con una caja de túnicas grises.\n\nEl guardia que te escolta te suelta sin decir palabra. Tus pasos suenan demasiado fuerte.",
  text_en:
    "The carriage passes a rusted gate. The wheels crunch the gravel.\n\nIn front of you: a rectangular building with rough walls and no windows. At the entrance, a hooded figure waits with a box of grey robes.\n\nThe guard releases you without a word. Your footsteps sound too loud.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_llegada.png"),
  options: [
    {
      text: "Ponerte la túnica sin decir nada",
      text_en: "Put on the robe silently",
      etiquetas: ["obediente", "neutral"],
      next: "reformatorio_llegada_neutral",
    },
    {
      text: "Revisar la caja antes de tomar una",
      text_en: "Examine the box before picking one",
      etiquetas: ["curioso"],
      next: "reformatorio_llegada_curioso",
    },
    {
      text: "Mirar al guardia esperando una explicación",
      text_en: "Look at the guard expecting an explanation",
      etiquetas: ["inseguro", "esperanzado"],
      next: "reformatorio_llegada_esperanzado",
    },
  ],
};

export const reformatorio_llegada_neutral = {
  id: "reformatorio_llegada_neutral",
  title: "Gris sobre gris",
  text: "Tomás una túnica al azar. Es áspera, pesada. Mientras te la ponés, la figura encapuchada asiente levemente, sin emitir palabra.\n\nEl guardia se aleja sin mirarte.",
  text_en:
    "You grab a robe at random. It's rough and heavy. As you put it on, the hooded figure nods slightly, saying nothing.\n\nThe guard walks away without looking at you.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_llegada.png"),
  options: [
    {
      text: "Entrar al edificio",
      text_en: "Enter the building",
      next: "reformatorio_llegada_2",
    },
  ],
};

export const reformatorio_llegada_curioso = {
  id: "reformatorio_llegada_curioso",
  title: "Demasiado lento",
  text: "Metés la mano, revisás las túnicas buscando una más limpia, una más suave. Todas son iguales. Un golpe seco en tu espalda te sobresalta.\n\n—¿Creés que sos especial? —gruñe el guardia.\n\nTe quedás con la que ya tenías en la mano.",
  text_en:
    "You reach in, checking the robes for a cleaner one. They're all the same. A sharp smack on your back startles you.\n\n“Think you're special?” grunts the guard.\n\nYou keep the one you had grabbed.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_llegada.png"),
  options: [
    {
      text: "Entrar al edificio",
      text_en: "Enter the building",
      next: "reformatorio_llegada_2",
    },
  ],
};

export const reformatorio_llegada_esperanzado = {
  id: "reformatorio_llegada_esperanzado",
  title: "Sin respuesta",
  text: "Lo mirás, esperando que diga algo. Te devuelve la mirada por un segundo.\n\n—¿Qué mirás, basura?\n\nTe empuja hacia la caja sin más palabras.",
  text_en:
    "You look at him, hoping he'll say something. He meets your eyes for a second.\n\n“What are you staring at, scum?”\n\nHe shoves you toward the box without another word.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_llegada.png"),
  options: [
    {
      text: "Tomar una túnica",
      text_en: "Take a robe",
      next: "reformatorio_llegada_2",
    },
  ],
};

export const reformatorio_llegada_2 = {
  id: "reformatorio_llegada_2",
  title: "Pasos huecos",
  avatar: huerfanoAvatar,
  text: "Adentro huele a madera húmeda y algo quemado. Un chico más grande te espera detrás de una mesa, con un tintero y tiras de tela.\n\nSin hablarte, anota algo rápido en un papel y te entrega una insignia de tela con un símbolo bordado. Luego señala una puerta al fondo.",
  text_en:
    "Inside, it smells like damp wood and something burnt. An older boy waits behind a table, with an inkpot and fabric strips.\n\nWithout a word, he quickly writes something and hands you a cloth badge with a stitched symbol. Then points to a door at the far end.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_llegada2.png"),
  options: [
    {
      text: "Observar el símbolo antes de avanzar",
      text_en: "Examine the symbol before moving",
      etiquetas: ["atento", "curioso"],
      next: "reformatorio_llegada_2a",
    },
    {
      text: "Mirar al chico esperando que te diga algo",
      text_en: "Look at the boy, waiting for him to speak",
      etiquetas: ["esperanzado", "confundido"],
      next: "reformatorio_llegada_2b",
    },
    {
      text: "Avanzar sin detenerte",
      text_en: "Move forward without stopping",
      etiquetas: ["resignado", "cerrado"],
      next: "reformatorio_rutina",
    },
  ],
};

export const reformatorio_llegada_2a = {
  id: "reformatorio_llegada_2a",
  title: "Marca sin nombre",
  text: "El bordado es tosco, una figura en espiral, como un remolino. No hay palabras, solo costura sobre costura, como si alguien quisiera tapar lo que había debajo.",
  text_en:
    "The stitching is rough — a spiral shape, like a whirlpool. There are no words, just thread over thread, as if someone tried to cover something underneath.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_llegada2.png"),
  options: [
    {
      text: "Guardar silencio y seguir",
      text_en: "Stay silent and move on",
      next: "reformatorio_rutina",
    },
  ],
};

export const reformatorio_llegada_2b = {
  id: "reformatorio_llegada_2b",
  title: "Nada que decir",
  text: "El chico levanta apenas la mirada. Tiene ojeras, la boca apretada. Hace un gesto con la cabeza hacia la puerta, como quien se apura a terminar.",
  text_en:
    "The boy barely looks up. Dark circles under his eyes, lips pressed tight. He gestures toward the door, eager to be done.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_llegada2.png"),
  options: [
    {
      text: "Avanzar sin decir nada",
      text_en: "Move on without saying a word",
      next: "reformatorio_rutina",
    },
  ],
};

export const reformatorio_rutina = {
  id: "reformatorio_rutina",
  title: "Un día más",
  text: "La campana suena. Todos se visten igual. Caminan en fila.\n\nLas clases son breves y repetitivas: formas, gestos, palabras.\n\nDespués del almuerzo, memorizás fechas, batallas, nombres.\n\nA la tarde, tareas: limpiar, ordenar, cargar agua. Nadie habla mucho.",
  text_en:
    "The bell rings. Everyone dresses the same. They walk in line.\n\nClasses are short and repetitive: forms, gestures, words.\n\nAfter lunch, you memorize dates, battles, names.\n\nIn the afternoon: chores. Cleaning, organizing, hauling water. Few words spoken.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_rutina.png"),
  options: [
    {
      text: "Seguir la rutina sin protestar",
      text_en: "Follow the routine without complaint",
      etiquetas: ["obediente", "invisible"],
      next: "reformatorio_rutina_obediente",
    },
    {
      text: "Observar a los instructores con atención",
      text_en: "Observe the instructors closely",
      etiquetas: ["curioso", "analítico"],
      next: "reformatorio_rutina_curioso",
    },
    {
      text: "Hablar en voz baja con otros chicos",
      text_en: "Whisper to other kids",
      etiquetas: ["sociable", "rebelde", "lia"],
      next: "reformatorio_rutina_sociable",
    },
  ],
};

export const reformatorio_rutina_obediente = {
  id: "reformatorio_rutina_obediente",
  title: "Sin dejar huella",
  text: "Caminás cuando caminan. Parás cuando paran. Repetís los gestos sin pensar demasiado. Nadie te mira dos veces.\n\nAl final del día, tu cama está intacta, como si nunca hubieras estado ahí.",
  text_en:
    "You walk when they walk. You stop when they stop. You repeat the gestures without thinking. No one looks at you twice.\n\nAt the end of the day, your bed looks untouched, like you were never there.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_rutina.png"),
  options: [
    {
      text: "Esperar el tiempo libre",
      text_en: "Wait for free time",
      next: "reformatorio_exploracion_intro",
    },
  ],
};

export const reformatorio_rutina_curioso = {
  id: "reformatorio_rutina_curioso",
  title: "Grietas",
  text: "Uno de los instructores se equivoca en un gesto. Otro lo mira mal. Hay un silencio raro.\n\nDespués, en historia, se salta una página. Alguien más parpadea confundido. No sos el único que lo nota.",
  text_en:
    "One of the instructors messes up a gesture. Another glares at him. An odd silence follows.\n\nLater, in history class, a page is skipped. Someone else blinks, confused. You're not the only one who notices.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_rutina.png"),
  options: [
    {
      text: "Seguir observando en silencio",
      text_en: "Keep watching silently",
      next: "reformatorio_exploracion_intro",
    },
  ],
};

export const reformatorio_rutina_sociable = {
  id: "reformatorio_rutina_sociable",
  title: "Susurros",
  text: "Un chico te pasa un trapo para secar más rápido. Te hace una seña, como si ya supieras el juego. En la fila del comedor, te susurra un nombre: “Lia”.\n\nDespués, cuando el instructor pasa, todos se callan.",
  text_en:
    "A boy hands you a rag to clean faster. He signals you like you already know the game. In the lunch line, he whispers a name: 'Lia.'\n\nLater, when the instructor walks by, everyone goes silent.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_rutina.png"),
  options: [
    {
      text: "Recordar ese nombre",
      text_en: "Remember the name",
      etiquetas: ["conecta_con_lia"],
      next: "reformatorio_exploracion_intro",
    },
  ],
};

//--- INTRO
export const reformatorio_exploracion_intro = {
  id: "reformatorio_exploracion_intro",
  avatar: huerfanoAvatar,
  title: "Horas huecas",
  text: "Algunos días hay tiempo libre. No es mucho, pero podés elegir dónde pasar esa media hora sin que nadie te grite.\n\nEl patio está vacío. La biblioteca, casi vacía. Y los pasillos... algunos no están vigilados.",
  text_en:
    "Some days, there's free time. Not much, but enough to choose where to spend half an hour without anyone shouting.\n\nThe yard is empty. The library, almost deserted. And the hallways... some go unwatched.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_exploracion_intro.png"),
  options: [
    {
      text: "Ir al patio",
      text_en: "Go to the yard",
      next: "reformatorio_patio_1",
    },
    {
      text: "Explorar la biblioteca",
      text_en: "Explore the library",
      next: "reformatorio_biblioteca_1",
    },
    {
      text: "Caminar por los pasillos vacíos",
      text_en: "Walk the empty hallways",
      next: "reformatorio_pasillos_1",
    },
  ],
};
//--- RETORNO A LOS PASILLOS POR SEGUNDA VEZ
export const reformatorio_exploracion_retorno = {
  id: "reformatorio_exploracion_retorno",
  title: "Media hora pasa rápido",
  text: "Te alejás de donde estabas. Queda algo de tiempo para recorrer.\n\nEl patio ya no está tan vacío. En la biblioteca, alguien hojea un libro. Y los pasillos... siguen en silencio.",
  text_en:
    "You leave the place you were in. There's still some time to look around.\n\nThe yard is not so empty now. In the library, someone flips through a book. And the hallways… remain silent.",
  background: require("../../../assets/backgrounds/huerfano/reformatorio_exploracion_intro.png"),
  options: [
    {
      text: "Ir al patio",
      text_en: "Go to the yard",
      next: "reformatorio_patio_1",
    },
    {
      text: "Explorar la biblioteca",
      text_en: "Explore the library",
      next: "reformatorio_biblioteca_1",
    },
    {
      text: "Caminar por los pasillos vacíos",
      text_en: "Walk the empty hallways",
      next: "reformatorio_pasillos_1",
    },
  ],
};

//--- PATIO
export const reformatorio_patio_1 = {
  id: "reformatorio_patio_1",
  title: "Patio en silencio",
  text: "El patio está casi vacío. Hay bancos de piedra, un pozo cerrado con candado, y una cerca que mira al bosque lejano.\n\nDos chicos barren con desgano. Otro está sentado, mirando la tierra con el ceño fruncido.",
  text_en:
    "The yard is nearly empty. Stone benches, a locked well, and a fence facing the distant forest.\n\nTwo kids sweep lazily. Another sits, frowning at the ground.",
  background: require("../../../assets/backgrounds/huerfano/patio.png"),

  options: [
    {
      text: "Buscar a Lia",
      text_en: "Look for Lia",
      condition: { etiquetasIncluye: ["conecta_con_lia"] },
      next: "reformatorio_lia_1",
    },
    {
      text: "Volver",
      text_en: "Return",
      next: "reformatorio_exploracion_retorno",
    },
  ],

  randomOptions: {
    from: [
      "reformatorio_patio_chico_entrada",
      "reformatorio_patio_pozo",
      "reformatorio_patio_cerca",
    ],
    max: 1,
  },
};

//---- PATIO CHICO SOLO
export const reformatorio_patio_chico_entrada = {
  id: "reformatorio_patio_chico_entrada",
  title: "Una figura sola",
  text: "En un rincón del patio, un chico está sentado solo. Parece más pálido que los demás. No se mueve. No mira a nadie.\n\nSentís una leve curiosidad. Algo en su quietud te resulta extraño.",
  text_en:
    "In a corner of the yard, a boy sits alone. He looks paler than the others. He doesn’t move. Doesn’t look at anyone.\n\nYou feel a faint curiosity. Something about his stillness feels strange.",
  background: require("../../../assets/backgrounds/huerfano/chico_solo.png"),
  options: [
    {
      text: "Acercarte en silencio",
      text_en: "Approach quietly",
      condition: { etiquetasIncluye: ["evitado_por_chico"] },
      next: "reformatorio_patio_chico_solo_evitar",
    },
    {
      text: "Acercarte en silencio",
      text_en: "Approach quietly",
      condition: { etiquetasExcluye: ["evitado_por_chico"] },
      next: "reformatorio_patio_chico_solo",
    },
    {
      text: "Alejarte sin hacer ruido",
      text_en: "Step away quietly",
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_patio_chico_solo = {
  id: "reformatorio_patio_chico_solo",
  title: "El chico callado",
  text: "El chico te mira de reojo. Tarda en hablar.\n\n—¿Vos también te acordás de sus voces? —dice de golpe.\n\nNo explica más. Vuelve a mirar la tierra.",
  text_en:
    "The boy glances at you. Takes a while to speak.\n\n“Do you hear their voices too?” he says suddenly.\n\nHe doesn’t explain. Just looks back down at the dirt.",
 background: require("../../../assets/backgrounds/huerfano/chico_solo.png"),
  options: [
    {
      text: "Quedarte en silencio",
      text_en: "Stay silent",
      etiquetas: ["empatía"],
      condition: { etiquetasExcluye: ["evitado_por_chico"] },
      next: "reformatorio_patio_chico_solo_silencio",
    },
    {
      text: "Preguntar qué quiere decir",
      text_en: "Ask what he means",
      etiquetas: ["curioso"],
      condition: { etiquetasExcluye: ["evitado_por_chico"] },
      next: "reformatorio_patio_chico_solo_2",
    },
    {
      text: "Mencionar a Lia",
      text_en: "Mention Lia",
      condition: {
        etiquetasIncluye: ["conecta_con_lia"],
        etiquetasExcluye: ["evitado_por_chico", "chico_solo_lia"],
      },
      next: "reformatorio_patio_chico_solo_lia",
    },
    {
      id: "reformatorio_patio_chico_solo",
      condition: {
        etiquetasIncluye: ["evitado_por_chico"],
      },
      next: "reformatorio_patio_chico_solo_evitar",
    },
  ],
};

export const reformatorio_patio_chico_solo_2 = {
  id: "reformatorio_patio_chico_solo_2",
  title: "Susurros nocturnos",
  text: "—A veces sueño con un cuarto sin ventanas —dice—. Están ahí, los que no volvieron. No hablan, pero los escucho.\n\nTe mira como si esperara que vos también lo entendieras.",
  text_en:
    "“Sometimes I dream of a room with no windows,” he says. “They're there, the ones who didn’t come back. They don’t speak, but I hear them.”\n\nHe looks at you like he expects you to understand.",
  etiquetas: ["sabe_sueños"],
  options: [
    {
      text: "Alejarte en silencio",
      text_en: "Step away in silence",
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_patio_chico_solo_lia = {
  id: "reformatorio_patio_chico_solo_lia",
  title: "Mensaje críptico",
  text: "—Callate —te dice sin mirarte—. Ella dijo que esperes en la biblioteca. Que no hables con nadie más.\n\nDespués de eso, no dice ni una palabra más.",
  text_en:
    "“Be quiet,” he says without looking. “She said to wait in the library. Don’t talk to anyone else.”\n\nAfter that, he doesn’t speak another word.",
  etiquetas: ["sabe_biblioteca"],
  options: [
    {
      text: "Asentir y alejarte",
      text_en: "Nod and walk away",
      etiquetas: ["chico_solo_lia"],
      next: "reformatorio_exploracion_retorno",
    },
    {
      text: "Dudar... insitir en preguntar",
      text_en: "Hesitate… but leave anyway",
      etiquetas: ["confundido"],
      next: "reformatorio_patio_chico_solo_insiste",
    },
  ],
};

export const reformatorio_patio_chico_solo_insiste = {
  id: "reformatorio_patio_chico_solo_insiste",
  title: "Cierre abrupto",
  text: "Te quedás esperando una palabra más. El chico no te mira. Ni siquiera parpadea.\n\nPasan los segundos. Nada cambia. Solo el viento mueve el polvo entre ustedes.",
  text_en:
    "You linger, waiting for another word. The boy doesn't look at you. Doesn’t even blink.\n\nSeconds pass. Nothing changes. Only the wind moves the dust between you.",
  etiquetas: ["evitado_por_chico"],
  options: [
    {
      text: "Irte finalmente",
      text_en: "Finally walk away",
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_patio_chico_solo_silencio = {
  id: "reformatorio_patio_chico_solo_silencio",
  title: "Silencio compartido",
  text: "Se quedan así un rato. Dos figuras quietas, mirando al suelo.\n\nNada se dice, pero algo cambia. Como si compartieran un recuerdo que ninguno entiende del todo.",
  text_en:
    "You stay like that for a while. Two quiet figures, staring at the ground.\n\nNothing is said, but something shifts. Like you shared a memory neither fully understands.",
  options: [
    {
      text: "Levantarte en silencio",
      text_en: "Get up quietly",
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_patio_chico_solo_evitar = {
  id: "reformatorio_patio_chico_solo_evitar",
  title: "El chico te evita",
  text: "Apenas te acercás, el chico se aleja sin decir palabra.\n\nClaramente no quiere volver a hablar con vos.",
  text_en:
    "As you approach, the boy steps away without a word.\n\nHe clearly doesn’t want to talk to you again.",
  options: [
    {
      text: "Dejarlo en paz",
      text_en: "Leave him be",
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

//--- PATIO POZO
export const reformatorio_patio_pozo = {
  id: "reformatorio_patio_pozo",
  title: "El pozo cerrado",
  text: "Te asomás al borde. El candado parece viejo, pero resistente. Escuchás un leve goteo abajo.\n\nPodrías intentar forzarlo... si nadie mira.",
  text_en:
    "You lean over the edge. The lock looks old but strong. You hear faint dripping below.\n\nYou could try to force it... if no one is watching.",
  special: "roll_dado",
  check: 5,
  successNext: "reformatorio_patio_pozo_abierto",
  failNext: "reformatorio_patio_pozo_falla",
  options: [
    {
      text: "No arriesgarse",
      text_en: "Don't risk it",
      condition: { etiquetasIncluye: ["obediente", "inseguro"] },
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_patio_cerca = {
  id: "reformatorio_patio_cerca",
  title: "La cerca vieja",
  text: "Entre dos tablas, notás algo tallado con cuidado: una espiral incompleta, igual a la de tu insignia.\n\nParece hecho hace mucho.",
  text_en:
    "Between two boards, you notice a carefully carved shape: an incomplete spiral, just like the one on your badge.\n\nLooks old.",
  options: [
    {
      text: "Tocar el símbolo",
      text_en: "Touch the carving",
      next: "reformatorio_patio_cerca_tacto",
    },
    {
      text: "Analizar el patrón",
      text_en: "Analyze the pattern",
      condition: { etiquetasIncluye: ["analítico", "curioso"] },
      next: "reformatorio_patio_cerca_analisis",
    },
    {
      text: "Alejarte sin hacer ruido",
      text_en: "Step away silently",
      next: "reformatorio_exploracion_retorno",
    },
  ],
};
