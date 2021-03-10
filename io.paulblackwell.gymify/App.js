import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBarStack from './routes/TabBarStack';
import { WorkoutsProvider } from './context/workouts.context';
import HomeStack from './routes/HomeStack';

export default function App() {

  return (
    <WorkoutsProvider>
      <NavigationContainer>
        {/* <TabBarStack /> */}
        <HomeStack />
      </NavigationContainer>
    </WorkoutsProvider>
  );
}