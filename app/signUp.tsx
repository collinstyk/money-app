import AuthScreen from "@/components/AuthScreen";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import PinkCheck from "../assets/images/pink-checkmark.svg";
import Eye from "../assets/images/eye.svg";
import EyeHidden from "../assets/images/eye-hidden.svg";
import { router } from "expo-router";

export default function Signup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleChange = (
    input: string,
    field: "password" | "passwordConfirm"
  ) => {
    if (field === "password") setPassword(input);
    if (field === "passwordConfirm") setPasswordConfirm(input);
  };

  const onSubmit = (data: any) => {
    console.log("Error", errors);
    if (password !== passwordConfirm) return;
    console.log("Form data", data);
    router.push("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, overflowY: "auto" }}
    >
      <AuthScreen title="Sign up" btnOnPress={handleSubmit(onSubmit)}>
        <View style={styles.fieldsWrapper}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: { value: true, message: "Please enter your email" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <View style={styles.field}>
                  <Text
                    style={[
                      styles.label,
                      { color: errors.email ? "#FD2727" : "" },
                    ]}
                  >
                    Email Address
                  </Text>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      placeholder="Enter your email address"
                      placeholderTextColor="#b9b9b9cc"
                      onChangeText={(text) => {
                        onChange(text);
                      }}
                      onBlur={onBlur}
                      style={styles.input}
                    />
                    {!errors.email && value && <PinkCheck />}
                  </View>
                </View>
                {errors.email && (
                  <Text style={styles.errorMessage}>
                    {errors.email.message?.toString()}
                  </Text>
                )}
              </View>
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              required: { value: true, message: "Password is required" },
              minLength: 8,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <View style={styles.field}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      value={password}
                      placeholder="Enter your password"
                      placeholderTextColor="#b9b9b9cc"
                      style={styles.input}
                      onChangeText={(text) => {
                        handleChange(text, "password");
                        onChange(text);
                      }}
                      onBlur={onBlur}
                      secureTextEntry={!showPassword}
                    />
                    <Pressable
                      style={styles.eyeButton}
                      onPress={() => setShowPassword((state) => !state)}
                    >
                      {!showPassword && <Eye />}
                      {showPassword && <EyeHidden />}
                    </Pressable>
                  </View>
                </View>
                {errors.password?.type === "required" && (
                  <Text style={styles.errorMessage}>
                    {errors.password?.message?.toString()}
                  </Text>
                )}
                {errors.password?.type === "minLength" && (
                  <Text style={styles.errorMessage}>
                    Password must be atleast 8 characters long
                  </Text>
                )}
              </View>
            )}
          />

          <Controller
            control={control}
            name="passwordConfirm"
            rules={{
              required: {
                value: true,
                message: "Please confirm your password",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <View style={styles.field}>
                  <Text style={styles.label}>Confirm Password</Text>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      value={passwordConfirm}
                      placeholder="Re-enter your password"
                      placeholderTextColor="#b9b9b9cc"
                      style={styles.input}
                      onChangeText={(text) => {
                        handleChange(text, "passwordConfirm");
                        onChange(text);
                      }}
                      onBlur={onBlur}
                      secureTextEntry={!showPasswordConfirm}
                    />
                    <Pressable
                      style={styles.eyeButton}
                      onPress={() => setShowPasswordConfirm((state) => !state)}
                    >
                      {!showPasswordConfirm && <Eye />}
                      {showPasswordConfirm && <EyeHidden />}
                    </Pressable>
                  </View>
                </View>
                {errors.passwordConfirm?.type === "required" && (
                  <Text style={styles.errorMessage}>
                    {errors.passwordConfirm?.message?.toString()}
                  </Text>
                )}
                {value && password !== passwordConfirm && (
                  <Text style={styles.errorMessage}>
                    Your input does not match with your password
                  </Text>
                )}
              </View>
            )}
          />
        </View>
      </AuthScreen>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fieldsWrapper: {
    gap: 24,
  },
  field: {
    height: 58,
  },
  label: {
    fontFamily: "SFProText-regular",
    fontSize: 14,
    color: "#3a3a3ab2",
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#2743FD",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  input: {
    paddingLeft: 0,
    minWidth: "90%",
    color: "#3a3a3a",
    fontFamily: "SFProText-regular",
    fontSize: 14,
    height: "auto",
  },
  eyeButton: {
    height: "100%",
    width: "10%",
    justifyContent: "center",
  },
  errorMessage: {
    color: "#FD2727",
    fontFamily: "SFProText",
  },
});
