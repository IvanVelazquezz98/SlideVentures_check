import * as origenes from "./origenes";
import * as comunes from "./comunes";
import * as combate from "./combate";
import * as edad from "./edad";
import * as inicio from "./inicio";
import * as huerfano from './huerfano'

export const events = {
  ...inicio,
  ...origenes,
  ...comunes,
  ...combate,
  ...edad,
  ...huerfano
};