import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import ActivityScreen from '../screens/ActivityScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ActivityScreen"
                component={ActivityScreen}
                options={({ navigation, route }) => ({
                    headerTitle: props => <Header navigation={navigation} />,
                })}
            />
        </Stack.Navigator>
    );
}