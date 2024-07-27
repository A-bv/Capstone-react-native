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
      {/* <StatusBar backgroundColor="#161622" style="light" /> // to change color of status bar*/}
    </SafeAreaView>
  );
}

/*


*/

/*
<SafeAreaView className="flex-1 items-center justify-center bg-primary-green">
<Text className= "text-3xl font-markazi-medium">Ayoo!</Text>
<StatusBar style="auto" />
<Link href="/home" style={{ color: 'blue' }}>Go to Home</Link>

import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
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
};

export default Welcome;


  */