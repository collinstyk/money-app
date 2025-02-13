import {
  Animated,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import BalanceDisplay from "@/components/BalanceDisplay";
import ProfileImage from "@/components/ProfileImage";
import { useTabContext } from "@/hooks/useTabContext";

import HamburgerMenu from "@/assets/images/hamburger-menu.svg";
import { Link } from "expo-router";

export default function Index() {
  const { sideMenuOpen, openSideMenu } = useTabContext();

  const slideAnim = useRef(new Animated.Value(266)).current;

  useEffect(
    () =>
      Animated.timing(slideAnim, {
        toValue: sideMenuOpen ? 266 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start(),
    [sideMenuOpen]
  );
  return (
    <Animated.View
      style={[styles.screen, { transform: [{ translateX: slideAnim }] }]}
    >
      <LinearGradient
        colors={["#4960F9", "#1937FE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.5, 1]}
        style={styles.topLinearGradient}
      >
        <Pressable
          style={{
            top: 71,
            left: 30,
            position: "absolute",
            width: 25,
            height: 25,
          }}
          onPress={() => {
            openSideMenu();
          }}
        >
          <HamburgerMenu
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Pressable>
        <Link
          href="/(tabs)/profile"
          style={{ position: "absolute", top: 68, right: 30, zIndex: 1 }}
        >
          <View>
            <ProfileImage top={0} left={0} />
          </View>
        </Link>
        <Text style={styles.welcomeText}>Good morning Emma,</Text>
      </LinearGradient>
      <BalanceDisplay />

      {/* Check account button */}
      <Pressable
        style={{
          width: 315,
          height: 146,
          borderRadius: 40,

          marginHorizontal: "auto",

          bottom: 57,
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
              width: 175,
              height: 146,
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
            Check your bank accounts
          </Text>
          <Image source={require("@/assets/images/small-arrow.png")} />
        </LinearGradient>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
  },
  topLinearGradient: {
    height: 278,
    borderBottomLeftRadius: 66,
    borderBottomRightRadius: 66,
  },
  welcomeText: {
    color: "white",
    fontSize: 24,
    fontFamily: "Montserrat-regular",
    width: 183,
    top: 124,
    left: 60,
  },
});
