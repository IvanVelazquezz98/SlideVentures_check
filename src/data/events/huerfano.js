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
    max: 2,
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
      etiquetas: ["conocio_chico_solo"],
      next: "reformatorio_patio_chico_solo",
    },
    {
      text: "Alejarte sin hacer ruido",
      text_en: "Step away quietly",
      next: "reformatorio_patio_1",
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
      next: "reformatorio_patio_1",
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
      next: "reformatorio_patio_1",
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
      next: "reformatorio_patio_1",
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
      next: "reformatorio_patio_1",
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
      next: "reformatorio_patio_1",
    },
  ],
};

//---- PARTIO CERCA
export const reformatorio_patio_cerca = {
  id: "reformatorio_patio_cerca",
  title: "La cerca vieja",
  text: "Entre dos tablas, notás algo tallado con cuidado: una espiral incompleta, igual a la de tu insignia.\n\nParece hecho hace mucho.",
  text_en:
    "Between two boards, you notice a carefully carved shape: an incomplete spiral, just like the one on your badge.\n\nLooks old.",
  background: require("../../../assets/backgrounds/huerfano/patio_cerca_lia.png"),
  options: [
    {
      text: "Tocar el símbolo",
      text_en: "Touch the carving",
      next: "reformatorio_patio_cerca_tacto",
    },
    {
      text: "Analizar el patrón",
      text_en: "Analyze the pattern",
      condition: { etiquetasIncluye: ["curioso"] },
      next: "reformatorio_patio_cerca_analisis",
    },
    {
      text: "Alejarte sin hacer ruido",
      text_en: "Step away silently",
      next: "reformatorio_patio_1",
    },
  ],
};

export const reformatorio_patio_cerca_tacto = {
  id: "reformatorio_patio_cerca_tacto",
  title: "Huella persistente",
  text: "La madera está áspera, pero el grabado tiene una hendidura suave, como si muchas manos lo hubieran tocado antes.\n\nPor un momento, sentís un leve cosquilleo en la palma. Nada más.",
  text_en:
    "The wood is rough, but the carving feels smooth—like many hands touched it before.\n\nFor a moment, there's a faint tingle in your palm. Nothing more.",
  options: [
    {
      text: "Alejarte en silencio",
      text_en: "Step away silently",
      etiquetas: ["exploro_cerca"],
      next: "reformatorio_patio_cerca",
    },
  ],
};

export const reformatorio_patio_cerca_analisis = {
  id: "reformatorio_patio_cerca_analisis",
  title: "Grabados y nombres",
  text: 'Alrededor del símbolo hay más marcas: letras, rayas, nombres casi borrados.\n\nUno resalta entre los demás: "Tamar". Otro, apenas visible, parece ser "Lia".\n\nNo sabés quiénes fueron, pero alguien quiso que quedaran ahí.',
  text_en:
    "Around the symbol are more carvings: lines, faded letters, names.\n\nOne stands out: 'Tamar'. Another, barely visible, might be 'Lia'.\n\nYou don’t know who they were, but someone wanted them remembered.",
  options: [
    {
      text: "Dejar el lugar en silencio",
      text_en: "Leave quietly",
      etiquetas: ["exploro_cerca"],
      next: "reformatorio_patio_cerca",
    },
  ],
};

//--- PATIO POZO
export const reformatorio_patio_pozo = {
  id: "reformatorio_patio_pozo",
  title: "El pozo cerrado",
  text: "Cerca de la pared norte hay un pozo de piedra cubierto por una tapa metálica. De las rendijas se escapa un olor húmedo, algo podrido.\n\nNo parece que nadie se acerque nunca.",
  background: require("../../../assets/backgrounds/huerfano/pozo.png"),
  options: [
    {
      text: "Intentar abrir la tapa",
      text_en: "Try to open the lid",
      special: "roll_dado",
      roll: {
        stat: "fuerza",
        dificultad: 6,
        bonus: 0,
        onSuccess: "reformatorio_pozo_abierto",
        onFail: "reformatorio_pozo_castigo",
      },
    },
    {
      text: "Olisquear el aire",
      text_en: "Sniff the air",
      next: "reformatorio_pozo_olor",
    },
    {
      text: "Alejarte sin hacer ruido",
      text_en: "Walk away silently",
      etiquetas: ["evito_pozo"],
      next: "reformatorio_patio_1",
    },
  ],
};

export const reformatorio_pozo_abierto = {
  id: "reformatorio_pozo_abierto",
  title: "Pozo abierto",
  text: "Con esfuerzo, lográs mover la tapa lo suficiente como para ver el interior. Un tubo de piedra desciende hacia la oscuridad.\n\nSale un olor aún más fuerte. Podrido. Antinatural.\n\nNo ves el fondo. Pero algo… algo se mueve allá abajo.",
  etiquetas: ["pozo_abierto"],
  options: [
    {
      text: "Cerrar la tapa y alejarte",
      text_en: "Close the lid and step away",
      next: "reformatorio_patio_1",
    },
  ],
};

export const reformatorio_pozo_castigo = {
  id: "reformatorio_pozo_castigo",
  title: "Descubierto",
  text: "La tapa cruje fuerte. Antes de que puedas reaccionar, una voz grita tu nombre. Un instructor se acerca furioso.\n\n—¿Jugando con las cloacas? Vas directo al cuarto de castigo.",
  etiquetas: ["castigado_pozo"],
   options: [
    {
      text: "Avanzar",
      text_en: "Advance",
      next: "reformatorio_castigo_1",
    },
  ],
};

