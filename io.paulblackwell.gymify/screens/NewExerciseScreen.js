import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch, ScrollView, Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';

import { WorkoutsContext } from '../context/workouts.context';
import NewExerciseBtnPrimary from '../components/smallerComponents/NewExerciseBtnPrimary';
import AddImageIcon from '../components/smallerComponents/AddImageIcon';
import Loader from '../components/Loader';


import postNewExercise from '../requests/postNewExercise';
import getWeeksFromNewExerciseScreen from '../requests/getWeeksFromNewExerciseScreen';

import { standardColors } from '../styles/colors';
let colors = standardColors;

const windowHeight = Dimensions.get('window').height;

export default function NewExerciseScreen({ navigation }) {

  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan, dispatch } = useContext(WorkoutsContext);

  // The state for all the TextInputs
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseTime, setExerciseTime] = useState(null);
  const [numberOfSets, setNumberOfSets] = useState(null);
  const [numberOfReps, setNumberOfReps] = useState(null);
  const [description, setDescription] = useState('');

  const [isWarmup, setIsWarmup] = useState(true);
  const [isExercise, setIsExercise] = useState(false);


  const [showLoader, setShowLoader] = useState(false);
  const [updateContext, setUpdateContext] = useState(false);
  const [navigateToWorkoutScreen, setNavigateToWorkoutScreen] = useState(false);


  const toggleSwitchWarmUp = () => {
    setIsWarmup(previousState => !previousState);
    setIsExercise(previousState => !previousState);
  }

  const toggleSwitchExercise = () => {
    setIsWarmup(previousState => !previousState);
    setIsExercise(previousState => !previousState);
  }


  const [addTimer, setAddTimer] = useState(false);
  const toggleSwitch = () => setAddTimer(previousState => !previousState);


  // This just the toastConfig as we need to make it custom to the app 
  const toastConfig = {
    success: ({ text1, props, ...rest }) => (
      <View style={styles.toast}>
        <Text style={styles.toastText}>{text1}</Text>
      </View>
    ),
    error: () => { },
    info: () => { },
    any_custom_type: () => { }
  };


  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (showToast) {
      Toast.show({
        text1: errorMessage,
        type: 'success',
        height: 200,
        visibilityTime: 3000,
      });
      setShowToast(false); // reset toast state
    }
  }, [showToast, errorMessage])





  const validateInputs = (exerciseName, exerciseTime, numberOfSets, numberOfReps) => {
    let errorMessage = 'Missing: ';
    if (exerciseName === null || exerciseName === '') {
      errorMessage += 'exercise name, ';
    }
    if (addTimer && (exerciseTime === null || exerciseTime === 0)) {
      errorMessage += 'exercise time, ';
    }

    if (!addTimer && (numberOfSets === null || numberOfSets === 0)) {
      errorMessage += 'number of sets, ';
    }

    if (!addTimer && (numberOfReps === null || numberOfReps === 0)) {
      errorMessage += 'number of repetitions, ';
    }

    if (errorMessage === 'Missing: ') {
      return false;
    } else {
      return errorMessage;
    }
  }




  // This will handle making our post to the API
  const [makePostRequest, setMakePostRequest] = useState(false);
  useEffect(() => {
    if (makePostRequest) {
      const newExerciseObj = {
        title: exerciseName,
        description: description,
        time: exerciseTime === null ? 0 : parseInt(exerciseTime),
        sets: numberOfSets === null ? 0 : parseInt(numberOfSets),
        reps: numberOfReps === null ? 0 : parseInt(numberOfReps)
      }


      // Make API request
      postNewExercise(
        workoutPlan.currentSelectedWeek,
        workoutPlan.currentSelectedWorkout,
        isWarmup,
        newExerciseObj,
        workoutPlan.jwt,
        setShowLoader,
        setUpdateContext
      )

      setMakePostRequest(false);
    }
  }, [makePostRequest])


  /**
 * This will update the context if an exercise has been added,
 * it does this by making a request to the API then if the request is
 * successful it will update the context and hide the loader
 */
  useEffect(() => {
    if (updateContext) {
      getWeeksFromNewExerciseScreen(setShowLoader, dispatch, setNavigateToWorkoutScreen);
      setUpdateContext(false)
    }
  }, [updateContext]);

  
  /**
   * After both API requests have been successful postNewExercise
   * and getWeeksFromNewExerciseScreenFromExerciseScreen navigate back to the WorkoutScreen
   */
   useEffect(() => {
    if (navigateToWorkoutScreen) {
      dispatch({ type: 'SHOW_TAB_BAR', payload: true})
      navigation.navigate('WorkoutStack', {
        screen: 'WorkoutScreen',
        params: { workoutId: workoutPlan.currentSelectedWorkout.id, weekTitle: workoutPlan.currentSelectedWeek.title }
      });
    }
  }, [navigateToWorkoutScreen])





  /**
   * This will handle the submit, error if the the main inputs
   * have no data or are incorrect. If the data is correct
   * it will make an API request to add the new exercise
   */
  const handleSubmit = () => {
    const error = validateInputs(exerciseName, exerciseTime, numberOfSets, numberOfReps);
    if (error) {
      setErrorMessage(error);
      setShowToast(true);
      return;
    }

    // If no errors
    setMakePostRequest(true);
  }



  // If app is waiting on the API just show the loader
  if (showLoader) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
        <Loader loading={showLoader} />
      </SafeAreaView>
    )
  }



  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
        <ScrollView>
          <View style={{ paddingBottom: windowHeight / 2 }}>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Exercise name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={setExerciseName}
                  value={exerciseName}
                />
              </View>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Upload images</Text>
              <View style={styles.addImageInput}>
                <AddImageIcon color={colors.gray[200]} />
              </View>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Add as warmup</Text>
              <Switch
                style={styles.switch}
                trackColor={{ false: colors.gray[200], true: colors.purple[200] }}
                thumbColor={isWarmup ? colors.white[100] : colors.white[100]}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchWarmUp}
                value={isWarmup}
              />
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Add as exercise</Text>
              <Switch
                style={styles.switch}
                trackColor={{ false: colors.gray[200], true: colors.purple[200] }}
                thumbColor={isExercise ? colors.white[100] : colors.white[100]}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchExercise}
                value={isExercise}
              />
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Add timer</Text>
              <Switch
                style={styles.switch}
                trackColor={{ false: colors.gray[200], true: colors.purple[200] }}
                thumbColor={addTimer ? colors.white[100] : colors.white[100]}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={addTimer}
              />
            </View>
            {
              addTimer ?
                <View style={styles.inputSection}>
                  <Text style={styles.inputLabel}>Exercise time</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      onChangeText={setExerciseTime}
                      value={exerciseTime}
                      placeholder="e.g 10.00"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                :
                <>
                  <View style={styles.inputSection}>
                    <Text style={styles.inputLabel}>Number of sets</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        onChangeText={setNumberOfSets}
                        value={numberOfSets}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                  <View style={styles.inputSection}>
                    <Text style={styles.inputLabel}>Number of repetitions</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        onChangeText={setNumberOfReps}
                        value={numberOfReps}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                </>
            }
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Description</Text>
              <View style={styles.descriptionInputContainer}>
                <TextInput
                  style={[styles.input, styles.descriptionInput]}
                  onChangeText={setDescription}
                  value={description}
                  multiline={true}
                  numberOfLines={4}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
      </SafeAreaView>
      <View style={styles.newExerciseTabBar}>
        <NewExerciseBtnPrimary title='Save' onPress={handleSubmit} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.gray[100]
  },
  newExerciseTabBar: {
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
  inputSection: {
    marginTop: 16
    //backgroundColor: colors.purple[100]
  },
  inputContainer: {
    height: 32
  },
  descriptionInputContainer: {
    height: 140
  },
  inputLabel: {
    color: colors.gray[300],
    marginBottom: 8
  },
  input: {
    flex: 1,
    padding: 4,
    backgroundColor: colors.white[100],
    borderColor: colors.gray[200],
    borderWidth: 1,
    borderRadius: 4,
  },
  descriptionInput: {
    height: 140,
    textAlignVertical: "top",
  },
  addImageInput: {
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderStyle: 'dashed',
    borderColor: colors.gray[200],
    borderWidth: 1,
  },
  switch: {
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start'
    alignSelf: 'flex-start',
    borderColor: colors.gray[200],
    borderWidth: 1,
  },
  toastText: {
    color: colors.gray[300],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white[100],
    borderRadius: 100,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});