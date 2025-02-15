import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { router } from "expo-router";

import Button from "@/components/Button";

import Camera from "../assets/images/camera.svg";
import LeftArrow from "../assets/images/left-arrow.svg";
import GrayCheck from "../assets/images/grey-checkmark.svg";
import BlueCheck from "../assets/images/blue-checkmark.svg";
import ColorfulDesign from "@/assets/images/colorful-design.svg";

export default function ProfileEdit() {
  const [date, setDate] = useState("");

  const formatDate = (input: string) => {
    const numericValue = input.replace(/\D/g, "");

    let formattedValue = "";
    if (numericValue.length > 0) formattedValue += numericValue.slice(0, 2); // day
    if (numericValue.length > 2)
      formattedValue += "-" + numericValue.slice(2, 4); // month
    if (numericValue.length > 4)
      formattedValue += "-" + numericValue.slice(4, 8); // year

    return formattedValue;
  };

  const handleChange = (input: string) => {
    setDate(formatDate(input));
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
    },
  });
  return (
    <LinearGradient
      colors={["#4960F9", "#1937FE"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.5, 0.9]}
      style={styles.container}
    >
      <ColorfulDesign style={{ position: "absolute", top: 0, right: 0 }} />

      {/* Back button */}
      <Pressable onPress={() => router.back()}>
        <LeftArrow />
      </Pressable>
      {/* ProfileImage */}
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#fff",
          borderRadius: 36,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 18,
          marginHorizontal: "auto",
        }}
      >
        <Camera width={33} height={27} stroke="#3a3a3a" />
      </View>

      <View style={{ gap: 24, marginTop: 60, marginBottom: 174 }}>
        {/* Username */}
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                  placeholder="Your username"
                  style={styles.input}
                  placeholderTextColor="#80E0FF"
                />
              </View>
            </>
          )}
        />
        {errors.username && <Text>Please provide a username.</Text>}

        {/* First Name */}
        <Controller
          name="firstName"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                  placeholder="Your name"
                  style={styles.input}
                  placeholderTextColor="#80E0FF"
                />
              </View>
            </>
          )}
        />
        {errors.firstName && <Text>Please tell us first name.</Text>}

        {/* Last name */}
        <Controller
          name="lastName"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  placeholder="Your last name"
                  style={styles.input}
                  placeholderTextColor="#80E0FF"
                />
              </View>
            </>
          )}
        />
        {errors.lastName && <Text>Please tell us your last name.</Text>}

        {/* Date of birth */}
        <Controller
          name="dateOfBirth"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Date of Birth</Text>
                <TextInput
                  value={date}
                  onChangeText={(text) => handleChange(text)}
                  placeholder="Your birhday (dd-mm-yyyy)"
                  style={styles.input}
                  placeholderTextColor="#80E0FF"
                />
              </View>
            </>
          )}
        />
        {errors.dateOfBirth && <Text>Please tell us your date of birth.</Text>}
      </View>

      <Button
        width="100%"
        text="Complete"
        textColor="#2B47FC"
        textAlign="center"
        variant="plain"
        icon={<BlueCheck />}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 30,
  },
  fieldContainer: {
    width: "100%",
    height: 58,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  label: { color: "#80E0FF", fontFamily: "SFProText-regular", fontSize: 14 },
  input: {
    color: "#fff",
    fontFamily: "SFProText-regular",
    fontSize: 14,
    paddingLeft: 0,
  },
});
