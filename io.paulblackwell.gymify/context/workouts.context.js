import React, { useReducer, createContext, useEffect } from 'react';
import workoutsReducer from '../reducers/workouts.reducer';
import defaultWorkouts from '../data/defaultWorkouts';
import { storeLocalData, retrieveLocalData, deleteLocalData, initializeNewWorkoutPlan } from '../requests/accessLocalStorage';
import { retrieveExternalData } from '../requests/accessExternalAPI';



export const WorkoutsContext = createContext();


export const WorkoutsProvider = (props) => {

    console.log(retrieveExternalData('https://jsonplaceholder.typicode.com/todos/1'));

    const [workouts, dispatch] = useReducer(workoutsReducer, defaultWorkouts);

    return (
        <WorkoutsContext.Provider value={{ workouts, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}