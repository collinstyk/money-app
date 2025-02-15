import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import ProfileImage from "./ProfileImage";

import Payments from "../assets/images/payments.svg";
import Transactions from "../assets/images/transactions.svg";
import Tag from "../assets/images/tag.svg";
import Card from "../assets/images/card.svg";
import Savings from "../assets/images/savings.svg";
import SmallArrow from "../assets/images/small-blue-right-arrow.svg";
import Logout from "../assets/images/logout.svg";

import { SvgProps } from "react-native-svg";
import { useTabContext } from "@/hooks/useTabContext";
import Button from "./Button";
import { Link } from "expo-router";

const menuData = [
  { id: "001", title: "Payments", icon: Payments },
  { id: "002", title: "Transaction", icon: Transactions },
  { id: "003", title: "My Cards", icon: Card },
  { id: "004", title: "Promotions", icon: Tag },
  { id: "005", title: "Savings", icon: Savings },
];

const MenuItem = ({
  id,
  title,
  icon: Icon,
  active,
  onPress,
}: {
  id: string;
  title: string;
  icon: React.FC<SvgProps>;
  active?: boolean;
  onPress?: (id: string) => void;
}) => {
  return (
    <Pressable
      style={{
        width: "100%",
        height: 60,
        backgroundColor: active ? "#F2F4F8" : "#fff",
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onPress={() => onPress && onPress(id)}
    >
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <Icon width={20} height={20} />
        <Text
          style={{
            fontFamily: "Montserrat-regular",
            fontSize: 18,
            color: "#2b47fc",
          }}
        >
          {title}
        </Text>
      </View>
      <SmallArrow width={7} height={12} />
    </Pressable>
  );
};

export default function SideMenu() {
  const { sideMenuOpen, closeSideMenu } = useTabContext();
  const [activeItem, setActiveItem] = useState("001");
  const [visible, setVisible] = useState(sideMenuOpen);

  const slideAnim = useRef(new Animated.Value(-284)).current; // Start off-screen

  useEffect(() => {
    if (sideMenuOpen) setVisible(sideMenuOpen);
    else setTimeout(() => setVisible(sideMenuOpen), 300);
    Animated.timing(slideAnim, {
      toValue: sideMenuOpen ? 0 : -284, // Slide in or out
      duration: 300, // Animation duration (300ms)
      useNativeDriver: true, // Optimize performance
    }).start();
  }, [sideMenuOpen]);

  const handleMenuItemPress = (id: string) => {
    setActiveItem(id);
  };

  return (
    <Animated.View
      style={[styles.container, { display: visible ? "flex" : "none" }]}
    >
      {/* Animated View for the Side Menu */}
      <Animated.View
        style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}
      >
        <Link
          style={{ left: 30, zIndex: 2 }}
          href="/(tabs)/profile"
          onPress={closeSideMenu}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}
          >
            <ProfileImage left={0} top={0} />
            <View>
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  color: "#3a3a3a",
                  fontSize: 16,
                }}
              >
                Emma Ashley
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-regular",
                  color: "#3a3a3a",
                  fontSize: 14,
                }}
              >
                @emma_ashley
              </Text>
            </View>
          </View>
        </Link>

        <FlatList
          style={{ marginTop: 43 }}
          data={menuData}
          renderItem={({ item }) => (
            <MenuItem
              id={item.id}
              title={item.title}
              icon={item.icon}
              onPress={() => handleMenuItemPress(item.id)}
              active={activeItem === item.id}
            />
          )}
        />
        <Button
          icon={<Logout width={21} height={22} />}
          width={221}
          bottom={56}
          left={30}
          text="Sign out"
        />
      </Animated.View>

      {/* Backdrop to close menu */}
      <Pressable style={{ height: "100%", flex: 1 }} onPress={closeSideMenu} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    flexDirection: "row",
    backgroundColor: "#0000004c",
  },
  menu: {
    backgroundColor: "#fff",
    width: 284,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 68,
  },
});
