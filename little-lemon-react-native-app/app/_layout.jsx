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
    if(error) throw error;

    if(FontsLoaded) SplashScreen.hideAsync();
  }, [FontsLoaded, error])

  if(!FontsLoaded && !error) return null;

  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}} />
        <Stack.Screen name="(auth)" options={{ headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
        {/*<Stack.Screen name="/search/[query]" options={{ headerShown: false}} />*/}
    </Stack>
    )
}

export default RootLayout