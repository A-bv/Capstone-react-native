import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [FontsLoaded, error] = useFonts({
    "MarkaziText-Medium": require("../assets/fonts/MarkaziText-Medium.ttf"),
    "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf")
  })

  useEffect(() => {
    // If a font fails to load, log it and continue rather than crashing the app.
    if(error) console.error('Failed to load fonts:', error);

    if(FontsLoaded || error) SplashScreen.hideAsync();
  }, [FontsLoaded, error])

  if(!FontsLoaded && !error) return null;

  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}} />
        <Stack.Screen name="(auth)" options={{ headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
    </Stack>
    )
}

export default RootLayout