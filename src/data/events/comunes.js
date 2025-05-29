import walkingPeople from "../../../assets/sfx/walking.mp3";
import merchantPeople from "../../../assets/sfx/merchant.mp3";

export const primer_cruce = {
  id: "primer_cruce",
  title: "Primer cruce",
  text: "Ves tres caminos ante vos.",
  options: [
    {
      text: "Bosque oscuro",
      effects: { hambre: -1 },
      next: ["camino_bosque", "evento_falso_bosque"],
      special: "posible_combate",
    },
    {
      text: "Camino al monasterio",
      effects: { inteligencia: 1 },
      next: "monasterio_inicio",
    },
    {
      text: "Mercado",
      effects: { comida: 1, dinero: -1 },
      next: "mercado_inicio",
    },
  ],
  sound: walkingPeople,
  background: require("../../../assets/backgrounds/caminos.png"),
};

export const evento_falso_bosque = {
  id: "evento_falso_bosque",
  title: "Bosque tranquilo",
  text: "Nada ocurre en este tramo sombrío del bosque. A lo lejos, entre los árboles, distinguís una estructura antigua.",
  options: [
    {
      text: "Investigar el castillo",
      next: "bosque_castillo",
    },
    {
      text: "Volver al cruce",
      next: "primer_cruce",
    },
  ],
  background: require("../../../assets/backgrounds/forest.png"),
};

export const camino_bosque = {
  id: "camino_bosque",
  title: "Sendero del bosque",
  text: "Avanzás por un sendero entre árboles espesos.",
  options: [
    {
      text: "Explorar el claro",
      condition: { etiquetasExcluye: ["lobo_derrotado"] },
      next: "combate_lobo",
    },
    {
      text: "Explorar el claro",
      condition: { etiquetasIncluye: ["lobo_derrotado"] },
      next: "claro_limpio",
    },
    {
      text: "Volver al cruce",
      next: "primer_cruce",
    },
  ],
};

export const claro_limpio = {
  id: "claro_limpio",
  title: "Claro tranquilo",
  text: "Ya no hay señales del lobo. El bosque permanece en calma.",
  options: [
    {
      text: "Volver",
      next: "camino_bosque",
    },
  ],
};

export const monasterio_inicio = {
  id: "monasterio_inicio",
  title: "Monasterio silencioso",
  text: "Un monasterio silencioso te observa desde la colina.",
  options: [
    {
      text: "Regresar al camino",
      next: "primer_cruce",
    },
  ],
};

export const mercado_inicio = {
  id: "mercado_inicio",
  title: "Mercado bullicioso",
  text: "Olores y gritos de comerciantes llenan el aire.",
  options: [
    {
      text: "Volver al cruce",
      next: "primer_cruce",
    },
  ],
  background: require("../../../assets/backgrounds/merchant.png"),
  sound: merchantPeople,
};

export const bosque_castillo = {
  id: "bosque_castillo",
  title: "Castillo antiguo",
  text: "En medio del bosque, encontrás un castillo abandonado con dos puertas.",
  options: [
    {
      text: "Puerta izquierda",
      next: "puerta_llave",
    },
    {
      text: "Puerta derecha",
      next: "puerta_cofre",
    },
    {
      text: "Volver al cruce",
      next: "primer_cruce",
    },
  ],
  // background: require("../../../assets/backgrounds/castillo.png"),
};

export const puerta_llave = {
  id: "puerta_llave",
  title: "Habitación polvorienta",
  text: "Una llave antigua reposa sobre una mesa cubierta de polvo.",
  options: [
    {
      text: "Tomar la llave",
      next: "llave_obtenida",
    },
    {
      text: "Dejar la llave",
      next: "bosque_castillo",
    },
  ],
};

export const llave_obtenida = {
  id: "llave_obtenida",
  title: "Llave obtenida",
  text: "Guardás la llave antigua. Sentís que desbloqueará algo importante.",
  options: [
    {
      text: "Volver al vestíbulo",
      next: "bosque_castillo",
      etiquetas: ["llave_castillo"],
    },
  ],
};

export const puerta_cofre = {
  id: "puerta_cofre",
  title: "Sala del tesoro",
  text: "Un cofre pesado descansa en el centro de la sala.",
  options: [
    {
      text: "Abrir el cofre",
      condition: {
        etiquetasIncluye: ["llave_castillo"],
        etiquetasExcluye: ["cofre_abierto"],
      },
      effects: { dinero: 10 },
      etiquetas: ["cofre_abierto"],
      next: "cofre_abierto",
    },
    {
      text: "Mirar el cofre",
      condition: {
        etiquetasIncluye: ["cofre_abierto"],
      },
      next: "cofre_vacio",
    },
    {
      text: "Usar ganzúa",
      condition: {
        etiquetasIncluye: ["ganzua"],
        etiquetasExcluye: ["llave_castillo", "cofre_abierto"],
      },
      special: "roll_dado",
      roll: {
        stat: "inteligencia", // más lógica que fuerza
        dificultad: 2, // más fácil
        bonus: 1,
        onSuccess: "cofre_abierto",
        onFail: "cofre_dañado",
      },
    },
    {
      text: "Forzar con la mano",
      condition: {
        etiquetasExcluye: ["ganzua", "llave_castillo", "cofre_abierto"],
      },
      special: "roll_dado",
      roll: {
        stat: "fuerza",
        dificultad: 4, // más difícil
        bonus: 0,
        onSuccess: "cofre_abierto",
        onFail: "cofre_dañado",
      },
    },
    {
      text: "Salir",
      next: "bosque_castillo",
    },
  ],
};

export const cofre_abierto = {
  id: "cofre_abierto",
  title: "Tesoro encontrado",
  text: "Abrís el cofre y encontrás 10 monedas de oro.",
  effects: { dinero: 10 },
  options: [
    {
      text: "Volver",
      next: "bosque_castillo",
    },
  ],
};

export const cofre_vacio = {
  id: "cofre_vacio",
  title: "Cofre vacío",
  text: "Ya has tomado todo lo que había dentro.",
  options: [
    {
      text: "Volver",
      next: "bosque_castillo",
    },
  ],
};

export const cofre_dañado = {
  id: "cofre_dañado",
  title: "Cofre dañado",
  text: "Intentás forzar la cerradura, pero el mecanismo se traba y se rompe. Ya no podrás abrirlo.",
  options: [
    {
      text: "Volver",
      etiquetas: ["cofre_abierto"],
      next: "bosque_castillo",
    },
  ],
};
