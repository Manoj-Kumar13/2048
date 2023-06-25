import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Easing,
  BackHandler,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const titleScale = useRef(new Animated.Value(1)).current;

  const handleStartPress = () => {
    navigation.navigate("Game");
  };

  const handleExitPress = () => {
    BackHandler.exitApp(); // Exit the app
    return true; // Prevent default behavior
  };

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(titleScale, {
          toValue: 1.05,
          duration: 700,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(titleScale, {
          toValue: 1,
          duration: 700,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <ImageBackground
      source={require("../images/Elegant.jpg")}
      style={styles.backgroundImage}
      blurRadius={2}
    >
      <View style={styles.container}>
        <Animated.Text
          style={[styles.title, { transform: [{ scale: titleScale }] }]}
        >
          2048
        </Animated.Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { transform: [{ scale: titleScale }] }]}
            onPress={handleStartPress}
          >
            <LinearGradient
              colors={["rgba(74, 217, 217, 0.1)", "rgba(158, 231, 231, 0.3)"]}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>Start</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { transform: [{ scale: titleScale }] }]}
          >
            <LinearGradient
              colors={["rgba(74, 217, 217, 0.1)", "rgba(158, 231, 231, 0.3)"]}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>Settings</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { transform: [{ scale: titleScale }] }]}
            onPress={handleExitPress}
          >
            <LinearGradient
              colors={["rgba(74, 217, 217, 0.1)", "rgba(158, 231, 231, 0.3)"]}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>Exit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "olive",
    marginBottom: 100,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 3,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
    width: 300,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 30,
    padding: 15,
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    overflow: "hidden",
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default HomeScreen;
