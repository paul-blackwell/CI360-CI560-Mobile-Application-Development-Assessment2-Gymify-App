import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Button } from 'react-native';
import { standardColors } from '../styles/colors';
import { WorkoutsContext } from '../context/workouts.context';
import ExerciseBtnPrimary from '../components/smallerComponents/ExerciseBtnPrimary';
import ImageCarousel from '../components/ImageCarousel';
import Timer from '../components/Timer';


let colors = standardColors;

export default function ExerciseScreen({ navigation, route }) {


  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan, dispatch } = useContext(WorkoutsContext);



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

  //console.log(selectedExercise.time.toString())

  const getSeconds = (time) => {
    // Get the seconds after the de
    let seconds;
    seconds = time.toFixed(2);
    seconds = seconds.toString().substring(seconds.indexOf(".") + 1); // Get rid of everything before decimal point;
    seconds = parseInt(seconds)
    console.log(seconds);
  }

  getSeconds(0.30)


  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
        <View style={styles.main}>
          <ImageCarousel images={selectedExercise.images} />
          <Timer minutes={1} seconds={30} />
        </View>
      </SafeAreaView>
      <View style={styles.exerciseTabBar}>
        <ExerciseBtnPrimary title='Start' onPress={() => console.log('i was clicked')} />
      </View>
    </>
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
    // flex: 1,
    // justifyContent: 'center',
    // margin: 10,
    // alignItems: 'center'
  },
  exerciseTabBar: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    backgroundColor: colors.white[100],
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    zIndex: 1000
  }
});