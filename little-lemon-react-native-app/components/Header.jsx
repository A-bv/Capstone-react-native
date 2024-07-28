import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = ({ title, subtitle, description, imageSource, headerHeight = 'h-60', paddingX = 'px-4' }) => {
  return (
    <View className={`${headerHeight} flex-row justify-between bg-primary-green ${paddingX} pt-8`}>
      <View className="flex-1 justify-start" style={{ maxWidth: '60%' }}>
        <Text className="text-3xl text-primary-yellow font-markazi-medium">{title}</Text>
        <Text className="text-xl text-white font-karla-regular">{subtitle}</Text>
        {description && (
          <Text className="text-md text-white font-karla-regular mt-2">{description}</Text>
        )}
      </View>
      <View className="justify-start mt-2">
        <Image source={imageSource} className="w-40 h-40 rounded-xl ml-4" />
      </View>
    </View>
  );
};

export default Header;