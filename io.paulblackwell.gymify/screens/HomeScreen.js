import React, { useContext } from 'react';
import { StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';

import Loader from '../components/Loader';
import WeeklyWorkoutItem from '../components/WeeklyWorkoutItem';
import colors from '../styles/colors'


export default function HomeScreen({ navigation }) {

  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan } = useContext(WorkoutsContext);



  const renderItem = ({ item }) => (
    <WeeklyWorkoutItem title={item.name} id={item.id}  navigation={navigation}/>
  );


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
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
    marginTop: 20,
  },
});
