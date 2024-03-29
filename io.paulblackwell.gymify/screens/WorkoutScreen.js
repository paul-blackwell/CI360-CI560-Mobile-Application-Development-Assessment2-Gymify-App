import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList, ScrollView, TouchableOpacity, LogBox } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { WorkoutsContext } from '../context/workouts.context';
import { standardColors } from '../styles/colors';
import ExerciseItem from '../components/ExerciseItem';
import EditExerciseModal from '../components/EditExerciseModal';
import Loader from '../components/Loader';
import getWeeks from '../requests/getWeeks';



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



  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan, dispatch } = useContext(WorkoutsContext);

  // Get workout Id  from the route params
  //const { workoutId } = route.params;




  // Make state to open and close model 
  const [openEditExerciseModel, setOpenEditExerciseModel] = useState(false);


  /**
   *  Make state for exercise selected, this will be used for when the user
   * selects an individual exercise's edit menu. This will load the
   * EditExerciseModal and it will need to know what the current exercise's  title
   * and ID 
   */
  const [currentExerciseSelected, setCurrentExerciseSelected] = useState(false);


  // Get selected workout based on the workout Id passed in via the route
  var selectedWorkout;
  workoutPlan.post.forEach(week => {
    if (week.id === workoutPlan.currentSelectedWeek.id) {
      week.workouts.forEach(workout => {
        if (workout.id === workoutPlan.currentSelectedWorkout.id) {
          selectedWorkout = workout;
        }
      })
    }
  });





  /**
   * This will handle showing wether to show the loading component
   * or not 
   */
  const [showLoader, setShowLoader] = useState(false)



  /**
   * This will update the context if an exercise is deleted,
   * it does this by making a request to the API then if the request is
   * successful it will update the context and hide the loader
   */
  const [updateContext, setUpdateContext] = useState(false)
  useEffect(() => {
    if (updateContext) {
      getWeeks(setShowLoader, dispatch);
      setUpdateContext(false)
    }
  }, [updateContext])



  // This is what the flat this will render 
  const renderItem = ({ item }) => (
    <ExerciseItem
      title={item.title}
      id={item.id}
      navigation={navigation}
      time={item.time}
      sets={item.sets}
      reps={item.reps}
      maxWeight={item.maxWeight}
      completed={item.completed}
      images={item.images}
      setOpenModel={setOpenEditExerciseModel}
      setCurrentExerciseSelected={setCurrentExerciseSelected}
      item={item}
      dispatch={dispatch}
    />
  );



  /**
   * If the user  was previously on this screen, then navigated
   * to the home screen, then navigates to the WorkoutsScreen.The APP will
   * error with TypeError: undefined is not an object (evaluating 'selectedWorkout.warmups').
   * This is to do with the stack navigator loading in this screen for a split second and
   * the selectedWorkout will be undefined because of this, cursing the error. 
   * A quick fix for now is if this happens just return a black screen and it will 
   * only show for a split second.
   */
  if (selectedWorkout === undefined) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
      </SafeAreaView >
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
      {showLoader
        ? <Loader loading={showLoader} />
        :
        <>
          <ScrollView>
            <View style={styles.title}>
              <Text style={styles.titleText}>Warmup</Text>
            </View>
            <FlatList
              data={selectedWorkout.warmups}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <View style={styles.title}>
              <Text style={styles.titleText}>Training</Text>
            </View>
            <FlatList
              style={{ paddingBottom: 96 }}
              data={selectedWorkout.exercises}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </ScrollView>
          <TouchableOpacity style={styles.newExerciseBtn} onPress={() => {
            dispatch({ type: 'SHOW_TAB_BAR', payload: false })
            navigation.navigate('WorkoutStack', {
              screen: 'NewExerciseScreen',
            });
          }}>
            <AntDesign name="plus" size={24} color={colors.white[100]} />
          </TouchableOpacity>
          <EditExerciseModal
            openModel={openEditExerciseModel}
            setOpenModel={setOpenEditExerciseModel}
            currentExerciseSelected={currentExerciseSelected}
            selectedWorkout={selectedWorkout}
            parentWeek={workoutPlan.currentSelectedWeek}
            setShowLoader={setShowLoader}
            setUpdateContext={setUpdateContext}
          />
        </>
      }
    </SafeAreaView >

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