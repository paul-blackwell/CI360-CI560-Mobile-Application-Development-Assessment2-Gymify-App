import React, { useReducer, createContext, useEffect, useState } from 'react';
import workoutsReducer from '../reducers/workouts.reducer';
import { storeLocalData, retrieveLocalData, deleteLocalData, initializeNewWorkoutPlan } from '../requests/accessLocalStorage';
import { retrieveExternalData } from '../requests/accessExternalAPI';
import axios from 'axios';



const initialState = {
    loading: true,
    error: '',
    post: {}
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something when wrong'
            }
        default:
            return state;
    }
}


export const WorkoutsContext = createContext();


export const WorkoutsProvider = (props) => {

    // Get default workout plan from API
    //const defaultWorkoutPlan = retrieveExternalData('https://cryptic-garden-88403.herokuapp.com/workout-plans');

    // useEffect(() => {
    //     fetch('https://cryptic-garden-88403.herokuapp.com/workout-plans')
    //         .then((response) => response.json())
    //         .then((json) => setWorkoutPlanState(json))
    //         .catch((error) => console.error(error));
    // }, [workoutPlanState]);

    //const [workoutPlan, dispatch] = useReducer(workoutsReducer, defaultWorkoutPlan);

   const [workoutPlan, dispatch] = useReducer(reducer, initialState);

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