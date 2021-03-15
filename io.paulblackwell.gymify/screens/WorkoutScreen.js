import React, { useContext } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';
import { standardColors } from '../styles/colors';

let colors = standardColors;

export default function WorkoutScreen({ route, navigation }) {


  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan } = useContext(WorkoutsContext);

  // Get workout Id  from the route params
  const { workoutId } = route.params;

  // Get selected workout based on the workout Id passed in via the route
  let selectedWorkout;
  workoutPlan.post.forEach(week => {
    week.workouts.forEach(workout => {
      if (workout.id === workoutId) {
        selectedWorkout = workout;
      }
    })
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
      
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
  
});