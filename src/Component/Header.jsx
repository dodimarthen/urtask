import React, { useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

const UserGreeting = () => {
  // Use a state variable to store the user's name
  const [userName, setUserName] = useState("Ismail");

  const [fontsLoaded] = useFonts({
    Primary: require("../../assets/fonts/Montserrat/Montserrat-Medium.ttf"),
    Secondary: require("../../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View className="flex-row items-center justify-between px-2 py-4 mt-1">
      <View>
        <Text
          style={{ fontFamily: "Secondary" }}
          className="text-lg font-bold text-black ml-4"
        >
          Hi, {userName}!
        </Text>
        <Text
          style={{ fontFamily: "Primary" }}
          className="text-xs text-slate-500 mt-1 ml-4"
        >
          06 tasks pending
        </Text>
      </View>

      <Image
        source={require("../../assets/avatarfix.png")}
        className="w-14 h-14 rounded-full mr-4"
        resizeMode="contain"
      />
    </View>
  );
};

export default UserGreeting;
