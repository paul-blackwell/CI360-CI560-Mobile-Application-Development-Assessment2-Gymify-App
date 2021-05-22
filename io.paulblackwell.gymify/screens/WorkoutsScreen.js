import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, StatusBar, SafeAreaView, FlatList, View } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';

import { standardColors } from '../styles/colors';
import WorkoutItem from '../components/WorkoutItem';

let colors = standardColors;

export default function WorkoutsScreen({ route, navigation }) {


  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan, dispatch } = useContext(WorkoutsContext);

  /**
   * If the user has come from the HomeScreen get the Workouts 
   * based on id passed in from home screen. However if they have
   * navigated to this screen from the bottom tab menu for the first
   * time and have not previously been on the Home screen, get Workouts 
   * from the context (first week)
   */
  let selectedWeek;
  if (route.params === undefined) {
    selectedWeek = workoutPlan.post[0];
  } else {
    const { weekId } = route.params;
    workoutPlan.post.forEach(week => {
      if (week.id === weekId) {
        selectedWeek = week;
      }
    });
  }


  /**
   * Sort the workouts based or the last title character i.e "Workout 1" =>  "1",
   * this stops the workouts loading in the wrong order if they are updated
   */
  selectedWeek.workouts.sort((a, b) => parseFloat(a.title.slice(-1)) - parseFloat(b.title.slice(-1)))
  
  

  /**
   * If the user navigated to this screen from the bottom tab menu for the first
   * time and have not previously been on the Home screen, get Workouts 
   * from the context (first week) update the context for the current selected week,
  * we will need to do this because the WorkoutScreen needs to make an
  * API request using the works parent week's id (selected), and it has no
  * way of getting it. Thats why its being set in the context 
   */
  useEffect(() => {
    if(route.params === undefined) {
      dispatch({ type: 'SET_CURRENT_SELECTED_WEEK', payload: selectedWeek})
    }
  },[])


  //console.log('selectedWeek.id ' + selectedWeek.id)
  //console.log('workoutPlan.currentSelectedWeek.id ' + workoutPlan.currentSelectedWeek.id)
  //console.log('------------------------------------------------------------------------')





  const renderItem = ({ item }) => (
    <WorkoutItem
      warmups={item.warmups}
      exercises={item.exercises}
      title={item.title}
      id={item.id}
      navigation={navigation}
      dispatch={dispatch}
      item={item}
    />
  );


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
      <View style={styles.title}>
        <Text style={styles.titleText}>{selectedWeek.title}</Text>
        <View style={styles.workoutsListContainer}>
          <FlatList
            data={selectedWeek.workouts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
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
    marginBottom: 16
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Inter_800ExtraBold'
  },
  workoutsListContainer: {
    marginTop: 16,
    paddingBottom: 62
  }
});


