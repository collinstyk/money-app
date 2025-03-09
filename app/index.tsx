import Button from "@/components/Button";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeBackground from "../assets/images/welcome-background.svg";

import WhiteRightArrow from "../assets/images/white-right-arrow.svg";
import BlueRightArrow from "../assets/images/blue-right-arrow.svg";
import LogoWhite from "../assets/images/Logo-White 1.svg";
import { router } from "expo-router";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "relative",
          height: 540,
          paddingHorizontal: 64,
          paddingTop: 52,
        }}
      >
        <WelcomeBackground style={{ position: "absolute", height: "100%" }} />
        <LogoWhite />
        <Text
          style={{
            color: "#fff",
            fontFamily: "Montserrat-regular",
            fontSize: 28,
            marginTop: 16,
            width: 150,
          }}
        >
          Welcome Back
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          width="100%"
          variant="primary"
          text="Sign in"
          textColor="#fff"
          textAlign="right"
          icon={<WhiteRightArrow />}
          onPress={() => router.push("/signIn")}
        />
        <Button
          text="Sign up"
          variant="outlined"
          width="100%"
          icon={<BlueRightArrow />}
          onPress={() => router.push("/signUp")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    position: "absolute",
    paddingHorizontal: 30,
    gap: 16,
    bottom: 64,
  },
});
