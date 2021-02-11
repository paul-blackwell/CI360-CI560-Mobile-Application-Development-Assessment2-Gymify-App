import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from './routes/TabBar';

export default function App() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}