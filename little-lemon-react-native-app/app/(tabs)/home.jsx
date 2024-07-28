import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { images } from '../../constants';

const meals = [
  {
    name: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago...",
    price: "$12.99",
    image: images.greek,
  },
  {
    name: "Skewers",
    description: "Our Skewers is made from grilled meat that has been smeared with garlic...",
    price: "$7.99",
    image: images.brochette,
  },
  {
    name: "Traditional Pita",
    description: "Enjoy our delicious pita bread, a classic Middle Eastern favorite. Soft...",
    price: "$15.99",
    image: images.pita,
  },
  {
    name: "Hummous",
    description: "Creamy chickpea dip with tahini, olive oil, and a hint of garlic, serv...",
    price: "$15.99",
    image: images.hummus,
  },
  {
    name: "Specialty Dessert",
    description: "Light lemon cake with a zesty glaze and whipped cream, served with a bit of...",
    price: "$6.99",
    image: images.dessert,
  },
];

const Home = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} className="bg-primary-green flex-1">
      <Header
        title="Little Lemon"
        subtitle="Chicago"
        description="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
        imageSource={images.restaurantFood}
      />

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
};

export default Home;
