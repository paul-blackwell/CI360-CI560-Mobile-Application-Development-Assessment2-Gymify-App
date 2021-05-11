import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutsScreen from '../screens/WorkoutsScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import NewExerciseScreen from '../screens/NewExerciseScreen';
import Header from '../components/Header';

import { WorkoutsContext } from '../context/workouts.context';

const Stack = createStackNavigator();

export default function WorkoutStack() {

    const { dispatch } = useContext(WorkoutsContext);

    return (
        <Stack.Navigator >
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
                //initialParams={{ defaultWeekID: "608fd766cb07ef00157c4988" }}
                options={({ route }) => ({ title: route.params.weekTitle })}
            />
            <Stack.Screen
                name="ExerciseScreen"
                component={ExerciseScreen}
                options={({ navigation, route }) => (
                    {
                        title: route.params.exerciseTitle,
                        /**
                         * Because this screen hides the Tab bar when the use navigates to it
                         * we need to add a custom back but the show it again when the user goes
                         * back to the WorkoutScreen
                         */
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch({ type: 'SHOW_TAB_BAR', payload: true })
                                    navigation.navigate('WorkoutStack', {
                                        screen: 'WorkoutScreen',
                                    });
                                }}
                                title="Info"
                                color="#fff"
                            >
                                <Feather style={{ marginLeft: 20 }} name="arrow-left" size={24} color="black" />
                            </TouchableOpacity>
                        ),
                    })}
            />
            <Stack.Screen
                name="NewExerciseScreen"
                component={NewExerciseScreen}
                options={({ navigation, route }) => (
                    {
                        //title: route.params.exerciseTitle,
                        title: 'New exercise',
                        /**
                         * Because this screen hides the Tab bar when the use navigates to it
                         * we need to add a custom back but the show it again when the user goes
                         * back to the WorkoutScreen
                         */
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch({ type: 'SHOW_TAB_BAR', payload: true })
                                    navigation.navigate('WorkoutStack', {
                                        screen: 'WorkoutScreen',
                                    });
                                }}
                                title="Info"
                                color="#fff"
                            >
                                <Feather style={{ marginLeft: 20 }} name="arrow-left" size={24} color="black" />
                            </TouchableOpacity>
                        ),
                    })}
            />
        </Stack.Navigator>
    );
}