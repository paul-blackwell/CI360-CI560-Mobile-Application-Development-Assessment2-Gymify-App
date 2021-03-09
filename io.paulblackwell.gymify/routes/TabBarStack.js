
import React from 'react';
import { Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WorkoutStack from '../routes/WorkoutStack';
import HomeScreen from '../screens/HomeScreen';
import ActivityScreen from '../screens/ActivityScreen';
import colors from '../styles/colors'
import TabBarIcon from '../components/smallerComponents/TabBarIcon';


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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
             <TabBarIcon icon='home'/>
            )
          }
        }}
      />
      <Tab.Screen
        name="WorkoutStack"
        component={WorkoutStack}
        options={{
          tabBarLabel: 'Workouts',
          tabBarIcon: ({ focused, color, size }) => {
            return (
             <TabBarIcon icon='workouts' />
            )
          }
        }}
      />
      <Tab.Screen 
      name="Activity" 
      component={ActivityScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return (
           <TabBarIcon icon='activity' />
          )
        }
      }} 
      />
    </Tab.Navigator>
  );
}