import { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import FormField from '../../components/FormField.jsx';
import CustomButton from '../../components/CustomButton.jsx';
import { Ionicons } from '@expo/vector-icons';
import { getUser } from '../../utils/storage';

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const submit = async () => {
    setErrorMessage("");

    if (!form.email || !form.password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      // This demo app has no backend: a local account must exist first.
      const user = await getUser();
      if (user) {
        router.replace('/home');
      } else {
        setErrorMessage("No account found on this device. Please sign up first.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary-green h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center min-h-[80vh] px-4 my-6"
        >
          <TouchableOpacity onPress={() => router.dismissAll()} style={{ position: 'absolute', top: 20, left: 20 }}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <Image
            source={images.logo2}
            resizeMode="contain"
            style={{ width: 165, height: 44 }}
          />
          <Text className="text-[18px] font-semibold text-white mt-4 font-karla-regular">
            {" "}Log in for <Text className="text-primary-yellow"> great daily offers</Text>
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          {errorMessage ? (
            <Text className="text-red-500 text-sm mt-4 text-center">{errorMessage}</Text>
          ) : null}

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-14"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;
