import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import TicTacToe from "@/components/TicTacToe";
import RockPaperScissors from "@/components/RockPaperScissors";
import MemoryGame from "@/components/MemoryGame";
import SnakeGame from "@/components/SnakeGame";

const projects = [
  { title: "Tic Tac Toe", component: TicTacToe },
  { title: "Rock Paper Scissors", component: RockPaperScissors },
  { title: "Memory Game", component: MemoryGame },
  { title: "Snake Game", component: SnakeGame },
];

const Games = ({ isEnabled, cardStyle }) => {
  return (
    <View style={{ flex: 1, backgroundColor: isEnabled ? "black" : "white" }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {projects.map((game, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              backgroundColor: isEnabled ? "black" : "white",
              justifyContent: "center",
              width: 400,
            }}
          >
            <game.component
              key={index}
              isEnabled={isEnabled}
              cardStyle={cardStyle}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Games;
