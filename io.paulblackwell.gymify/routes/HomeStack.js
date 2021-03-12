import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarStack from '../routes/TabBarStack';
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeStack"
                component={TabBarStack}
                options={({ navigation, route }) => ({
                    headerTitle: props => <Header navigation={navigation} />,
                })}
            />
        </Stack.Navigator>
    );
}