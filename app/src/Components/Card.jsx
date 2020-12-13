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
    <TouchableHighlight style={{ borderRadius: 10 }} onPress={() => {onPress(combatStrength, name)} }>
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
    width: 80,
    height: 130,
    borderRadius: 10,
    backgroundColor: "#f00",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 4,
    width: "80%",
    margin: 5,
    borderRadius: 10,
    resizeMode: "stretch",
  },
  name: {
    flex: 2,
    fontSize: 8,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  combatStrength: {
    flex: 2,
    alignSelf: "stretch",
    textAlign: "center",
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#f77",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
