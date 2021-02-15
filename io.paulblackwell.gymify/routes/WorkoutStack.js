import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutListScreen from '../screens/WorkoutListScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import NewExerciseScreen from '../screens/NewExerciseScreen';


const Stack = createStackNavigator();

export default function TabBar() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WorkoutListScreen" component={WorkoutListScreen} />
            <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
            <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
            <Stack.Screen name="NewExerciseScreen" component={NewExerciseScreen} />
        </Stack.Navigator>
    );
}