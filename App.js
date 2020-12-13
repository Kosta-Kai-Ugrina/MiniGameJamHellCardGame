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
import { Audio } from "expo-av";
import { render } from "react-dom";
import IntroScreen from "./app/src/screens/Intro";
import GameScreen from "./app/src/screens/Game";

// async function playSound(sound) {
//   console.log("Loading Sound");
//   sound = await Audio.Sound.createAsync(require("./app/assets/music.mp3"));

//   console.log("Playing Sound");
//   await sound.playAsync();
// }

export default function App() {
  return <GameScreen />;
}
