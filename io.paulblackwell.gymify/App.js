import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Inter_800ExtraBold, Inter_400Regular } from '@expo-google-fonts/inter';
import { WorkoutsProvider } from './context/workouts.context';
import HomeStack from './routes/HomeStack';

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
    <WorkoutsProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </WorkoutsProvider>
  );
}