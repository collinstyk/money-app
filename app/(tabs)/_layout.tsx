import SideMenu from "@/components/SideMenu";
import TabBar from "@/components/TabBar";
import { TabProvider } from "@/contexts/TabContext";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <TabProvider>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <SideMenu />
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "blue",
            tabBarShowLabel: false,
          }}
          tabBar={(props) => <TabBar {...props} />}
        >
          <Tabs.Screen name="index" />
          <Tabs.Screen name="notifications" />
          <Tabs.Screen name="profile" />
        </Tabs>
      </View>
    </TabProvider>
  );
}
