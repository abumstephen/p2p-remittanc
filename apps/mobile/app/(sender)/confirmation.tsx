
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function ConfirmationScreen() {
  const params = useLocalSearchParams<{
    amount?: string;
    recipient?: string;
    rate?: string;
  }>();

  const amount = Number(params.amount || 5000);
  const rate = Number(params.rate || 16.45);
  const recipient = params.recipient || "John Doe";

  const fee = 50;
  const receiveAmount = amount * rate;
  const total = amount + fee;

  const confirmTransfer = () => {
    Alert.alert(
      "Confirm Transfer",
      `Send GMD ${amount.toLocaleString()} to ${recipient}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            router.replace({
              pathname: "/transaction-success",
              params: {
                amount: amount.toString(),
                recipient,
                rate: rate.toString(),
              },
            });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm transfer</Text>

      <Text style={styles.subtitle}>
        Review your transfer details before confirming.
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Transfer details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>You send</Text>
          <Text style={styles.value}>
            GMD {amount.toLocaleString()}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Exchange rate</Text>
          <Text style={styles.value}>
            1 GMD = {rate.toFixed(2)} NGN
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Fee</Text>
          <Text style={styles.value}>
            GMD {fee.toLocaleString()}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.total}>
            GMD {total.toLocaleString()}
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recipient</Text>

        <Text style={styles.recipient}>{recipient}</Text>

        <Text style={styles.receiveLabel}>
          Recipient receives
        </Text>

        <Text style={styles.receiveAmount}>
          NGN {receiveAmount.toLocaleString()}
        </Text>
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          Please make sure the recipient information is correct.
          Transfers may not be reversible after processing.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={confirmTransfer}
      >
        <Text style={styles.buttonText}>
          Confirm Transfer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F9F8",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
  },

  subtitle: {
    color: "#777",
    marginTop: 6,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  label: {
    color: "#777",
  },

  value: {
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 5,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
  },

  total: {
    fontSize: 18,
    fontWeight: "800",
  },

  recipient: {
    fontSize: 20,
    fontWeight: "700",
  },

  receiveLabel: {
    color: "#777",
    marginTop: 18,
  },

  receiveAmount: {
    fontSize: 25,
    fontWeight: "800",
    marginTop: 5,
  },

  notice: {
    backgroundColor: "#FFF8E7",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  noticeText: {
    color: "#765D18",
    lineHeight: 20,
  },

  button: {
    backgroundColor: "#176B4D",
    height: 55,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  backButton: {
    alignItems: "center",
    marginTop: 18,
  },

  backText: {
    color: "#176B4D",
    fontWeight: "600",
  },
});

