import React, { useReducer, createContext, useEffect, useState } from 'react';
import reducer from '../reducers/workouts.reducer';
import AsyncStorage from '@react-native-community/async-storage';
import { fetchFromLocalStorage, pushToLocalStorage, retrieveLocalData, deleteLocalData, initializeNewWorkoutPlan } from '../requests/accessLocalStorage';
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
    const [localData, setLocalData] = useState('');



    
     // Just for testing
    deleteLocalData('workoutPlan')


    useEffect(() => {


        /**
         * This will update the localData state if the workoutPlan 
         * exists or doesn't 
         */
        fetchFromLocalStorage('workoutPlan', setLocalData);

        /**
         * If workout plan / default workout plan is
         * not already saved to local storage, Get default workout plan from an API
         * and save the data from the API tO local storage
         */
        if (localData === 'No data under this key') {
            axios
                .get('https://cryptic-garden-88403.herokuapp.com/workout-plans')
                .then(response => {
                    // Pass response data to dispatch in reducer
                    dispatch({ type: 'FETCH_API_SUCCESS', payload: response.data })
                    // Save data locally 
                    pushToLocalStorage('workoutPlan', response.data, setLocalData);
                })
                .catch(error => {
                    dispatch({ type: 'FETCH_API_ERROR' })
                });
        } else  {
            dispatch({type: 'FETCH_LOCAL_STORAGE_SUCCESS', payload: localData})
        }

    }, [localData]);

    // console.log(localData)
    //console.log(dispatch({type: 'STATE'}))


    return (
        <WorkoutsContext.Provider value={{ workoutPlan, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}