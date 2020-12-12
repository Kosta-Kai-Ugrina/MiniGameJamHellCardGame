import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

export default function Card({ name, combatStrength, image, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.background}>
        <Image source={image} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.combatStrength}>{combatStrength}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  background: {
    width: 100,
    height: 160,
    borderRadius: 10,
    backgroundColor: "#f00",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    flex: 3,
    margin: 10,
    borderRadius: 10,
    resizeMode: "stretch",
  },
  name: {
    flex: 2,
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  combatStrength: {
    flex: 2,
    alignSelf: "stretch",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#f77",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
