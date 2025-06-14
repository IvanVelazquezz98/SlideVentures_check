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
      next: "reformatorio_biblioteca_entrada",
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
      next: "reformatorio_biblioteca_entrada",
    },
    {
      text: "Caminar por los pasillos vacíos",
      text_en: "Walk the empty hallways",
      next: "reformatorio_pasillos_1",
    },
  ],
};

//--- PASILLOS
export const reformatorio_pasillos_1 = {
  id: "reformatorio_pasillos_1",
  title: "Sombras en las paredes",
  title_en: "Shadows on the walls",
  text: "Los pasillos del reformatorio son largos y sombríos. La piedra está agrietada y ennegrecida.\n\nUn grupo de chicos pasa guiado por un guardia. Uno deja caer un papel.\n\nMás adelante, una puerta con símbolos brilla débilmente. En la pared, un mural muestra niños vendados bajo un sol roto.",
  text_en:
    "The reformatorio’s hallways are long and shadowy. The stone is cracked and blackened.\n\nA group of children walks by, led by a guard. One drops a paper.\n\nAhead, a symbol-covered door glows faintly. On the wall, a mural shows blindfolded kids under a broken sun.",
  background: require("../../../assets/backgrounds/huerfano/pasillos.png"),
  avatar: huerfanoAvatar,
  options: [
    {
      text: "Levantar el papel",
      text_en: "Pick up the paper",
      next: "reformatorio_pasillos_papel",
      condition: { etiquetasExcluye: ["vio_s13", "vio_mural"] },
    },
    {
      text: "Observar la puerta con símbolos",
      text_en: "Observe the door with symbols",
      next: "reformatorio_pasillos_puerta",
    },
    {
      text: "Examinar el mural",
      text_en: "Examine the mural",
      next: "reformatorio_pasillos_mural",
    },
    {
      text: "Volver a explorar otra zona",
      text_en: "Go explore elsewhere",
      next: "reformatorio_exploracion_retorno",
      condition: { etiquetasIncluye: ["vio_mural"] },
    },
  ],
};

