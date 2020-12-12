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

// async function playSound(sound) {
//   console.log("Loading Sound");
//   sound = await Audio.Sound.createAsync(require("./app/assets/music.mp3"));

//   console.log("Playing Sound");
//   await sound.playAsync();
// }

export default function App() {
  return <IntroScreen />;
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
