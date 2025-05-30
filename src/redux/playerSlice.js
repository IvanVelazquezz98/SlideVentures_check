import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const initialState = {
  origen: null,
  background: null,
  avatar: null,
  stats: {
    salud: 5,
    fuerza: 1,
    respeto: 0,
    inteligencia: 1,
    hambre: 5,
    agua: 5,
    dinero: 0,
    edad: 18,
  },
  etiquetas: [],
  currentEventId: "intro_1",
  //currentEventId: "origen_huerfano_1",
  eventLog: [],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    applyEffects(state, action) {
      const effects = action.payload;
      for (const key in effects) {
        if (key in state.stats) {
          state.stats[key] += effects[key];
        }
      }
    },
    addEtiqueta(state, action) {
      const tag = action.payload;
      if (!state.etiquetas.includes(tag)) {
        state.etiquetas.push(tag);
      }
    },
    setOrigen(state, action) {
      state.origen = action.payload;
    },
    setCurrentEvent(state, action) {
      state.currentEventId = action.payload;
    },
    setBackground(state, action) {
      state.background = action.payload;
    },
    setAvatar(state, action) {
      state.avatar = action.payload;
    },
    addToLog: (state, action) => {
      state.eventLog.push({
        id: uuid.v4(),
        text: action.payload,
        timestamp: Date.now(),
      });
    },
  },
});

export const {
  applyEffects,
  addEtiqueta,
  setOrigen,
  setCurrentEvent,
  setBackground,
  setAvatar,
  addToLog,
} = playerSlice.actions;

export default playerSlice.reducer;
