import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import GameScreen from "./src/components/GameScreen";
import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import { theme } from "./src/theme";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const gestureHandlerRef = React.createRef();

export default function App() {
  const [fontsLoaded] = useFonts({
    Pixeloid: require("./assets/fonts/PixeloidSans.ttf"),
  "Pixeloid-Bold": require("./assets/fonts/PixeloidSans-Bold.ttf"),
  });

  useEffect(() => {
    // if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <View style={styles.loadingScreen} />;
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.centerWrapper}>
              <View style={styles.fixedSize}>
                <GameScreen gestureHandlerRef={gestureHandlerRef} />
              </View>
            </View>
          </SafeAreaView>
        </ThemeProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  centerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fixedSize: {
    width: 360,
    height: 640,
    backgroundColor: "#4e5763ae",
    borderRadius: 8,
    overflow: "hidden",
    fontFamily: "Pixeloid",
  },
  loadingScreen: {
    flex: 1,
    backgroundColor: "#000",
  },
});
