import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileEdit() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#4960F9", "#1937FE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.5, 1]}
        style={styles.linearGradient}
      >
        <Text>ProfileEdit</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  linearGradient: {
    flex: 1,
  },
});
