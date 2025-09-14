import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "@/styles/_join";

export default function Join() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Us</Text>

      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

