import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";

export default function OTPScreen() {
  const [otp, setOtp] = useState("");

  const verifyOTP = () => {
    console.log("OTP:", otp);

    // Temporary navigation.
    router.replace("/(sender)/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Verify your phone</Text>

        <Text style={styles.subtitle}>
          Enter the verification code sent to your phone.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#999"
          keyboardType="number-pad"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={verifyOTP}
        >
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resend}>
          <Text style={styles.resendText}>Resend code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9F8",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
  },

  subtitle: {
    color: "#666",
    marginTop: 10,
    marginBottom: 30,
    lineHeight: 22,
  },

  input: {
    height: 56,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 20,
    letterSpacing: 8,
    textAlign: "center",
  },

  button: {
    height: 54,
    backgroundColor: "#176B4D",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },

  resend: {
    alignItems: "center",
    marginTop: 20,
  },

  resendText: {
    color: "#176B4D",
    fontWeight: "600",
  },
});