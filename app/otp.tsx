import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";

import Button from "@/components/Button";

import OTPImage from "../assets/images/OTP-1.svg";

export default function OTPComponent() {
  const [stage, setStage] = useState<"phone-number-input" | "otp-verification">(
    "phone-number-input"
  );
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputsRef = useRef<(TextInput | null)[]>([]);
  const [activeInputs, setActiveInputs] = useState(0);

  const handlePhoneNumberInput = (input: string) => {
    const newInput = input.replace(/\D/g, "");

    setPhoneNumber(newInput);
  };

  const handleTextChange = (text: string, index: number) => {
    const newOtp = [...otp];
    if (otp.at(index)?.length === 1 && text !== "") return;
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeypress = (key: string, index: number) => {
    if (key !== "Backspace") return;

    if (otp[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <OTPImage />

        <View style={{ alignItems: "center", marginTop: 60, gap: 24 }}>
          <Text style={styles.text}>OTP Verification</Text>

          {stage === "otp-verification" && (
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Montserrat-regular",
                  fontSize: 16,
                  color: "#3a3a3a",
                }}
              >
                Enter the OTP sent to
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Montserrat-bold",
                  fontSize: 16,
                  color: "#3a3a3a",
                }}
              >
                {phoneNumber}
              </Text>
            </View>
          )}
          {stage === "phone-number-input" && (
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Montserrat-regular",
                fontSize: 16,
                color: "#3a3a3a",
              }}
            >
              We will send you a one-time password to this mobile number
            </Text>
          )}
        </View>

        {/* Phone number Input */}
        {stage === "phone-number-input" && (
          <View style={{ alignItems: "center", marginTop: 34 }}>
            <Text
              style={{
                fontFamily: "SFProText-regular",
                fontSize: 14,
                color: "#b9b9b9",
              }}
            >
              Enter Mobile Number
            </Text>
            <TextInput
              value={phoneNumber}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#2743FD",
                width: 233,
                fontFamily: "SFProText-bold",
                fontSize: 18,
                color: "#3a3a3a",
                paddingHorizontal: 26,
              }}
              onChangeText={(text) => {
                handlePhoneNumberInput(text);
              }}
            />
          </View>
        )}

        {/* OTP input */}
        {stage === "otp-verification" && (
          <View style={{ marginTop: 58, alignItems: "center" }}>
            <View style={styles.inputsContainer}>
              {otp.map((value, index) => (
                <TextInput
                  style={[
                    styles.otpInput,
                    {
                      borderBottomColor:
                        index < activeInputs + 1 ? "#2743fd" : "#b9b9b9",
                    },
                  ]}
                  key={index}
                  value={value}
                  ref={(ref) => (inputsRef.current[index] = ref)}
                  onChangeText={(text) => handleTextChange(text, index)}
                  onKeyPress={(e) => handleKeypress(e.nativeEvent.key, index)}
                  keyboardType="numeric"
                  onFocus={() => setActiveInputs(index)}
                  onBlur={() => setActiveInputs((value) => value - 1)}
                />
              ))}
            </View>

            <Text
              style={{
                color: "#B9B9B9",
                fontSize: 14,
                fontFamily: "SFProText-regular",
              }}
            >
              Didn't recieve the OTP?{" "}
              <Text
                style={{ color: "#2743FD" }}
                onPress={() => console.log("Resend OTP")}
              >
                Resend OTP
              </Text>
            </Text>
          </View>
        )}
      </View>

      {/* GET OTP button */}
      {stage === "phone-number-input" && (
        <Button
          text="Get OTP"
          width="100%"
          variant="secondary"
          textColor="#fff"
          textAlign="center"
          onPress={() => setStage("otp-verification")}
          disabled={phoneNumber.length < 9}
        />
      )}

      {/* Verify OTP button */}
      {stage === "otp-verification" && (
        <Button
          text="Verify"
          width="100%"
          variant="secondary"
          textColor="#fff"
          textAlign="center"
          disabled={otp[otp.length - 1] === ""}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    paddingTop: 56,
    paddingBottom: 64,
  },
  container: {
    alignItems: "center",
  },
  text: {
    fontFamily: "Montserrat-bold",
    fontSize: 24,
    color: "#3a3a3a",
  },
  inputsContainer: { flexDirection: "row", gap: 24, marginBottom: 40 },
  otpInput: {
    borderBottomWidth: 1,
    width: 48,
    fontFamily: "SFProText-bold",
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
});
