import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Games from "@/components/Games";
import TicTacToe from "@/components/TicTacToe";
import RockPaperScissors from "@/components/RockPaperScissors";
import MemoryGame from "@/components/MemoryGame";
import SnakeGame from "@/components/SnakeGame";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const cardStyle = {
    alignItems: "center",
    padding: 20,
    backgroundColor: isEnabled ? "black" : "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  const textStyle = { color: isEnabled ? "white" : "black" };

  return (
    <View style={{ backgroundColor: isEnabled ? "black" : "white", flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{
          bgColor: isEnabled ? "Black" : "White",
        }}
        headerImage={
          <Image
            source={require("@/assets/images/bg.jpg")}
            style={{ width: "100%", height: 200, borderRadius: 10 }}
          />
        }
        style={{ backgroundColor: isEnabled ? "black" : "white" }}
      >
        <Text
          onPress={() => setIsEnabled(!isEnabled)}
          style={{
            textAlign: "right",
            fontSize: 16,
            marginBottom: 10,
            color: isEnabled ? "white" : "black",
          }}
        >
          {isEnabled ? "🌙 DARK" : "💡 LIGHT"}
        </Text>

        <ThemedView style={cardStyle}>
          <Image
            source={require("@/assets/images/profile.png")}
            style={{ width: 120, height: 120, borderRadius: 60 }}
          />
          <ThemedText style={textStyle} type="title">
            Sneh Jaiswal
          </ThemedText>
          <ThemedText style={textStyle} type="subtitle">
            Full Stack Developer
          </ThemedText>
          <ThemedText style={textStyle}>
            {" "}
            <Text>📞 +91 7049510697 | 📧 snehjaiswal20@gmail.com</Text>
          </ThemedText>
          <Text style={{ fontSize: 16, color: "#000" }}>
            <TouchableOpacity
              onPress={() => handleLinkPress("https://github.com/snehpnp")}
            >
              <Text
                style={{ color: "#007BFF", textDecorationLine: "underline" }}
              >
                🌐 GitHub
              </Text>
            </TouchableOpacity>
            {"   "}
            <TouchableOpacity
              onPress={() =>
                handleLinkPress(
                  "https://www.linkedin.com/in/sneh-jaiswal-431165229/"
                )
              }
            >
              <Text
                style={{ color: "#007BFF", textDecorationLine: "underline" }}
              >
                🔗 LinkedIn
              </Text>
            </TouchableOpacity>
          </Text>
        </ThemedView>

        {/* About Me Section */}
        <ThemedView style={cardStyle}>
          <ThemedText style={textStyle} type="subtitle">
            📖 About Me
          </ThemedText>
          <ThemedText style={textStyle}>
            Passionate developer with expertise in React, React Native, Node.js,
            and MongoDB. Experienced in building scalable web and mobile
            applications.
          </ThemedText>
        </ThemedView>

        {/* Experience Section */}
        <ThemedView style={cardStyle}>
          <ThemedText style={textStyle} type="subtitle">
            💼 Experience
          </ThemedText>

          <ThemedText
            style={[
              textStyle,
              { textAlign: "center", fontFamily: "Roboto-Bold", fontSize: 20 },
            ]}
          >
            PNP Infotech, Indore | September 2022 - Present
          </ThemedText>
          <ThemedText style={textStyle}>
            - Executed the rollout of over eight major projects with a strong
            focus on building scalable enterprise solutions. - Collaborated with
            cross-functional teams to design and implement real-time systems. -
            Integrated advanced features like dynamic pricing tools, real-time
            notifications, and automated reminders. - Led the development of key
            projects like Stock Box, Outbook, and Smart Algo. - Ensured seamless
            integration of 30+ brokers for trading platforms. - Optimized
            Back-End systems to handle high-volume data processing with zero
            downtime.
          </ThemedText>
        </ThemedView>

        <Projects isEnabled={isEnabled} cardStyle={cardStyle} />
        {/* Education Section */}
        <Education isEnabled={isEnabled} cardStyle={cardStyle} />

        {/* Skills Section */}
        <Skills isEnabled={isEnabled} cardStyle={cardStyle} />

        <Contact isEnabled={isEnabled} cardStyle={cardStyle} />

        <ThemedView style={cardStyle}>
          <ThemedText
            style={{
              color: isEnabled ? "white" : "black",
              justifyContent: "center",
              alignItems: "center",
            }}
            type="subtitle"
            onPress={() => navigation.navigate("Games")}
          >
            📂 Games
          </ThemedText>

          <Games
            isEnabled={isEnabled}
            cardStyle={cardStyle}
            onPress={() => navigation.navigate("Games")}
          />
        </ThemedView>
        {/* Footer Section */}
        <ThemedView style={cardStyle}>
          <Text style={[textStyle, { textAlign: "center", margin: 20 }]}>
            © 2025 Sneh Jaiswal. All Rights Reserved.
          </Text>
        </ThemedView>
        
      </ParallaxScrollView>
    </View>
  );
};

// ❌ Remove NavigationContainer from here
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="Skills" component={Skills} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Games" component={Games} />
      <Stack.Screen name="TicTacToe" component={TicTacToe} />
      <Stack.Screen name="RockPaperScissors" component={RockPaperScissors} />
      <Stack.Screen name="MemoryGame" component={MemoryGame} />
      <Stack.Screen name="SnakeGame" component={SnakeGame} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
