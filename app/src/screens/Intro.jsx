import React from "react";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";

export default function IntroScreen({ onStartButtonClick }) {
  return (
    <ImageBackground
      source={require("../../assets/fireBackground.gif")}
      style={styles.background}
    >
      <Text style={styles.title}>WELCOME TO HELL</Text>
      <TouchableHighlight style={{ flex: 1 }} onPress={onStartButtonClick}>
        <View style={styles.startButton}>
          <Text style={styles.startButtonText}>START</Text>
        </View>
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    top: 80,
    color: "#f33",
    fontWeight: "bold",
    fontSize: 50,
  },
  startButton: {
    width: 130,
    height: 45,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "yellow",
  },
  startButtonText: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    color: "#f33",
  },
});
