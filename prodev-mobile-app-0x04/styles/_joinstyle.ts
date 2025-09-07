// styles/_joinstyle.ts
import { StyleSheet } from "react-native";
import { mainStyles } from "./_mainstyle";

export const joinStyles = StyleSheet.create({
  ...mainStyles,

  formContainer: {
    width: "100%",
    marginTop: 20,
    gap: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#F9FAFB",
    color: "#111827",
  },

  submitButton: {
    backgroundColor: "#10B981",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  footerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#6B7280",
    marginTop: 20,
  },
  footerLink: {
    color: "#10B981",
    fontWeight: "600",
  },
});

