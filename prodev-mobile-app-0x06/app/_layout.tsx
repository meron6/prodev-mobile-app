import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import "../styles/global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="(home)/index"
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="(home)/profile"
          options={{ title: "Profile" }} 
        />
      </Stack>
    </SafeAreaProvider>
  );
}
