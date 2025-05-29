export function checkCondition(player, condition = {}) {
  const { stats, origen, etiquetas } = player;

  for (const key in condition) {
    const value = condition[key];

    if (key === "etiquetas") {
      if (!value.every(tag => etiquetas.includes(tag))) return false;
    }

    else if (key === "etiquetasIncluye") {
      if (!value.every(tag => etiquetas.includes(tag))) return false;
    }

    else if (key === "etiquetasExcluye") {
      if (value.some(tag => etiquetas.includes(tag))) return false;
    }

    else if (key === "origen") {
      if (origen !== value) return false;
    }

    else if (typeof value === "object") {
      if (value.gte !== undefined && stats[key] < value.gte) return false;
      if (value.lte !== undefined && stats[key] > value.lte) return false;
      if (value.eq !== undefined && stats[key] !== value.eq) return false;
    }

    else {
      if (stats[key] !== value) return false;
    }
  }

  return true;
}

// Aplica efectos sobre el estado del jugador
export function applyEffects(stats, effects = {}) {
  const newStats = { ...stats };
  for (const key in effects) {
    newStats[key] = (newStats[key] || 0) + effects[key];
  }
  return newStats;
}

// Elige una opción aleatoria de un array o devuelve el valor único
export function resolveNext(next) {
  if (Array.isArray(next)) {
    const i = Math.floor(Math.random() * next.length);
    return next[i];
  }
  return next;
}

export function pickRandom(array, max) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, max);
}

export function generateCombatOptions(player, event) {
  const options = [];

  // Escapar siempre disponible
  options.push({
    text: "Huir",
    effects: { respeto: -2 },
    next: event.nextOnEscape,
  });

  let hasCombatOption = false;

  if (player.etiquetas.includes("daga")) {
    hasCombatOption = true;
    options.push({
      text: "Atacar con la daga",
      special: "roll_dado",
      roll: {
        stat: "fuerza",
        dificultad: event.enemy.dificultad,
        bonus: 1,
        onSuccess: event.nextOnSuccess,
        onFail: event.nextOnFail,
      },
    });
  }

  if (player.etiquetas.includes("brujo")) {
    hasCombatOption = true;
    options.push({
      text: "Usar magia",
      special: "roll_dado",
      roll: {
        stat: "inteligencia",
        dificultad: event.enemy.dificultad - 1,
        bonus: 0,
        onSuccess: event.nextOnSuccess,
        onFail: event.nextOnFail,
      },
    });
  }

  // Si no tiene armas ni magia, permitir combate con puños
  if (!hasCombatOption) {
    options.push({
      text: "Atacar con los puños",
      special: "roll_dado",
      roll: {
        stat: "fuerza",
        dificultad: event.enemy.dificultad + 1, // más difícil con puños
        bonus: 0,
        onSuccess: event.nextOnSuccess,
        onFail: event.nextOnFail,
      },
    });
  }

  return options;
}


