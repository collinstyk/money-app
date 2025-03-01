import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";

import Button from "./Button";

import ColoredDesign from "../assets/images/auth-background.svg";
import LogoWhite from "../assets/images/Logo-White 1.svg";
import WhiteRightArrow from "../assets/images/white-right-arrow.svg";

export default function AuthScreen({
  children,
  title,
  btnOnPress,
}: {
  children: ReactElement;
  title: string;
  btnOnPress: (input: any) => void;
}) {
  return (
    <View
      style={{
        flex: 1,
        overflowY: "auto",
      }}
    >
      <ColoredDesign />
      <View style={{ position: "absolute", top: 52, left: 64, gap: 16 }}>
        <LogoWhite />
        <Text
          style={{
            fontFamily: "Montserrat-regular",
            fontSize: 28,
            color: "#fff",
            width: 140,
          }}
        >
          Welcome Back
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          marginTop: 38,
          flex: 1,
        }}
      >
        <View
          style={{
            marginBottom: title === "Sign up" ? 64 : 100,
          }}
        >
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
        <Button
          text={title}
          variant="primary"
          width="100%"
          textColor="#fff"
          icon={<WhiteRightArrow />}
          onPress={btnOnPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat-bold",
    fontSize: 28,
    color: "#3a3a3a",
    marginBottom: 44,
  },
});
