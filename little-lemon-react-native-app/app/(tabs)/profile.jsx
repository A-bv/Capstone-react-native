import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { icons, images } from '../../constants';
import { getUser, removeUser } from '../../utils/storage'; // Import from utils/storage
import { useRouter } from 'expo-router';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await getUser(); // Use getUser from utils/storage
        setUserInfo(user);
      } catch (error) {
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  // Demo purposes: To be removed
  const showAlert = () => {
    Alert.alert(
      "Demo App",
      "Your temporary user will be deleted.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => handleLogoutConfirmed()
        }
      ]
    );
  };

  const handleLogoutConfirmed = async () => {
    try {
      await removeUser(); // Use removeUser from utils/storage
      if (router.canDismiss()) {
        router.dismissAll();
      } else {
        // Temporary solution
        Alert.alert('Cannot logout this time', 'Please restart the app to logout.');
      }
    } catch (error) {
      setError('Failed to logout');
    }
  };

  const handleLogout = () => {
    if (userInfo) {
      showAlert(); // Show alert for demo app purpose
    } else {
      handleLogoutConfirmed();
    }
  };

  if (loading) {
    return (
      <SafeAreaView className="bg-primary-green flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="bg-primary-green flex-1 items-center justify-center">
        <Text className="text-white">{error}</Text>
      </SafeAreaView>
    );
  }

  const username = userInfo?.username || 'Guest User';
  const email = userInfo?.email || '';
  const aboutMeText = userInfo
    ? 'I am passionate about Mediterranean cuisine and love exploring new recipes. In my free time, I enjoy traveling and photography.'
    : 'Welcome, Guest User! Please log in to see your profile information and personalized content.';
  const logoutButtonText = userInfo ? "Logout" : "Create account"

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
          <Image source={images.profile} className="w-32 h-32 rounded-full mb-4 bg-gray-300" />
          <Text className="text-2xl font-bold text-highlight-darkGray">{username}</Text>
          <Text className="text-base text-highlight-darkGray">{email}</Text>
        </View>
        <View className="mt-6">
          <Text className="text-lg font-bold text-highlight-darkGray mb-2">ABOUT ME</Text>
          <Text className="text-base text-highlight-darkGray">{aboutMeText}</Text>
        </View>
        <View className="items-center mt-6">
          <TouchableOpacity onPress={handleLogout} className="flex-row items-center">
            <Image source={icons.logout} className="w-8 h-8 mr-2" />
            <Text className="text-base text-highlight-darkGray">{logoutButtonText}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
