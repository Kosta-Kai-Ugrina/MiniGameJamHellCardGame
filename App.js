import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { render } from "react-dom";
import IntroScreen from "./app/src/screens/Intro";
import GameScreen from "./app/src/screens/Game";
import GameOver from "./app/src/screens/GameOver";

export default function App() {
  const [startPressed, setStartPressed] = useState(false);
  const [gameDone, setGameDone] = useState(0);
  if (!startPressed) {
    return (
      <IntroScreen
        onStartButtonClick={() => {
          setStartPressed(true);
        }}
      />
    );
  } else if (gameDone == 0) {
    return (
      <GameScreen
        onGameDone={(isWin) => {
          setGameDone(isWin);
        }}
      />
    );
  } else {
    return <GameOver isWin={gameDone == 1} />;
  }
}
