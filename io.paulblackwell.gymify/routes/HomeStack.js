import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutsScreen from '../screens/WorkoutsScreen';
import HomeScreen from '../screens/HomeScreen';
import WorkoutStack from '../routes/WorkoutStack'

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="WorkoutStack" component={WorkoutStack} />
        </Stack.Navigator>
    );
}