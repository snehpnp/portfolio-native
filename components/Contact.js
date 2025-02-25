import React, { useState } from "react";
import { View, Dimensions,TextInput, Button, Alert } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const { width } = Dimensions.get("window");

const Education = ({ isEnabled, cardStyle }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        description: "",
      });
    
      const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
      };
    
      const handleSubmit = () => {
        const { name, email, phone, description } = formData;
    
        if (!name || !email || !phone || !description) {
          Alert.alert("Error", "All fields are required!");
          return;
        }
    
        Alert.alert("Success", `Form Submitted!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${description}`);
      };
    

  const textStyle = {
    color: isEnabled ? "white" : "black",
  };

  const cardContainerStyle = {
    width: "100%",
    maxWidth: width * 0.9,
    alignSelf: "center",
    backgroundColor: isEnabled ? "#121212" : "#F5F5F5",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  };

  const inputStyle = {
    backgroundColor: isEnabled ? "#1E1E1E" : "#FFF",
    color: isEnabled ? "white" : "black",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  };
  return (
    <View style={{ flex: 1, backgroundColor: isEnabled ? "black" : "white" }}>
    <ThemedView style={cardStyle}>
  

      {/* Contact Form */}
      <ThemedText style={[textStyle, { marginTop: 20, fontSize: 18 }]} type="defaultSemiBold">
        📞 Contact Form
      </ThemedText>

      <View style={cardContainerStyle}>
        <TextInput
          placeholder="Your Name"
          placeholderTextColor={isEnabled ? "#bbb" : "#666"}
          style={inputStyle}
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
        />
        <TextInput
          placeholder="Your Email"
          placeholderTextColor={isEnabled ? "#bbb" : "#666"}
          style={inputStyle}
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Your Phone"
          placeholderTextColor={isEnabled ? "#bbb" : "#666"}
          style={inputStyle}
          value={formData.phone}
          onChangeText={(text) => handleChange("phone", text)}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Your Message"
          placeholderTextColor={isEnabled ? "#bbb" : "#666"}
          style={[inputStyle, { height: 80, textAlignVertical: "top" }]}
          value={formData.description}
          onChangeText={(text) => handleChange("description", text)}
          multiline
        />

        <Button title="Submit" onPress={handleSubmit} color={isEnabled ? "#BB86FC" : "#6200EE"} />
      </View>
    </ThemedView>
  </View>
  );
}

export default Education;
