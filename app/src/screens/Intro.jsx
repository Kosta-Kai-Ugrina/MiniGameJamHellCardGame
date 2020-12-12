import React from "react";
import { Text, SafeAreaView, ImageBackground, StyleSheet } from "react-native";

export default function IntroScreen() {
  return (
    <ImageBackground
      source={require("../../assets/fireBackground.gif")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "white" }}>Juda muda guda ruda</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
