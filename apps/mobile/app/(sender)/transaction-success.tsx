
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function TransactionSuccessScreen() {
  const params = useLocalSearchParams<{
    amount?: string;
    recipient?: string;
    rate?: string;
  }>();

  const amount = Number(params.amount || 5000);
  const rate = Number(params.rate || 16.45);
  const recipient = params.recipient || "John Doe";

  const receiveAmount = amount * rate;

  const transactionId =
    "TRX-" +
    new Date().getFullYear() +
    "-" +
    Math.floor(100000 + Math.random() * 900000);

  return (
    <View style={styles.container}>
      <View style={styles.successCircle}>
        <Text style={styles.check}>✓</Text>
      </View>

      <Text style={styles.title}>
        Transfer successful
      </Text>

      <Text style={styles.subtitle}>
        Your transfer has been created successfully.
      </Text>

      <View style={styles.card}>
        <Text style={styles.transactionLabel}>
          Transaction ID
        </Text>

        <Text style={styles.transactionId}>
          {transactionId}
        </Text>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>You sent</Text>
          <Text style={styles.value}>
            GMD {amount.toLocaleString()}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Recipient</Text>
          <Text style={styles.value}>{recipient}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Exchange rate</Text>
          <Text style={styles.value}>
            {rate.toFixed(2)}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Recipient receives</Text>
          <Text style={styles.receiveAmount}>
            NGN {receiveAmount.toLocaleString()}
          </Text>
        </View>
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>
          Transfer status
        </Text>

        <View style={styles.statusRow}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>
            Transfer created
          </Text>
        </View>

        <View style={styles.statusRow}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>
            Payment processing
          </Text>
        </View>

        <View style={styles.statusRow}>
          <View style={styles.pendingDot} />
          <Text style={styles.pendingText}>
            Recipient delivery pending
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push("/transactions")}
      >
        <Text style={styles.primaryText}>
          View Transactions
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.replace("/home")}
      >
        <Text style={styles.secondaryText}>
          Back to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F9F8",
    justifyContent: "center",
  },

  successCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#176B4D",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  check: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "700",
  },

  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "800",
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginTop: 8,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
  },

  transactionLabel: {
    color: "#777",
    fontSize: 13,
  },

  transactionId: {
    fontWeight: "700",
    marginTop: 5,
  },

  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  label: {
    color: "#777",
    flex: 1,
  },

  value: {
    fontWeight: "600",
    textAlign: "right",
    flex: 1,
  },

  receiveAmount: {
    fontWeight: "800",
    textAlign: "right",
    flex: 1,
  },

  statusCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginTop: 14,
    marginBottom: 20,
  },

  statusTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 15,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#176B4D",
    marginRight: 10,
  },

  pendingDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#C8C8C8",
    marginRight: 10,
  },

  statusText: {
    color: "#333",
  },

  pendingText: {
    color: "#888",
  },

  primaryButton: {
    height: 54,
    backgroundColor: "#176B4D",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  primaryText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },

  secondaryButton: {
    alignItems: "center",
    marginTop: 18,
  },

  secondaryText: {
    color: "#176B4D",
    fontWeight: "600",
  },
});

