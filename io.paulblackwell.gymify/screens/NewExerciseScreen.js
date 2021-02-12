import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function NewExerciseScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text >New Exercise Screen</Text>
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