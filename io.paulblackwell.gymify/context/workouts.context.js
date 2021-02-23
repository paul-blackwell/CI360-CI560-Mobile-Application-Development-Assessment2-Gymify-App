import React, { useReducer, createContext, useEffect, useState } from 'react';
import workoutsReducer from '../reducers/workouts.reducer';
import { storeLocalData, retrieveLocalData, deleteLocalData, initializeNewWorkoutPlan } from '../requests/accessLocalStorage';
import { retrieveExternalData } from '../requests/accessExternalAPI';




export const WorkoutsContext = createContext();


export const WorkoutsProvider = (props) => {
    const [workoutPlanState, setWorkoutPlanState] = useState(retrieveExternalData('https://cryptic-garden-88403.herokuapp.com/workout-plans'));


    // Get default workout plan from API
    //const defaultWorkoutPlan = retrieveExternalData('https://cryptic-garden-88403.herokuapp.com/workout-plans');

    // useEffect(() => {
    //     fetch('https://cryptic-garden-88403.herokuapp.com/workout-plans')
    //         .then((response) => response.json())
    //         .then((json) => setWorkoutPlanState(json))
    //         .catch((error) => console.error(error));
    // }, [workoutPlanState]);

    console.log(workoutPlanState)


    const [workoutPlan, dispatch] = useReducer(workoutsReducer, workoutPlanState);

    return (
        <WorkoutsContext.Provider value={{ workoutPlan, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}