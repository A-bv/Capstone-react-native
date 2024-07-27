import { useState } from "react";
import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import FormField from '../../components/FormField.jsx'; // Ensure this component exists and is correctly exported

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary-green h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{}} //add style
        >
          <Image
            source={images.logo2}
            resizeMode="contain"
            style={{ width: 165, height: 44 }}
          />
          <Text className="text-[18px] font-semibold text-white mt-4 font-karla-regular">
            {" "}Log in for <Text className = "text-primary-yellow"> great daily offers</Text>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;
