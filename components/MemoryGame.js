import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";

const cardsArray = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];
const shuffledCards = [...cardsArray, ...cardsArray].sort(() => Math.random() - 0.5);

const MemoryGame = ({ isEnabled, cardStyle }) => {
  const [cards, setCards] = useState(shuffledCards.map((emoji) => ({ emoji, isFlipped: false })));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstIndex, secondIndex] = selectedCards;
      if (cards[firstIndex].emoji === cards[secondIndex].emoji) {
        setMatchedPairs([...matchedPairs, cards[firstIndex].emoji]);
      }
      setTimeout(() => {
        setCards((prev) => prev.map((card, idx) =>
          selectedCards.includes(idx) ? { ...card, isFlipped: false } : card
        ));
        setSelectedCards([]);
      }, 800);
    }
  }, [selectedCards]);

  const handlePress = (index) => {
    if (selectedCards.length < 2 && !cards[index].isFlipped && !matchedPairs.includes(cards[index].emoji)) {
      setCards((prev) => prev.map((card, idx) =>
        idx === index ? { ...card, isFlipped: true } : card
      ));
      setSelectedCards([...selectedCards, index]);
    }
  };

  const resetGame = () => {
    setCards(shuffledCards.map((emoji) => ({ emoji, isFlipped: false })));
    setSelectedCards([]);
    setMatchedPairs([]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: isEnabled ? "black" : "white", alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: isEnabled ? "white" : "black", marginBottom: 20 }}>Memory Game</Text>
      <View style={{ width: 300, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={{ width: 60, height: 60, justifyContent: "center", alignItems: "center", margin: 5, borderWidth: 2, borderColor: "#333", backgroundColor: "#f0f0f0", borderRadius: 10 }}
            onPress={() => handlePress(index)}
          >
            <Text style={{ fontSize: 32 }}>{card.isFlipped || matchedPairs.includes(card.emoji) ? card.emoji : "❓"}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={{ marginTop: 20, padding: 10, backgroundColor: "#4CAF50", borderRadius: 5 }} onPress={resetGame}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Restart Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MemoryGame;
