import React from "react"; import { View, Text, StyleSheet, } from "react-native"; const steps = [ "Order created", "Agent matched", "Payment received", "Funds secured", "Payout processing", "Completed", ]; export default function TransactionDetailsScreen() { const currentStep = 2; return ( <View style={styles.container}> <Text style={styles.title}> Transaction </Text> <Text style={styles.id}> #TX-20260813-001 </Text> {steps.map((step, index) => { const completed = index <= currentStep; return ( <View key={step} style={styles.step} > <View style={[ styles.circle, completed && styles.completed, ]} > <Text style={styles.circleText}> {index + 1} </Text> </View> <Text style={[ styles.stepText, completed && styles.completedText, ]} > {step} </Text> </View> ); })} </View> ); } 
const styles = StyleSheet.create({ container: 
{ flex: 1, padding: 24, backgroundColor: "#FFF", },
title: { fontSize: 28, fontWeight: "700", },  
id: { color: "#777", marginTop: 5, marginBottom: 30, },
step: { flexDirection: "row", alignItems:  "center",
marginBottom: 25, }, circle: { width: 38, height: 38, borderRadius: 19, 
backgroundColor: "#DDD", alignItems: "center", 
justifyContent: "center", marginRight: 15, }, completed: 
{ backgroundColor: "#176B4D", }, circleText: 
{ color: "#FFF", fontWeight: "700", }, stepText: 
{ color: "#999", fontSize: 16, }, completedText: 
{ color: "#222", fontWeight: "600", }, });