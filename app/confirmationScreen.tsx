import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import LeftArrow from "../assets/images/left-arrow.svg";
import Done from "../assets/images/icon-done.svg";
import Button from "@/components/Button";

export default function ConfirmationScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#87F0FF",
          height: 110,
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
            style={{ position: "absolute", left: 24, top: 45 }}
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
            Transaction
          </Text>
        </LinearGradient>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 30 }}>
        <View style={{ marginVertical: 108, alignItems: "center" }}>
          <Done />

          <Text
            style={{
              marginTop: 16,
              color: "#2743fd",
              fontFamily: "Montserrat-regular",
              fontSize: 18,
              textAlign: "center",
              width: 271,
            }}
          >
            You have successfully sent {"$99"} to{" "}
            <Text style={{ fontFamily: "Montserrat-bold" }}>
              {"Grace Addison"}
            </Text>{" "}
          </Text>
          {/* Subject to change */}
          {<Image />}
        </View>

        <View style={{ gap: 12, marginTop: 117 }}>
          <Button
            width={"100%"}
            variant="secondary"
            text="Execute again"
            textAlign="center"
            textColor="#fff"
          />
          <Button
            width={"100%"}
            variant="outlined"
            text="Confirm"
            textAlign="center"
            textColor="#2743FD"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 105,
    borderBottomLeftRadius: 62,
    borderBottomRightRadius: 62,
    paddingHorizontal: 24,
    paddingTop: 45,
    alignItems: "center",
    gap: 70,
  },
});
