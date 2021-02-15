import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {WorkoutsContext} from '../context/workouts.context';

export default function HomeScreen() {

  
  const { workouts } = useContext(WorkoutsContext);
  console.log(workouts)
  
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text >Home Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center'
  },
});