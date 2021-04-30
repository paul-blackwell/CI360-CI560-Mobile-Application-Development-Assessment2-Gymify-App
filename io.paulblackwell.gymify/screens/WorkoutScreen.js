import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList, ScrollView, TouchableOpacity, LogBox } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { WorkoutsContext } from '../context/workouts.context';
import { standardColors } from '../styles/colors';
import ExerciseItem from '../components/ExerciseItem';
import EditExerciseModal from '../components/EditExerciseModal';
import Loader from '../components/Loader';

// import getWarmups from '../requests/getWarmups';
// import getExercises from '../requests/getExercises';
import getWorkout from '../requests/getWorkout';


/**
 * Because there are two FlatLists in a ScrollView as part of the WorkoutScreen 
 * a warning comes up 'VirtualizedLists should never be nested', this I to do with
 *  a bug in React Native itself. So we a just ignoring it for now 
 */
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])


let colors = standardColors;

export default function WorkoutScreen({ route, navigation }) {


  // Make state to open and close model 
  const [openEditExerciseModel, setOpenEditExerciseModel] = useState(false);


  /**
   *  Make state for exercise selected, this will be used for when the user
   * selects an individual exercise's edit menu. This will load the
   * EditExerciseModal and it will need to know what the current exercise's  title
   * and ID 
   */
  const [currentExerciseSelected, setCurrentExerciseSelected] = useState(false);


  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan, dispatch } = useContext(WorkoutsContext);

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



  // This will make an API call to get the workout 
  const [workout, setWorkout] = useState(null);
  useEffect(() => {

    // Set the context to loading 
    dispatch({ type: 'SET_LOADING', payload: true })

    /**
     * Make GET requests to API to get workouts and Exercises,
     * and set them to state 
     */
    getWorkout(selectedWorkout.id, setWorkout)

  }, [setWorkout])


  /**
   * This will keep an eye out to see if the workouts 
   * state updates if it does check to see if its not equal to null, 
   * and update the loading context to false.
   */
  useEffect(() => {
    if (workout !== null) {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [workout])


  // This is what the flat this will render 
  const renderItem = ({ item }) => (
    <ExerciseItem
      title={item.title}
      id={item.id}
      time={item.time}
      sets={item.sets}
      reps={item.reps}
      maxWeight={item.maxWeight}
      completed={item.completed}
      images={item.images}
      setOpenModel={setOpenEditExerciseModel}
      setCurrentExerciseSelected={setCurrentExerciseSelected}
    />
  );



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
      {workoutPlan.loading &&
        <Loader loading={workoutPlan.loading} />
      }
      {workout &&
        <>
          <ScrollView>
            <View style={styles.title}>
              <Text style={styles.titleText}>Warmup</Text>
            </View>
            <FlatList
              data={workout.warmups}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <View style={styles.title}>
              <Text style={styles.titleText}>Training</Text>
            </View>
            <FlatList
              data={workout.exercises}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </ScrollView>
          <TouchableOpacity style={styles.newExerciseBtn} onPress={() => {
            console.log('Add new exercise')
          }}>
            <AntDesign name="plus" size={24} color={colors.white[100]} />
          </TouchableOpacity>
          <EditExerciseModal
            openModel={openEditExerciseModel}
            setOpenModel={setOpenEditExerciseModel}
            currentExerciseSelected={currentExerciseSelected}
            selectedWorkout={workout}
          />
        </>
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
    marginTop: 24,
    marginBottom: 8,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: 'Inter_800ExtraBold'
  },
  newExerciseBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginVertical: 16,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    backgroundColor: colors.purple[200],
    zIndex: 1,
    borderRadius: 50
  }

});