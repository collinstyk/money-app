import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import LeftArrow from "../assets/images/left-arrow.svg";

export default function TransactionsScreen() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#87F0FF",
          height: 250,
          borderBottomLeftRadius: 62,
          borderBottomRightRadius: 62,
        }}
      >
        <LinearGradient
          colors={["#4960F9", "#1937FE"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.5, 0.9]}
          style={styles.linearGradient}
        >
          <Pressable
            style={{ position: "absolute", left: 24, top: 49 }}
            onPress={() => router.back()}
          >
            <LeftArrow />
          </Pressable>

          <Text
            style={{
              fontFamily: "SFProText-bold",
              fontSize: 17,
              color: "white",
            }}
          >
            Transactions
          </Text>
          <View style={{ alignItems: "center", gap: 16 }}>
            <Text
              style={{
                color: "#87F0FF",
                fontFamily: "Montserrat-regular",
                fontSize: 22,
              }}
            >
              Your total expenses
            </Text>
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Montserrat-bold",
                fontSize: 28,
              }}
            >
              $1063.30
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 245,
    borderBottomLeftRadius: 62,
    borderBottomRightRadius: 62,
    paddingHorizontal: 24,
    paddingTop: 49,
    alignItems: "center",
    gap: 70,
  },
});
