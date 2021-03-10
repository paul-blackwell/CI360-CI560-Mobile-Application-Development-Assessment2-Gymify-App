import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, SafeAreaView } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';
import colors from '../styles/colors'

export default function WorkoutsScreen({ route, navigation }) {


  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan } = useContext(WorkoutsContext);

  /**
   * If the user has come from the HomeScreen get the Workouts 
   * based on id passed in from home screen. However if they have
   * navigated to this screen from the bottom tab menu for the first
   * time and have not previously been on the Home screen, get Workouts 
   * from the context (first week)
   */
  let selectedWeek;
  if (route.params === undefined) {
    selectedWeek = workoutPlan.post[0];
  } else {
    const { weekId } = route.params;
    workoutPlan.post.forEach(week => {
      if (week.id === weekId) {
        selectedWeek = week;
      }
    });
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
      {/* <View style={styles.main}>
        <Text >WorkoutList Screen</Text>
        <Text>{workoutListId.toString()}</Text>
        <Button
          title="Go to Workout"
          onPress={() => navigation.navigate('WorkoutScreen')}
        />
      </View> */}
      <Text>I am the workouts screen</Text>
      <Text>{selectedWeek.id}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center'
  },
});