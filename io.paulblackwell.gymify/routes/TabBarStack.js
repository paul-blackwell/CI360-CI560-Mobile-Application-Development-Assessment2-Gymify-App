
import React, {useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WorkoutStack from '../routes/WorkoutStack';
import HomeStack from '../routes/HomeStack'; 
import SettingsStack from '../routes/SettingsStack';


import {standardColors} from '../styles/colors';
import TabBarIcon from '../components/smallerComponents/TabBarIcon';


import { WorkoutsContext } from '../context/workouts.context';

let colors = standardColors;

const Tab = createBottomTabNavigator();


export default function TabBarStack() {

  const { workoutPlan } = useContext(WorkoutsContext);

  return (
    <Tab.Navigator
      tabBarOptions={
        {
          activeTintColor: colors.purple[200],
          inactiveTintColor: colors.gray[400],
          style: {
            paddingTop: 8,
            paddingBottom: 8,
            justifyContent: 'center',
            height: 64
          },
        }
      }
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabBarIcon icon='home' color={color} />
            )
          }
        }}
      />
      <Tab.Screen
        name="WorkoutStack"
        component={WorkoutStack}
        options={{
          tabBarVisible: workoutPlan.showTabBar,
          tabBarLabel: 'Workouts',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabBarIcon icon='workouts' color={color} />
            )
          }
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabBarIcon icon='settings' color={color} />
            )
          }
        }}
      />
    </Tab.Navigator>
  );
}