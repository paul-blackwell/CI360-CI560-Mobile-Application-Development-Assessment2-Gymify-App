
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import HomeStack from '../routes/HomeStack';
import WorkoutStack from '../routes/WorkoutStack';
import HomeScreen from '../screens/HomeScreen';
import ProgressScreen from '../screens/ProgressScreen';


const Tab = createBottomTabNavigator();

export default function TabBarStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workouts" component={WorkoutStack} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
    </Tab.Navigator>
  );
}