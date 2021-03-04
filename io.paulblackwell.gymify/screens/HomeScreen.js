import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, SafeAreaView } from 'react-native';
import { WorkoutsContext } from '../context/workouts.context';
import Loader from '../components/Loader';
import WeeklyWorkoutItem from '../components/WeeklyWorkoutItem';

export default function HomeScreen({ navigation }) {


  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan } = useContext(WorkoutsContext);


  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];



  // const renderItem = ({ item }) => {
  //   <View>
  //     <Text>{item.id}</Text>
  //   </View>
  // }

  // const Item = ({ id }) => (
  //   <View style={styles.test}>
  //     <Text>{id}</Text>
  //   </View>
  // );

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  // const renderItem = ({ item }) => (
  //   <Item title={item.id} />
  // );

  const renderItem = ({ item }) => (
    <Item title={item.name} />
  );


  return (
    // <View style={styles.container}>
    //   {!workoutPlan.loading ?
    //     <FlatList
    //       data={DATA}
    //       renderItem={renderItem}
    //       keyExtractor={item => item.id}
    //     /> :
    //     <Loader loading={workoutPlan.loading} />
    //   }
    // </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={workoutPlan.post}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
