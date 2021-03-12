import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_800ExtraBold, Inter_400Regular } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { WorkoutsProvider } from './context/workouts.context';
import HomeStack from './routes/HomeStack';
import TabBarStack from './routes/TabBarStack'

export default function App() {

  // Load in fonts
  let [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_400Regular,
  });

  // Show AppLoading if fonts haven't loaded in  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    // <WorkoutsProvider>
    //   <NavigationContainer>
    //     <HomeStack />
    //   </NavigationContainer>
    // </WorkoutsProvider>
    <WorkoutsProvider>
    <NavigationContainer>
      <TabBarStack />
    </NavigationContainer>
  </WorkoutsProvider>
  );
}