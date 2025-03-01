import React from "react";
import { Text, View } from "react-native";

import SmallGreyArrow from "../assets/images/small-grey-arrow.svg";
import SmallLightBlueArrow from "../assets/images/small-lightblue-arrow.svg";

type TransactionProps = {
  category: "shopping" | "medicine" | "sport" | "travel" | string;
  amount: number;
  date?: string; // Subject to change
  shade: "light" | "blue";
  type: "credit" | "debit";
};

export default function Transaction({
  category,
  amount,
  date,
  shade,
  type,
}: TransactionProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <View
          style={{
            backgroundColor:
              category === "shopping"
                ? "#FFCF87"
                : category === "medicine"
                ? "#E09FFF"
                : category === "sport"
                ? "#87F0FF"
                : "#FF8787",
            height: 48,
            width: 48,
            borderRadius: 48,
          }}
        ></View>
        <View>
          <Text
            style={{
              textTransform: "capitalize",
              fontFamily: "Montserrat-regular",
              fontSize: 18,
              color: shade === "blue" ? "#fff" : "#3a3a3a",
            }}
          >
            {category}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 12,
              color: shade === "blue" ? "#80E0FF" : "#bfbfbf",
            }}
          >
            15 mar 2019, 8:20pm
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <Text
          style={{
            fontFamily: "Montserrat-regular",
            fontSize: 16,
            color: shade === "light" ? "#3a3a3a" : "#fff",
          }}
        >
          {type === "debit" && "-"}
          {amount}
        </Text>

        {shade === "light" ? <SmallGreyArrow /> : <SmallLightBlueArrow />}
      </View>
    </View>
  );
}
