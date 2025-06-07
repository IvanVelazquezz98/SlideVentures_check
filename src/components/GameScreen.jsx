import React, { useEffect, useState, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { events } from "../data/events";
import {
  applyEffects,
  setCurrentEvent,
  addEtiqueta,
  setBackground,
  setAvatar,
  addToLog,
} from "../redux/playerSlice";
import {
  resolveNext,
  checkCondition,
  pickRandom,
  generateCombatOptions,
} from "../core/gameEngine";
import styled from "styled-components/native";
import TypewriterText from "../utils/TypewriterText";
import DraggableCard from "./Cards/DraggableCards";
import ParticleExplosion from "../components/Cards/Particle";
import uuid from "react-native-uuid";
import StatAnimated from "./User/Stats/StatAnimated";
import { ImageBackground, StyleSheet, View, TouchableOpacity, Image} from "react-native";
import backgroundDefault from "../../assets/backgrounds/intro/intro_1.png";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { Audio } from "expo-av";
import marcoUsuario from "../../assets/marcoPj.png";
import UserPanel from "./User/UserPanel";
import DadoVisual from "./DadoVisual";
import { asignarAvatarDesdeEtiquetas } from "../utils/asignarAvatar";
import btnToggleCards from "../../assets/backgrounds/ocultarCartas.png";

export default function GameScreen() {
  const player = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const currentEvent = events[player.currentEventId];
  const dropZoneRef = useRef(null);
  const [dropY, setDropY] = useState(500);
  const [particleCoords, setParticleCoords] = useState(null);
  const background = player.background || backgroundDefault;
  const [currentBg, setCurrentBg] = useState(background);
  const opacity = useSharedValue(1);
  const soundRef = useRef(null);
  const [diceRoll, setDiceRoll] = useState(null);
  const [pendingRollOption, setPendingRollOption] = useState(null);
  const cardsOpacity = useSharedValue(1);
  const [cardsVisible, setCardsVisible] = useState(true);

console.log('ETIQUETAS', player.etiquetas)

  const cardsAnimatedStyle = useAnimatedStyle(() => ({
    opacity: cardsOpacity.value,
    zIndex: 1000,
    elevation: 9999,
  }));

  useEffect(() => {
    if (background !== currentBg) {
      opacity.value = withTiming(0, { duration: 400 }, (finished) => {
        if (finished) {
          runOnJS(setCurrentBg)(background);
          opacity.value = withTiming(1, { duration: 400 });
        }
      });
    }
  }, [background]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const randomOptionIds = currentEvent?.randomOptions
    ? pickRandom(
        currentEvent.randomOptions.from,
        currentEvent.randomOptions.max
      )
    : [];

  useEffect(() => {
    const mapped = visibleOptions.map((opt) => {
      const icons = Object.entries(opt.effects || {}).map(([key]) => {
        const showActual = Math.random() > 0.2;
        return !showActual
          ? "❓"
          : key === "salud"
          ? "❤️"
          : key === "hambre"
          ? "🍗"
          : key === "dinero"
          ? "💰"
          : key === "respeto"
          ? "🕴️"
          : key === "inteligencia"
          ? "📘"
          : "✨";
      });

      return {
        ...opt,
        _uuid: uuid.v4(),
        _icons: icons,
      };
    });

    setOptionsWithIds(mapped);
    prevEventId.current = currentEvent.id;
  }, [currentEvent.id, visibleOptions]);

  useEffect(() => {
    let isMounted = true;
    let stopTimeout = null;
    let fadeInterval = null;

    const fadeOutAndStop = async (sound) => {
      let volume = 0.2;
      const steps = 10;
      const stepTime = 100;

      fadeInterval = setInterval(async () => {
        volume -= 0.02;
        if (volume <= 0) {
          clearInterval(fadeInterval);
          await sound.stopAsync();
        } else {
          await sound.setVolumeAsync(volume);
        }
      }, stepTime);
    };

    const playSound = async () => {
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }

      const evt = events[player.currentEventId];
      if (evt?.sound && isMounted) {
        const { sound } = await Audio.Sound.createAsync(evt.sound);
        soundRef.current = sound;
        await sound.setVolumeAsync(0.2);
        await sound.playAsync();

        stopTimeout = setTimeout(() => {
          fadeOutAndStop(sound);
        }, 4000); // ⚠️ Empieza a bajar el volumen al segundo 4
      }
    };

    playSound();

    return () => {
      isMounted = false;
      if (stopTimeout) clearTimeout(stopTimeout);
      if (fadeInterval) clearInterval(fadeInterval);
    };
  }, [player.currentEventId]);

  const visibleOptions = useMemo(() => {
    let baseOptions = [];

    if (
      currentEvent.generateCombatOptions &&
      checkCondition(player, currentEvent.condition)
    ) {
      baseOptions = generateCombatOptions(player, currentEvent);
    } else {
      baseOptions = currentEvent.options || [];
    }

    const randomOptions = randomOptionIds
      .map((id) => {
        const evt = events[id];
        if (!evt) return null;
        return {
          title: evt.title || id.replace("_", " "),
          description: evt.text,
          next: id,
          avatar: evt.avatar,
          effects: evt.effects,
          etiquetas: evt.etiquetas,
        };
      })
      .filter(Boolean);

    return [...baseOptions, ...randomOptions].filter((opt) =>
      checkCondition(player, opt.condition)
    );
  }, [currentEvent, player, randomOptionIds]);

  const prevEventId = useRef(null);
  const [optionsWithIds, setOptionsWithIds] = useState([]);

  const handleOption = (optionWithCoords) => {
    const { _coords, ...option } = optionWithCoords;

    if (_coords?.pageX !== undefined && _coords?.pageY !== undefined) {
      const estimatedX = _coords.pageX - 30;
      const estimatedY = _coords.pageY - 130;
      setParticleCoords({ x: estimatedX, y: estimatedY });
    }

    dispatch(
      addToLog({
        type: "opcion",
        opcion: option,
      })
    );

    if (option.special === "roll_dado") {
      setPendingRollOption(option);
      setDiceRoll("rolling"); // cualquier valor truthy para mostrar el componente
    }

    if (option.effects) dispatch(applyEffects(option.effects));
    if (option.etiquetas) {
      option.etiquetas.forEach((tag) => dispatch(addEtiqueta(tag)));
    }

    if (option.next) {
      const nextId = resolveNext(option.next);

      aplicarEvento(nextId);
    }
  };

  const handleDiceFinish = (rollValue) => {
    const {
      stat,
      dificultad,
      bonus = 0,
      onSuccess,
      onFail,
    } = pendingRollOption.roll;
    const total = rollValue + (player.stats[stat] || 0) + bonus;
    const nextId = total >= dificultad ? onSuccess : onFail;
    setDiceRoll(null);
    setPendingRollOption(null);
    aplicarEvento(nextId);
  };

  const aplicarEvento = (nextId) => {
    dispatch(setCurrentEvent(nextId));
    const nextEvent = events[nextId];

    if (nextEvent?.effects) {
      dispatch(applyEffects(nextEvent.effects));
    }
    if (nextEvent?.etiquetas) {
      nextEvent.etiquetas.forEach((tag) => dispatch(addEtiqueta(tag)));
    }
    if (nextEvent?.background) dispatch(setBackground(nextEvent.background));
    if (nextEvent?.avatar) dispatch(setAvatar(nextEvent.avatar));
  };

  useEffect(() => {
    if (particleCoords) {
      const timer = setTimeout(() => setParticleCoords(null), 600);
      return () => clearTimeout(timer);
    }
  }, [particleCoords]);

  return (
    <Container>
      <Animated.Image
        key={currentBg}
        source={currentBg}
        style={[
          StyleSheet.absoluteFill,
          { width: "100%", height: "100%", zIndex: 0 },
          animatedStyle,
        ]}
        resizeMode="cover"
      />
      <View style={{ flex: 1 }}>
        <Title style={{ fontFamily: "Pixeloid", fontSize: 24 }}>
          {currentEvent?.title || "Evento"}
        </Title>
        <TypewriterText
          text={currentEvent.text}
          fontSize={16}
          color="#d1d5db"
          top="60"
        />

        {diceRoll && (
          <DadoVisual
            visible={true}
            onRollEnd={handleDiceFinish}
            onClose={() => {
              setDiceRoll(null);
              setPendingRollOption(null);
            }}
            stat={pendingRollOption?.roll?.stat}
            dificultad={pendingRollOption?.roll?.dificultad}
            bonus={pendingRollOption?.roll?.bonus}
          />
        )}
        <Animated.View style={[cardsAnimatedStyle]}>
          <CardsRow>
            {optionsWithIds.map((opt, i) => (
              <React.Fragment key={opt._uuid}>
                <DraggableCard
                  option={opt}
                  index={i}
                  onSelect={(option) => handleOption(option)}
                  dropZoneY={dropY}
                />
              </React.Fragment>
            ))}
          </CardsRow>
        </Animated.View>
        <Animated.View style={[cardsAnimatedStyle]}>
          <ContainerEffects>
            {optionsWithIds.map((opt, i) => (
              <EffectRow key={opt._uuid}>
                {(opt._icons || []).map((icon, j) => (
                  <EffectIcon key={j}>{icon}</EffectIcon>
                ))}
              </EffectRow>
            ))}
          </ContainerEffects>
        </Animated.View>
        <TouchableOpacity
          onPress={() => {
            cardsOpacity.value = withTiming(cardsVisible ? 0 : 1, {
              duration: 400,
            });
            setCardsVisible(!cardsVisible);
          }}
          style={{
            position: "absolute",
            top: 530,
            left: 10,
            zIndex: 1000,
          }}
        >
          <Image
            source={btnToggleCards}
            style={{ width: 48, height: 48 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        {particleCoords && (
          <ParticleExplosion x={particleCoords.x} y={particleCoords.y} />
        )}
        <UserPanel dropZoneRef={dropZoneRef} setDropY={setDropY} />
      </View>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #1a1128;
  border-color: aliceblue;
  border-right: 2px;
`;

const Title = styled.Text`
  color: #fcd34d;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 10;
`;

const CardsRow = styled.View`
  position: absolute;
  top: 280;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 999;
`;

const ContainerEffects = styled.View`
  position: absolute;
  top: 440;

  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 0;
`;

const EffectRow = styled.View`
  flex-direction: row;
  margin-top: 8px;
  justify-content: center;
  gap: 4px;
  width: 110px;
  z-index: 0;
`;

const EffectIcon = styled.Text`
  font-size: 18px;
`;