export const reformatorio_pasillos_papel = {
  id: "reformatorio_pasillos_papel",
  title: "Un papel arrugado",
  title_en: "A crumpled paper",
  text: "Te agachás y lo abrís rápido, antes de que el guardia te vea. Es un pedazo de hoja rota, con un símbolo que reconocés: la espiral incompleta.\n\nPero hay algo más. Letras mal escritas, como con miedo: *'S13 - subterráneo'*.\n\nAntes de poder pensar mucho más, escuchás pasos acercándose.",
  text_en:
    "You crouch and quickly open it before the guard notices. It’s a torn sheet, with a symbol you recognize: the incomplete spiral.\n\nBut there’s more. Shaky writing: *'S13 - underground'*.\n\nBefore you can think further, footsteps approach.",
  background: require("../../../assets/backgrounds/huerfano/papel_s13.png"),
  options: [
    {
      text: "Esconder el papel y seguir caminando",
      text_en: "Hide the paper and keep walking",
      etiquetas: ["vio_s13", "tiene_papel_espiral"],
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_pasillos_puerta = {
  id: "reformatorio_pasillos_puerta",
  title: "La puerta sin nombre",
  title_en: "The door with no name",
  text: "La madera está firme. Tiene un picaporte simple y varios símbolos tallados: una espiral con una marca encima, una mano con un rombo y dos triángulos invertidos.\n\nEl aire se siente más denso al acercarte.",
  text_en:
    "The wood is sturdy. There's a simple handle and several carved symbols: a spiral with a mark above, a hand with a diamond, and two inverted triangles.\n\nThe air feels heavier as you get closer.",
  background: require("../../../assets/backgrounds/huerfano/pasillo_puerta.png"),
  options: [
    {
      text: "Tocar el marco",
      text_en: "Touch the frame",
      etiquetas: ["toco_puerta_simbolos"],
      next: "reformatorio_pasillos_puerta_tacto",
    },
    {
      text: "Alejarte en silencio",
      text_en: "Step away silently",
      next: "reformatorio_pasillos_1",
    },
  ],
};

export const reformatorio_pasillos_puerta_tacto = {
  id: "reformatorio_pasillos_puerta_tacto",
  title: "Eco interior",
  title_en: "Inner echo",
  text: "Apenas la tocás, un cosquilleo te recorre los dedos. Por un segundo, escuchás un murmullo dentro de tu cabeza: no en palabras, sino en emoción. Pánico. Urgencia.\n\nLa puerta no se abre. Pero algo en vos quedó distinto.",
  text_en:
    "As soon as you touch it, a tingle crawls through your fingers. For a moment, you hear a whisper—not in words, but in emotion. Panic. Urgency.\n\nThe door doesn’t open. But something in you feels different.",
  options: [
    {
      text: "Alejarte lentamente",
      text_en: "Back away slowly",
      etiquetas: ["escucho_mensaje_simbolico"],
      next: "reformatorio_pasillos_1",
    },
  ],
};

export const reformatorio_pasillos_mural = {
  id: "reformatorio_pasillos_mural",
  title: "Lo que dejaron atrás",
  title_en: "What they left behind",
  text: "El mural parece antiguo. Casi borrado. Muestra figuras pequeñas, niños con vendas en los ojos, caminando hacia un abismo. Arriba, un sol negro se parte en dos.\n\nEn una esquina, un niño se da vuelta. Es el único con ojos abiertos. Y a su lado, hay una espiral incompleta dibujada a mano, fuera del diseño original.",
  text_en:
    "The mural looks old. Almost gone. It shows small figures—blindfolded children walking toward an abyss. Above, a black sun splits in two.\n\nIn one corner, a child turns around. He’s the only one with open eyes. Next to him, someone has hand-drawn an incomplete spiral—outside the original design.",
  background: require("../../../assets/backgrounds/huerfano/pasillo_mural.png"),
  etiquetas: ["vio_mural"],
  options: [
    {
      text: "Alejarte del mural",
      text_en: "Walk away from the mural",
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

//===== EVENTOS CHICO SOLO =====

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
/* --- Fin bloque ocultable --- */

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
  etiquetas: ["conexion_tamar"],
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
      condition: { etiquetasExcluye: ["castigo_cumplido"] },
      special: "roll_dado",
      roll: {
        stat: "fuerza",
        dificultad: 3,
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
      next: "reformatorio_patio_pozo",
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
  text_en:
    "At some point, between hunger, cold, and your trembling fingers, you hear something. First, footsteps. Then a metallic scrape at the lock. Finally, a low voice, barely a whisper:\n\n—Are you there? Don’t make a sound. I came to get you out.\n\nShe sounds young. And scared. Like she’s risking something too.",
  background: require("../../../assets/backgrounds/huerfano/cuarto_castigo2.png"),
  options: [
    {
      text: "Confiar en la voz y salir",
      text_en: "Trust the voice and leave",
      etiquetas: [
        "rescatado_por_lia",
        "confianza_lia",
        "lia_conocida_fuera_biblioteca",
        "conocio_lia",
        "castigo_cumplido",
      ],
      next: "reformatorio_castigo_escape",
    },
    {
      text: "No moverte. Podría ser una trampa",
      text_en: "Stay still. It might be a trap",
      effects: { salud: -3 },
      etiquetas: ["no_confia_en_lia", "no_conocio_lia", "castigo_cumplido"],
      next: "reformatorio_castigo_encierro",
    },
  ],
};

export const reformatorio_castigo_encierro = {
  id: "reformatorio_castigo_encierro",
  title: "Castigo cumplido",
  title_en: "Punishment served",
  text: "Horas más tarde—¿o días?—alguien abre la puerta. La luz te enceguece por un segundo.\n\nUn guardia te agarra del brazo sin decir palabra y te arrastra afuera. Justo antes de soltarte, murmura entre dientes:\n\n—Más te vale no volver a intentar algo así.",
  text_en:
    "Hours later—or maybe days?—someone opens the door. The light blinds you for a moment.\n\nA guard grabs you by the arm and drags you out. Just before letting go, he mutters:\n\n—You’d better not try something like that again.",
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
  text: "La cerradura gira. La puerta se abre apenas. Una mano delgada se asoma y te ofrece ayuda. Dudás un instante, pero la tomás.\n\nLa figura que te guía por el pasillo es alta, pálida, con los ojos muy abiertos y los brazos marcados por heridas y signos de desnutrición. Parece mayor que vos.\n\nAntes de seguir caminando, te susurra:\n\n—No digas nada. Confía en mí. Después… te voy a mostrar algo que importa.",
  text_en:
    "The lock turns. The door opens slightly. A thin hand reaches in to help you. You hesitate, then take it.\n\nThe figure leading you down the corridor is tall, pale, with wide eyes and arms marked by wounds and malnutrition. She seems older than you.\n\nBefore continuing, she whispers:\n\n“Don’t say a word. Trust me. I’ll show you something that matters.”",
  background: require("../../../assets/backgrounds/huerfano/castigo_escape.png"),
  options: [
    {
      text: "Seguirla",
      text_en: "Follow her",
      next: "reformatorio_biblioteca_s13_oculta",
    },
  ],
};

export const reformatorio_biblioteca_s13_oculta = {
  id: "reformatorio_biblioteca_s13_oculta",
  title: "Pasillo S13",
  title_en: "Corridor S13",
  text: "Te guía en silencio por la biblioteca hasta un rincón olvidado. Detrás de una estantería ladeada, hay una trampilla con una marca: *S13*.\n\n—Bajá rápido —susurra—. Nadie viene acá.\n\nEl lugar es pequeño, húmedo. Sobre la mesa hay símbolos, páginas sueltas y trazos en espiral. La figura no dice nada. Solo espera.",
  text_en:
    "She guides you silently through a forgotten corner of the library. Behind a tilted shelf, a trapdoor is marked: *S13*.\n\n“Down. Quick,” she whispers. “No one comes here.”\n\nThe room is small and damp. On the table: symbols, loose pages, spiral marks. She says nothing. Just waits.",
  etiquetas: ["conecta_con_lia", "lia_conocida_fuera_biblioteca", "vio_s13"],
  background: require("../../../assets/backgrounds/huerfano/s13_entrada.png"),
  options: [
    {
      text: "Observar en silencio",
      text_en: "Observe silently",
      next: "reformatorio_biblioteca_reunion_lia_convergencia",
    },
  ],
};
//------ BLIBLIOTECA

export const reformatorio_biblioteca_entrada = {
  id: "reformatorio_biblioteca_entrada",
  title: "La biblioteca en sombras",
  title_en: "The shadowed library",
  text: "La biblioteca es fría, silenciosa. Huele a papel viejo y piedra húmeda. Filas de estanterías cubren las paredes, llenas de libros maltratados y códigos polvorientos.\n\nUna mesa al fondo parece haber sido usada hace poco.",
  text_en:
    "The library is cold and silent. It smells of old paper and damp stone. Rows of shelves cover the walls, filled with worn books and dusty codes.\n\nA table at the back seems to have been used recently.",
  background: require("../../../assets/backgrounds/huerfano/biblioteca_entrada.png"),
  options: [
    {
      text: "Explorar los estantes",
      text_en: "Explore the shelves",
      next: "reformatorio_biblioteca_estantes",
    },
    {
      text: "Acercarte a la mesa del fondo",
      text_en: "Approach the back table",
      condition: { etiquetasExcluye: ["conocio_lia"] },
      next: "reformatorio_biblioteca_mesa",
    },
    {
      text: "Volver a explorar otra zona",
      text_en: "Go explore elsewhere",
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_biblioteca_mesa = {
  id: "reformatorio_biblioteca_mesa",
  title: "Ecos recientes",
  title_en: "Recent traces",
  text: "Sobre la mesa hay marcas de tinta fresca, un cuaderno abierto con símbolos desconocidos y una vela gastada.\n\nSentís que alguien ha estado estudiando aquí. Justo cuando estás por irte, una voz te habla desde entre los estantes...",
  text_en:
    "On the table, there are marks of fresh ink, an open notebook filled with unknown symbols, and a spent candle.\n\nYou feel someone has been studying here. Just as you're about to leave, a voice speaks to you from between the shelves...",
  background: require("../../../assets/backgrounds/huerfano/biblioteca_mesa.png"),
  options: [
    {
      text: "Volver la mirada",
      text_en: "Turn around",
      condition: { etiquetasExcluye: ["conocio_lia"] },
      next: "reformatorio_biblioteca_aparicion",
    },
    {
      text: "Volver la mirada",
      text_en: "Turn around",
      condition: { etiquetasIncluye: ["conocio_lia"] },
      next: "reformatorio_biblioteca_reunion_lia_convergencia",
    },
  ],
};

export const reformatorio_biblioteca_aparicion = {
  id: "reformatorio_biblioteca_aparicion",
  title: "Entre los estantes",
  title_en: "Between the shelves",
  text: "Una figura delgada se desliza entre las sombras de los estantes. La vela sobre la mesa parpadea. Te ponés tenso, pero la voz que escuchás es suave.\n\n—No toques nada sin saber lo que es —dice.\n\nLa chica se acerca. No parece asustada. Tampoco amable. Solo... atenta.",
  text_en:
    "A slim figure moves between the shadows of the shelves. The candle on the table flickers. You tense up, but the voice you hear is soft.\n\n“Don’t touch anything unless you know what it is,” she says.\n\nThe girl approaches. She doesn’t seem scared. Or friendly. Just... focused.",
  etiquetas: ["conecta_con_lia", "conocio_lia", "conocio_lia_por_biblioteca"],
  background: require("../../../assets/backgrounds/huerfano/biblioteca_lia.png"),
  options: [
    {
      text: "Seguirla",
      text_en: "Follow her",
      next: "reformatorio_biblioteca_reunion_lia_convergencia",
    },
  ],
};

export const reformatorio_biblioteca_reunion_lia_convergencia = {
  id: "reformatorio_biblioteca_reunion_lia_convergencia",
  title: "Lo que no enseñan",
  title_en: "What they don't teach",
  text: "Se sienta frente a vos en silencio. Entre ambos, un libro abierto: símbolos deformes, espirales, palabras tachadas.\n\nTe observa, como evaluando si puede confiar en vos. Finalmente habla, en voz baja:\n\n—Nadie más debería ver esto.",
  text_en:
    "She sits across from you in silence. Between you, an open book: warped symbols, spirals, crossed-out words.\n\nShe watches you, as if weighing whether she can trust you. Finally, she speaks, quietly:\n\n“No one else should see this.”",
  background: require("../../../assets/backgrounds/huerfano/lia_convergencia.png"),
  etiquetas: ["conocio_lia"],
  options: [
    {
      text: "Preguntar su nombre",
      text_en: "Ask her name",
      next: "reformatorio_biblioteca_lia_nombre",
    },
    {
      text: "Preguntar qué es este lugar",
      text_en: "Ask what this place is",
      next: "reformatorio_biblioteca_s13",
      condition: { etiquetasExcluye: ["descubrio_s13"] },
      etiquetas: ["estudia_magia_prohibida"],
    },
  ],
};

export const reformatorio_biblioteca_lia_nombre = {
  id: "reformatorio_biblioteca_lia_nombre",
  title: "Un nombre elegido",
  title_en: "A chosen name",
  text: "Hace una pausa.\n\n—Me lo puse yo. Lia. El otro ya no importa —dice, sin dramatismo.\n\nTe sostiene la mirada un momento y luego baja la vista.\n\n—Cuando llegué... ya conocía algunos símbolos. A veces no sé si los recuerdo o los inventé.",
  text_en:
    "She pauses.\n\n“I chose it. Lia. The other one doesn’t matter,” she says, plainly.\n\nShe holds your gaze for a moment, then looks down.\n\n“When I got here... I already knew some symbols. Sometimes I’m not sure if I remember them or made them up.”",
  etiquetas: ["nombre_lia_confirmado"],
  options: [
    {
      text: "Preguntar qué es este lugar",
      text_en: "Ask what this place is",
      condition: { etiquetasExcluye: ["descubrio_s13"] },
      etiquetas: ["estudia_magia_prohibida"],
      next: "reformatorio_biblioteca_s13",
    },
    {
      text: "Preguntar qué es ese libro",
      text_en: "Ask what the book is",
      etiquetas: ["estudia_magia_prohibida"],
      next: "reformatorio_biblioteca_aprendizaje_1",
    },
    {
      text: "Preguntar por Tamar",
      text_en: "Ask about Tamar",
      condition: { etiquetasIncluye: ["conexion_tamar"] },
      etiquetas: ["pregunto_por_tamar"],
      next: "reformatorio_biblioteca_tamar",
    },
  ],
};

export const reformatorio_biblioteca_tamar = {
  id: "reformatorio_biblioteca_tamar",
  title: "El que fue primero",
  title_en: "The one who came first",
  text: "—Tamar no era como los demás —dice Lia, sin mirarte—. Preguntaba cosas que nadie se animaba a preguntar. Veía símbolos donde nadie más los notaba.\n\nTe muestra un fragmento de página con un dibujo incompleto. Está quemado en los bordes.\n\n—Decían que se volvió loco. Que desapareció. Pero no fue así. Intentó algo... algo que funcionó.\n\nGuarda silencio unos segundos, y baja la voz.\n\n—Y eso fue lo que más les molestó.",
  text_en:
    "“Tamar wasn’t like the others,” Lia says, not looking at you. “He asked things no one dared to ask. He saw symbols others ignored.”\n\nShe shows you a torn page fragment with an unfinished drawing. The edges are scorched.\n\n“They said he went mad. That he vanished. But that’s not what happened. He tried something… and it worked.”\n\nShe falls silent for a moment, then lowers her voice.\n\n“And that’s what bothered them the most.”",
  etiquetas: ["pregunto_por_tamar"],
  options: [
    {
      text: "Preguntar qué es ese libro",
      text_en: "Ask what the book is",
      etiquetas: ["estudia_magia_prohibida"],
      next: "reformatorio_biblioteca_aprendizaje_1",
    },
  ],
};

export const reformatorio_biblioteca_s13 = {
  id: "reformatorio_biblioteca_s13",
  title: "S13",
  title_en: "S13",
  text: "—Esto es S13 —dice en voz baja—. No está en ningún plano. Lo mantienen cerrado, pero no está vacío.\n\nTe muestra símbolos espiralados, algunos tachados, otros borrados a propósito.\n\n—Acá venían los que querían saber más. Tamar vino antes que yo.\n\nTe observa un momento antes de agregar:\n\n—Si llegaste hasta acá, es porque también estás buscando algo.",
  text_en:
    "“This is S13,” she says quietly. “It’s not on any map. They keep it locked—but not empty.”\n\nShe shows you spiraling symbols, some crossed out, others deliberately erased.\n\n“Those who wanted to know more came here. Tamar came before me.”\n\nShe watches you for a moment before adding:\n\n“If you made it here, it’s because you’re looking for something too.”",
  etiquetas: ["descubrio_s13"],
  options: [
    {
      text: "Pedirle que te enseñe",
      text_en: "Ask her to teach you",
      etiquetas: ["empieza_aprendizaje_magia"],
      next: "reformatorio_biblioteca_aprendizaje_1",
    },
    {
      text: "Preguntar su nombre",
      text_en: "Ask her name",
      condition: { etiquetasExcluye: ["nombre_lia_confirmado"] },
      next: "reformatorio_biblioteca_lia_nombre",
    },
    {
      text: "Preguntar por Tamar",
      text_en: "Ask about Tamar",
      condition: {
        etiquetasIncluye: ["conexion_tamar"],
        etiquetasExcluye: ["pregunto_por_tamar"],
      },
      etiquetas: ["pregunto_por_tamar"],
      next: "reformatorio_biblioteca_tamar",
    },
  ],
};

export const reformatorio_biblioteca_aprendizaje_1 = {
  id: "reformatorio_biblioteca_aprendizaje_1",
  title: "Primera grieta",
  title_en: "First crack",
  text: "Lia pasa una mano por las páginas y se detiene en un símbolo espiralado.\n\n—No es como la magia de acá —dice—. No es buena ni mala. Pero si no la entendés... ella te entiende a vos primero.\n\nTe muestra un símbolo. Parece moverse.\n\n—No se repite. Se siente. Vamos a empezar.",
  text_en:
    "Lia runs her fingers over the pages and stops at a spiraling symbol.\n\n“This isn’t like the magic they teach. It’s not good or bad. But if you don’t understand it… it understands you.”\n\nShe shows you a symbol. It seems to move.\n\n“It’s not about repeating. It’s about feeling. Let’s begin.”",
  background: require("../../../assets/backgrounds/huerfano/lia_libro.png"),
  etiquetas: ["inicio_aprendizaje_magia_prohibida"],
  options: [
    {
      text: "Preguntar si alguien más sabe de esto",
      text_en: "Ask if anyone else knows about this",
      next: "reformatorio_biblioteca_aprendizaje_2a",
    },
    {
      text: "Preguntar si esto tiene que ver con tus padres",
      text_en: "Ask if this is related to your parents",
      next: "reformatorio_biblioteca_aprendizaje_2b",
    },
  ],
};

export const reformatorio_biblioteca_aprendizaje_2a = {
  id: "reformatorio_biblioteca_aprendizaje_2a",
  title: "Confidencias",
  title_en: "Confidences",
  text: "—Antes venían otros —dice Lia—. Pero ya no quedan. Nadie quiere que esto exista.\n\nTe observa un momento antes de continuar.\n\n—Tamar, tus padres... Ellos veían lo mismo. Veían el potencial.\n\nSus palabras quedan flotando, pero algo en su voz te hace entender que esto es solo el comienzo.",
  text_en:
    '"Others used to come here," Lia says. "But they’re gone now. No one wants this to exist."\n\nShe looks at you for a moment before continuing.\n\n"Tamar, your parents... They saw the same thing. They saw the potential."\n\nHer words hang in the air, but something in her tone tells you this is just the beginning.',
  etiquetas: ["pregunto_otros"],
  options: [
    {
      text: "Seguir aprendiendo con ella",
      text_en: "Keep learning with her",
      next: "reformatorio_biblioteca_aprendizaje_3",
    },
    {
      text: "Preguntar si esto tiene que ver con tus padres",
      text_en: "Ask if this is related to your parents",
      next: "reformatorio_biblioteca_aprendizaje_2b",
      condition: { etiquetasExcluye: ["pregunto_padres"] },
    },
  ],
};

export const reformatorio_biblioteca_aprendizaje_2b = {
  id: "reformatorio_biblioteca_aprendizaje_2b",
  title: "Herencia oculta",
  title_en: "Hidden legacy",
  text: "Lia baja la voz.\n\n—Tus padres no solo estudiaron esto. Dejaron notas. Dibujos. Sospechas.\n\nTe alcanza una hoja doblada, con un símbolo a medio trazar.\n\n—Tal vez sabían que un día alguien iba a necesitar seguir lo que ellos empezaron.",
  text_en:
    'Lia lowers her voice.\n\n"Your parents didn’t just study this. They left notes. Drawings. Clues."\n\nShe hands you a folded page with a half-drawn symbol.\n\n"Maybe they knew someone would need to continue what they started."',
  etiquetas: ["pregunto_padres"],
  options: [
    {
      text: "Seguir aprendiendo con ella",
      text_en: "Keep learning with her",
      next: "reformatorio_biblioteca_aprendizaje_3",
    },
    {
      text: "Preguntar si alguien más sabe de esto",
      text_en: "Ask if anyone else knows about this",
      next: "reformatorio_biblioteca_aprendizaje_2a",
      condition: { etiquetasExcluye: ["pregunto_otros"] },
    },
  ],
};

export const reformatorio_biblioteca_aprendizaje_3 = {
  id: "reformatorio_biblioteca_aprendizaje_3",
  title: "Días en S13",
  title_en: "Days in S13",
  text: "Pasás cada vez más tiempo con Lia. A veces dormís ahí, rodeado de libros.\n\nDescubren que algunos símbolos reaccionan a emociones: tristeza, rabia, deseo.\n\n—Esto está vivo —dice Lia.\n\nEntre ambos crece una confianza muda, difícil de romper.",
  text_en:
    "You spend more and more time with Lia. Sometimes you sleep there, surrounded by books.\n\nYou find that some symbols react to emotion—grief, anger, longing.\n\n“This is alive,” Lia says.\n\nA quiet trust forms between you, hard to break.",
  background: require("../../../assets/backgrounds/huerfano/dias_s13.png"),
  options: [
    {
      text: "Continuar",
      text_en: "Continue",
      next: "reformatorio_biblioteca_aprendizaje_4",
    },
  ],
};

export const reformatorio_biblioteca_aprendizaje_4 = {
  id: "reformatorio_biblioteca_aprendizaje_4",
  title: "La raíz del conjuro",
  title_en: "Root of the spell",
  text: "Cada noche volvés a S13. Encendés la lámpara, abrís el libro, mirás a Lia. El mundo fuera de eso ya no importa.\n\nLia cambió. Más delgada, más callada. Pero sus ojos brillan con algo nuevo.\n\n—Esto no es un juego —te dijo—. Pero puede cambiarlo todo.",
  text_en:
    "Every night, you return to S13. You light the lamp, open the book, watch Lia. Nothing outside this matters anymore.\n\nLia has changed. Quieter, thinner. But her eyes burn with something new.\n\n“This isn’t a game,” she told you. “But it could change everything.”",
  background: require("../../../assets/backgrounds/huerfano/obsesion_libro.png"),
  etiquetas: ["obsesion_magia_prohibida"],
  options: [
    {
      text: "Explorar el conjuro con ella",
      text_en: "Explore the spell with her",
      next: "reformatorio_biblioteca_obsesion_creencia_1",
    },
  ],
};

export const reformatorio_biblioteca_obsesion_creencia_1 = {
  id: "reformatorio_biblioteca_obsesion_creencia_1",
  title: "Ritual silencioso",
  title_en: "Silent Ritual",
  text: "Dormís en el suelo. El polvo, las páginas abiertas, la lámpara vieja... todo forma parte del ritual.\n\n—No hay nada fuera de esto —dice Lia, sin mirarte.\n\nAsentís. No hace falta decir nada más.",
  text_en:
    "You sleep on S13’s floor. Dust, open pages, the old lamp... it’s all part of the ritual.\n\n“There’s nothing outside this,” Lia says, not looking at you.\n\nYou nod. Nothing more needs to be said.",
  background: require("../../../assets/backgrounds/huerfano/obsesion_libro2.png"),
  etiquetas: ["creencia_total_magia_prohibida"],
  options: [
    {
      text: "Seguir leyendo juntos",
      text_en: "Keep reading together",
      next: "reformatorio_biblioteca_obsesion_creencia_2",
    },
  ],
};

export const reformatorio_biblioteca_obsesion_creencia_2 = {
  id: "reformatorio_biblioteca_obsesion_creencia_2",
  title: "La única respuesta",
  title_en: "The Only Answer",
  text: "Algunas noches no hablaban. Solo miraban los símbolos, sintiéndolos vibrar.\n\nYa no pensás en escapar. Pensás en dominarla. Como si la magia prohibida fuera la única verdad.",
  text_en:
    "Some nights, no words were spoken. You just stared at the symbols, feeling them hum.\n\nYou don’t think about escaping anymore. You think about mastering it. As if forbidden magic were the only truth.",
  background: require("../../../assets/backgrounds/huerfano/obsesion_libro2.png"),
  options: [
    {
      text: "Profundizar en el conjuro",
      text_en: "Delve deeper into the spell",
      next: "reformatorio_biblioteca_conjuro_inicio",
    },
  ],
};

export const reformatorio_biblioteca_conjuro_inicio = {
  id: "reformatorio_biblioteca_conjuro_inicio",
  title: "El límite invisible",
  title_en: "The Invisible Line",
  text: "—Este es el más complejo —dice Lia, dejando caer un libro sobre la mesa.\n\nEl símbolo ocupa dos páginas. Alrededor, notas confusas, líneas tachadas, advertencias.\n\n—No está completo —añade—. Pero creo que podemos terminarlo.",
  text_en:
    "“This is the most complex one,” Lia says, placing a book on the table.\n\nThe symbol covers both pages. Around it: messy notes, crossed lines, warnings.\n\n“It’s not finished,” she adds. “But I think we can complete it.”",
  background: require("../../../assets/backgrounds/huerfano/conjuro1.png"),
  etiquetas: ["conjuro_prohibido_descubierto"],
  options: [
    {
      text: "Ayudarla a completarlo",
      text_en: "Help her complete it",
      next: "reformatorio_biblioteca_conjuro_preparacion",
    },
    {
      text: "Preguntar si es peligroso",
      text_en: "Ask if it’s dangerous",
      next: "reformatorio_biblioteca_conjuro_duda",
    },
  ],
};

export const reformatorio_biblioteca_conjuro_preparacion = {
  id: "reformatorio_biblioteca_conjuro_preparacion",
  title: "Manos a la obra",
  title_en: "Hands to Work",
  text: "Trazan líneas nuevas sobre las páginas. Corrigen, prueban. A veces, el símbolo parece brillar un segundo, luego se apaga.\n\n—Está reaccionando —susurra Lia—. Está vivo.",
  text_en:
    "You draw new lines over the pages. Fix, test. Sometimes, the symbol glows briefly before fading.\n\n“It’s reacting,” Lia whispers. “It’s alive.”",
  background: require("../../../assets/backgrounds/huerfano/conjuro1.png"),
  etiquetas: ["conjuro_empezado"],
  options: [
    {
      text: "Seguir trabajando juntos",
      text_en: "Keep working together",
      next: "reformatorio_biblioteca_conjuro_union",
    },
  ],
};

export const reformatorio_biblioteca_conjuro_duda = {
  id: "reformatorio_biblioteca_conjuro_duda",
  title: "Una pausa breve",
  title_en: "A Brief Pause",
  text: "—Todo poder tiene riesgos —responde Lia—. Pero también tiene sentido. Si llegó hasta acá, es por algo.\n\nTe mira esperando tu decisión.",
  text_en:
    "“All power has risks,” Lia replies. “But it has purpose too. If it got this far, it means something.”\n\nShe looks at you, waiting for your choice.",
  background: require("../../../assets/backgrounds/huerfano/conjuro1.png"),
  options: [
    {
      text: "Aceptar ayudarla",
      text_en: "Agree to help her",
      next: "reformatorio_biblioteca_conjuro_preparacion",
    },
  ],
};

export const reformatorio_biblioteca_conjuro_union = {
  id: "reformatorio_biblioteca_conjuro_union",
  title: "Una sola intención",
  title_en: "One Intention",
  text: "Las manos de ambos se cruzan sobre el libro. El símbolo vibra, y una brisa invisible apaga la lámpara.\n\n—Ya casi —dice Lia, con los ojos fijos en el trazo.\n\nNo sabés si es miedo o emoción. Pero ya no hay vuelta atrás.",
  text_en:
    "Both your hands meet over the book. The symbol vibrates, and an unseen breeze puts out the lamp.\n\n“Almost there,” Lia says, eyes locked on the mark.\n\nYou’re not sure if it’s fear or excitement. But there’s no turning back now.",
  background: require("../../../assets/backgrounds/huerfano/conjuro2.png"),
  etiquetas: ["conjuro_listo_para_invocar"],
  options: [
    {
      text: "Intentar el conjuro",
      text_en: "Attempt the spell",
      next: "reformatorio_biblioteca_conjuro_resultado_1",
    },
  ],
};

export const reformatorio_biblioteca_conjuro_resultado_1 = {
  id: "reformatorio_biblioteca_conjuro_resultado_1",
  title: "Destino compartido",
  title_en: "Shared Fate",
  text: "La energía se desborda. Símbolos flotan en el aire, el suelo tiembla, las luces parpadean.\n\nLia extiende la mano hacia vos. Su mirada brilla con miedo y determinación. Algo va a romperse.\n\nSabés que uno de los dos no saldrá de esto.",
  text_en:
    "The energy surges. Symbols float in the air, the ground shakes, lights flicker.\n\nLia reaches out. Her eyes shine with fear and resolve. Something is about to break.\n\nYou know one of you won't make it out of this.",
  background: require("../../../assets/backgrounds/huerfano/conjuro3.png"),
  options: [
    {
      text: "Intentar salvarla",
      text_en: "Try to save her",
      next: "reformatorio_biblioteca_conjuro_final_usuario_muere",
    },
    {
      text: "No interferir",
      text_en: "Don't interfere",
      next: "reformatorio_biblioteca_conjuro_final_lia_muere",
    },
  ],
};

export const reformatorio_biblioteca_conjuro_final_usuario_muere = {
  id: "reformatorio_biblioteca_conjuro_final_usuario_muere",
  title: "El precio de proteger",
  title_en: "The Price of Protection",
  text: "Te lanzás hacia ella. Todo se vuelve blanco.\n\nSentís tu cuerpo desaparecer. Lia grita tu nombre.\n\nPor un momento, ves su rostro bañado en lágrimas… y orgullo.\n\nEntonces, no queda nada.",
  text_en:
    "You rush toward her. Everything turns white.\n\nYou feel your body dissolve. Lia screams your name.\n\nFor a moment, you see her face—tearful, proud.\n\nThen, nothing remains.",
  background: require("../../../assets/backgrounds/huerfano/conjuro_usuario.png"),
  etiquetas: ["final_jugador_muere"],
  options: [
    {
      text: "Finalizar partida",
      text_en: "End game",
      next: "game_over_muerte_usuario",
    },
  ],
};

export const reformatorio_biblioteca_conjuro_final_lia_muere = {
  id: "reformatorio_biblioteca_conjuro_final_lia_muere",
  title: "El sacrificio",
  title_en: "The Sacrifice",
  text: "No te movés. La magia la envuelve. Lia sonríe… y luego se rompe en luz.\n\nTodo explota en símbolos y viento. Algo se abre.\n\nTu cuerpo cae. Pero no al suelo.",
  text_en:
    "You don’t move. The magic takes her. Lia smiles… and then breaks into light.\n\nEverything explodes in symbols and wind. Something opens.\n\nYour body falls. But not to the floor.",
  background: require("../../../assets/backgrounds/huerfano/conjuro_lia.png"),
  etiquetas: ["lia_muerta", "inicio_afueras"],
  options: [
    {
      text: "Despertar",
      text_en: "Wake up",
      next: "afueras_inicio",
    },
  ],
};

export const game_over_muerte_usuario = {
  id: "game_over_muerte_usuario",
  title: "Fin",
  title_en: "End",
  text: "Tu historia termina aquí.\n\nAlgunas decisiones traen paz, otras, sacrificio.\n\nEsta fue la tuya.",
  text_en:
    "Your story ends here.\n\nSome choices bring peace. Others, sacrifice.\n\nThis was yours.",
  background: require("../../../assets/backgrounds/huerfano/game_over.png"),
  etiquetas: ["game_over"],
  options: [
    {
      text: "Volver al inicio",
      text_en: "Back to start",
      next: "intro_1",
    },
  ],
};

//------------------------- ESTANTES

export const reformatorio_biblioteca_estantes = {
  id: "reformatorio_biblioteca_estantes",
  title: "Códigos olvidados",
  title_en: "Forgotten codes",
  text: "Revisás libros con títulos borrados, hojas arrancadas, páginas con manchas negras. Algunos símbolos se repiten. Sentís que algo en ellos llama tu atención.\n\nUno menciona una palabra tachada: *‘despertar’*.",
  text_en:
    "You flip through books with faded titles, torn pages, and black stains. Some symbols repeat across them. Something in them draws your attention.\n\nOne mentions a crossed-out word: *‘awakening’*.",
  background: require("../../../assets/backgrounds/huerfano/biblioteca_mesa.png"),
  options: [
    {
      text: "Anotar los símbolos",
      text_en: "Note the symbols",
      etiquetas: ["investiga_magia_prohibida"],
      next: "reformatorio_biblioteca_solo_estudio",
    },
    {
      text: "Dejar el libro",
      text_en: "Put the book back",
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_biblioteca_solo_estudio = {
  id: "reformatorio_biblioteca_solo_estudio",
  title: "Estudio en soledad",
  title_en: "Study in solitude",
  //background: require("../../../assets/backgrounds/huerfano/biblioteca_estudio.png"),
  text: "Pasás horas mirando los símbolos. Al principio no tienen sentido.\n\nPero cuando cerrás los ojos, algo se alinea. Una secuencia aparece, como si guiara tu mente.\n\nEntre hojas sueltas, encontrás un papel arrugado:\n\n*“La espiral no se revela. Se recuerda.”*",
  text_en: "You spend hours staring at the symbols. At first, they mean nothing.\n\nBut when you close your eyes, something aligns. A pattern appears—as if guiding your mind.\n\nBetween loose pages, you find a crumpled note:\n\n*“The spiral does not reveal itself. It remembers.”*",
  options: [
    {
      text: "Cerrar los ojos y seguir el patrón",
      text_en: "Close your eyes and follow the pattern",
      etiquetas: ["sintio_la_llamada"],
      next: "reformatorio_sala_prohibida",
    },
  ],
};

export const reformatorio_sala_prohibida = {
  id: "reformatorio_sala_prohibida",
  title: "El rincón sellado",
  title_en: "The sealed corner",
  background: require("../../../assets/backgrounds/huerfano/sala_prohibida.png"),
  text: "Siguiendo el patrón, caminás por la biblioteca como si ya hubieras estado ahí antes. Tus pasos te llevan a una estantería desplazada.\n\nDetrás, una pared manchada con hollín. No parece importante… hasta que ves una rendija apenas visible.",
  text_en:
    "Following the pattern, you walk through the library as if you've been there before. Your steps lead you to a shifted shelf.\n\nBehind it, a wall stained with soot. It looks unremarkable… until you notice a barely visible crack.",
  etiquetas: ["toco_la_grieta"],
  options: [
    {
      text: "Empujar la rendija",
      text_en: "Push the crack",
      next: "reformatorio_sala_prohibida_2",
    },
    {
      text: "Alejarte en silencio",
      text_en: "Quietly walk away",
      etiquetas: ["evito_la_grieta"],
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_sala_prohibida_2 = {
  id: "reformatorio_sala_prohibida_2",
  title: "El hueco",
  title_en: "The Hollow",
  background: require("../../../assets/backgrounds/huerfano/sala_prohibida_2.png"),
  text: "Empujás, y la piedra cede. Un espacio vacío se revela: angosto, oscuro, y con olor a hierro viejo.\n\nEn el suelo hay marcas. No sabés si están grabadas… o si nacieron ahí.",
  text_en:
    "You push, and the stone gives way. A narrow, dark space opens up. It smells like old iron.\n\nThere are marks on the floor. You're not sure if they were carved—or born there.",
  options: [
    {
      text: "Entrar y explorar el espacio oculto",
      text_en: "Enter and explore the hidden space",
      next: "reformatorio_voces_mudas",
    },
    {
      text: "Cerrar la entrada y alejarte",
      text_en: "Seal the entrance and walk away",
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_voces_mudas = {
  id: "reformatorio_voces_mudas",
  title: "Voces mudas",
  title_en: "Wordless voices",
  // background: require("../../../assets/backgrounds/huerfano/sala_prohibida_interior.png"),
  text: "El espacio oculto parece más antiguo que el reformatorio. Las paredes están cubiertas de marcas.\n\nEn el suelo, una espiral trazada en carbón. Al tocar el centro, algo se activa.",
  text_en:
    "The hidden space feels older than the reformatorio. The walls are covered in markings.\n\nOn the floor, a spiral drawn in charcoal. When you touch the center, something stirs.",
  etiquetas: ["primer_contacto"],
  options: [
    {
      text: "Escuchar lo que viene",
      text_en: "Listen to what follows",
      next: "reformatorio_voces_mudas_2",
    },
    {
      text: "Retirarte lentamente",
      text_en: "Back away slowly",
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_voces_mudas_2 = {
  id: "reformatorio_voces_mudas_2",
  title: "Sin sonido",
  title_en: "Without sound",
  // background: require("../../../assets/backgrounds/huerfano/sala_prohibida_interior.png"),
  text: "Una voz sin sonido se impone en tu mente.\n\nVes imágenes: niños con bocas selladas, luces girando al revés, una sombra que se mueve sola.\n\nSentís que algo te observa desde el otro lado.",
  text_en:
    "A soundless voice presses into your mind.\n\nYou see images: children with sealed mouths, lights spinning backwards, a shadow moving on its own.\n\nYou feel something watching you from the other side.",
  options: [
    {
      text: "Seguir escuchando",
      text_en: "Keep listening",
      next: "reformatorio_vision_fragmentada",
    },
    {
      text: "Retroceder",
      text_en: "Step back",
      next: "reformatorio_exploracion_retorno",
    },
  ],
};

export const reformatorio_vision_fragmentada = {
  id: "reformatorio_vision_fragmentada",
  title: "Visión fragmentada",
  title_en: "Fragmented vision",
  background: require("../../../assets/backgrounds/huerfano/vision_fragmentada.png"),
  text: "Parpadeás. Cuando volvés a abrir los ojos, ya no estás en la biblioteca.\n\nEstás en tu antigua casa. La noche de la redada. Pero algo no encaja.",
  text_en:
    "You blink. When your eyes open again, you're no longer in the library.\n\nYou're in your old home. The night of the raid. But something is wrong.",
  etiquetas: ["vision_pasado"],
  options: [
    {
      text: "Seguir observando",
      text_en: "Keep watching",
      next: "reformatorio_vision_fragmentada_2",
    },
  ],
};

export const reformatorio_vision_fragmentada_2 = {
  id: "reformatorio_vision_fragmentada_2",
  title: "Ecos del pasado",
  title_en: "Echoes of the past",
  background: require("../../../assets/backgrounds/huerfano/vision_fragmentada.png"),
  text: "Tu madre te dice que te escondas, pero no usa tu nombre.\n\nTu padre está ahí… pero tiene los ojos en blanco. No te reconoce. En el suelo, un libro abierto muestra una espiral. La misma que acabás de tocar.\n\nY una voz —la misma de antes— susurra:\n\n*“Lo que fuiste… o lo que podrías ser.”*",
  text_en:
    "Your mother tells you to hide—but she doesn’t say your name.\n\nYour father is there… but his eyes are blank. He doesn’t know who you are. On the floor, an open book shows a spiral. The same you just touched.\n\nAnd a voice—the same as before—whispers:\n\n*“What you were… or what you could be.”*",
  options: [
    {
      text: "Intentar hablar con tu madre",
      text_en: "Try to talk to your mother",
      next: "reformatorio_eco_madre",
    },
    {
      text: "Cerrar el libro",
      text_en: "Close the book",
      next: "reformatorio_exploracion_retorno",
    },
    {
      text: "Tocar la espiral en el libro",
      text_en: "Touch the spiral in the book",
      etiquetas: ["acepta_visión"],
      next: "reformatorio_sello_rapido",
    },
  ],
};

export const reformatorio_eco_madre = {
  id: "reformatorio_eco_madre",
  title: "Eco de madre",
  title_en: "Mother's echo",
  text: "Ella gira hacia vos lentamente. Su rostro se ve igual… pero vacío.\n\n“No soy ella”, dice. Su voz tiene un eco que no debería.",
  text_en:
    "She slowly turns toward you. Her face looks the same… but it’s empty.\n\n“I’m not her,” she says. Her voice has an echo that shouldn’t exist.",
    background: require("../../../assets/backgrounds/huerfano/eco_madre.png"),
  options: [
    {
      text: "Seguir escuchando",
      text_en: "Keep listening",
      next: "reformatorio_eco_madre_2",
    },
  ],
};

export const reformatorio_eco_madre_2 = {
  id: "reformatorio_eco_madre_2",
  title: "Elección",
  title_en: "Choice",
  background: require("../../../assets/backgrounds/huerfano/vision_desvanece.png"),
  text: "“La memoria es un puente. Pero el precio es elegir qué lado vas a cruzar.”\n\nLa casa empieza a temblar. Todo se desvanece, excepto el libro.\n\nY la espiral que aún brilla.",
  text_en:
    "“Memory is a bridge. But the price is choosing which side you’ll cross.”\n\nThe house begins to shake. Everything fades—except the book.\n\nAnd the spiral, still glowing.",
  options: [
    {
      text: "Tocar la espiral",
      text_en: "Touch the spiral",
      etiquetas: ["acepta_visión"],
      next: "reformatorio_sello_rapido",
    },
    {
      text: "Quedarte con ella un momento más",
      text_en: "Stay with her a moment longer",
      etiquetas: ["recuerdo_madre", "resistencia_emocional"],
      next: "reformatorio_sello_emotivo",
    },
  ],
};

export const reformatorio_sello_rapido = {
  id: "reformatorio_sello_rapido",
  title: "El sello",
  title_en: "The Seal",
   background: require("../../../assets/backgrounds/huerfano/vision_emotivo_2.png"),
  text: "El tacto es instantáneo. La espiral se traga tu visión. Sentís que algo tuyo se desprende, como una cuerda que se corta dentro del pecho.\n\nCuando abrís los ojos, estás de nuevo en la sala oculta.\n\nEn el suelo, la espiral está completa. Está trazada en sangre. Tu sangre.",
  text_en:
    "The touch is instant. The spiral devours your vision. You feel something inside you snap, like a rope breaking deep in your chest.\n\nWhen you open your eyes, you’re back in the hidden room.\n\nOn the floor, the spiral is complete. Drawn in blood. Your blood.",
  etiquetas: ["sangre_sello_activado", "vacio_interno"],
  options: [
    {
      text: "Acercarte al símbolo",
      text_en: "Approach the symbol",
      next: "reformatorio_abre_portal",
    },
  ],
};

export const reformatorio_sello_emotivo = {
  id: "reformatorio_sello_emotivo",
  title: "Último momento",
  title_en: "Last moment",
  background: require("../../../assets/backgrounds/huerfano/vision_emotivo.png"),
  text: "La figura te observa en silencio. En sus ojos vacíos, ves un reflejo: vos, más chico, corriendo entre libros con ella.\n\nUn instante cálido. Imposible de recuperar.\n\n“Eso era tuyo,” dice la voz. “Ahora también lo será el precio.”",
  text_en:
    "The figure watches you in silence. In her empty eyes, you see a reflection: you, younger, running through bookshelves with her.\n\nA warm moment—impossible to recover.\n\n“That was yours,” the voice says. “Now so will be the price.”",
  options: [
    {
      text: "Aceptar el precio",
      text_en: "Accept the price",
      next: "reformatorio_sello_emotivo_2",
    },
  ],
};

export const reformatorio_sello_emotivo_2 = {
  id: "reformatorio_sello_emotivo_2",
  title: "El precio",
  title_en: "The Price",
  background: require("../../../assets/backgrounds/huerfano/vision_emotivo_2.png"),
  text: "Todo se quiebra en mil fragmentos de luz.\n\nDespertás en la sala oculta. Tu cuerpo tiembla. Tu mano arde.\n\nEn el suelo, el símbolo espiral brilla intensamente… está hecho con tu sangre.",
  text_en:
    "Everything shatters into a thousand shards of light.\n\nYou wake in the hidden room. Your body shakes. Your hand burns.\n\nOn the floor, the spiral symbol glows brightly… drawn in your blood.",
  etiquetas: ["sangre_sello_activado", "dolor_ligado", "recuerdo_ofrecido"],
  options: [
    {
      text: "Acercarte al símbolo",
      text_en: "Approach the symbol",
      next: "reformatorio_abre_portal",
    },
  ],
};

export const reformatorio_abre_portal = {
  id: "reformatorio_abre_portal",
  title: "La grieta",
  title_en: "The Rift",
  background: require("../../../assets/backgrounds/huerfano/abre_portal.png"),
  text: "Volvés al rincón sellado. Pero ya no es un rincón.\n\nEl suelo está rajado. El aire vibra con un zumbido grave que resuena en tu pecho. La espiral en el centro ya no parece un dibujo: brota desde la piedra, como si hubiera despertado.",
  text_en:
    "You return to the sealed corner. But it's no longer a corner.\n\nThe ground is cracked. The air hums with a low vibration that echoes in your chest. The spiral in the center no longer looks drawn—it grows from the stone, as if awakened.",
  etiquetas: ["puerta_abierta"],
  options: [
    {
      text: "Acercarte al centro",
      text_en: "Approach the center",
      next: "reformatorio_abre_portal_2",
    },
  ],
};

export const reformatorio_abre_portal_2 = {
  id: "reformatorio_abre_portal_2",
  title: "El puente",
  title_en: "The bridge",
  background: require("../../../assets/backgrounds/huerfano/abre_portal.png"),
  text: "La temperatura cae. La luz se curva alrededor del símbolo. Algo —que no ves pero sentís— te espera más allá.\n\nTu pulso se alinea con el zumbido. El aire huele a piedra rota y a algo que no tiene nombre. Recordás una voz sin sonido. Un reflejo que no era tuyo. Una elección ya hecha.\n\n*“El puente está abierto.”*",
  text_en:
    "The temperature drops. Light bends around the symbol. Something—you cannot see but can feel—waits beyond.\n\nYour heartbeat matches the hum. The air smells like broken stone and something nameless. You remember a voiceless voice. A reflection that wasn’t yours. A choice already made.\n\n*“The bridge is open.”*",
  options: [
    {
      text: "Entrar sin dudar",
      text_en: "Enter without hesitation",
      etiquetas: ["entrego_voluntad"],
      next: "reformatorio_ritual_entidad",
    },
    {
      text: "Hacer una pregunta antes de cruzar",
      text_en: "Ask a question before crossing",
      etiquetas: [
        "curioso",
        "resistencia_emocional",
        "recuerdo_madre",
        "dolor_ligado",
      ],
      next: "reformatorio_entidad_responde_1",
    },
  ],
};

export const reformatorio_entidad_responde_1 = {
  id: "reformatorio_entidad_responde_1",
  title: "Preguntas",
  title_en: "Questions",
  //background: require("../../../assets/backgrounds/huerfano/ritual_entidad.png"),
  text: "“¿Querés saber quiénes fueron?”\n\nLa voz no vibra. No ocupa espacio. Solo existe.\n\n“Tus padres no huían. Estaban cerca de abrir los sellos sin perder la mente.”\n\n“No buscaban poder: buscaban recordar un mundo sin muros.”",

  text_en:
    "“You want to know who they were?”\n\nThe voice does not vibrate. It doesn’t take up space. It just is.\n\n“Your parents weren’t running. They searched for a way to open the seals without being broken.”\n\n“Forbidden magic isn’t corruption. It is remembrance.”",
  options: [
    {
      text: "Asentir",
      text_en: "Nod",
      etiquetas: ["perdio_voz"],
      next: "reformatorio_entidad_responde_2",
    },
  ],
};

export const reformatorio_entidad_responde_2 = {
  id: "reformatorio_entidad_responde_2",
  title: "Silencio",
  title_en: "Silence",
  //background: require("../../../assets/backgrounds/huerfano/ritual_entidad.png"),
  text: "“Tu voz ya no te pertenece.”\n\n“La sombra fue lo primero que los comisionados vieron en vos. Sabían lo que heredaste.”\n\nAlgo en tu espalda se desprende. Ya no proyectás nada.",

  text_en:
    "“Your voice is no longer yours.”\n\n“They saw your shadow first. It will be the first to leave.”\n\nSomething detaches from your back. You cast no shadow.",
  options: [
    {
      text: "Saber más",
      text_en: "Know more",
      etiquetas: ["perdio_sombra"],
      next: "reformatorio_entidad_responde_3",
    },
  ],
};

export const reformatorio_entidad_responde_3 = {
  id: "reformatorio_entidad_responde_3",
  title: "Fronteras rotas",
  title_en: "Shattered boundaries",
  //background: require("../../../assets/backgrounds/huerfano/ritual_entidad.png"),
  text: "“Tus padres creían que la magia prohibida era un milagro mal entendido.”\n\n“No buscaban poder. Buscaban romper la frontera entre la muerte y la memoria.”\n\n“Querían que el mundo recordara todo lo que perdió. Incluso a los que ya no están.”",
  text_en:
    "“Your parents believed forbidden magic was a misunderstood miracle.”\n\n“They didn’t seek power. They wanted to break the line between death and memory.”\n\n“They wished the world could remember everything it had lost—even those who are gone.”",
  options: [
    {
      text: "Asentir otra vez",
      text_en: "Nod again",
      etiquetas: ["perdio_reflejo"],
      next: "reformatorio_entidad_responde_4",
    },
    {
      text: "Dejar de escuchar",
      text_en: "Stop listening",
      next: "reformatorio_ritual_entidad",
    },
  ],
};

export const reformatorio_entidad_responde_4 = {
  id: "reformatorio_entidad_responde_4",
  title: "Sin reflejo",
  title_en: "Without reflection",
  //background: require("../../../assets/backgrounds/huerfano/ritual_entidad.png"),
  text: "Buscás tu reflejo. No está.\n\nLa entidad guarda silencio… como si esperara que entiendas.\n\n“Podés irte ahora. No sabrás todo. Pero seguirás siendo.”",
  text_en:
    "You look for your reflection. It’s gone.\n\nThe entity remains silent… as if waiting for you to understand.\n\n“You may leave now. You won’t know it all. But you’ll still be.”",
  options: [
    {
      text: "Asentir otra vez",
      text_en: "Nod again",
      etiquetas: ["entrega_total"],
      next: "reformatorio_entidad_responde_final",
    },
    {
      text: "Dejar de escuchar",
      text_en: "Stop listening",
      next: "reformatorio_ritual_entidad",
    },
  ],
};



export const reformatorio_entidad_responde_final = {
  id: "reformatorio_entidad_responde_final_1",
  title: "Última verdad",
  title_en: "Final truth",
  //background: require("../../../assets/backgrounds/huerfano/ritual_entidad.png"),
  text: "“La magia prohibida no da poder. Devuelve lo perdido.”\n\n“Pero nadie puede portar memoria completa sin romperse.”\n\nTu cuerpo empieza a temblar. Las manos, los pies… como si estuvieras hecho de algo que no quiere quedarse.",
  text_en:
    "“Forbidden magic grants no power. It returns what was lost.”\n\n“But no one can carry full memory without breaking.”\n\nYour body begins to tremble. Your hands, your feet… as if you were made of something that no longer wishes to stay.",
  etiquetas: [],
  options: [
    {
      text: "Aceptar el precio",
      text_en: "Accept the price",
      next: "reformatorio_entidad_responde_final_2",
    },
  ],
};

export const reformatorio_entidad_responde_final_2 = {
  id: "reformatorio_entidad_responde_final_2",
  title: "Desvanecimiento",
  title_en: "Dissolution",
  //background: require("../../../assets/backgrounds/huerfano/ritual_entidad.png"),
  text: "Sentís cómo tu cuerpo se disuelve. No duele. Simplemente, dejás de estar.\n\nLa última imagen se impone en tu mente: tus padres, jóvenes, enfrentando al comisionado… y sonriendo. Como si supieran que esto ocurriría.",
  text_en:
    "You feel your body dissolve. It doesn’t hurt. You simply cease to be.\n\nThe final image fills your mind: your parents, young, facing the commissioner… and smiling. As if they knew this would happen.",
  etiquetas: [
    "perdio_cuerpo",
    "perdio_voz",
    "perdio_sombra",
    "perdio_reflejo",
    "muerte_consciente",
  ],
  options: [
    {
      text: "...",
      text_en: "...",
      next: "fin_muerte_conocimiento",
    },
  ],
};


export const fin_muerte_conocimiento = {
  id: "fin_muerte_conocimiento_1",
  title: "Sin forma",
  title_en: "Formless",
  //background: require("../../../assets/backgrounds/huerfano/blanco_total.png"),
  text: "No queda voz, ni forma, ni sombra. Solo lo que sabés. Eso es lo único que sigue.\n\nAmbur no fue fundada para proteger. Fue construida para aislar.\n\nEl comisionado no teme a la magia. Teme a quienes recuerdan su origen.",
  text_en:
    "No voice, no form, no shadow remains. Only what you know. That alone continues.\n\nAmbur was not built to protect. It was built to isolate.\n\nThe commissioner doesn’t fear magic. He fears those who remember its origin.",
  etiquetas: [],
  options: [
    {
      text: "Seguir sabiendo",
      text_en: "Keep knowing",
      next: "fin_muerte_conocimiento_2",
    },
  ],
};

export const fin_muerte_conocimiento_2 = {
  id: "fin_muerte_conocimiento_2",
  title: "Ecos",
  title_en: "Echoes",
  //background: require("../../../assets/backgrounds/huerfano/blanco_total.png"),
  text: "Tus padres creían que la memoria podía sanar el mundo. Por eso murieron.\n\nY aunque ya no estés, el eco de lo que aprendiste… podría quedar en alguien más.\n\nEn algún rincón de Ambur, alguien recordará tu historia.",
  text_en:
    "Your parents believed memory could heal the world. That’s why they died.\n\nAnd though you are no more, the echo of what you’ve learned… might reach someone else.\n\nSomewhere in Ambur, someone will remember your story.",
  etiquetas: [
    "fin_alternativo",
    "conocimiento_total",
    "fin_linea_muerte",
    "epilogo_oculto",
  ],
  options: [
    {
      text: "Finalizar partida",
      text_en: "End game",
      next: "intro_1",
    },
  ],
};


export const reformatorio_ritual_entidad = {
  id: "reformatorio_ritual_entidad_1",
  title: "La Entidad",
  title_en: "The Entity",
  // background: require("../../../assets/backgrounds/huerfano/ritual_entidad.png"),
  text: "Cruzás el umbral. El aire desaparece. La gravedad se pliega. Todo es blanco… pero sin luz. Frente a vos, no hay una figura. Hay un espacio donde debería haber algo.\n\nY sin embargo, sabés que está ahí. Que siempre estuvo.\n\n*“Todo poder exige forma. Toda forma exige vacío.”*",
  text_en:
    "You cross the threshold. The air vanishes. Gravity folds. Everything is white… but without light. Before you, there is no figure. There is a space where something should be.\n\nAnd yet, you know it’s there. It has always been there.\n\n*“All power demands form. All form demands emptiness.”*",
  etiquetas: [],
  options: [
    {
      text: "Acercarte a la presencia",
      text_en: "Approach the presence",
      next: "reformatorio_ritual_entidad_2",
    },
  ],
};

export const reformatorio_ritual_entidad_2 = {
  id: "reformatorio_ritual_entidad_2",
  title: "Dejar de ser",
  title_en: "Ceasing to be",
  // background: require("../../../assets/backgrounds/huerfano/ritual_entidad.png"),
  text: "*“Tu voz, tus lágrimas, tu nombre... No los necesito. Pero vos ya no los vas a usar.”*\n\nLa espiral se cierra detrás tuyo.\n\nY entonces entendés: no estás cruzando hacia otro lugar.\n\nEstás **dejando de ser**.",
  text_en:
    "*“Your voice, your tears, your name... I don’t need them. But you won’t use them anymore.”*\n\nThe spiral closes behind you.\n\nAnd then you understand: you’re not crossing into a new place.\n\nYou are **ceasing to be**.",
  etiquetas: [
    "perdio_voz",
    "perdio_emociones",
    "marca_magia",
    "cruzo_la_grieta",
  ],
  options: [
    {
      text: "...",
      text_en: "...",
      next: "afueras_inicio",
    },
  ],
};


//---------------------- ARCO LAS AFUERAS ----------------------------------------------------------------
export const afueras_inicio = {
  id: "afueras_inicio",
  title: "Despertar lejos",
  title_en: "Awakening Far Away",
  text: "Despertás en el barro, bajo un cielo sin nubes.\n\nEl aire es denso, la tierra está quemada. No hay muros, no hay reformatorio.\n\nTu cuerpo tiembla. Algo cambió.\n\nUn símbolo arde levemente en tu piel, como una huella que no sabías que llevabas.",
  text_en:
    "You wake up in the mud, under a cloudless sky.\n\nThe air is dense. The ground scorched. No walls. No reformatorio.\n\nYour body shakes. Something has changed.\n\nA faint symbol glows on your skin—like a mark you didn’t know you carried.",
  background: require("../../../assets/backgrounds/huerfano/afuera_inicios.png"),
  etiquetas: ["afuera", "inicio_afueras", "marca_magia"],
  options: [
    {
      text: "Levantarte",
      text_en: "Get up",
      next: "afueras_exploracion_1",
    },
  ],
};
