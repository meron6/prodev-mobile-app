// app/join.tsx
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { useState } from "react";

const Join = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleJoin = () => {
    // TODO: handle join/sign-up logic
    console.log("Joining with", email, password);
  };

  return (
    <View style={styles.container}>
      {/* Top Title */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now</Text>
        <Text style={styles.subText}>Create your account to get started</Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.formControl}
            placeholder="Enter your email"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.passwordControl}
              placeholder="Enter your password"
            />
            {/* Optional eye icon for show/hide password */}
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleJoin}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign in link */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("signin")}>
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Join;

