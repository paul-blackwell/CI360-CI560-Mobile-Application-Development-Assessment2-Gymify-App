import React from 'react';
import { Text, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutsScreen from '../screens/WorkoutsScreen';
import HomeScreen from '../screens/HomeScreen';
import WorkoutStack from '../routes/WorkoutStack';
import TabBarStack from '../routes/TabBarStack';
import Header from  '../components/Header';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen name="WorkoutStack" component={WorkoutStack} /> */}
            <Stack.Screen
                name="HomeStack"
                component={TabBarStack}
                // options={{
                //     headerTitle: props => <Header {...props} />,
                // }}
                options={({ navigation, route }) => ({
                    headerTitle: props => <Header navigation={navigation} />,
                })}
            />
        </Stack.Navigator>
    );
}