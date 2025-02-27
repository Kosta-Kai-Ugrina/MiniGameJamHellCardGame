import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import Card from "../Components/Card";

const assetsPath = "../../assets/";
const cardsPath = assetsPath + "cards.json";
const background = require(assetsPath + "fireBackground.gif");

const totalCardsInHand = 7;
const cards = shuffleArray(getCards());
const images = getImages();

export default function GameScreen({ onGameDone }) {
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
  const [rm, setRm] = useState(0);
  const [curAiCard, setCurAiCard] = useState(aiCards[0]);

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.background}>
        <View>
          <Text style={styles.text}>
            {score} / {totalCardsInHand}
          </Text>
        </View>
        <View style={styles.aiCard}>
          <Card
            key={parseInt(curAiCard.key)}
            name={curAiCard.name}
            combatStrength={curAiCard.combatStrength}
            image={images[parseInt(curAiCard.key) - 1]}
            onPress={(combatStrength, name) => {
              console.log("enemy card clicked");
            }}
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
                  if (
                    combatStrength >=
                    aiCards[rm != 0 ? rm - 1 : 0].combatStrength
                  ) {
                    console.log("THE PLAYER HAS WON THE ROUND");
                    setScore(score + 1);
                  }
                  setPlayerCards(
                    playerCards.filter((val) => val.name !== name)
                  );
                  if (playerCards.length == 1) {
                    onGameDone(score >= totalCardsInHand / 2 ? 1 : 2);
                  }
                  setRm(rm + 1);
                  setCurAiCard(aiCards[rm]);
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
    left: 0,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});

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
  images.push(require("../../assets/devil5.jpg"));
  images.push(require("../../assets/devil6.jpg"));
  images.push(require("../../assets/devil7.jpg"));
  images.push(require("../../assets/devil8.jpg"));
  images.push(require("../../assets/devil9.jpg"));
  images.push(require("../../assets/devil10.jpg"));
  images.push(require("../../assets/devil11.jpg"));
  images.push(require("../../assets/devil12.jpg"));
  images.push(require("../../assets/devil13.jpg"));
  images.push(require("../../assets/devil14.jpg"));
  images.push(require("../../assets/devil15.jpg"));
  images.push(require("../../assets/devil16.jpg"));
  images.push(require("../../assets/devil17.jpg"));
  images.push(require("../../assets/devil18.jpg"));
  images.push(require("../../assets/devil19.jpg"));
  images.push(require("../../assets/devil20.jpg"));
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
