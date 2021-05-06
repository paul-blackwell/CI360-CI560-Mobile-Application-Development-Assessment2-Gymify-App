import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Button } from 'react-native';
import { standardColors } from '../styles/colors';
import { WorkoutsContext } from '../context/workouts.context';
import ExerciseBtnPrimary from '../components/smallerComponents/ExerciseBtnPrimary';
import ImageCarousel from '../components/ImageCarousel';
//import Timer from '../components/Timer';


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
   * Timer
   */
  const [timerState, setTimerState] = useState(
    {
      min: 0,
      sec: 0,
      mSec: 0,
      lapArr: [],
      interval: null,
      start: false
    }
  )


  handleToggle = () => {
    console.log(' handleToggle was fired')
    setTimerState(
      {
        ...timerState,
        start: !timerState.start
      },
      () => handleStart()
    );
  };

  handleLap = (min, sec, msec) => {
    // this.lapArr = [
    //     ...this.lapArr,
    //     {min, sec, msec}
    // ]
    setTimerState({
      ...timerState,
      lapArr: [...timerState.lapArr, {min: min, sec: sec, msec: msec,}]
    })

};

handleStart = () => {
  // if (this.state.start) {
  //     this.interval = setInterval(() => {
  //         if (this.state.msec !== 99) {
  //             this.setState({
  //                 msec: this.state.msec + 1
  //             });
  //         } else if (this.state.sec !== 59) {
  //             this.setState({
  //                 msec: 0,
  //                 sec: ++this.state.sec
  //             });
  //         } else {
  //             this.setState({
  //                 msec: 0,
  //                 sec: 0,
  //                 min: ++this.state.min
  //             });
  //         }
  //     }, 1);

  // } else {
  //     clearInterval(this.interval);
  // }

  if (timerState.start) {
    timerState.interval = setInterval(() => {
        if (timerState.msec !== 99) {
            // this.setState({
            //     msec: this.state.msec + 1
            // });
            setState({...timerState, msec: timerState.mSec + 1})
        } else if (timerState.sec !== 59) {
            // this.setState({
            //     msec: 0,
            //     sec: ++this.state.sec
            // });
            setState({...timerState, sec: timerState.sec + 1})
        } else {
            // this.setState({
            //     msec: 0,
            //     sec: 0,
            //     min: ++this.state.min
            // })
            setState({...timerState,mSec: 0, sec: 0, min: ++ timerState.min})
        }
    }, 1);

} else {
    clearInterval(this.interval);
}
};


useEffect(() => {
 console.log(`${timerState.min}min ${timerState.sec}sec ${timerState.mSec}mSec `)
}, [timerState])





  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
        <View style={styles.main}>
          <ImageCarousel images={selectedExercise.images} />
          <Button
           onPress={handleToggle}
           title="Test"
          />
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