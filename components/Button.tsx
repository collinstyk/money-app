import { DimensionValue, Pressable, StyleSheet, Text } from "react-native";
import React, { cloneElement, ReactElement } from "react";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export default function Button({
  icon,
  width,
  bottom,
  left,
  textAlign,
  text,
  textColor,
  variant,
  disabled,
  onPress,
}: {
  icon: ReactElement;
  width: DimensionValue;
  bottom?: number;
  left?: number;
  textAlign?: "center" | "left" | "right";
  textColor?: string;
  text: string;
  variant?: "primary" | "secondary" | "outlined" | "plain" | "tertiary";
  disabled?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      style={{
        borderWidth: 1,
        borderColor: variant === "outlined" ? "#2743FD" : "transparent",
        backgroundColor: "#fff",
        borderRadius: 28,
        width: width,
        height: 72,
        flexDirection: "row",
        alignItems: "center",

        justifyContent: textAlign === "center" ? "center" : "space-between",
        left: left ?? 0,
        bottom: bottom ?? 0,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      {variant === "primary" && (
        <LinearGradient
          colors={["#4960F9", "#1937FE"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.5, 0.9]}
          style={{
            width: width,
            height: 72,
            paddingHorizontal: 24,
            borderRadius: 28,
            position: "absolute",
          }}
        >
          <Text
            style={{
              color: textColor || "#2743fd",
              fontFamily: "Montserrat-regular",
              fontSize: 20,
            }}
          >
            {text}
          </Text>

          {icon && cloneElement(icon)}
        </LinearGradient>
      )}
      {variant === "outlined" ||
        (variant === "plain" && (
          <View
            style={{
              paddingHorizontal: 24,
              flexDirection: "row",
              width: width,
              alignItems: "center",
              justifyContent:
                textAlign === "center" ? "center" : "space-between",
              gap: textAlign === "center" ? 8 : 0,
            }}
          >
            <Text
              style={{
                color: textColor || "#2743fd",
                fontFamily: "Montserrat-regular",
                fontSize: 20,
              }}
            >
              {text}
            </Text>

            {icon && cloneElement(icon)}
          </View>
        ))}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
