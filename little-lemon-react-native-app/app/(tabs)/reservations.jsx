import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Reservations = () => {
  return (
    <SafeAreaView className="bg-primary-green flex-1">
      <View className="h-72 justify-center items-center bg-primary-green">
        <Text className="text-xl text-primary-yellow font-markazi-medium">Little Lemon</Text>
        <Text className="text-xl text-white font-karla-regular">Chicago</Text>
        <View className="mt-4 px-4">
          <Text className="text-md text-white font-karla-regular">• Sunday to Friday:</Text>
          <Text className="text-md text-white font-karla-regular ml-4">8:00 AM - 10:00 PM</Text>
          <Text className="text-md text-white font-karla-regular mt-2">• Saturday:</Text>
          <Text className="text-md text-white font-karla-regular ml-4">8:00 AM - 11:00 PM</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-highlight-lightGray flex-1">
        <View className="p-4 flex-1">
          <Text className="text-card-title font-bold text-highlight-darkGray text-lg">RESERVATIONS</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Reservations;