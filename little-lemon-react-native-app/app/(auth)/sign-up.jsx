import { useState } from "react";
import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React from 'react';
import { Link, router } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import FormField from '../../components/FormField.jsx';
import CustomButton from '../../components/CustomButton.jsx';
import { validateForm } from '../../utils/validation'; // Import the validate function
import { saveUser } from '../../utils/storage'; // Import the saveUser function

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    const validationErrors = validateForm(form); // Use the imported validate function
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Demo purposes: To be removed
    const showAlert = () => {
      Alert.alert(
        "Demo App",
        "A temporary user has been created.",
        [{ text: "OK" }]
      );
    };

    setIsSubmitting(true);
    try {
      showAlert(); // Show alert for demo purpose
      await saveUser(form); // Use the saveUser function from the utils
      router.push('/home');
    } catch (error) {
      console.error('Failed to save data:', error);
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
          <Image
            source={images.logo2}
            resizeMode="contain"
            style={{ width: 165, height: 44 }}
          />
          <Text className="text-[18px] font-semibold text-white mt-4 font-karla-regular">
            {" "}Sign up for <Text className="text-primary-yellow"> great daily offers</Text>
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
            error={errors.username}
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            error={errors.email}
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            error={errors.password}
          />

          <CustomButton
            title="Create account"
            handlePress={submit}
            containerStyles="mt-14"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign in
            </Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUp;
