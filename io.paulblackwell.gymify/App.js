import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBarStack from './routes/TabBarStack';

export default function App() {
  return (
    <NavigationContainer>
      <TabBarStack />
    </NavigationContainer>
  );
}