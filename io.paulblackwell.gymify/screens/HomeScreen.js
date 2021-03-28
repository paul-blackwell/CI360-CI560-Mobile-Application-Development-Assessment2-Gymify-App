import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';


import Loader from '../components/Loader';
import WeeklyWorkoutItem from '../components/WeeklyWorkoutItem';
import { standardColors } from '../styles/colors';

// Just for testing 
import { deleteLocalData, pushToLocalStorage, showLocalDataKeys } from '../requests/accessLocalStorage';


let colors = standardColors;

export default function HomeScreen({ navigation }) {

  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan } = useContext(WorkoutsContext);

  
  /**
   * Save update local storage to the current context, nothing 
   * will change if the current context has already come from local storage
   */
  //dispatch({ type: 'UPDATE_LOCAL_STORAGE', payload: workoutPlan })
  useEffect(() => {
    pushToLocalStorage('workoutPlan', workoutPlan)
  }, [])

  //console.log(workoutPlan)

  // Just for testing
  showLocalDataKeys()
  //deleteLocalData('workoutPlan')


  const renderItem = ({ item }) => (
    <WeeklyWorkoutItem title={item.title} id={item.id} navigation={navigation}/>
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
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.gray[100]
  },
  title: {
    alignItems: 'center',
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Inter_800ExtraBold',
    color: colors.gray[400]
  }
});
