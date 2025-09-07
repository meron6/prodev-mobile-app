import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "../constants";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} style={{ width: 120, height: 120 }} />
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to ProDev App</Text>
        </View>
        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Build your skills and grow with us
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonGroup}>
          <Pressable
            style={styles.buttonPrimary}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonPrimaryText}>Sign In</Text>
          </Pressable>

          <Pressable
            style={styles.buttonSecondary}
            onPress={() => router.push("/join")}
          >
            <Text style={styles.buttonSecondaryText}>Join Now</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );

