import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { images } from '../../constants';

const Profile = () => {
  const userInfo = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} className="bg-primary-green flex-1">
      <Header
        title="Profile"
        subtitle="User Details"
        description=""
        imageSource={images.table}
      />
      <ScrollView className="bg-highlight-lightGray p-4">
        <View className="items-center mb-6">
          <Image
            source={images.profile}
            className="w-32 h-32 rounded-full mb-4 bg-gray-300"
          />
          <Text className="text-2xl font-bold text-primary-darkGray">{userInfo.username}</Text>
          <Text className="text-base text-primary-darkGray">{userInfo.email}</Text>
        </View>
        <View className="mt-6">
          <Text className="text-lg font-bold text-primary-darkGray mb-2">ABOUT ME</Text>
          <Text className="text-base text-primary-darkGray">
            I am passionate about Mediterranean cuisine and love exploring new recipes. In my free time, I enjoy traveling and photography.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
