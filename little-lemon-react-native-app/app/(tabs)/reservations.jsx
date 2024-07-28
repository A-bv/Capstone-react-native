import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import AboutUsImages from '../../components/AboutUsImages';
import { images } from '../../constants';

const Reservations = () => {
  const description = `• Sunday to Friday:
  8:00 AM - 10:00PM

• Saturday:
  8:00 AM - 11:00PM`;

  return (
    <SafeAreaView edges={['top', 'left', 'right']} className="bg-primary-green flex-1">
      <Header
        title="Little Lemon"
        subtitle="Chicago"
        description={description}
        imageSource={images.wallpaper}
      />
      <ScrollView className="bg-highlight-lightGray flex-1 p-4" contentContainerStyle={{ paddingBottom: 250 }}>
        <View>
          <Text className="text-card-title font-bold text-highlight-darkGray text-lg mb-4">ABOUT US</Text>
          <Text className="text-md text-highlight-darkGray font-karla-regular mb-4">
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Our mission is to provide an unforgettable dining experience by combining delicious food, excellent service, and a warm, welcoming atmosphere.
          </Text>
        </View>
        <View>
          <Text className="text-card-title font-bold text-highlight-darkGray text-lg mb-4">CONTACT</Text>
          <Text className="text-md text-highlight-darkGray font-karla-regular mb-2">
            Address: 123 Main Street, Chicago, IL 60601
          </Text>
          <Text className="text-md text-highlight-darkGray font-karla-regular mb-2">
            Phone: (123) 456-7890
          </Text>
          <Text className="text-md text-highlight-darkGray font-karla-regular">
            Email: info@littlelemon.com
          </Text>
          <AboutUsImages />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Reservations;
