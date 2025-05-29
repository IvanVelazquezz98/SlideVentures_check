import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import styled from "styled-components/native";

export default function StatAnimated({ icon, value }) {
  const [displayedValue, setDisplayedValue] = useState(value);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

 useEffect(() => {
  if (value !== displayedValue) {
    opacity.value = withTiming(0, { duration: 400 }, (finished) => {
      if (finished) {
        runOnJS(setDisplayedValue)(value);
        opacity.value = withTiming(1, { duration: 400 });
      }
    });
  }
}, [value]);

  return (
    <StatWrapper>
      <Text style={styles.icon}>{icon}</Text>
      <Animated.Text style={[styles.value, animatedStyle]}>
        {displayedValue}
      </Animated.Text>
    </StatWrapper>
  );
}

const StatWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 2px;
  width: 32px;
  height: 30px;
`;

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: "white",
  },
  value: {
    fontSize: 16,
    color: "white",
    fontFamily: "Pixeloid",
    textAlign: "center",
  },
});
