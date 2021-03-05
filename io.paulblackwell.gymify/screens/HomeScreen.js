import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, SafeAreaView } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';
import Loader from '../components/Loader';
import WeeklyWorkoutItem from '../components/WeeklyWorkoutItem';

export default function HomeScreen({ navigation }) {


  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan } = useContext(WorkoutsContext);


  


  const renderItem = ({ item, id }) => (
    <WeeklyWorkoutItem title={item.name} id={item.id} workouts={item.workouts} navigation={navigation}/>
  );


  return (
    <SafeAreaView style={styles.container}>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 8
//   },
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     margin: 10,
//     alignItems: 'center'
//   },
//   test: {
//     height: 100,
//     width: 100
//   }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
