import React, { useContext } from 'react';
import { StyleSheet, Text, StatusBar, SafeAreaView, FlatList, View } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';

import {standardColors} from '../styles/colors';
import WorkoutItem from '../components/WorkoutItem';

let colors = standardColors;

export default function WorkoutsScreen({ route, navigation }) {


  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan } = useContext(WorkoutsContext);

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


  const renderItem = ({ item }) => (
    <WorkoutItem warmups={item.warmups} exercises={item.exercises} title={item.title} id={item.id} navigation={navigation} />
  );

  console.log(selectedWeek.workouts)

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
    marginTop: 16
  }
});


