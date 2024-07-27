import { Image, View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
    const iconSize = focused ? 26 : 24; // Increase icon size when focused

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{ width: iconSize, height: iconSize, tintColor: color }}
        />
      </View>
    );
};

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#F4CE14",
                tabBarInactiveTintColor: "#CDCDE0",
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: "#495E57",
                    borderTopWidth: 3,
                    borderTopColor: "#495E57",
                    height: 84,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="reservations"
                options={{
                    title: "Bookings",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={color}
                            name="Bookings"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
