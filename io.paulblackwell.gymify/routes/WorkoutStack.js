import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutsScreen from '../screens/WorkoutsScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import NewExerciseScreen from '../screens/NewExerciseScreen';
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function WorkoutStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="WorkoutsScreen"
                component={WorkoutsScreen}
                // options={{
                //     headerShown: false
                // }}
                options={({ navigation, route }) => ({
                    headerTitle: props => <Header navigation={navigation} />,
                })}
            />
            <Stack.Screen 
            name="WorkoutScreen" 
            component={WorkoutScreen}
            options={{ title: '' }}
             />
            <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
            <Stack.Screen name="NewExerciseScreen" component={NewExerciseScreen} />
        </Stack.Navigator>
    );
}