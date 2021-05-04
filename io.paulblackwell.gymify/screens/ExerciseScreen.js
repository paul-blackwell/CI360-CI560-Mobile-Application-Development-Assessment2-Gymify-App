import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { standardColors } from '../styles/colors';
import { WorkoutsContext } from '../context/workouts.context';


let colors = standardColors;

export default function ExerciseScreen({ navigation, route }) {


  // Get workouts context with will be an array with all of the workouts
  const { dispatch } = useContext(WorkoutsContext);

  // useEffect(() => {
  //   dispatch({ type: 'SHOW_TAB_BAR', payload: false })
  // })



  // Get workout Id  from the route params
  const { selectedExercise } = route.params;

  /**
 * If the user  was previously on this screen, then navigated
 * to the home screen, then navigates to the WorkoutsScreen.The APP will
 * error with TypeError: undefined is not an object (evaluating 'selectedExercise').
 * This is to do with the stack navigator loading in this screen for a split second and
 * the selectedExercise will be undefined because of this, cursing the error. 
 * A quick fix for now is if this happens just return a black screen and it will 
 * only show for a split second.
 */
  if (selectedExercise === undefined) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
      </SafeAreaView >
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
      <View style={styles.main}>
        <Text >Exercise Screen</Text>
        <Text>{selectedExercise.title}</Text>
      </View>
      <View style={styles.exerciseTabBar}>
        <Text>Start</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.gray[100],
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center'
  },
  exerciseTabBar: {
    position: 'absolute',
    bottom: -5,
    zIndex: 1000
  }
});