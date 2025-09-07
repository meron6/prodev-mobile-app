// app/(home)/saved.tsx
import { View, Text, StyleSheet } from "react-native";

const Saved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },
});

export default Saved;
