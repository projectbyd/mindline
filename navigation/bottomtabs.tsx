import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import InsightScreen from '../screens/InsightScreen';

import { COLORS } from '../constants/colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarStyle: {
            height: 70,
            backgroundColor: COLORS.softYellow,
            borderTopWidth: 0,
            borderRadius: 20,
          },

          tabBarIcon: ({ focused }) => {
            let iconName: any = 'home';

            if (route.name === 'Search') {
              iconName = focused
                ? 'search'
                : 'search-outline';
            }

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            }

            if (route.name === 'Insights') {
              iconName = focused
                ? 'sparkles'
                : 'sparkles-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={24}
                color={COLORS.darkBrown}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Search"
          component={SearchScreen}
        />

        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />

        <Tab.Screen
          name="Insights"
          component={InsightScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}