import React from 'react';
import { View, Image } from 'react-native';
import { images } from '../constants';

const AboutUsImages = () => {
  const aboutUsImages = [images.teamsA, images.teamsB];

  return (
    <View className="flex-row gap-3 mt-8">
      {aboutUsImages.map((image, index) => (
        <Image key={index} source={image} className="flex-1 h-32 rounded-xl" />
      ))}
    </View>
  );
};

export default AboutUsImages;
