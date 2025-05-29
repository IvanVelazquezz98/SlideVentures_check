// components/DraggableCard.js
import React, { useEffect, useRef } from "react";
import fondoCarta from "../../../assets/cards/fondoCarta.png";
import styled from "styled-components/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Audio } from "expo-av";
import * as Animatable from "react-native-animatable";
import { withTiming } from "react-native-reanimated";
import marco from "../../../assets/cards/marco6.png";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function DraggableCard({ option, index, onSelect, dropZoneY }) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);
  const selectSound = useRef();
  const scale = useSharedValue(1);
  const zIndex = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 600 });
  }, []);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      zIndex.value = 99;
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {
      zIndex.value = 0;
      if (translateY.value + 340 > dropZoneY) {
        const x = event.absoluteX;
        const y = event.absoluteY;

        scale.value = withTiming(0.2, { duration: 200 }, () => {
          runOnJS(onSelect)({
            ...option,
            _coords: {
              index,
              pageX: event.absoluteX,
              pageY: event.absoluteY,
            },
          });
        });
      } else {
        translateX.value = withSpring(0, { damping: 20, stiffness: 300 });
        translateY.value = withSpring(0, { damping: 20, stiffness: 300 });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    zIndex: 1000,
    elevation: 9999, // importante para Android
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animatable.View animation="fadeIn" duration={600}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <AnimatedCard style={animatedStyle}>
            <CardContent>
              <CardBackground>
                {/* <CardIcon>🧩</CardIcon> */}
                <CardText>{option.title || option.text || "..."}</CardText>
              </CardBackground>
            </CardContent>
            <MarcoOverlay source={marco} resizeMode="stretch" />
          </AnimatedCard>
        </PanGestureHandler>
      </Animatable.View>
    </PanGestureHandler>
  );
}

const AnimatedCard = styled(Animated.View)`
  align-items: center;
  width: 110px;
  height: 160px;
`;

const CardIcon = styled.Text`
  font-size: 30px;
  margin-bottom: 8px;
`;

const CardContent = styled.View`

  width: 100%;
  height: 100%;
  border-radius: 6px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const CardBackground = styled(ImageBackground).attrs({
  source: fondoCarta,
  resizeMode: "stretch",
})`
  width: 99%;
  height: 99%;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const MarcoOverlay = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  height: 160px;
  z-index: 2;
  pointer-events: none;
`;

const CardText = styled(Animated.Text)`
  color: #fcd34d;
  font-size: 16px;
  text-align: center;
  font-family:"Pixeloid" ;
`;
