import React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const images = {
  2: require("../images/2.gif"),
  4: require("../images/4.gif"),
  8: require("../images/8.gif"),
  16: require("../images/16.gif"),
  32: require("../images/32.gif"),
  64: require("../images/64.gif"),
  128: require("../images/128.gif"),
  256: require("../images/256.gif"),
  512: require("../images/512.gif"),
  1024: require("../images/1024.gif"),
  2048: require("../images/2048.gif"),
};

const Cell = ({ value }) => {
  return (
    <View style={[styles.cellStyle, styles[`cell${value}`]]}>
      {/* <Text style={styles.textStyle}> */}
      {value > 0 ? <Image style={styles.image} source={images[value]} /> : null}
      {/* </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cellStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  cell2: {
    backgroundColor: "orange",
  },
  cell4: {
    backgroundColor: "rgb(39, 207, 207)",
  },
  cell8: {
    backgroundColor: "pink",
  },
  cell16: {
    backgroundColor: "gold",
  },
  cell32: {
    backgroundColor: "greenyellow",
  },
  cell64: {
    backgroundColor: "#e9c46a",
  },
  cell128: {
    backgroundColor: "goldenrod",
  },
  cell256: {
    backgroundColor: "rebeccapurple",
  },
  cell512: {
    backgroundColor: "cyan",
  },
  cell1024: {
    backgroundColor: "gold",
  },
  cell2048: {
    backgroundColor: "aquamarine",
  },
  image: {
    height: width / 4 - 10,
    width: width / 4 - 10,
    borderRadius: 5,
    // resizeMode: "contain",
  },
});

export default Cell;
