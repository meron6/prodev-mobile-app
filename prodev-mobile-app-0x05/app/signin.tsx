import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "@/styles/_mainstyle";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
