import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Win() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/game-over.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>You Lost!!</Text>
      </View>
    </View>
  );
}

export default Win;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowWidth,
    padding: 50,
    borderColor: "olive",
    borderWidth: 5,
    justifyContent: "center",
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 40,
  },
  imageContainer: {
    // borderColor: "blue",
    // borderWidth: 5,
    padding: windowWidth * 0.1,
  },
  image: {
    width: windowWidth / 2,
    height: windowWidth / 2,
    resizeMode: "contain",
  },
  textContainer: {
    borderColor: "red",
    borderWidth: 5,
    borderRadius: 20,
    backgroundColor: "red",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
});
