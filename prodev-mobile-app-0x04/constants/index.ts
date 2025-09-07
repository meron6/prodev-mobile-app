import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/_indexstyle";
import { HEROLOGOGREEN } from "../constants";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={HEROLOGOGREEN} style={styles.logo} />

      {/* Title + Subtitle */}
      <Text style={styles.titleText}>Welcome to HeroApp</Text>
      <Text style={styles.subText}>Your all-in-one solution for productivity</Text>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <Pressable style={styles.primaryButton} onPress={() => router.push("/signin")}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={() => router.push("/join")}>
          <Text style={styles.secondaryButtonText}>Join Now</Text>
        </Pressable>
      </View>
    </View>
  );
}
