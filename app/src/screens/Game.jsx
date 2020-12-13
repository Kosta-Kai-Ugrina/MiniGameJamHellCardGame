import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Card from "../Components/Card";

const assetsPath = "../../assets/";
const cardsPath = assetsPath + "cards.json";
const background = require(assetsPath + "fireBackground.gif");

const totalCardsInHand = 2;
const cards = shuffleArray(getCards());
const images = getImages();

export default function GameScreen() {
  const [playerCards, setPlayerCards] = useState(
    cards.filter((val, index, arr) => {
      return index < totalCardsInHand;
    })
  );

  const [aiCards, setAiCards] = useState(
    cards.filter((val, index, arr) => {
      return index >= totalCardsInHand && index < 2 * totalCardsInHand;
    })
  );
  const [score, setScore] = useState(0);
  const [curAiCard, setCurAiCard] = useState(aiCards[0]);
  console.log("playerCards\n", playerCards, "\n\n");
  console.log("aiCards\n", aiCards, "\n\n");

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.background}>
        <View style={styles.aiCard}>
          <Card
            key={parseInt(curAiCard.key)}
            name={curAiCard.name}
            combatStrength={curAiCard.combatStrength}
            image={images[parseInt(curAiCard.key) - 1]}
          />
        </View>
        <View style={styles.playerCardContainer}>
          {playerCards.map((data) => {
            return (
              <Card
                key={parseInt(data.key)}
                name={data.name}
                combatStrength={parseInt(data.combatStrength)}
                image={images[parseInt(data.key) - 1]}
                onPress={(combatStrength, name) => {
                  if (combatStrength >= aiCards[0].combatStrength) {
                    setScore(score + 1);
                  }
                  setPlayerCards(playerCards.filter((val) => (val.name !== name)));
                  setAiCards(aiCards.filter((val, index) => (index !== 0)));
                  setCurAiCard(aiCards[0]);
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
  aiCard: {
    position: "absolute",
    top: 20,
    left: 145,
  }
});

function playAiCard(card) {
 
}

function getCards() {
  const pData = require(cardsPath);
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

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