export const reformatorio_pozo_olor = {
  id: "reformatorio_pozo_olor",
  title: "Hedor persistente",
  text: "Te inclinás apenas sobre la tapa. Un olor agrio, húmedo, como carne estancada te revuelve el estómago.\n\nAlgo allá abajo... no debería estar ahí.\n\nPor instinto, das un paso atrás.",
  etiquetas: ["inquieto_pozo"],
  options: [
    {
      text: "Alejarte",
      next: "reformatorio_patio_1",
    },
  ],
};

//------ CASTIGO POZO
export const reformatorio_castigo_1 = {
  id: "reformatorio_castigo_1",
  title: "El cuarto sin ventanas",
  text: "Te encierran en una habitación oscura con paredes frías y húmedas. No hay ventanas. Solo una antorcha que parpadea desde arriba.\n\nNo sabés cuánto tiempo pasa. El silencio es tan denso que empezás a escuchar tus propios pensamientos como gritos.",
  background: require("../../../assets/backgrounds/huerfano/cuarto_castigo.png"),
  options: [
    {
      text: "Esperar en silencio",
      text_en: "Wait in silence",
      etiquetas: ["castigo_reflexion"],
      next: "reformatorio_castigo_2",
    },
    {
      text: "Golpear la puerta",
      text_en: "Bang on the door",
      etiquetas: ["castigo_rebelde"],
      next: "reformatorio_castigo_2",
    },
  ],
};

export const reformatorio_castigo_2 = {
  id: "reformatorio_castigo_2",
  title: "El tiempo se diluye",
  text: "El cuarto está en penumbras. No sabés cuánto tiempo pasó. Empezás a buscar con las manos. La pared de piedra está fría, rugosa... pero hay una parte distinta: suave, marcada. Alguien talló algo.\n\n*“No me olvides. —T”*\n\nUn poco más abajo, otra frase: *“La verdad está abajo.”*",
  background: require("../../../assets/backgrounds/huerfano/cuarto_castigo2.png"),
  etiquetas: ["mensaje_castigo", "empieza_busqueda", "conexion_tamar"],
  options: [
    {
      text: "Seguir esperando en silencio",
      text_en: "Keep waiting in silence",
      next: "reformatorio_castigo_3",
    },
    {
      text: "Golpear la puerta",
      text_en: "Bang on the door",
      etiquetas: ["castigo_rebelde"],
      next: "reformatorio_castigo_3",
    },
  ],
};

export const reformatorio_castigo_3 = {
  id: "reformatorio_castigo_3",
  title: "Susurros tras la pared",
  title_en: "Whispers through the wall",
  text: "En algún momento, entre el hambre, el frío y el temblor en los dedos, escuchás algo. Primero pasos. Luego un roce, metálico, en la cerradura. Finalmente, una voz baja, apenas un susurro:\n\n—¿Estás ahí? No hagas ruido. Vine a sacarte.\n\nSuena joven. Y temerosa. Como si también ella se jugara algo al estar ahí.",
  text_en: "At some point, between hunger, cold, and your trembling fingers, you hear something. First, footsteps. Then a metallic scrape at the lock. Finally, a low voice, barely a whisper:\n\n—Are you there? Don’t make a sound. I came to get you out.\n\nShe sounds young. And scared. Like she’s risking something too.",
  background: require("../../../assets/backgrounds/huerfano/cuarto_castigo2.png"),
  options: [
    {
      text: "Confiar en la voz y salir",
      text_en: "Trust the voice and leave",
      etiquetas: ["rescatado_por_lia", "confianza_lia", "lia_conocida_fuera_biblioteca", "conocio_lia"],
      next: "reformatorio_castigo_escape",
    },
    {
      text: "No moverte. Podría ser una trampa",
      text_en: "Stay still. It might be a trap",
      effects: { salud: -3 },
      etiquetas: ["no_confia_en_lia", "no_conocio_lia"],
      next: "reformatorio_castigo_encierro",
    },
  ],
};

export const reformatorio_castigo_encierro = {
  id: "reformatorio_castigo_encierro",
  title: "Castigo cumplido",
  title_en: "Punishment served",
  text: "Horas más tarde—¿o días?—alguien abre la puerta. La luz te enceguece por un segundo.\n\nUn guardia te agarra del brazo sin decir palabra y te arrastra afuera. Justo antes de soltarte, murmura entre dientes:\n\n—Más te vale no volver a intentar algo así.",
  text_en: "Hours later—or maybe days?—someone opens the door. The light blinds you for a moment.\n\nA guard grabs you by the arm and drags you out. Just before letting go, he mutters:\n\n—You’d better not try something like that again.",
  options: [
    {
      text: "Volver al patio",
      text_en: "Return to the yard",
      next: "reformatorio_patio_1",
    },
  ],
};

export const reformatorio_castigo_escape = {
  id: "reformatorio_castigo_escape",
  title: "La mano en la oscuridad",
  title_en: "The hand in the dark",
  text: "La cerradura gira. La puerta se abre apenas. Una mano delgada se asoma y te ofrece ayuda. Dudás un instante, pero la tomás.\n\nLa figura que te guía por el pasillo es alta, pálida, con los ojos muy abiertos y los brazos marcados por heridas y signos de desnutrición. Parece mayor que vos. No dice nada, solo camina rápido, con pasos silenciosos y urgentes.",
  text_en: "The lock turns. The door opens slightly. A thin hand reaches in to help you. You hesitate, then take it.\n\nThe figure leading you through the corridor is tall, pale, with wide eyes and arms marked by wounds and signs of malnutrition. She seems older than you. She doesn’t speak, just walks quickly, with silent and urgent steps.",
  background: require("../../../assets/backgrounds/huerfano/castigo_escape.png"),
  options: [
    {
      text: "Seguirla",
      text_en: "Follow her",
      next: "reformatorio_sala_secreta_lia",
    },
  ],
};