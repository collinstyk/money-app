import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Montserrat-extralight": require("@/assets/fonts/montserrat/Montserrat-ExtraLight.ttf"),
    "Montserrat-extralight-italic": require("@/assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf"),
    "Montserrat-light": require("@/assets/fonts/montserrat/Montserrat-Light.ttf"),
    "Montserrat-light-italic": require("@/assets/fonts/montserrat/Montserrat-LightItalic.ttf"),
    "Montserrat-thin": require("@/assets/fonts/montserrat/Montserrat-Thin.ttf"),
    "Montserrat-thin-itaic": require("@/assets/fonts/montserrat/Montserrat-ThinItalic.ttf"),
    "Montserrat-regular": require("@/assets/fonts/montserrat/Montserrat-Regular.ttf"),
    "Montserrat-italic": require("@/assets/fonts/montserrat/Montserrat-Italic.ttf"),
    "Montserrat-medium": require("@/assets/fonts/montserrat/Montserrat-Medium.ttf"),
    "Montserrat-medium-italic": require("@/assets/fonts/montserrat/Montserrat-MediumItalic.ttf"),
    "Montserrat-semibold": require("@/assets/fonts/montserrat/Montserrat-SemiBold.ttf"),
    "Montserrat-semibold-italic": require("@/assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf"),
    "Montserrat-bold": require("@/assets/fonts/montserrat/Montserrat-Bold.ttf"),
    "Montserrat-bold-italic": require("@/assets/fonts/montserrat/Montserrat-BoldItalic.ttf"),
    "Montserrat-extrabold": require("@/assets/fonts/montserrat/Montserrat-ExtraBold.ttf"),
    "Montserrat-extrabold-italic": require("@/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf"),
    "Montserrat-black": require("@/assets/fonts/montserrat/Montserrat-Black.ttf"),
    "Montserrat-black-italic": require("@/assets/fonts/montserrat/Montserrat-BlackItalic.ttf"),

    "SFProRounded-ultralight": require("@/assets/fonts/sf-pro-rounded/SF-Pro-Rounded-Ultralight.otf"),
    "SFProRounded-light": require("@/assets/fonts/sf-pro-rounded/SF-Pro-Rounded-Light.otf"),
    "SFProRounded-thin": require("@/assets/fonts/sf-pro-rounded/SF-Pro-Rounded-Thin.otf"),
    "SFProRounded-regular": require("@/assets/fonts/sf-pro-rounded/SF-Pro-Rounded-Regular.otf"),
    "SFProRounded-medium": require("@/assets/fonts/sf-pro-rounded/SF-Pro-Rounded-Medium.otf"),
    "SFProRounded-semibold": require("@/assets/fonts/sf-pro-rounded/SF-Pro-Rounded-Semibold.otf"),
    "SFProRoundedd-bold": require("@/assets/fonts/sf-pro-rounded/SF-Pro-Rounded-Bold.otf"),
    "SFProRounded-black": require("@/assets/fonts/sf-pro-rounded/SF-Pro-Rounded-Black.otf"),
    "SFProRounded-heavy": require("@/assets/fonts/sf-pro-rounded/SF-Pro-Rounded-Heavy.otf"),

    "SFProText-light": require("@/assets/fonts/sf-pro-text/SFProText-Light.ttf"),
    "SFProText-light-itallic": require("@/assets/fonts/sf-pro-text/SFProText-LightItalic.ttf"),
    "SFProText-regular": require("@/assets/fonts/sf-pro-text/SFProText-Regular.ttf"),
    "SFProText-regular-itallic": require("@/assets/fonts/sf-pro-text/SFProText-RegularItalic.ttf"),
    "SFProText-medium": require("@/assets/fonts/sf-pro-text/SFProText-Medium.ttf"),
    "SFProText-medium-itallic": require("@/assets/fonts/sf-pro-text/SFProText-MediumItalic.ttf"),
    "SFProText-semibold": require("@/assets/fonts/sf-pro-text/SFProText-Semibold.ttf"),
    "SFProText-semibold-itallic": require("@/assets/fonts/sf-pro-text/SFProText-SemiboldItalic.ttf"),
    "SFProText-bold": require("@/assets/fonts/sf-pro-text/SFProText-Bold.ttf"),
    "SFProText-bold-itallic": require("@/assets/fonts/sf-pro-text/SFProText-BoldItalic.ttf"),
    "SFProText-heavy": require("@/assets/fonts/sf-pro-text/SFProText-Heavy.ttf"),
    "SFProText-heavy-itallic": require("@/assets/fonts/sf-pro-text/SFProText-HeavyItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="profileEdit" options={{ headerShown: false }} />
    </Stack>
  );
}
