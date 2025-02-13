import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function () {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#3a3a3a",
          fontFamily: "Montserrat-regular",
          fontSize: 16,
          top: 33,
        }}
      >
        Your total balance
      </Text>
      <Text
        style={{
          color: "#2d99ff",
          fontFamily: "Montserrat-bold",
          fontSize: 30,
          top: 38,
        }}
      >
        $8500.00
      </Text>
      <Pressable style={{ position: "absolute", top: 41, right: 38 }}>
        <Image source={require("@/assets/images/three-dots.png")} />
      </Pressable>
      <View style={{ top: 67, flexDirection: "row", alignItems: "flex-end" }}>
        <Bars mainHeight={122} supportingHeight={32} direction="straight" />
        <Bars mainHeight={100} supportingHeight={23} direction="straight" />
        <Bars mainHeight={89} supportingHeight={15} direction="straight" />
        <Bars mainHeight={61} supportingHeight={7} direction="straight" />
        <Bars mainHeight={27} supportingHeight={44} direction="inverse" />
        <Bars mainHeight={108} supportingHeight={10} direction="inverse" />
      </View>
    </View>
  );
}

type BarsProps = {
  mainHeight: number;
  supportingHeight: number;
  direction: string;
};

const Bars = ({ mainHeight, supportingHeight, direction }: BarsProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 4,
        marginLeft: 16,
        height: mainHeight,
      }}
    >
      <View
        style={{
          width: 9,
          height: direction === "straight" ? "100%" : supportingHeight,
          backgroundColor: "#2D99FF",
          borderTopLeftRadius: direction === "straight" ? 24 : 0,
          borderTopRightRadius: direction === "straight" ? 24 : 0,
          borderBottomLeftRadius: direction === "straight" ? 0 : 24,
          borderBottomRightRadius: direction === "straight" ? 0 : 24,
          top: direction === "straight" ? 0 : "100%",
        }}
      ></View>
      <View
        style={{
          width: 9,
          height: direction === "inverse" ? "100%" : supportingHeight,
          backgroundColor: "#A5F3FF",
          borderTopLeftRadius: direction === "straight" ? 0 : 24,
          borderTopRightRadius: direction === "straight" ? 0 : 24,
          borderBottomLeftRadius: direction === "straight" ? 24 : 0,
          borderBottomRightRadius: direction === "straight" ? 24 : 0,
          top: direction === "inverse" ? 0 : "100%",
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 322,
    backgroundColor: "#fff",
    borderRadius: 40,
    paddingHorizontal: 26,
    marginHorizontal: "auto",
    bottom: 81,
    shadowColor: "#00000019",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 4,
  },
});
