import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";

const meals = [
  {
    name: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago...",
    price: "$12.99",
    image: images.cards, // Using imported image
  },
  {
    name: "Bruschetta",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic...",
    price: "$7.99",
    image: images.thumbnail, // Using imported image
  },
  {
    name: "Grilled Fish",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    price: "$15.99",
    image: images.profile, // Using imported image
  },
  // Add more meal objects as needed
];

const Home = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} className="bg-primary-green flex-1">
      <View className="h-60 flex-row justify-between items-center bg-primary-green px-4">
        <View className="flex-1">
          <Text className="text-3xl text-primary-yellow font-markazi-medium">Little Lemon</Text>
          <Text className="text-xl text-white font-karla-regular">Chicago</Text>
          <Text className="text-md text-white font-karla-regular mt-2">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </Text>
        </View>
        <Image source={images.cards} className="w-20 h-20 rounded-xl ml-4" />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-highlight-lightGray flex-1">
        <View className="p-4 flex-1">
          <Text className="text-card-title font-bold text-highlight-darkGray text-lg">ORDER FOR DELIVERY!</Text>
          <View className="flex-row flex-wrap gap-2 mb-6 mt-2">
            {['Lunch', 'Mains', 'Desserts', 'Specials'].map((category, index) => (
              <View key={index} className="bg-secondary-pale py-1 px-3 rounded-xl">
              <Text className="text-highlight-darkGray text-lg">
                {category}
              </Text>
            </View>
            ))}
          </View>

          {meals.map((meal, index) => (
            <View key={index} className="flex-row justify-between items-center mb-4">
              <View className="flex-1 pr-4">
                <Text className="text-card-title font-bold text-highlight-darkGray text-lg">{meal.name}</Text>
                <Text className="text-paragraph text-highlight-darkGray text-lg font-karla-regular">{meal.description}</Text>
                <Text className="text-highlight font-bold mt-1 text-lg">{meal.price}</Text>
              </View>
              <Image source={meal.image} className="w-20 h-20 rounded-xl" />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
