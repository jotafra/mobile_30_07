import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="API JSONPlaceholder" />
      <Text style={styles.subtitle}>Navegue entre os recursos disponíveis:</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#1976d2" }]}
          onPress={() => navigation.navigate("Posts")}
        >
          <Text style={styles.buttonText}>Ver Posts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#9c27b0" }]}
          onPress={() => navigation.navigate("Users")}
        >
          <Text style={styles.buttonText}>Ver Usuários</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#2e7d32" }]}
          onPress={() => navigation.navigate("Todos")}
        >
          <Text style={styles.buttonText}>Ver Tarefas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
