import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';


export default function WorkoutsScreen({ route, navigation }) {

  const [workoutsState, setWorkoutsState] = useState([]);

  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan } = useContext(WorkoutsContext);

  /**
   * If the user has come from the HomeScreen get the Workouts 
   * based on id passed in from home screen. However if they have
   * navigated to this screen from the bottom tab menu for the first
   * time and have not previously been on the Home screen, get Workouts 
   * from the context (first week)
   */
  let week;
  if (route.params === undefined) {
    week = workoutPlan.post[0];
  } else {
    const { weekId } = route.params;
    console.log(weekId)
    // workoutPlan.post.forEach(week => {
    //   if (week.id === weekId) {
    //     console.log(week)
    //   }
    // });
  }




  return (
    <View style={styles.container}>
      {/* <View style={styles.main}>
        <Text >WorkoutList Screen</Text>
        <Text>{workoutListId.toString()}</Text>
        <Button
          title="Go to Workout"
          onPress={() => navigation.navigate('WorkoutScreen')}
        />
      </View> */}
      <Text>I am the workouts screen</Text>
    </View>
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