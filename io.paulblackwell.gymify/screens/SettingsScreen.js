
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { WorkoutsContext } from '../context/workouts.context';
import SettingsModal from '../components/SettingsModal';
import Loader from '../components/Loader';

import resetExercises from '../requests/resetExercises';
import getWeeks from '../requests/getWeeks';

import { standardColors } from '../styles/colors';

let colors = standardColors;

export default function SettingsScreen({ navigation }) {

  // Get workouts context with will be an array with all of the workouts
  const { workoutPlan, dispatch } = useContext(WorkoutsContext);

  const [openModel, setOpenModel] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [makeRequest, setMakeRequest] = useState(false);
  useEffect(() => {
    if (makeRequest) {
      // Make an API request to update reset the exercises and warmups foreach week
      workoutPlan.post.forEach(week => {
        resetExercises(week, workoutPlan.jwt, setShowLoader, setUpdateContext);
      });
      setMakeRequest(false);
    }
  }, [makeRequest])


  /**
   * This will update the context if  the exercise have been reset,
   * it does this by making a request to the API then if the request is
   * successful it will update the context and hide the loader
   */
  const [updateContext, setUpdateContext] = useState(false)
  useEffect(() => {
    if (updateContext) {
      getWeeks(setShowLoader, dispatch);
      setUpdateContext(false)
      setShowToast(true)
    }
  }, [updateContext])



  /**
   * If the context has been updated this will handle showing a toast to the user 
   * letting them know the exercises have been successfully updated.
   */
  useEffect(() => {
    if (!showLoader && showToast) {
      Toast.show({
        text1: 'Exercises have been reset',
        type: 'success',
        height: 200,
        position: 'bottom',
      });
      setShowToast(false); // reset toast state
    }
  }, [showLoader, showToast])


  // This just the toastConfig as we need to make it custom to the app 
  const toastConfig = {
    success: ({ text1, props, ...rest }) => (
      <View style={styles.toast}>
        <Text style={styles.toastText}>{text1}</Text>
      </View>
    ),
    error: () => { },
    info: () => { },
    any_custom_type: () => { }
  };



  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
        {showLoader ?
          <>
            <View style={styles.title}>
              <Text style={styles.titleText}>Settings</Text>
            </View>
            <Loader loading={true} />
          </>
          :
          <>
            <View style={styles.title}>
              <Text style={styles.titleText}>Settings</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => { setOpenModel(true) }}>
              <Feather style={styles.btnIcon} name="refresh-ccw" size={24} color={colors.gray[400]} />
              <Text style={styles.btnText}>Reset all completed exercises</Text>
            </TouchableOpacity>
            <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnIcon: {
    marginRight: 12
  },
  btnText: {
    fontSize: 16,
    color: colors.gray[300]
  },
  toast: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white[100],
    borderRadius: 100,
    // margin: 20,
    padding: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  toastText: {
    color: colors.gray[300]
  }
});