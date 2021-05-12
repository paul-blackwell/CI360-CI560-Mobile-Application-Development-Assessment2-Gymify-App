import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch, ScrollView, Dimensions } from 'react-native';


import NewExerciseBtnPrimary from '../components/smallerComponents/NewExerciseBtnPrimary';
import AddImageIcon from '../components/smallerComponents/AddImageIcon';

import { standardColors } from '../styles/colors';
let colors = standardColors;

const windowHeight = Dimensions.get('window').height;

export default function NewExerciseScreen({ navigation }) {

  const [exerciseName, setExerciseName] = useState('');
  const [exerciseTime, setExerciseTime] = useState(null);
  const [numberOfSets, setNumberOfSets] = useState(null);
  const [numberOfReps, setNumberOfReps] = useState(null);
  const [description, setDescription] = useState('');


  const [addTimer, setAddTimer] = useState(false);
  const toggleSwitch = () => setAddTimer(previousState => !previousState);

  //const [addTimer, setAddTimer] = useState(false);


  const validateInputs = (exerciseName, exerciseTime, numberOfSets, numberOfReps) => {
    let errorMessage = 'Missing: ';
    if(exerciseName === null || exerciseName === '') {
      console.log('I fired')
      errorMessage += 'exercise name, ';
    }
    if(addTimer && (exerciseTime === null || exerciseTime === 0)) {
      errorMessage += 'exercise time, ';
    }

    if(!addTimer && (numberOfSets === null || numberOfSets === 0)) {
      errorMessage += 'number of sets, ';
    }

    if(!addTimer && (numberOfReps === null || numberOfReps === 0)) {
      errorMessage += 'number of repetitions, ';
    }

    if(errorMessage === 'Missing: ') {
      return false;
    } else {
      return errorMessage;
    }
  }

  /**
   * This will handle the submit, error if the the main inputs
   * have no data or are incorrect. If the data is correct
   * it will make an API request to add the new exercise
   */
  const handleSubmit = () => {
    const error = validateInputs(exerciseName, exerciseTime, numberOfSets, numberOfReps);
    if(!error) {
      console.log(error)
    }
  }


  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
        <ScrollView>
          <View style={{ paddingBottom: windowHeight / 2 }}>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Exercise name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={setExerciseName}
                  value={exerciseName}
                />
              </View>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Upload images</Text>
              <View style={styles.addImageInput}>
                <AddImageIcon color={colors.gray[200]} />
              </View>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Add timer</Text>
              <Switch
                style={styles.switch}
                trackColor={{ false: colors.gray[200], true: colors.purple[200] }}
                thumbColor={addTimer ? colors.white[100] : colors.white[100]}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={addTimer}
              />
            </View>
            {
              addTimer ?
                <View style={styles.inputSection}>
                  <Text style={styles.inputLabel}>Exercise time</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      onChangeText={setExerciseTime}
                      value={exerciseTime}
                      placeholder="e.g 10.00"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                :
                <>
                  <View style={styles.inputSection}>
                    <Text style={styles.inputLabel}>Number of sets</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        onChangeText={setNumberOfSets}
                        value={numberOfSets}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                  <View style={styles.inputSection}>
                    <Text style={styles.inputLabel}>Number of repetitions</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        onChangeText={setNumberOfReps}
                        value={numberOfReps}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                </>
            }
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Description</Text>
              <View style={styles.descriptionInputContainer}>
                <TextInput
                  style={[styles.input, styles.descriptionInput]}
                  onChangeText={setDescription}
                  value={description}
                  multiline={true}
                  numberOfLines={4}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.newExerciseTabBar}>
        <NewExerciseBtnPrimary title='Save' onPress={handleSubmit} />
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
  descriptionInputContainer: {
    height: 140
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
  },
  descriptionInput: {
    height: 140,
    textAlignVertical: "top",
  },
  addImageInput: {
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderStyle: 'dashed',
    borderColor: colors.gray[200],
    borderWidth: 1,
  },
  switch: {
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start'
    alignSelf: 'flex-start',
    borderColor: colors.gray[200],
    borderWidth: 1,
  }
});