import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Image, Pressable, Animated } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTabContext } from "@/hooks/useTabContext";

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { sideMenuOpen } = useTabContext();
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
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.touchableOpacity}
          >
            {label === "index" && (
              <Image
                source={
                  isFocused
                    ? require("@/assets/images/wallet-active.png")
                    : require("@/assets/images/wallet-deactive.png")
                }
                style={styles.image}
              />
            )}
            {label === "notifications" && (
              <Image
                source={
                  isFocused
                    ? require("@/assets/images/notification-active.png")
                    : require("@/assets/images/notification-deactive.png")
                }
                style={styles.image}
              />
            )}
            {label === "profile" && (
              <Image
                source={
                  isFocused
                    ? require("@/assets/images/profile-active.png")
                    : require("@/assets/images/profile-deactive.png")
                }
                style={styles.image}
              />
            )}
          </Pressable>
        );
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    height: 92,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
  },
  touchableOpacity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  image: {
    position: "absolute",
    top: 27,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
