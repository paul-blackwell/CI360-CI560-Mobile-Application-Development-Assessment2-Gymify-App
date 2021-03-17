import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList, ScrollView, TouchableOpacity, LogBox } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { WorkoutsContext } from '../context/workouts.context';
import { standardColors } from '../styles/colors';
import ExerciseItem from '../components/ExerciseItem';




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
  const { workoutPlan } = useContext(WorkoutsContext);

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
    />
  );


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
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
            data={selectedWorkout.exercises}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      </ScrollView>
      <TouchableOpacity style={styles.newExerciseBtn} onPress={() => {
        console.log('Add new exercise button clicked')
      }}>
        <AntDesign name="plus" size={24} color={colors.white[100]} />
      </TouchableOpacity>
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
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    backgroundColor: colors.purple[200],
    zIndex: 1,
    borderRadius: 50
  }

});