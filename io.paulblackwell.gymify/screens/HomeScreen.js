import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { WorkoutsContext } from '../context/workouts.context';


import Loader from '../components/Loader';
import WeeklyWorkoutItem from '../components/WeeklyWorkoutItem';
import colors from '../styles/colors'


export default function HomeScreen({ navigation }) {

  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan } = useContext(WorkoutsContext);

  /**
   * Check if WorkoutPlan has been saved locally if it hasn't save it locally.
   * This needs to be done as we can't save this data locally in the API request made in
   * the workouts content, so we have to do it here. The API request in the workouts content
   * will only run one time as its only ever made when the app is loaded for the first time, 
   * so this code will only run one time.
   */

  /* ------------------------------------------------------------------------------------------- */

  const [workoutPlanIsSavedLocally, setWorkoutPlanIsSavedLocally] = useState(null)
  const fetchFromLocalStorage = async () => {
    console.log('I was fired')
    try {
      const value = await AsyncStorage.getItem('workoutPlan');
      if (value === null) {
        console.log('value was null')
        setWorkoutPlanIsSavedLocally(false)
      } else if (value !== null) {
        console.log('Data has been saved')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const pushToLocalStorage = async () => {
    try {
      console.log('I was fired as well')
      await AsyncStorage.setItem('workoutPlan', JSON.stringify(workoutPlan));
      setWorkoutPlanIsSavedLocally(true)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(workoutPlanIsSavedLocally === null) {
      fetchFromLocalStorage();
    } else if (workoutPlanIsSavedLocally === false) {
      pushToLocalStorage();
    }
  }, [workoutPlanIsSavedLocally])

  /* ------------------------------------------------------------------------------------------- */
  

  const renderItem = ({ item }) => (
    <WeeklyWorkoutItem title={item.title} id={item.id} navigation={navigation} />
  );


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
      <View style={styles.title}>
        <Text style={styles.titleText}>Home</Text>
      </View>
      {!workoutPlan.loading ?
        <FlatList
          data={workoutPlan.post}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> :
        <Loader loading={workoutPlan.loading} />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16
  },
  title: {
    alignItems: 'center',
    marginBottom: 16
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Inter_800ExtraBold'
  }
});
