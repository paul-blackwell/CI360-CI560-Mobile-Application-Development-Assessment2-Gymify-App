import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, SafeAreaView } from 'react-native';
import {standardColors} from '../styles/colors';

let colors = standardColors;

export default function WorkoutScreen({ route, navigation }) {

  const { weekId, weekTitle } = route.params;

  console.log(route.params)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
      <View style={styles.main}>
        <Text >Workout Screen {weekTitle}</Text>
      </View>
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
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center'
  },
});