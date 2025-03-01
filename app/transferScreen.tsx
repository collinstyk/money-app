import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/components/Button";

function Key({
  value,
  onPress,
}: {
  value: number | string;
  onPress?: (input: number) => void;
}) {
  return (
    <Pressable
      onPress={() => onPress && onPress(value as number)}
      style={{
        backgroundColor:
          typeof value !== "string" || value === "." ? "#F5F6FA" : "#fff",
        width: value === "enter" ? "100%" : 89,
        height: 70,
        borderRadius: 17,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {typeof value !== "string" && (
        <Text
          style={{
            color: "#2743fd",
            fontFamily: "SFProText-medium",
            fontSize: 24,
          }}
        >
          {value}
        </Text>
      )}
      {value === "." && (
        <Text
          style={{
            color: "#2743fd",
            fontFamily: "SFProText-medium",
            fontSize: 24,
          }}
        >
          {value}
        </Text>
      )}
      {value === "backspace" && (
        <LinearGradient
          colors={["#4960F9", "#1937FE"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.5, 0.9]}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="backspace-outline"
            style={{ color: "#fff" }}
            size={30}
          />
        </LinearGradient>
      )}
      {value === "enter" && (
        <Button
          icon={<RightArrow width={30} height={30} />}
          width="100%"
          text="Continue"
          textColor="#fff"
          variant="tertiary"
          textAlign="center"
          fontFamily="SFProText-medium"
          fontSize={20}
          curvature={17}
          onPress={() => router.push("./confirmationScreen")}
        />
        // <LinearGradient
        //   colors={["#4960F9", "#1937FE"]}
        //   start={{ x: 0, y: 0 }}
        //   end={{ x: 1, y: 1 }}
        //   locations={[0.5, 0.9]}
        //   style={{
        //     flexDirection: "row",
        //     gap: 20,
        //     width: "100%",
        //     height: "100%",
        //     justifyContent: "center",
        //     alignItems: "center",
        //   }}
        // >
        //   <Text
        //     style={{
        //       color: "#fff",
        //       fontFamily: "SFProText-medium",
        //       fontSize: 20,
        //     }}
        //   >
        //     Continue
        //   </Text>
        //   <RightArrow />
        // </LinearGradient>
      )}
    </Pressable>
  );
}

function Keyboard({ onInput }: { onInput?: (input: number) => void }) {
  return (
    <View
      style={{
        width: 288,
        // backgroundColor: "silver",
        marginHorizontal: "auto",
        gap: 10,
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        {[1, 2, 3].map((value) => (
          <Key value={value} key={value} onPress={onInput} />
        ))}
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {[4, 5, 6].map((value) => (
          <Key value={value} key={value} onPress={onInput} />
        ))}
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {[7, 8, 9].map((value) => (
          <Key value={value} key={value} onPress={onInput} />
        ))}
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {[".", 0, "backspace"].map((value) => (
          <Key value={value} key={value} onPress={onInput} />
        ))}
      </View>
      <Key value={"enter"} onPress={onInput} />
    </View>
  );
}

export default function TransferScreen() {
  const [amount, setAmount] = useState("0");

  const handleAmountChange = (input: number | string) => {
    if (input === "enter") return;
    if (input === "backspace") {
      setAmount((value) => value.slice(0, -1) || "0");
      return;
    }
    if (amount.includes(".")) {
      if (input === ".") return;
      setAmount((value) => value + input);
    }
    if (typeof input === "number" && !amount.includes(".")) {
      setAmount((value) => String(Number(value) * 10 + Number(input)));
    }
    if (input === "." && !amount.includes(".")) {
      setAmount((value) => value + input);
    }
  };
  return (
    <View>
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
            Transfer
          </Text>
        </LinearGradient>
      </View>

      <View
        style={{
          marginTop: 59,
          width: 224,
          marginHorizontal: "auto",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingVertical: 16,
            borderBottomColor: "#DEE1EF",
            borderBottomWidth: 1,
            width: "100%",
            gap: 8,
          }}
        >
          <Text
            style={{
              color: "#2743FD",
              fontFamily: "Montserrat-regular",
              fontSize: 18,
            }}
          >
            Enter Amount
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 36,
              color: "#b6bfff",
            }}
          >
            <Text style={{ color: "#2743FD" }}>$</Text> {amount}
          </Text>
        </View>

        <View style={{ alignItems: "center", paddingVertical: 16, gap: 16 }}>
          <Text
            style={{
              color: "#2743FD",
              fontFamily: "Montserrat-regular",
              fontSize: 18,
            }}
          >
            To
          </Text>
          <View>
            <Image />
            {/* Subject to change */}
            <Text
              style={{
                color: "#3a3a3a",
                fontFamily: "Montserrat-regular",
                fontSize: 16,
              }}
            >
              Grace Addison
            </Text>
          </View>
        </View>
      </View>

      <Keyboard onInput={handleAmountChange} />
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
