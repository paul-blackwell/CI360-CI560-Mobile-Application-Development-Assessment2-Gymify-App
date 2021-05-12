import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native';
import NewExerciseBtnPrimary from '../components/smallerComponents/NewExerciseBtnPrimary';

import { standardColors } from '../styles/colors';
let colors = standardColors;

export default function NewExerciseScreen({ navigation }) {

  const [exerciseName, setExerciseName] = useState('');
  const [addTimer, setAddTimer] = useState(false);
  const [addTime, setAddTime] = useState(0);
  const [numberOfSets, setNumberOfSets] = useState(0);
  const [numberOfReps, setNumberOfReps] = useState(0);
  const [description, setDescription] = useState('');

  //const [addTimer, setAddTimer] = useState(false);

  // const [formState, setFormState] = useState({
  //   exerciseName: '',
  //   numberOfSets: 0,
  //   numberOfReps: 0,
  //   time: 0,
  //   description: ''
  // });

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Exercise name</Text>
          <View style={{ height: 32 }}>
            <TextInput
              style={styles.input}
              onChangeText={setExerciseName}
              value={exerciseName}
              placeholder=""
            />
          </View>
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
  inputSection: {
    marginTop: 16
    //backgroundColor: colors.purple[100]
  },
  inputContainer: {
    height: 32
  },
  inputLabel: {
    color: colors.gray[300],
    marginBottom: 8
  },
  input: {
    flex: 1,
    padding: 4,
    backgroundColor: colors.white[100],
    borderColor: colors.gray[200],
    borderWidth: 1,
    borderRadius: 4,
  }
});