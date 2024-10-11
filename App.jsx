import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/Components/Header";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <View className="bg-[#0F0F0F] flex-1 justify-center items-center"></View>
    </SafeAreaView>
  );
}
