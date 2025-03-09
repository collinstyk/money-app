import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import LeftArrow from "../assets/images/left-arrow.svg";
import {
  FlatList,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import SearchBar from "@/components/SearchBar";
import Transaction from "@/components/Transaction";
import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler";

const transactions: {
  category: "shopping" | "medicine" | "sport" | "travel";
  amount: number;
  date: string;
  type: "credit" | "debit";
}[] = [
  {
    category: "shopping",
    amount: 120,
    date: "15 mar 2019, 8:20pm",
    type: "debit",
  },
  {
    category: "medicine",
    amount: 89.5,
    date: "15 mar 2019, 8:20pm",
    type: "debit",
  },
  {
    category: "sport",
    amount: 99.9,
    date: "15 mar 2019, 8:20pm",
    type: "debit",
  },
  {
    category: "shopping",
    amount: 255,
    date: "15 mar 2019, 8:20pm",
    type: "debit",
  },
  {
    category: "travel",
    amount: 399,
    date: "15 mar 2019, 8:20pm",
    type: "debit",
  },
  {
    category: "sport",
    amount: 99.9,
    date: "15 mar 2019, 8:20pm",
    type: "debit",
  },
];

const CategorySum = ({
  category,
  sum,
}: {
  category: "shopping" | "medicine" | "sport" | "travel";
  sum?: number;
}) => {
  const containerColor1 =
    category === "shopping"
      ? "#ffcf87"
      : category === "medicine"
      ? "#e09fff"
      : category === "sport"
      ? "#87f0ff"
      : "#ff8787";
  const containerColor2 =
    category === "shopping"
      ? "#ca9547"
      : category === "medicine"
      ? "#8a46ab"
      : category === "sport"
      ? "#3aa2b1"
      : "#c16a6a";
  const ellipseColor1 =
    category === "shopping"
      ? "#f6c47a19"
      : category === "medicine"
      ? "#e98fff19"
      : category === "sport"
      ? "#73dbeb19"
      : "#f78c8c19";
  const ellipseColor2 =
    category === "shopping"
      ? "#f6c57a"
      : category === "medicine"
      ? "#e88fff"
      : category === "sport"
      ? "#73dceb"
      : "#f78c8c";
  const textColor =
    category === "shopping"
      ? "#a27430"
      : category === "medicine"
      ? "#9137bc"
      : category === "sport"
      ? "#298693"
      : "#a73131";

  return (
    <View
      style={{ width: 153, height: 103, overflow: "hidden", borderRadius: 25 }}
    >
      <LinearGradient
        colors={[containerColor1, containerColor2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.4, 0.9]}
        style={{ width: "100%", height: "100%" }}
      >
        <LinearGradient
          colors={[ellipseColor1, ellipseColor2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.3, 0.85]}
          style={{
            width: 112,
            height: 112,
            borderRadius: 112,
            top: -13,
            left: -6,
            position: "absolute",
          }}
        ></LinearGradient>
        <View style={{ marginLeft: 14, marginTop: 24 }}>
          <Text
            style={{
              textTransform: "capitalize",
              color: textColor,
              fontFamily: "Montserrat-regular",
              fontSize: 18,
            }}
          >
            {category}
          </Text>
          <Text
            style={{
              color: textColor,
              fontFamily: "Montserrat-bold",
              fontSize: 24,
            }}
          >
            ${sum}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const CategorySumsContainer = ({ opacity }: { opacity?: number }) => {
  const sums = ["shopping", "medicine", "sport", "travel"].map((category) => ({
    category,
    sum: transactions
      .filter((transaction) => transaction.category === category)
      .reduce((sum, transaction) => sum + transaction.amount, 0),
  }));

  return (
    <Animated.View
      style={{
        width: 315,
        margin: "auto",
        marginBottom: 33,
        marginTop: 32,
        position: "absolute",
        opacity,
        transform: [{ scale: opacity ?? 1 }],
      }}
    >
      <Text
        style={{
          fontFamily: "Montserrat-bold",
          fontSize: 22,
          color: "#3a3a3a",
          marginBottom: 20,
        }}
      >
        Track your expenses
      </Text>

      <View>
        <View
          style={{
            flexDirection: "row",
            gap: 9,
            flexWrap: "wrap",
            marginBottom: 16,
          }}
        >
          {["travel", "shopping", "sport", "medicine"].map((item) => {
            const sum = sums.reduce((acc, currentItem) => {
              if (currentItem.category === item) {
                acc = currentItem.sum;
              }
              return acc;
            }, 0);
            return (
              <CategorySum
                category={item as "shopping" | "medicine" | "sport" | "travel"}
                sum={sum}
                key={item}
              />
            );
          })}
        </View>
        <Pressable
          style={{
            height: 105,
            width: 315,
            borderRadius: 25,
            overflow: "hidden",
          }}
        >
          <LinearGradient
            colors={["#4960F9", "#1937FE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.3, 0.85]}
            style={{
              width: "100%",
              height: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 32,
            }}
          >
            <ImageBackground
              resizeMode="cover"
              source={require("@/assets/images/flower.png")}
              style={{
                width: 170,
                height: 105,
                position: "absolute",
                right: 0,
              }}
            />

            <Text
              style={{
                color: "white",
                fontFamily: "Montserrat-regular",
                fontSize: 20,
                width: 156,
              }}
            >
              Credit Card repayment
            </Text>
            <Image source={require("@/assets/images/small-arrow.png")} />
          </LinearGradient>
        </Pressable>
      </View>
    </Animated.View>
  );
};

type DraggableContainerProps = {
  children: React.ReactNode;
  handleCardOpacity?: (input: number) => void;
};

function DraggableContainer({
  children,

  handleCardOpacity,
}: DraggableContainerProps) {
  const targetRef = useRef<Animated.View>(null);

  const { height } = useWindowDimensions();

  const translateY = useSharedValue(0);
  const isDragging = useSharedValue(false);
  const position = useSharedValue<"relative" | "absolute">("absolute");

  const drag = Gesture.Pan()
    .onBegin((event) => {
      if (event.y < 30) {
        isDragging.value = true;
        return true;
      } else return false;
    })
    .onChange((event) => {
      if (translateY.value < 0) {
        translateY.value = 0;
      } else translateY.value += event.changeY;
    })
    .onEnd(() => (isDragging.value = false));

  useDerivedValue(() => {
    if (translateY.value < 0) {
      translateY.value = 0;
    }
    if (!isDragging.value) {
      if (translateY.value > height / 3) {
        translateY.value = height - 470;
        position.value = "absolute";
      } else {
        translateY.value = 0;
        position.value = "relative";
      }
    }
    if (handleCardOpacity) {
      runOnJS(handleCardOpacity)(translateY.value / (height - 470));
    }
  }, [translateY]);

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      position: position.value,
      top: position.value === "absolute" ? 85 : 126,
    };
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View
        style={[
          containerStyle,
          {
            flex: 1,

            bottom: 0,
          },
        ]}
        ref={targetRef}
      >
        <LinearGradient
          colors={["#4960F9", "#1937FE"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.5, 0.9]}
          style={{
            flex: 1,
            borderTopLeftRadius: 62,
            borderTopRightRadius: 62,
            paddingVertical: 16,
            gap: 24,
            paddingHorizontal: 28,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              height: 4,
              width: 47,
              marginHorizontal: "auto",
              borderRadius: 4,
            }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          />
          {children}
        </LinearGradient>
      </Animated.View>
    </GestureDetector>
  );
}

export default function TransactionsScreen() {
  const [cardOpacity, setCardOpacity] = useState(0);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#87F0FF",
            height: 250,
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
              style={{ position: "absolute", left: 24, top: 49 }}
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
              Transactions
            </Text>
            <View style={{ alignItems: "center", gap: 16 }}>
              <Text
                style={{
                  color: "#87F0FF",
                  fontFamily: "Montserrat-regular",
                  fontSize: 22,
                }}
              >
                Your total expenses
              </Text>
              <Text
                style={{
                  color: "#FFF",
                  fontFamily: "Montserrat-bold",
                  fontSize: 28,
                }}
              >
                $1063.30
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <CategorySumsContainer opacity={cardOpacity} />

          <DraggableContainer handleCardOpacity={setCardOpacity}>
            <SearchBar shade="blue" />

            <FlatList
              data={transactions}
              renderItem={({ item: transaction }) => (
                <Transaction
                  category={transaction.category}
                  date={transaction.date}
                  type={transaction.type}
                  amount={transaction.amount}
                  shade="blue"
                />
              )}
              contentContainerStyle={{ gap: 16 }}
            />
          </DraggableContainer>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 245,
    borderBottomLeftRadius: 62,
    borderBottomRightRadius: 62,
    paddingHorizontal: 24,
    paddingTop: 49,
    alignItems: "center",
    gap: 70,
  },
});
