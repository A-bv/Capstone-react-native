import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { icons, images } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize router hook

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userJson = await AsyncStorage.getItem('user');
        if (userJson) {
          setUserInfo(JSON.parse(userJson));
        }
      } catch (error) {
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      router.dismissAll();
    } catch (error) {
      setError('Failed to logout');
    }
  };

  if (loading) {
    return (
      <SafeAreaView edges={['top', 'left', 'right']} className="bg-primary-green flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView edges={['top', 'left', 'right']} className="bg-primary-green flex-1 items-center justify-center">
        <Text className="text-white">{error}</Text>
      </SafeAreaView>
    );
  }

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
          <Text className="text-2xl font-bold text-primary-darkGray">{userInfo?.username}</Text>
          <Text className="text-base text-primary-darkGray">{userInfo?.email}</Text>
        </View>
        <View className="mt-6">
          <Text className="text-lg font-bold text-primary-darkGray mb-2">ABOUT ME</Text>
          <Text className="text-base text-primary-darkGray">
            I am passionate about Mediterranean cuisine and love exploring new recipes. In my free time, I enjoy traveling and photography.
          </Text>
        </View>
        <View className="items-center mt-6">
          <TouchableOpacity onPress={handleLogout}>
            <Image
              source={icons.logout} // Ensure this path is correct
              className="w-8 h-8"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
