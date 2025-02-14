import { Text, View, StyleSheet, TextInput } from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import {useEffect, useState } from "react";
import { api } from "./services/api";

interface MovieDrops {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}


export default function Index() {
  const [movies, setMovies] = useState<MovieDrops[]>([]);

  const loadedMovies = async () => {
    const response = await api.get("/movie/popular");

    console.log(response.data.results);
  };

  useEffect(() => {
    loadedMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que você quer assistir?</Text>

      <View style={styles.headerInput}>
        <TextInput
          style={styles.input}
          placeholder="Buscar" 
          placeholderTextColor="#FFF"
        />

        <Foundation name="magnifying-glass" size={24} color="#FFF" />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242A32",
    paddingHorizontal: 30,
    paddingTop: 35,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  headerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3A3F47",
    padding: 10,
    borderRadius: 16,
    marginTop: 20,
  },
  input: {
    flex: 1,
  },

});
