import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { createFactory } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import Transaction from "../components/Transaction";

import LeftArrow from "../assets/images/left-arrow.svg";
import MasterCardbg from "../assets/images/colored-card-bg.svg";
import CardLogo from "../assets/images/mastercard-logo.svg";

const Card = ({
  shade = "plain",
  cardSize,
  cardBalance,
  cardType,
  cardNumber,
}: {
  shade?: "colored" | "plain";
  cardSize: "small" | "large";
  cardBalance: number;
  cardType: "Company" | "Home";
  cardNumber?: string;
}) => {
  return (
    <View
      style={{
        width: cardSize === "large" ? 210 : 180,
        height: cardSize === "large" ? 305 : 259,
        borderRadius: 40,
        backgroundColor: shade === "colored" ? "transparent" : "#fff",
        shadowColor: shade === "colored" ? "#5989f8" : "#000000",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        elevation: 20,
        shadowOpacity: 0.1,
        shadowRadius: 41,
      }}
    >
      {shade === "colored" && (
        <MasterCardbg
          width={"100%"}
          height={"100%"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          paddingHorizontal: cardSize === "large" ? 22 : 20,
          paddingTop: cardSize === "large" ? 38 : 32,
          paddingBottom: 32,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: cardSize === "small" ? 20 : 24,
              color: shade === "colored" ? "#fff" : "#3A3A3A",
            }}
          >
            ${`${cardBalance}`}.00
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: cardSize === "small" ? 16 : 18,
              color: shade === "colored" ? "#fff" : "#3A3A3A",
            }}
          >
            {cardType}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            height: cardSize === "small" ? 45 : 50,
          }}
        >
          {/* Expiry date and card number */}
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-regular",
                fontSize: cardSize === "small" ? 12 : 14,
                color: shade === "colored" ? "#fff" : "#3A3A3A",
              }}
            >
              01/2028
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-regular",
                fontSize: cardSize === "small" ? 12 : 14,
                color: shade === "colored" ? "#fff" : "#3A3A3A",
              }}
            >
              **** **** **** 2204
            </Text>
          </View>
          {/* Card logo */}
          <View
            style={{
              width: cardSize === "small" ? 37 : 40,
              alignItems: "center",
              alignSelf: "flex-end",
            }}
          >
            <CardLogo style={{ width: "100%" }} />
            <Text
              style={{
                color: shade === "plain" ? "#3a3a3a" : "#fff",
                fontSize: cardSize === "small" ? 6 : 7,
              }}
            >
              mastercard
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default function cardsScreen() {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={["#4960F9", "#1937FE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.5, 0.9]}
        style={styles.linearGradient}
      >
        <View style={{ marginTop: 68, gap: 35 }}>
          <Pressable onPress={router.back}>
            <LeftArrow />
          </Pressable>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Montserrat-bold",
              fontSize: 24,
              width: 256,
            }}
          >
            You can check your cards here
          </Text>
        </View>
      </LinearGradient>

      {/* Cards */}
      <View
        style={{
          paddingLeft: 30,
          flexDirection: "row",
          gap: 20,
          bottom: 80,
          alignItems: "center",
        }}
      >
        <Card
          cardSize="large"
          shade="colored"
          cardBalance={4500.0}
          cardType="Company"
        />
        <Card cardSize="small" cardBalance={4000} cardType="Home" />
      </View>

      <View style={{ paddingHorizontal: 30 }}>
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            fontSize: 22,
            color: "#3a3a3a",
          }}
        >
          Recent Transactions
        </Text>
        <Transaction
          category="shopping"
          amount={120}
          shade="light"
          type="debit"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  linearGradient: {
    height: 278,
    borderBottomLeftRadius: 66,
    borderBottomRightRadius: 66,
    paddingHorizontal: 30,
  },
});
