import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function GameOver() {
    return (
        <ImageBackground 
        source={require("./assets/GameOver.jpg")}
        ></ImageBackground>
    )
}

export default function Win() {
    return (
        <ImageBackground
        source={require("./assets/Win.png")}
        ></ImageBackground>
    )     
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    }
});