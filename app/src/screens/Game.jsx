import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Card from "../Components/Card";

const assetsPath = "../../assets/";
const cardsPath = assetsPath + "cards.json";
const image = require(assetsPath + "devil1.jpg");

export default function GameScreen() {
  const cards = getCards();
  //const images = getImages(cards);
  return (
    <View style={styles.background}>
      {cards.map((data) => (
        <Card
          key={parseInt(data.key)}
          name={data.name}
          combatStrength={parseInt(data.combatStrength)}
          image={image}
          onPress={() => {
            console.log("CARD PRESSED");
          }}
        />
      ))}
      {/* <Card
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
      /> */}
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

function getCards() {
  const pData = require(cardsPath);
  console.log(pData);
  return pData;
}

// function getImages(cards) {
//   const images = [];
//   cards.forEach((data) => {
//     let imgPath = assetsPath + data.imgName;
//     let img = require(imgPath.toString());
//     images.push(img);
//   });
//   return images;
// }
