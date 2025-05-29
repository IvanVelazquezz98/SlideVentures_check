import brujoAvatar from "../../../assets/avatars/brujo.png";
import nobleAvatar from "../../../assets/avatars/noble.png";
import huerfanoAvatar from "../../../assets/avatars/huerfano.png";
import erranteAvatar from "../../../assets/avatars/errante.png";

export const origen_noble = {
  id: "origen_noble",
  title: "Origen noble",
  text: "Naciste entre lujos y promesas rotas.",
  options: [
    {
      text: "Aceptar tu legado noble",
      effects: { dinero: 2 },
      next: "avatar_noble"
    }
  ]
};

export const avatar_noble = {
  id: "avatar_noble",
  title: "Heredero de nobleza",
  text: "Tu porte y presencia imponen respeto en todo lugar.",
  avatar: nobleAvatar,
  options: [
    {
      text: "Avanzar",
      next: "primer_cruce"
    }
  ]
};

export const origen_brujo = {
  id: "origen_brujo",
  title: "Origen brujo",
  text: "Fuiste criado por brujos. Conocés secretos prohibidos.",
  options: [
    {
      text: "Canalizar tu inteligencia",
      effects: { inteligencia: 2 },
      etiquetas: ["brujo"],
      next: "avatar_brujo"
    },
    {
      text: "Canalizar tu fuerza",
      effects: { fuerza: 2 },
      etiquetas: ["brujo"],
      next: "avatar_brujo"
    }
  ]
};

export const avatar_brujo = {
  id: "avatar_brujo",
  title: "El despertar del brujo",
  text: "Sentís cómo tu cuerpo se transforma con el poder arcano.",
  avatar: brujoAvatar, 
  options: [
    {
      text: "Avanzar",
      next: "primer_cruce"
    }
  ]
};

export const origen_huerfano = {
  id: "origen_huerfano",
  title: "Origen huérfano",
  text: "Huérfano desde niño, aprendiste a sobrevivir solo.",
  options: [
    {
      text: "Abrazar la calle",
      effects: { inteligencia: 1, respeto: -1 },
      next: "avatar_huerfano"
    }
  ]
};

export const avatar_huerfano = {
  id: "avatar_huerfano",
  title: "El niño sobreviviente",
  text: "Tu mirada refleja la dureza de una infancia sin amparo.",
  avatar: huerfanoAvatar,
  options: [
    {
      text: "Avanzar",
      next: "primer_cruce"
    }
  ]
};

export const origen_errante = {
  id: "origen_errante",
  title: "Errante",
  text: "Negás tu pasado. Sos un viajero sin historia.",
  options: [
    {
      text: "Seguir adelante",
      next: "avatar_errante"
    }
  ]
};

export const avatar_errante = {
  id: "avatar_errante",
  title: "El errante",
  text: "Tus pasos no dejan huella, pero tu presencia impone.",
  avatar: erranteAvatar,
  options: [
    {
      text: "Avanzar",
      next: "primer_cruce"
    }
  ]
};