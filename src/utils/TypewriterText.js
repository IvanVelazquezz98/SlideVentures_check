import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/native";
import { Audio } from "expo-av";

export default function TypewriterText({
  text,
  speed = 30,
  onFinish,
  fontSize = 16,
  color = "#d1d5db",
  style = {},
  top,
  soundEnabled = true,
}) {
  const [visibleText, setVisibleText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const soundRef = useRef(null);
  const lastSoundTime = useRef(0);
  // Cargar el sonido una sola vez
  useEffect(() => {
    if (!soundEnabled) return;
    Audio.Sound.createAsync(require("../../assets/sfx/pip_clean.wav")).then(
      ({ sound }) => {
        soundRef.current = sound;
      }
    );
    return () => {
      soundRef.current?.unloadAsync();
    };
  }, []);

  useEffect(() => {
    if (!text) return;

    setVisibleText("");
    setCharIndex(0);

    let index = 0;
    let currentText = "";

    const interval = setInterval(async () => {
      const nextChar = text[index];
      currentText += nextChar;
      setVisibleText(currentText);
      setCharIndex(index + 1);
      index++;

      const now = Date.now();
      if (
        soundEnabled &&
        index % 2 === 0 &&
        /[a-zA-Z0-9]/.test(nextChar) &&
        soundRef.current &&
        now - lastSoundTime.current > 100
      ) {
        const status = await soundRef.current.getStatusAsync();
        if (status.isLoaded && !status.isPlaying) {
          await soundRef.current.replayAsync();
          lastSoundTime.current = now;
        }
      }

      if (index >= text.length) {
        clearInterval(interval);
        if (onFinish) onFinish();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <AnimatedText style={style} fontSize={fontSize} color={color} top={top}>
      {visibleText}
    </AnimatedText>
  );
}

const AnimatedText = styled.Text`
  text-align: center;
  position: absolute;
  top: ${(props) => props.top}px;
  width: 100%;
  min-height: 60px;
  font-family: "Pixeloid";
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
`;
