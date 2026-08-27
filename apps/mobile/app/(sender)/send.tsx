import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function SendMoneyScreen() {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const rate = 16.45;

  const receiveAmount =
    Number(amount || 0) * rate;

  const submitOrder = () => {
    console.log({
      amount: Number(amount),
      recipient,
      rate,
      receiveAmount,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Send money
      </Text>

      <Text style={styles.label}>
        Amount to send
      </Text>

      <TextInput
        style={styles.input}
        placeholder="0.00"
        placeholderTextColor="#999"
        keyboardType="decimal-pad"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.currency}>
        GMD
      </Text>

      <Text style={styles.label}>
        Recipient
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Recipient phone/account"
        placeholderTextColor="#999"
        value={recipient}
        onChangeText={setRecipient}
      />

      <View style={styles.summary}>
        <View style={styles.row}>
          <Text>Exchange rate</Text>
          <Text>{rate}</Text>
        </View>

        <View style={styles.row}>
          <Text>Recipient receives</Text>

          <Text style={styles.receive}>
            NGN{" "}
            {receiveAmount.toLocaleString()}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={submitOrder}
      >
        <Text style={styles.buttonText}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 25,
  },

  label: {
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    height: 52,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  currency: {
    position: "absolute",
    right: 35,
    top: 88,
    color: "#777",
  },

  summary: {
    backgroundColor: "#F5F7F6",
    padding: 18,
    borderRadius: 14,
    marginTop: 25,
    gap: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  receive: {
    fontSize: 20,
    fontWeight: "800",
  },

  button: {
    backgroundColor: "#176B4D",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
  },
});