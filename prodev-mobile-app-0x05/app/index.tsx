import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>

      <Link href="/signin" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/join" asChild>
        <TouchableOpacity style={styles.outlineButton}>
          <Text style={styles.outlineText}>Join Now</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#2B876E",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 16 },
  outlineButton: {
    borderWidth: 1,
    borderColor: "#2B876E",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
    alignItems: "center",
  },
  outlineText: { color: "#2B876E", fontSize: 16 },
});
