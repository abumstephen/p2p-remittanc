import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

const offers = [
  {
    id: "1",
    agent: "West Africa Liquidity",
    pair: "GMD → NGN",
    rate: 16.45,
    available: 150000,
  },
  {
    id: "2",
    agent: "Lagos Exchange",
    pair: "GMD → NGN",
    rate: 16.30,
    available: 90000,
  },
  {
    id: "3",
    agent: "Senegal Liquidity",
    pair: "USD → XOF",
    rate: 600.5,
    available: 2500000,
  },
];

export default function OffersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Live exchange offers
      </Text>

      <FlatList
        data={offers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.agent}>
                {item.agent}
              </Text>

              <Text style={styles.live}>
                LIVE
              </Text>
            </View>

            <Text style={styles.pair}>
              {item.pair}
            </Text>

            <Text style={styles.rate}>
              {item.rate.toFixed(2)}
            </Text>

            <Text style={styles.available}>
              Available:{" "}
              {item.available.toLocaleString()}
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                router.push("/(sender)/send")
              }
            >
              <Text style={styles.buttonText}>
                Select Rate
              </Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9F8",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  agent: {
    fontSize: 16,
    fontWeight: "700",
  },

  live: {
    color: "#17864F",
    fontSize: 12,
    fontWeight: "800",
  },

  pair: {
    marginTop: 18,
    color: "#777",
  },

  rate: {
    fontSize: 32,
    fontWeight: "800",
    marginTop: 5,
  },

  available: {
    marginTop: 8,
    color: "#666",
  },

  button: {
    backgroundColor: "#176B4D",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
  },
});