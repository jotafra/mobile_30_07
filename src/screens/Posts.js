import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import sheets from "../axios/api";
import CardPost from "../components/CardPost";
import Header from "../components/Header";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([sheets.posts(), sheets.users()])
      .then(([postsRes, usersRes]) => {
        const postsData = postsRes.data;
        const usersData = usersRes.data;

        const postsComUsuario = postsData.map(post => {
          const usuario = usersData.find(user => user.id === post.userId);
          return {
            ...post,
            userName: usuario ? usuario.name : "Desconhecido",
          };
        });

        setPosts(postsComUsuario);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={styles.loadingText}>Carregando posts...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Lista de Posts" />
      {posts.map(post => (
        <CardPost
          key={post.id}
          title={post.title}
          body={post.body}
          userName={post.userName}
        />
      ))}
    </ScrollView>
  );
}

export default Posts;

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
