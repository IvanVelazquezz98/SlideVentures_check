export const evento_tiempo = {
  id: "evento_tiempo",
  title: "Paso del tiempo",
  text: "Pasaron algunos años desde tu última aventura.",
  effects: { edad: 2 },
  options: [
    { text: "Continuar", next: "proximo_evento" },
  ],
};

// 3. En los eventos que quieras que estén bloqueados por edad
export const evento_vejez = {
  id: "evento_vejez",
  title: "Viejo sabio",
  text: "Te encontrás con un sabio que solo habla con adultos mayores.",
  condition: {
    edad: { gte: 60 }, // 👈 Condición por edad
  },
  options: [
    { text: "Escucharlo", next: "sabiduria_final" },
  ],
};