import { Text, View, StyleSheet, TextInput } from "react-native";
import foundation from "@expo/vector-icons/Foundation";
import Foundation from "@expo/vector-icons/Foundation";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que você quer assistir?</Text>

      <View style={styles.headerInput}>
        <TextInput
          style={styles.input}
          placeholder="Buscar" 
          placeholderTextColor="#FFF"
        />

        <Foundation name="magnifying-glass" size={24} color="black" />
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
  headerInput: {},
  input: {},

});
