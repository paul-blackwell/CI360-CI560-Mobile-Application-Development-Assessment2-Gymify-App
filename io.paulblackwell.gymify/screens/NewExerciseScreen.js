import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import NewExerciseBtnPrimary from '../components/smallerComponents/NewExerciseBtnPrimary';

import { standardColors } from '../styles/colors';
let colors = standardColors;

export default function NewExerciseScreen({ navigation }) {

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
        <View style={styles.main}>
          <Text >New Exercise Screen</Text>
        </View>
      </SafeAreaView>
      <View style={styles.newExerciseTabBar}>
        <NewExerciseBtnPrimary title='Save' onPress={() => console.log('Save')} />
      </View>
    </>
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
  newExerciseTabBar: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    backgroundColor: colors.white[100],
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    zIndex: 1000
  },
});