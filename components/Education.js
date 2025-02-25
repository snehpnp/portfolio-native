import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const { width } = Dimensions.get("window");

const Education = ({ isEnabled, cardStyle }) => {


  const textStyle = {
    color: isEnabled ? "white" : "black",
  };
  const cardContainerStyle = {
    width: "100%",
    maxWidth: width * 0.9, // Responsive Width
    alignSelf: "center",
    backgroundColor: isEnabled ? "#121212" : "#F5F5F5",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10, // Rounded Corners
  };

  return (
    <View style={{ flex: 1, backgroundColor: isEnabled ? "black" : "white" }}>
      <ThemedView style={cardStyle}>
        <ThemedText style={textStyle} type="subtitle">
          🎓 Education
        </ThemedText>

        {/* Bachelor of Computer Applications (BCA) */}
        <View key="bca" style={cardContainerStyle}>
          <ThemedText style={textStyle} type="defaultSemiBold">
            🎓 Bachelor of Computer Applications (BCA)
          </ThemedText>
          <ThemedText style={textStyle}>
            Vikram University, Ujjain | 2020 – 2023
          </ThemedText>
        </View>

        {/* Higher Secondary Certificate (12th Grade) */}
        <View key="12th" style={cardContainerStyle}>
          <ThemedText style={textStyle} type="defaultSemiBold">
            📜 Higher Secondary Certificate (12th Grade)
          </ThemedText>
          <ThemedText style={textStyle}>
            Government High Secondary School, Nasrullaganj | 2018 – 2019
          </ThemedText>
        </View>

        {/* Secondary School Certificate (10th Grade) */}
        <View key="10th" style={cardContainerStyle}>
          <ThemedText style={textStyle} type="defaultSemiBold">
            🎒 Secondary School Certificate (10th Grade)
          </ThemedText>
          <ThemedText style={textStyle}>
            Government High School, Chitgaon Mouji | 2016 – 2017
          </ThemedText>
        </View>
      </ThemedView>
    </View>
  );
}

export default Education;
