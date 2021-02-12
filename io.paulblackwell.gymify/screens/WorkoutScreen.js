import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function WorkoutScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text >Workout Screen</Text>
        <Button
          title="Go to Exercise"
          onPress={() => navigation.navigate('ExerciseScreen')}
        />
         <Button
          title="Add New Exercise"
          onPress={() => navigation.navigate('NewExerciseScreen')}
        />
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