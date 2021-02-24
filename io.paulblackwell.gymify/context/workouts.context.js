import React, { useReducer, createContext, useEffect, useState } from 'react';
import reducer from '../reducers/workouts.reducer';
import { storeLocalData, retrieveLocalData, deleteLocalData, initializeNewWorkoutPlan } from '../requests/accessLocalStorage';
import { retrieveExternalData } from '../requests/accessExternalAPI';
import axios from 'axios';



// Build initial state
const initialState = {
    loading: true,
    error: '',
    post: {}
}



export const WorkoutsContext = createContext();


export const WorkoutsProvider = (props) => {


   const [workoutPlan, dispatch] = useReducer(reducer, initialState);

   // Get default workout plan from API
   useEffect(() => {
      axios
      .get('https://cryptic-garden-88403.herokuapp.com/workout-plans')
      .then(response => {
          dispatch({type: 'FETCH_SUCCESS', payload: response.data})
          console.log(response.data)
      })
      .catch(error => {
          dispatch({type: 'FETCH_ERROR'})
      })
   }, [])

    return (
        <WorkoutsContext.Provider value={{workoutPlan, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}