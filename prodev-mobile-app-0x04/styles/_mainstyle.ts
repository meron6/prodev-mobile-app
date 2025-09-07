// styles/_mainstyle.ts
import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
  // Root container
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },

  // Logo
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
  },

  // Title text
  titleText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    marginBottom: 10,
  },

  // Subtitle / body text
  subText: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 30,
  },

  // Buttons wrapper
  buttonGroup: {
    width: "100%",
    marginTop: 10,
    gap: 12,
  },

  // Primary button
  primaryButton: {
    backgroundColor: "#10B981",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  // Secondary button (outline style)
  secondaryButton: {
    borderWidth: 2,
    borderColor: "#10B981",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#10B981",
    fontSize: 16,
    fontWeight: "600",
  },
});
