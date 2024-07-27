import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, Image, View } from 'react-native';
import { Redirect, router } from 'expo-router'; // Navigation
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants";

import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary-green h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.cards}
            className="w-[300px] h-[300px]"
            resizeMode="contain"
          />

          <Text className="text-3xl text-white font-bold text-center font-markazi-medium">
            Welcome to Little Lemon!{"\n"}
            Fresh &{" "}
            <Text className="text-secondary-200 text-primary-yellow">Delicious</Text>
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}


/*
<SafeAreaView className="flex-1 items-center justify-center bg-primary-green">
<Text className= "text-3xl font-markazi-medium">Ayoo!</Text>
<StatusBar style="auto" />
<Link href="/home" style={{ color: 'blue' }}>Go to Home</Link>
 */