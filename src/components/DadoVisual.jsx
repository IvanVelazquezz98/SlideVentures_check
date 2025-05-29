import React, { useState } from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import dadoBase from "../../assets/dado.png";

export default function DadoVisual({
  visible,
  onRollEnd,
  onClose,
  dificultad,
  stat,
  bonus = 0,
}) {
  const rotation = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const [resultado, setResultado] = useState(null);
  const [rolling, setRolling] = useState(false);
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: `${rotation.value}deg` },
      { scale: scale.value },
    ],
  }));

  const finalizarDado = (finalValue) => {
    console.log("🎲 Número final del dado:", finalValue);
    setTimeout(() => {
      runOnJS(setResultado)(finalValue);
      scale.value = withSpring(1.4); // Solo agrandamos, sin volver a achicar
    }, 350); // esperamos un poco para que termine la rotación

    setTimeout(() => {
      runOnJS(setResultado)(null);
      runOnJS(setRolling)(false);
      onRollEnd?.(finalValue);
      onClose?.();

      translateX.value = 0;
      translateY.value = 0;
      rotation.value = 0;
      scale.value = 1;
    }, 3500);
  };

  const tirarDado = () => {
    if (rolling) return;
    setRolling(true);

    const dirX = (Math.random() - 0.5) * 250;
    const dirY = (Math.random() - 0.5) * 250;

    // Lanzamiento inicial
    translateX.value = withSpring(dirX);
    translateY.value = withSpring(dirY);

    // Giro comienza al mismo tiempo
    rotation.value = withTiming(360 * 3, {
      duration: 1500,
      easing: Easing.out(Easing.ease),
    });

    // Mostrar números durante el giro
    let contador = 0;
    const intervalId = setInterval(() => {
      const temp = Math.floor(Math.random() * 6) + 1;
      setResultado(temp);
      contador++;
      if (contador >= 10) clearInterval(intervalId);
    }, 120);

    // Después del giro, fijar número final
    setTimeout(() => {
      const finalValue = Math.floor(Math.random() * 6) + 1;
      setResultado(finalValue);
      finalizarDado(finalValue);
    }, 1500); // coincide con la duración del giro
  };

  if (!visible) return null;

  return (
    <Overlay>
      <Pressable style={{ flex: 1 }} onPress={tirarDado}>
        {!rolling && dificultad !== undefined && (
          <InfoText>Dificultad: {dificultad}</InfoText>
        )}
        <DiceContainer>
          <AnimatedDice style={animatedStyle}>
            <DadoImagen source={dadoBase} />
            <DiceText>{resultado ?? "?"}</DiceText>
          </AnimatedDice>
          {!rolling && <SubText>Toque para lanzar</SubText>}
        </DiceContainer>
        {!rolling && (
          <DescriptionText>
            Vas a lanzar un dado y sumarás tu estadística de {stat}
            {bonus !== 0 ? ` más un bonus de ${bonus}` : ""}.{" "}
            {dificultad !== undefined &&
              `Si el total es mayor o igual a ${dificultad}, ganarás el desafío.`}
          </DescriptionText>
        )}
      </Pressable>
    </Overlay>
  );
}

const Overlay = styled.View`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const DiceContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const AnimatedDice = styled(Animated.View)`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

const DadoImagen = styled.Image`
  width: 120px;
  height: 120px;
  position: absolute;
`;

const DiceText = styled.Text`
  font-size: 36px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #1a1128;
`;

const SubText = styled.Text`
  color: #e5e7eb;
  font-size: 14px;
  font-family: Pixeloid;
  text-align: center;
`;

const DescriptionText = styled.Text`
  color: #9ca3af;
  font-size: 12px;
  font-family: Pixeloid;
  text-align: center;
  padding: 0 20px;
`;

const InfoText = styled.Text`
  color: #fcd34d;
  font-size: 14px;
  font-family: Pixeloid;
  text-align: center;
  margin-bottom: 8px;
`;
