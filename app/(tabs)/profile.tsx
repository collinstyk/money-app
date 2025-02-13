import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "@/components/Button";

import ColorfulDesign from "@/assets/images/colorful-design.svg";
import ProfileImage from "@/components/ProfileImage";
import Logout from "../../assets/images/logout.svg";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View style={styles.container}>
      <ColorfulDesign style={{ position: "absolute", top: 0, right: 0 }} />
      <View style={{ marginTop: 46, marginBottom: 30, gap: 32 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 40,
              color: "#3a3a3a",
            }}
          >
            Profile
          </Text>
          <Link href="/profileEdit">
            <FontAwesome6 name="user-pen" size={25} color="#3a3a3a" />
          </Link>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <ProfileImage size={64} position="relative" top={0} left={0} />

          <View>
            <Text
              style={{
                fontFamily: "SFProRounded-medium",
                color: "#2743fd",
                fontSize: 20,
              }}
            >
              Emma Ashley
            </Text>
            <Text
              style={{
                fontFamily: "SFProRounded-light",
                color: "#2743fd",
                fontSize: 16,
              }}
            >
              Online
            </Text>
          </View>
        </View>

        <View style={{ gap: 24 }}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Username</Text>
            <Text style={styles.dataText}>Emma ashley</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>First Name</Text>
            <Text style={styles.dataText}>Emma</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Last Name</Text>
            <Text style={styles.dataText}>Ashley</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Date of Birth</Text>
            <Text style={styles.dataText}>20-12-1990</Text>
          </View>
        </View>

        <Button icon={<Logout />} width="100%" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#dee1ef",
    gap: 16,
    paddingBottom: 8,
  },
  title: {
    fontFamily: "SFProRounded-regular",
    fontSize: 14,
    color: "#3a3a3a",
  },
  dataText: {
    color: "#2743fd",
    fontSize: 14,
    fontFamily: "SFProRounded-regular",
  },
});
