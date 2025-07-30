import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import sheets from "../axios/api";
import CardTodo from "../components/CardTodo";
import Header from "../components/Header";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([sheets.todos(), sheets.users()])
      .then(([todosRes, usersRes]) => {
        const users = usersRes.data;

        const todosComNomes = todosRes.data.map(todo => {
          const user = users.find(u => u.id === todo.userId);
          return {
            ...todo,
            userName: user ? user.name : "Desconhecido",
            completedLocal: todo.completed,
          };
        });

        setTodos(todosComNomes);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro:", error);
        setLoading(false);
      });
  }, []);

  const toggleCheckbox = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, completedLocal: !todo.completedLocal }
          : todo
      )
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={styles.loadingText}>Carregando tarefas...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Lista de Tarefas" />
      {todos.map(todo => (
        <CardTodo
          key={todo.id}
          title={todo.title}
          completed={todo.completedLocal}
          userName={todo.userName}
          onToggle={() => toggleCheckbox(todo.id)}
        />
      ))}
    </ScrollView>
  );
}

export default Todos;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});
