import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

export default function SettingsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={({ navigation, route }) => ({
                    headerTitle: props => <Header navigation={navigation} />,
                })}
            />
        </Stack.Navigator>
    );
}