import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';


import Loader from '../components/Loader';
import WeeklyWorkoutItem from '../components/WeeklyWorkoutItem';
import { standardColors } from '../styles/colors';



let colors = standardColors;

export default function HomeScreen({ navigation }) {

  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan, dispatch } = useContext(WorkoutsContext);


 
  const renderItem = ({ item }) => (
    //<WeeklyWorkoutItem title={item.title} id={item.id} navigation={navigation} />
    <WeeklyWorkoutItem title={item.title} id={item.id} navigation={navigation} dispatch={dispatch} item={item}/>
  );


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
      <View style={styles.title}>
        <Text style={styles.titleText}>Home</Text>
      </View>
      {!workoutPlan.loading ?
        <FlatList
          data={workoutPlan.post}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> :
        <Loader loading={workoutPlan.loading} />
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
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Inter_800ExtraBold',
    color: colors.gray[400]
  }
});
