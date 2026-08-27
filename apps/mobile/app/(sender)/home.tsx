import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function SenderHomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Good evening</Text>

      <Text style={styles.title}>Send money</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>
          Available balance
        </Text>

        <Text style={styles.balance}>
          GMD 25,000.00
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Quick actions
      </Text>

      <TouchableOpacity
        style={styles.action}
        onPress={() => router.push("/(sender)/offers")}
      >
        <Text style={styles.actionTitle}>
          Exchange rates
        </Text>

        <Text style={styles.actionSubtitle}>
          Find the best available P2P rate
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.action}
        onPress={() => router.push("/(sender)/send")}
      >
        <Text style={styles.actionTitle}>
          Send money
        </Text>

        <Text style={styles.actionSubtitle}>
          Start a new transfer
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9F8",
    padding: 20,
  },

  greeting: {
    color: "#777",
    marginTop: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    marginTop: 5,
  },

  balanceCard: {
    backgroundColor: "#176B4D",
    padding: 24,
    borderRadius: 18,
    marginTop: 24,
  },

  balanceLabel: {
    color: "#D9F4E8",
  },

  balance: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 15,
  },

  action: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 14,
    marginBottom: 12,
  },

  actionTitle: {
    fontSize: 17,
    fontWeight: "700",
  },

  actionSubtitle: {
    color: "#777",
    marginTop: 5,
  },
});