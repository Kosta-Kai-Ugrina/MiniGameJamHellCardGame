import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Card from "../Components/Card";

const assetsPath = "../../assets/";
const cardsPath = assetsPath + "cards.json";

export default function GameScreen() {
  const cards = getCards();
  const images = getImages();
  return (
    <ImageBackground
      source={require("../../assets/fireBackground.gif")}
      style={styles.background}
    >
      <View style={styles.background}>
        <View style={styles.playerCardContainer}>
          {cards.map((data) => {
            return (
              <Card
                key={parseInt(data.key)}
                name={data.name}
                combatStrength={parseInt(data.combatStrength)}
                image={images[parseInt(data.key) - 1]}
                onPress={() => {
                  console.log("CARD PRESSED");
                }}
              />
            );
          })}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  playerCardContainer: {
    alignSelf: "center",
    position: "absolute",
    width: "80%",
    paddingVertical: 10,
    borderRadius: 20,
    bottom: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#aaa",
  },
});

function getCards() {
  const pData = require(cardsPath);
  console.log(pData);
  return pData;
}

function getImages() {
  const images = [];
  images.push(require("../../assets/devil1.jpg"));
  images.push(require("../../assets/devil2.gif"));
  images.push(require("../../assets/devil3.png"));
  images.push(require("../../assets/devil4.jpg"));
  images.push(require("../../assets/devil1.jpg"));
  return images;
}
