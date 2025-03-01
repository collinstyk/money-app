import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import AuthScreen from "@/components/AuthScreen";
import { Controller, useForm } from "react-hook-form";
import { Link } from "expo-router";

import PinkCheck from "../assets/images/pink-checkmark.svg";
import Eye from "../assets/images/eye.svg";
import EyeHidden from "../assets/images/eye-hidden.svg";

export default function Signin() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => console.log(data);

  useEffect(() => console.log(errors), [errors]);

  return (
    <View style={{ flex: 1 }}>
      <AuthScreen title="Sign in" btnOnPress={handleSubmit(onSubmit)}>
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
                      onChangeText={onChange}
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
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain atleast an uppercase, a lowercase, a number, and a special character",
              },
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
                        setPassword(text);
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
                {errors.password?.type === "pattern" && (
                  <Text style={styles.errorMessage}>
                    {errors.password?.message?.toString()}
                  </Text>
                )}
              </View>
            )}
          />

          <Link href="/" style={styles.forgotPassword}>
            Forgot Password?
          </Link>
        </View>
      </AuthScreen>
    </View>
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
  },
  eyeButton: {
    height: "100%",
    width: "10%",
    justifyContent: "center",
  },
  forgotPassword: {
    fontFamily: "SFProText-regular",
    fontSize: 16,
    color: "#2b47fc",
  },
  errorMessage: {
    color: "#FD2727",
    fontFamily: "SFProText",
  },
});
