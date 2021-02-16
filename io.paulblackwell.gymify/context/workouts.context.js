import React, { useReducer, createContext } from 'react';
import workoutsReducer from '../reducers/workouts.reducer';
import defaultWorkouts from '../data/defaultWorkouts';
import { storeData, retrieveData } from '../requests/accessLocalStorage';





storeData('workouts', JSON.stringify(defaultWorkouts));


export const WorkoutsContext = createContext();

retrieveData();

export const WorkoutsProvider = (props) => {
    const [workouts, dispatch] = useReducer(workoutsReducer, defaultWorkouts);

    return (
        <WorkoutsContext.Provider value={{ workouts, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}