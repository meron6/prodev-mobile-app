import { View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/_joinstyle";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "../constants";

export default function Join() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Header Logo */}
        <View style={styles.iconsection}>
          <Image source={HEROLOGOGREEN} style={{ width: 60, height: 60 }} />
        </View>

        {/* Title */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Join Now</Text>
          <Text style={styles.subText}>Create your account to get started</Text>
        </View>

        {/* Form */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={styles.formControl}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                style={styles.passwordControl}
                placeholder="Enter your password"
                secureTextEntry
              />
            </View>
          </View>
        </View>

        {/* Primary Button */}
        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join</Text>
        </Pressable>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        {/* Social Buttons */}
        <View style={styles.secondaryButtonGroup}>
          <Pressable style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
            <Text style={styles.secondaryButtonText}>Join with Google</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
            <Text style={styles.secondaryButtonText}>Join with Facebook</Text>
          </Pressable>
        </View>

        {/* Footer Link */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account? </Text>
          <Pressable onPress={() => router.push("/signin")}>
            <Text style={styles.signupSubTitleText}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
