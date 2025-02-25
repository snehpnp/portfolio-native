import React from "react";
import { View, ScrollView, Image, Dimensions } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const { width } = Dimensions.get("window");

const skillsData = [
  {
    title: "🎨 Frontend",
    skills: ["⚛️ React.js", "🌀 Redux", "🌐 Next.js", "📱 React Native", "🎨 Tailwind CSS"],
  },
  {
    title: "💻 Backend",
    skills: ["🚀 Node.js", "⚡ Express.js", "📦 MongoDB", "🔥 Firebase", "🔗 GraphQL"],
  },
  {
    title: "🖥 Server & Cloud",
    skills: ["🐳 Docker", "☁️ AWS", "🔄 NGINX", "🐧 Linux", "🔄 PM2"],
  },
  {
    title: "⚙️ DevOps",
    skills: ["🔄 CI/CD", "🛠️ Jenkins", "⚡ GitHub Actions", "🏗️ Terraform", "📦 Kubernetes"],
  },
  {
    title: "🧪 Testing",
    skills: ["🧪 Jest", "☕ Mocha", "🍵 Chai", "🔍 Cypress", "🕵️ Selenium"],
  },
];

const Skills = ({ isEnabled, cardStyle }) => {
  return (
    <View style={{ flex: 1, backgroundColor: isEnabled ? "black" : "white" }}>
    <ThemedView style={cardStyle}>
      <ThemedText
        style={isEnabled ? { color: "white" } : { color: "black" }}
        type="subtitle"
      >
      ⚙️ Skills
      </ThemedText>

      <ScrollView
        horizontal
        pagingEnabled
        snapToInterval={width} 
        snapToAlignment="center"
        decelerationRate="fast"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {skillsData.map((item, index) => (
          <View
            key={index}
            style={{
              width: width,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              backgroundColor: isEnabled ? "#121212" : "#F5F5F5",
              padding: 20,
            }}
          >
            <ThemedText
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginBottom: 15,
                textAlign: "start",
                color: isEnabled ? "white" : "black",
              }}
            >
              {item.title}
            </ThemedText>

            {item.skills.map((skill, i) => (
              <ThemedView
                key={i}
                style={{
                  backgroundColor: isEnabled ? "#333" : "white",
                  padding: 15,
                  borderRadius: 10,
                  marginBottom: 10,
                  width: "80%",
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowRadius: 5,
                  elevation: 3,
                  alignItems: "start",
                }}
              >
                <ThemedText
                  style={{
                    fontSize: 16,
                    textAlign: "start",
                    color: isEnabled ? "white" : "black",
                  }}
                >
                  {skill}
                </ThemedText>
              </ThemedView>
            ))}
          </View>
        ))}
      </ScrollView>
    </ThemedView>
    </View>
  );
};

export default Skills;
