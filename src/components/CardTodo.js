import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

function CardTodo({ title, completed, userName, onToggle }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Checkbox value={completed} onValueChange={onToggle} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.user}>Usuário: {userName}</Text>
    </View>
  );
}

export default CardTodo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  user: {
    marginTop: 6,
    fontSize: 14,
    fontStyle: "italic",
    color: "#444",
  },
});
