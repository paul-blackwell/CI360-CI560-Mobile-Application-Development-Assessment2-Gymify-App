import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { standardColors } from '../styles/colors';
import { WorkoutsContext } from '../context/workouts.context';
import ExerciseBtnPrimary from '../components/smallerComponents/ExerciseBtnPrimary';
import ImageCarousel from '../components/ImageCarousel';
import Timer from '../components/Timer';
import ExerciseIcon from '../components/smallerComponents/ExerciseIcon';


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





  /**
     * This will send a request to the API to
     * update the exercise to be completed 
     */
  const handelComplete = () => {
    console.log('handelComplete')
    // TODO: handle API request
  }



  /**
   * If the exercise is time render the screen with a timer and
   * the state needed to make it work
   */
  if (selectedExercise.time > 0) {

    /**
   * This will handle the timer state (weather to stop or start) 
   */
    const [toggleStartTimer, setToggleStartTimer] = useState(false);
    const [timerStopped, setTimerStopped] = useState(null);
    const handelStartTimer = () => {
      setToggleStartTimer(toggleStartTimer => !toggleStartTimer)
    }
    useEffect(() => {
      if (timerStopped) {
        setToggleStartTimer(false);
      }
    }, [timerStopped])


    return (
      <>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
          <ScrollView style={styles.main}>
            <ImageCarousel images={selectedExercise.images} />
            <Timer
              time={selectedExercise.time}
              toggleStartTimer={toggleStartTimer}
              setToggleStartTimer={setToggleStartTimer}
              setTimerStopped={setTimerStopped} />
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>{selectedExercise.description}</Text>
          </ScrollView>
        </SafeAreaView>
        <View style={styles.exerciseTabBar}>
          {!toggleStartTimer && !timerStopped &&
            <ExerciseBtnPrimary title='Start' onPress={handelStartTimer} />
          }
          {toggleStartTimer && !timerStopped &&
            <ExerciseBtnPrimary title='Pause' onPress={handelStartTimer} />
          }
          {timerStopped &&
            <ExerciseBtnPrimary title='Complete' onPress={handelComplete} />
          }

        </View>
      </>
    );
  }

  console.log()

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
        <ScrollView style={styles.main}>
          <ImageCarousel images={selectedExercise.images} />
          <Text style={styles.recordText}>
            Your record: 
            <Text styles={styles.recordTextBold}> {selectedExercise.maxWeight}kg</Text>
          </Text>
          <View style={styles.info}>
              <ExerciseIcon />
          </View>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{selectedExercise.description}</Text>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.exerciseTabBar}>
        <ExerciseBtnPrimary title='Complete' onPress={handelComplete} />
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
    // paddingBottom: 200
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
  },
  descriptionTitle: {
    fontSize: 18,
    marginTop: 16,
    fontWeight: "bold",
    fontFamily: 'Inter_800ExtraBold',
    color: colors.gray[400]
  },
  info: {

  },
  description: {
    marginTop: 8,
    color: colors.gray[300],
    paddingBottom: 84
  },
  recordText: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 16,
    color: colors.gray[400],
  },
  recordTextBold: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Inter_800ExtraBold',
    color: colors.gray[400]
  },
});