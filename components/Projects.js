import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Image 
} from "react-native";
import { WebView } from "react-native-webview";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const projects = [
  {
    title: "Stock Box",
    tech: "React/Node/MongoDB",
    date: "Dec 2024 - Present",
    description:
      "Created a dynamic trading marketplace where users can design, trade, and monetize trading strategies. Enabled real-time strategy performance monitoring through WebSocket-based live updates. Integrated multi-layer authentication and secure payment systems to ensure transaction reliability. Achieved 20% faster execution speeds compared to competitors by optimizing backend queries and data handling.",
    url: "https://outbooks.tradestreet.in/#/login",
    image: require("@/assets/images/Project/stockbox.png"), 
  },
  {
    title: "Pricing Tool",
    tech: "React/Node/SQL",
    date: "Sep 2024 - Dec 2024",
    description:
      "Designed a dynamic pricing engine enabling users to build custom service packages with flexible pricing models. Incorporated AI-driven recommendation algorithms to suggest optimal service configurations for clients. Built a comparison tool for side-by-side analysis of pricing packages, improving customer decision-making by 30%. Enhanced client engagement with personalized email templates, leading to a 25% rise in follow-up responses.",
    url: "https://outbooks.tradestreet.in/#/login",
    image: require("@/assets/images/Project/Outbook.png"), 
  },
  {
    title: "Outbook",
    tech: "React/Node/SQL",
    date: "Apr 2024 - Sep 2024",
    description:
      "Designed a responsive frontend for customer and job management workflows, enabling businesses to reduce data entry time by 30%. Developed a scalable backend with Node.js and MySQL to handle complex operations like payroll calculations and timesheet tracking. Automated timesheet reminders and activity logs, boosting operational efficiency by 20%. Enabled dynamic reporting with custom filters and charts, simplifying data analysis for stakeholders.",
    url: "https://outbooks.tradestreet.in/#/login",
    image: require("@/assets/images/Project/Outbook.png"), 
  },
  {
    title: "New Smart Algo",
    tech: "React/Node/MongoDB",
    date: "Oct 2023 - Mar 2024",
    description:
      "Spearheaded enhancements to an algorithmic trading platform with 30+ broker integrations, supporting diverse strategies. Leveraged Socket.io for real-time order processing, ensuring millisecond-level execution accuracy. Integrated advanced tools like TradingView and MT4, enabling professional-grade trade analysis and execution. Improved user retention by 15% through UX optimizations and seamless onboarding.",
    url: "https://outbooks.tradestreet.in/#/login",
    image: require("@/assets/images/Project/newsmartalgo.png"), 
  },
  {
    title: "E-Sign",
    tech: "React/Node/MySQL",
    date: "Jul 2023 - Sep 2023",
    description:
      "Built a secure e-signature platform compliant with legal standards using the SurePass API, handling 500+ digital signatures daily. Integrated government APIs (Aadhaar, PAN, Phone Verification) to ensure 99.9% identity authentication accuracy. Delivered a seamless document upload and signing experience with a responsive, user-friendly React.js interface. Enhanced security with encryption and audit trails, improving user trust and platform adoption by 15%.",
    url: "https://outbooks.tradestreet.in/#/login",
    image: require("@/assets/images/Project/esign.png"), 
  },
  {
    title: "ABUDHABI",
    tech: "React",
    date: "Jan 2023 - Jan 2023",
    description:
      "Developed a feature-rich Front-End for student enrollment, attendance, and grade management, reducing administrative workload by 25%. Optimized UI performance with React best practices, achieving 30% faster load times on low-bandwidth devices. Implemented interactive dashboards for administrators, streamlining oversight of academic and operational tasks.",
    url: "https://outbooks.tradestreet.in/#/login",
    image: require("@/assets/images/Project/abudhabi.png"), 
  },
  {
    title: "Copy Trade",
    tech: "React/Node/MySQL",
    date: "Mar 2023 - Jul 2024",
    description:
      "Built a user-centric copy trading platform enabling seamless replication of trades to linked Demat accounts. Implemented real-time trade synchronization with WebSockets for accurate, low-latency transactions. Introduced a ranking system for top traders, boosting platform engagement and user activity by 20%. Delivered an intuitive dashboard for monitoring and managing copied trades, simplifying the user experience.",
    url: "https://outbooks.tradestreet.in/#/login",
    image: require("@/assets/images/Project/copytrade.png"), 
  },
  {
    title: "Algo Trading",
    tech: "React/Node/MySQL",
    date: "Sept 2022 - Jun 2023",
    description:
      "Developed a high-performance algorithmic trading platform, processing 1000+ trades per second seamlessly. Achieved 99.9% system uptime with optimized server infrastructure and efficient database management. Implemented multi-broker APIs, enhancing market reach and user flexibility for stock and forex trading. Reduced latency by 40%, ensuring real-time accuracy in high-frequency trades.",
    url: "https://outbooks.tradestreet.in/#/login",
    image: require("@/assets/images/Project/algopanel.png"),  
  },
];

const App = ({ isEnabled, cardStyle }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleUrlRedirect = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL", err));
  };

  return (
    <View style={{ flex: 1, backgroundColor: isEnabled ? "black" : "white" }}>
      <ThemedView style={cardStyle}>
        <ThemedText style={{ color: isEnabled ? "white" : "black" }} type="subtitle">
          📂 Featured Projects
        </ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {projects.map((project, index) => (
            <View
              key={index}
              style={{
                borderRadius: 8,
                marginRight: 15,
                padding: 15,
                minWidth: 300,
                backgroundColor: "#f8f8f8",
              }}
            >
             <Image
                source={project.image} // Use the image from the 'project.image' property
                style={{ width: 450, height: 170, marginBottom: 10, borderRadius: 8 }}
              />
              {/* <WebView
                source={{ uri: project.url }}
                style={{ width: 250, height: 150, marginBottom: 10 }}
              /> */}
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>{project.title}</Text>
              <Text style={{ color: "gray", fontSize: 12 }}>{project.date}</Text>
              <Text style={{ color: "black", fontSize: 14, marginBottom: 5 }}>
                {expandedIndex === index
                  ? project.description
                  : project.description.length > 50
                  ? project.description.slice(0, 50) + "..."
                  : project.description}
              </Text>
              {project.description.length > 50 && expandedIndex !== index && (
                <TouchableOpacity onPress={() => setExpandedIndex(index)}>
                  <Text style={{ color: "blue", fontSize: 14 }}>See more</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => handleUrlRedirect(project.url)}>
                <Text style={{ color: "blue", fontSize: 14, textDecorationLine: "underline" }}>
                  Go to Project
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ThemedView>
    </View>
  );
};

export default App;
