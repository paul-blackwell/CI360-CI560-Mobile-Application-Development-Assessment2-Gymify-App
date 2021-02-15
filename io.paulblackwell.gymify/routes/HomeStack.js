import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutListScreen from '../screens/WorkoutListScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="WorkoutListScreen" component={WorkoutListScreen} />
        </Stack.Navigator>
    );
}