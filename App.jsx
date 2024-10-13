import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserGreeting from "./src/Component/Header";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#F5F7F8]">
      <View className="flex-1">
        <UserGreeting />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
