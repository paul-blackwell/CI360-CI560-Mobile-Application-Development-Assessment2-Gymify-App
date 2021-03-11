import React, { useReducer, createContext, useEffect } from 'react';
import reducer from '../reducers/workouts.reducer';
import AsyncStorage from '@react-native-community/async-storage';
//import { deleteLocalData } from '../requests/accessLocalStorage';
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


    // Just for testing
    //deleteLocalData('workoutPlan')

    useEffect(() => {

        /**
         * This will get the workout plan from AsyncStorage (local data on the phone) 
         * and set the context to the data returned from it however, if the workout plan 
         * is not currently saved in local storage then an API request is made to get the
         *  workout data from an external source. After this data is sourced externally it 
         * is set to the context and then save the data to local storage so next time the user 
         * opens the device the data will be saved locally.
         */
        const request = async () => {

            const value = await AsyncStorage.getItem('workoutPlan');
            if (value !== null) {
                dispatch({ type: 'FETCH_LOCAL_STORAGE_SUCCESS', payload: JSON.parse(value) })
            } else if (value === null) {
                axios
                    .get('https://cryptic-garden-88403.herokuapp.com/workout-plans')
                    .then(response => {
                        // Pass response data to dispatch in reducer
                        dispatch({ type: 'FETCH_API_SUCCESS', payload: response.data })
                            // Save data locally 
                            // (async () => {
                            //     await AsyncStorage.setItem('workoutPlan', JSON.stringify(response.data));
                            // })();
                    })
                    .catch(error => {
                        dispatch({ type: 'FETCH_API_ERROR' })
                        console.log(error)
                    });
            }
        }

        request();

    }, []);




    return (
        <WorkoutsContext.Provider value={{ workoutPlan, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}