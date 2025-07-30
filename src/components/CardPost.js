import React from "react";
import { View, Text, StyleSheet } from "react-native";

function CardPost({ title, body, userName }) {
  return (
    <View style={styles.card}>
      <Text style={styles.user}>Usuário: {userName}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

export default CardPost;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  user: {
    fontSize: 12,
    fontStyle: "italic",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  body: {
    fontSize: 14,
    color: "#444",
  },
});
