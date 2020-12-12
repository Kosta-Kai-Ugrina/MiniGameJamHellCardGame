import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Card from "../Components/Card";

const image = require("../../assets/devil1.jpg");

export default function GameScreen() {
  return (
    <View style={styles.background}>
      <Card
        key={1}
        name="SALDAZAR THE OBLITERATOR"
        combatStrength={3}
        imgPath={image}
        onPress={() => {
          console.log("CARD PRESSED");
        }}
      />
      <Card
        key={2}
        name="MAGMARATH THE LIFEGIVER"
        combatStrength={4}
        imgPath={image}
        onPress={() => {
          console.log("CARD PRESSED");
        }}
      />
      <Card
        key={3}
        name="URAK'KAR RASHATA"
        combatStrength={5}
        imgPath={image}
        onPress={() => {
          console.log("CARD PRESSED");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "black",
  },
});
