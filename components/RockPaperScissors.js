import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const choices = ["Rock", "Paper", "Scissors"];

const RockPaperScissors = ({ isEnabled, cardStyle }) => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a Tie!");
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setResult("You Win! 🎉");
    } else {
      setResult("You Lose! 😢");
    }
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
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          color: isEnabled ? "white" : "black",
        }}
      >
        Rock, Paper, Scissors
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: 30,
        }}
      >
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "#4CAF50",
              padding: 15,
              borderRadius: 8,
            }}
            onPress={() => playGame(choice)}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
              }}
            >
              {choice}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {userChoice && (
        <View
          style={{
            marginTop: 20,
            alignItems: "start",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              marginVertical: 5,
              color: isEnabled ? "white" : "black",
            }}
          >
            You Chose: {userChoice}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginVertical: 5,
              color: isEnabled ? "white" : "black",
            }}
          >
            Computer Chose: {computerChoice}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginVertical: 5,
              color: isEnabled ? "white" : "black",
            }}
          >
            {result}
          </Text>
        </View>
      )}
    </View>
  );
};

export default RockPaperScissors;
