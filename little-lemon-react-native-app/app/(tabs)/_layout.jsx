import { Image, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{ width: 24, height: 24, tintColor: color }} // Adjusted width and height for consistency
        />
      </View>
    );
};

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#F4CE14", // primary yellow
                tabBarInactiveTintColor: "#CDCDE0",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#495E57", // primary green
                    borderTopWidth: 1,
                    borderTopColor: "#228B22", // You may want to use a matching color here
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
                    title: "Reservations",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={color}
                            name="Reservations"
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
