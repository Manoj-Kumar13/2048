import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
} from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

import {
  generateRandom,
  getEmptyBoard,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  checkWin,
  isOver,
} from "./GameBoard";

import Cell from "./Cell";
import Win from "../components/Win";
import GameOver from "../components/GameOver";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const GameController = () => {
  const [board, updateBoard] = useState(generateRandom(getEmptyBoard()));
  const [win, setWin] = useState(false);
  const [over, setOver] = useState(false);

  const checkEndGame = () => {
    if (checkWin(board)) {
      console.log("You win!");
      setWin(true);
    } else if (isOver(board)) {
      console.log("Game over!");
      setOver(true);
    }
  };

  const left = () => {
    const newBoard = moveLeft(board);
    updateBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const right = () => {
    const newBoard = moveRight(board);
    updateBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const up = () => {
    const newBoard = moveUp(board);
    updateBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const down = () => {
    const newBoard = moveDown(board);
    updateBoard(generateRandom(newBoard));
    checkEndGame();
  };

  return (
    <ImageBackground
      blurRadius={10}
      source={require("../images/Elegant.jpg")}
      style={styles.image}
    >
      <GestureRecognizer
        style={styles.screenStyle}
        onSwipeLeft={left}
        onSwipeRight={right}
        onSwipeUp={up}
        onSwipeDown={down}
      >
        <Text style={styles.headerStyle}>2048</Text>
        <View style={styles.boardStyle}>
          {board.map((row, rowIndex) => (
            <View key={`cell-${rowIndex}`} style={styles.rowStyle}>
              {row.map((value, cellIndex) => (
                <Cell key={`cell-${cellIndex}`} value={value} />
              ))}
            </View>
          ))}
        </View>
        {win ? (
          <View style={styles.winContainer}>
            <Win />
          </View>
        ) : null}
        {over ? (
          <View style={styles.winContainer}>
            <GameOver />
          </View>
        ) : null}
      </GestureRecognizer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    padding: 40,
    fontSize: 60,
    textAlign: "center",
    color: "olive",
    fontWeight: "bold",
  },
  boardStyle: {
    width: width,
    padding: 5,
    backgroundColor: "olive",
    backgroundColor: "transparent",
    marginTop: width / 4,
  },
  rowStyle: {
    flexDirection: "row",
    height: width / 4,
  },
  screenStyle: {},
  winContainer: {
    position: "absolute",
    top: width / 2,
  },
  image: {
    flex: 1,
    width: width,
    height: height + 50,
    resizeMode: "cover",
    overflow: "hidden",
  },
});

export default GameController;
