import { Image, View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
    const iconSize = focused ? 28 : 24; // Increase icon size when focused
    const labelSize = focused ? 14 : 12; // Increase label size when focused

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{ width: iconSize, height: iconSize, tintColor: color }} // Adjust icon size based on focus
        />
      </View>
    );
};

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#F4CE14", // primary yellow
                tabBarInactiveTintColor: "#CDCDE0", // inactive color
                tabBarShowLabel: true, // Disable default labels
                tabBarStyle: {
                    backgroundColor: "#495E57", // primary green
                    borderTopWidth: 1,
                    borderTopColor: "#228B22", // Dark green
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
