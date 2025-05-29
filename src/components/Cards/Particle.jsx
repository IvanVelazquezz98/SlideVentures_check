import React, { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { Audio } from "expo-av"; // 🧠 IMPORTANTE

function Particle({ x, y, delay = 0 }) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    translateX.value = withTiming(Math.random() * 40 - 20, {
      duration: 500,
      easing: Easing.out(Easing.exp),
      delay,
    });
    translateY.value = withTiming(Math.random() * 40 - 20, {
      duration: 500,
      easing: Easing.out(Easing.exp),
      delay,
    });
    opacity.value = withTiming(0, { duration: 500, delay });
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
    opacity: opacity.value,
    position: "absolute",
    top: y,
    left: x,
  }));

  return <Animated.View style={[styles.particle, style]} />;
}

export default function ParticleExplosion({ x, y }) {
  const soundRef = useRef(null);

  useEffect(() => {
  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/sfx/pop.wav")
    );
    await sound.setVolumeAsync(0.1); // Volumen reducido al 30%
    await sound.playAsync();
    soundRef.current = sound;
  };

  loadSound();

  return () => {
    soundRef.current?.unloadAsync();
  };
}, []);

  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <Particle key={i} x={x} y={y} delay={i * 50} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  particle: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#facc15",
    zIndex: 9999,
  },
});
