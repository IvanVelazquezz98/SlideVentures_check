import { addEtiqueta } from "../redux/playerSlice";

export function asignarAvatarDesdeEtiquetas(etiquetas, dispatch) {
  const perfiles = ["perfil_brujo", "perfil_noble", "perfil_huerfano", "perfil_errante"];

  // Contar cuántas veces aparece cada perfil
  const cuenta = {};
  for (const perfil of perfiles) {
    cuenta[perfil] = etiquetas.filter(e => e === perfil).length;
  }

  // Encontrar el valor más alto
  const max = Math.max(...Object.values(cuenta));

  // Filtrar los perfiles que tienen ese valor máximo
  const empatados = perfiles.filter(p => cuenta[p] === max);

  // Limitar a máximo 3 perfiles empatados
  const seleccionados = empatados.slice(0, 3);

  // Asignar sus etiquetas de origen
  seleccionados.forEach(perfil => {
    const origen = perfil.replace("perfil_", "origen_");
    dispatch(addEtiqueta(origen));
  });
}
