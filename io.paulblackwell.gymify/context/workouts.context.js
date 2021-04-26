import React, { useReducer, createContext, useEffect } from 'react';
import reducer from '../reducers/workouts.reducer';
import AsyncStorage from '@react-native-community/async-storage';
import { deleteLocalData } from '../requests/accessLocalStorage';
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



    useEffect(() => {

        const request = async () => {
            axios
                .get('https://cryptic-garden-88403.herokuapp.com/workout-plans')
                .then(response => {
                    // Pass response data to dispatch in reducer
                    dispatch({ type: 'FETCH_API_SUCCESS', payload: response.data })
                })
                .catch(error => {
                    dispatch({ type: 'FETCH_API_ERROR' })
                    console.log(error)
                });
    }

        request();

    }, []);





    return (
        <WorkoutsContext.Provider value={{ workoutPlan, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}