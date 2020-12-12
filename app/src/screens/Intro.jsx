import React from "react";

export default function IntroScreen() {
  return (
    <ImageBackground
      source={require("./app/assets/fireBackground.gif")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "white" }}>Juda muda guda ruda</Text>
        <StatusBar style="dark" />
      </SafeAreaView>
    </ImageBackground>
  );
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
