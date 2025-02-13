import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import SmallGreenCircle from "@/assets/images/green-circle.svg";

export default function ProfileImage({
  top = 68,
  left,
  position,
  size,
}: {
  top?: number;
  left?: number;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  size?: number;
}) {
  return (
    <View
      style={[
        styles.container,
        { top, left, position, width: size ?? 50, height: size ?? 50 },
      ]}
    >
      <Pressable style={styles.pressable}>
        <Image
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          source={require("@/assets/images/profile-image-placeholder.png")}
        />
      </Pressable>
      <SmallGreenCircle style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    position: "absolute",
    right: 30,
    borderRadius: 18,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 18,
  },
  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
  },
});
