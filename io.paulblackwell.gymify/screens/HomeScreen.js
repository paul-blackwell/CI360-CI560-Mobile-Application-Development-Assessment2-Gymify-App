import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';
import Loader from '../components/Loader';
import WeeklyWorkoutItem from '../components/WeeklyWorkoutItem';

export default function HomeScreen({ navigation }) {


  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan } = useContext(WorkoutsContext);
  if (!workoutPlan.loading ) {
    // workoutPlan.post.forEach(week => {
    //   console.log(week.id)
    // });
    // for (let object of workoutPlan.post) {
    //   console.log(object);
    // }
    // workoutPlan.post.map((workout) => {
    //   console.log(workout);
    // });
    // console.log(Array.isArray(workoutPlan.post))
    //console.log(workoutPlan.post)
    console.log(Array.isArray(workoutPlan.post))
  }


  const renderItem = ({ item }) => {
    <WeeklyWorkoutItem item={item} navigation={navigation} />
  }


  return (
    <View style={styles.container}>
      {/* {!workoutPlan.loading ?
        <FlatList
          data={workoutPlan.post}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> :
        <Loader loading={workoutPlan.loading} />
      } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center'
  },
});