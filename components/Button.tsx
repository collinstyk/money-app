import { DimensionValue, Pressable, StyleSheet, Text } from "react-native";
import React, { cloneElement, ReactElement } from "react";
import { SvgProps } from "react-native-svg";

export default function Button({
  icon,
  width,
  bottom,
  left,
}: {
  icon: ReactElement;
  width: DimensionValue;
  bottom?: number;
  left?: number;
}) {
  return (
    <Pressable
      style={{
        borderWidth: 1,
        borderColor: "#2743FD",
        borderRadius: 28,
        width: width,
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        justifyContent: "space-between",
        left: left ?? 0,
        bottom: bottom ?? 0,
      }}
    >
      <Text
        style={{
          color: "#2743fd",
          fontFamily: "Montserrat-regular",
          fontSize: 20,
        }}
      >
        Sign out
      </Text>

      {icon && cloneElement(icon)}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
