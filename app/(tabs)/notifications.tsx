import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";

import SearchBar from "@/components/SearchBar";
import SmallGreenCircle from "@/assets/images/green-circle.svg";
import SmallYellowCircle from "@/assets/images/small-yellow-circle.svg";
import SmallGreyCircle from "@/assets/images/small-grey-circle.svg";
import SmallBlueArrow from "@/assets/images/small-blue-arrow.svg";

const placeholderImage = require("@/assets/images/profile-image-placeholder.png");

type TransactionType = "credit" | "debit";

const notificationData: {
  name: string;
  amount: number;
  transactionType: TransactionType;
  status: "online" | "busy" | "offline";
}[] = [
  {
    name: "Jacob Jones",
    amount: 20,
    transactionType: "debit",
    status: "online",
  },
  {
    name: "Annette Black",
    amount: 20,
    transactionType: "debit",
    status: "online",
  },
  { name: "Jerome Bell", amount: 20, transactionType: "debit", status: "busy" },
  {
    name: "Arlene McCoy",
    amount: 20,
    transactionType: "debit",
    status: "offline",
  },
  {
    name: "Darlene Robertson",
    amount: 20,
    transactionType: "debit",
    status: "busy",
  },
  {
    name: "Leslie Alexander",
    amount: 20,
    transactionType: "debit",
    status: "busy",
  },
  {
    name: "Robert Fox",
    amount: 20,
    transactionType: "debit",
    status: "offline",
  },
];

function MessageItem({
  imageSource,
  name,
  amount,
  transactionType,
  status,
}: {
  imageSource?: string;
  name: string;
  amount: number;
  transactionType: "credit" | "debit";
  status?: "online" | "busy" | "offline";
}) {
  return (
    <Pressable
      style={{
        width: "100%",
        height: 56,
        justifyContent: "flex-start",
        borderBottomWidth: 1,
        borderColor: "#dee1ef",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                overflow: "hidden",
              }}
            >
              <Image
                source={placeholderImage}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                }}
              />
            </View>
            {status === "online" && (
              <SmallGreenCircle
                style={{ position: "absolute", bottom: 0, right: 0 }}
              />
            )}
            {status === "busy" && (
              <SmallYellowCircle
                style={{ position: "absolute", bottom: 0, right: 0 }}
              />
            )}
            {status === "offline" && (
              <SmallGreyCircle
                style={{ position: "absolute", bottom: 0, right: 0 }}
              />
            )}
          </View>

          <View>
            <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
              {name}
            </Text>
            {transactionType === "debit" && (
              <Text
                style={{
                  fontFamily: "Montserrat-regular",
                  fontSize: 16,
                  color: "#2743f3",
                }}
              >
                you just sent {name.split(" ")[0]} ${amount}
              </Text>
            )}
            {transactionType === "credit" && (
              <Text
                style={{
                  fontFamily: "Montserrat-regular",
                  fontSize: 16,
                  color: "#2743f3",
                }}
              >
                {name.split(" ")[0]} just sent you ${amount}
              </Text>
            )}
          </View>
        </View>
        <SmallBlueArrow />
      </View>
    </Pressable>
  );
}

export default function Notifications() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.heading}>You can check your notifications here</Text>
      <FlatList
        data={notificationData}
        renderItem={({ item }) => (
          <MessageItem
            name={item.name}
            amount={item.amount}
            transactionType={item.transactionType}
            status={item.status}
          />
        )}
        // for separation
        // ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        contentContainerStyle={{ gap: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
    paddingHorizontal: 30,
  },
  heading: {
    fontFamily: "Montserrat-bold",
    fontSize: 22,
    color: "#3a3a3a",
    marginTop: 32,
    marginBottom: 24,
  },
});
