import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default function GameOver({ isWin }) {
  if (!isWin) {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/GameOver.jpg")}
      ></ImageBackground>
    );
  } else {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/Win.png")}
      ></ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
