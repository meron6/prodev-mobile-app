import { StyleSheet } from "react-native";

export const propertyCardStyle = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  location: {
    color: "#777",
    marginTop: 4,
  },
  price: {
    color: "#2B876E",
    marginTop: 6,
    fontWeight: "bold",
  },
});
