import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";

import { NavigationProp } from "@react-navigation/native";
import Button from "@/components/Button";

import MoneyIcon from "../assets/images/Money-Icon.svg";
import Saving from "../assets/images/Saving-1.svg";
import Safety from "../assets/images/Safety-Box-1.svg";
import Trading from "../assets/images/Trading-1.svg";
import RightArrow from "../assets/images/right-arrow.svg";

const { width, height } = Dimensions.get("window");

const slidesData: {
  id: "savings" | "safety" | "trading";
  title: string;
  text: string;
}[] = [
  {
    id: "savings",
    title: "Save your money convieniently.",
    text: "Get 5% cash back for each transaction and spend it easily.",
  },
  {
    id: "safety",
    title: "Secure your money for free and get rewards.",
    text: "Get the most secure payment app ever and enjoy it.",
  },
  {
    id: "trading",
    title: "Enjoy commission free stock trading.",
    text: "Online investing has never been easier than it is right now.",
  },
];

const Slide = ({
  id,
  title,
  text,
}: {
  id: "savings" | "safety" | "trading";
  title: string;
  text: string;
}) => {
  return (
    <View style={styles.slide}>
      {/* Illustration */}
      <View
        style={{
          width: 280,
          maxHeight: 203,
          marginHorizontal: "auto",
        }}
      >
        {id === "savings" ? (
          <Saving style={{ marginHorizontal: "auto" }} />
        ) : id === "safety" ? (
          <Safety style={{ marginHorizontal: "auto" }} />
        ) : (
          <Trading style={{ marginHorizontal: "auto" }} />
        )}
      </View>

      {/* Text */}
      <View style={[styles.textContainer]}>
        <Text
          style={{
            color: "#2743FD",
            fontFamily: "Montserrat-bold",
            fontSize: 24,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "SFProText-regular",
            fontSize: 18,
            color: "#7c2aff",
          }}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

const Dot = ({ active }: { active: boolean }) => {
  const widthAnim = useRef(new Animated.Value(active ? 22 : 5)).current;
  const colorAnim = useRef(new Animated.Value(active ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: active ? 22 : 5,
      useNativeDriver: false,
      duration: 300,
    }).start();

    Animated.timing(colorAnim, {
      toValue: active ? 1 : 0,
      useNativeDriver: false,
      duration: 300,
    }).start();
  }, [active]);

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#B5BFFF", "#2A46FF"],
  });

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          width: widthAnim,
          backgroundColor,
        },
      ]}
    ></Animated.View>
  );
};

export default function Onboarding() {
  const [slideIndex, setSlideIndex] = useState(0);
  const flatlistRef = useRef<FlatList | null>(null);

  const handleScrollLeft = () => {
    if (slideIndex < slidesData.length - 1) {
      const newIndex = slideIndex + 1;
      flatlistRef.current?.scrollToIndex({ index: newIndex, animated: true });
      setSlideIndex(newIndex);
    }
  };

  return (
    <View style={styles.screen}>
      <MoneyIcon
        style={{ marginHorizontal: "auto", marginBottom: 40 }}
        width={41}
        height={41}
      />

      <FlatList
        ref={flatlistRef}
        data={slidesData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Slide id={item.id} title={item.title} text={item.text} />
        )}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(event) => {
          const index = Math.ceil(event.nativeEvent.contentOffset.x / width);
          setSlideIndex(index);
        }}
      />

      <View style={styles.BottomContainer}>
        {/* Dots */}
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Dot active={slideIndex === 0} />
          <Dot active={slideIndex === 1} />
          <Dot active={slideIndex === 2} />
        </View>

        {/* Next / Get started button */}
        <View style={{ width: slideIndex !== 2 ? 153 : 211 }}>
          <Button
            width={"100%"}
            text={slideIndex !== 2 ? "Next" : "Get Started"}
            variant="primary"
            textColor="#fff"
            icon={
              slideIndex !== 2 ? (
                <RightArrow width={25} height={20} />
              ) : undefined
            }
            textAlign={slideIndex !== 2 ? "left" : "center"}
            onPress={handleScrollLeft}
          />
        </View>
      </View>

      <View style={styles.circularBackground}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
    zIndex: -1,
  },
  slide: { flex: 1, zIndex: 1, width, gap: 0.2 * height },
  circularBackground: {
    width: 470,
    height: 470,
    backgroundColor: "#F5F6FA",
    borderRadius: 470,
    position: "absolute",
    bottom: -77,
    left: -109,
    zIndex: -1,
  },
  BottomContainer: {
    position: "absolute",
    bottom: 38,
    width: "100%",
    left: 0,
    zIndex: 1,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: { gap: 22, width: 360, zIndex: 1, paddingHorizontal: 30 },
  dot: {
    height: 5,
    borderRadius: 5,
  },
});
