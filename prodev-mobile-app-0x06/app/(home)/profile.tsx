// app/(home)/profile.tsx
import { View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-blue-600">
        Profile Screen
      </Text>
      <Text className="text-base text-gray-600 mt-2">
        This is your profile page.
      </Text>
    </View>
  );
}
