
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WorkoutStack from '../routes/WorkoutStack';
import HomeScreen from '../screens/HomeScreen';
import ProgressScreen from '../screens/ProgressScreen';
import colors from '../styles/colors'


const Tab = createBottomTabNavigator();

export default function TabBarStack() {
  return (
    <Tab.Navigator
      tabBarOptions={
        {
          activeTintColor: colors.purple[200],
          inactiveTintColor: colors.gray[300],
          style: {
            paddingBottom: 8,
          },
        }
      }
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="WorkoutStack"
        component={WorkoutStack}
        options={{
          tabBarLabel: 'Workouts'
        }}
      />
      <Tab.Screen name="Progress" component={ProgressScreen} />
    </Tab.Navigator>
  );
}