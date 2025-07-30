import React from "react";
import { View, Text, StyleSheet } from "react-native";

function CardUser({ name, email, company, zipcode }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>Email: {email}</Text>
      <Text style={styles.info}>Empresa: {company}</Text>
      <Text style={styles.info}>CEP: {zipcode}</Text>
    </View>
  );
}

export default CardUser;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  info: {
    fontSize: 14,
    color: "#444",
  },
});
