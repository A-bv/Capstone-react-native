import React from 'react';
import { View, Image } from 'react-native';
import { images } from '../constants';

const AboutUsImages = () => {
  const aboutUsImages = [
    images.teamsA,
    images.teamsB,
  ];

  return (
    <View className="relative mt-8">
      <Image source={aboutUsImages[0]} className="w-1/2 h-32 rounded-xl absolute z-10 left-0 top-0" />
      <Image source={aboutUsImages[1]} className="w-1/2 h-32 rounded-xl absolute z-0" style={{ left: '75%', marginLeft: -100, top: 20 }} />
    </View>
  );
};

export default AboutUsImages;
