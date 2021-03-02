import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';
import Loader from '../components/Loader';

export default function HomeScreen({ navigation }) {


  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan } = useContext(WorkoutsContext);
  if (!workoutPlan.loading) {
    console.log(workoutPlan.post)
  }


  // Just for testing this will need to move to its own component
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Button
        title="Go to workout"
        onPress={() => {
          // Go to WorkoutList screen and pass the workout id to that screen
          navigation.navigate('WorkoutStack', {
            screen: 'WorkoutListScreen',
            params: { workoutListId: item.id }
          });
        }}
      />
    </View>
  );


  return (
    <View style={styles.container}>
      <Loader loading={workoutPlan.loading} />
      {/* <FlatList
        data={workoutPlan}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      /> */}
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