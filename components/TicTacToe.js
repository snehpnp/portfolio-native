import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StatusBar } from "react-native";

const TicTacToe = ({ isEnabled }) => {
  console.log("isEnabled=>", isEnabled);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false); // Fullscreen toggle state

  const handlePress = (index) => {
    if (board[index] || checkWinner()) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const winner = checkWinner(newBoard);
    if (winner) {
      Alert.alert("Game Over", `${winner} wins!`, [
        { text: "Restart", onPress: resetGame },
      ]);
    } else if (!newBoard.includes(null)) {
      Alert.alert("Game Over", "It's a Draw!", [
        { text: "Restart", onPress: resetGame },
      ]);
    }
  };

  const checkWinner = (boardToCheck = board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winningCombinations) {
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isEnabled ? "black" : "white",
      }}
    >
      {/* StatusBar hide/show based on full screen mode */}
      <StatusBar hidden={isFullScreen} />

      {!isFullScreen && (
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
            color: isEnabled ? "white" : "black",
          }}
        >
          Tic-Tac-Toe
        </Text>
      )}

      <View
        style={{
          width: 300,
          height: 300,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {board.map((cell, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 100,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: isEnabled ? "white" : "black",
              color: isEnabled ? "white" : "black",
            }}
            onPress={() => handlePress(index)}
          >
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: isEnabled ? "white" : "black",
              }}
            >
              {cell}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Restart Game Button */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: isEnabled ? "#333" : "#f0f0f0",
          borderRadius: 5,
        }}
        onPress={resetGame}
      >
        <Text
          style={{
            color: isEnabled ? "white" : "black",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Restart Game
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TicTacToe;
