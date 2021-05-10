
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { WorkoutsContext } from '../context/workouts.context';
import SettingsModal from '../components/SettingsModal';
import Loader from '../components/Loader';
import resetExercises from '../requests/resetExercises';

import { standardColors } from '../styles/colors';
import { useEffect } from 'react/cjs/react.development';

let colors = standardColors;

export default function SettingsScreen({ navigation }) {

  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan, dispatch } = useContext(WorkoutsContext);

  const [openModel, setOpenModel] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const [makeRequest, setMakeRequest] = useState(false);

  // Just for testing
  const [test, setTest] = useState([]);

  useEffect(() => {
    if (makeRequest) {
     
      // Note make request for each week not all of them at once will you are doing here 

      resetExercises(workoutPlan.post, workoutPlan.jwt, setShowLoader, setTest);
    }
  }, [])

 

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
        {showLoader ?
          <Loader loading={true} />
          :
          <>
            <View style={styles.title}>
              <Text style={styles.titleText}>Settings</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => { setOpenModel(true) }}>
              <Feather style={styles.btnIcon} name="refresh-ccw" size={24} color={colors.gray[400]} />
              <Text style={styles.btnText}>Reset all completed exercises</Text>
            </TouchableOpacity>
          </>
        }
      </SafeAreaView>
      <SettingsModal
        openModel={openModel}
        setOpenModel={setOpenModel}
        setMakeRequest={setMakeRequest}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.gray[100],
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center'
  },
  title: {
    alignItems: 'center',
    marginBottom: 32,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Inter_800ExtraBold',
    color: colors.gray[400]
  },
  btn: {
    flexDirection: 'row'
  },
  btnIcon: {
    marginRight: 12
  },
  btnText: {
    fontSize: 16,
    color: colors.gray[300]
  }
});