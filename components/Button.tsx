import {
  DimensionValue,
  Pressable,
  StyleSheet,
  Text,
  Animated,
} from "react-native";
import React, { cloneElement, ReactElement } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

import PrimaryBackground from "../assets/images/primary-btn-background.svg";
import Ellipse4 from "../assets/images/Ellipse 4.svg";
import Ellipse5 from "../assets/images/Ellipse 5.svg";

type ButtonProps = {
  icon?: ReactElement;
  width: DimensionValue;
  bottom?: DimensionValue;
  left?: DimensionValue;
  textAlign?: "center" | "left" | "right";
  textColor?: string;
  text: string;
  variant?: "primary" | "secondary" | "outlined" | "plain" | "tertiary";
  disabled?: boolean;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  fontFamily?: string;
  fontSize?: number;
  curvature?: DimensionValue;
  onPress?: (data?: any) => void;
};

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
  position,
  fontFamily,
  fontSize,
  curvature,
  onPress,
}: ButtonProps) {
  return (
    <Pressable
      style={{
        borderWidth: variant === "primary" || variant === "secondary" ? 0 : 1,
        borderColor: variant === "outlined" ? "#2743FD" : "transparent",
        backgroundColor: "#fff",
        borderRadius: curvature ?? 28,
        width: width,
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        left: left ?? 0,
        bottom: bottom ?? 0,
        overflow: "hidden",
        position: position ?? "relative",
        opacity: disabled ? 0.65 : 1,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      {variant === "secondary" ||
      variant === "primary" ||
      variant === "tertiary" ? (
        <LinearGradient
          colors={["#4960F9", "#1937FE"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.5, 0.9]}
          style={{
            width: width,
            height: 72,
            paddingHorizontal: 24,
            borderRadius: curvature ?? 28,
            flexDirection: "row",
            position: "absolute",
            alignItems: "center",
            justifyContent: textAlign === "center" ? "center" : "space-between",
            gap: textAlign === "center" ? 8 : 0,
          }}
        >
          <Text
            style={{
              zIndex: 2,
              color: textColor || "#2743fd",
              fontFamily: fontFamily ?? "Montserrat-regular",
              fontSize: fontSize ?? 20,
            }}
          >
            {text}
          </Text>

          {icon && cloneElement(icon)}
        </LinearGradient>
      ) : variant === "outlined" || variant === "plain" ? (
        <View
          style={{
            paddingHorizontal: 24,
            flexDirection: "row",
            width: width,
            alignItems: "center",
            justifyContent: textAlign === "center" ? "center" : "space-between",
            gap: textAlign === "center" ? 8 : 0,
          }}
        >
          <Text
            style={{
              zIndex: 2,
              color: textColor || "#2743fd",
              fontFamily: fontFamily ?? "Montserrat-regular",
              fontSize: fontSize ?? 20,
            }}
          >
            {text}
          </Text>

          {icon && cloneElement(icon)}
        </View>
      ) : (
        ""
      )}
      {variant === "primary" && (
        <PrimaryBackground
          style={{ position: "absolute", top: -1, right: 0 }}
        />
      )}
      {variant === "secondary" && (
        <Ellipse4 style={{ position: "absolute", bottom: 0, right: 0 }} />
      )}
      {variant === "secondary" && (
        <Ellipse5 style={{ position: "absolute", top: -1, left: 0 }} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
