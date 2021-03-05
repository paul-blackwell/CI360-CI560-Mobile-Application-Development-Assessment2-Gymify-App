import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function WorkoutsScreen({ route, navigation }) {

  // Get WorkoutList based on id passed in from home screen
  const { workouts } = route.params;

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