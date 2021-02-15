import React, {useReducer, createContext } from 'react';
import workoutsReducer from '../reducers/workouts.reducer';
import defaultWorkouts from '../data/defaultWorkouts';


export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {
    const [workouts, dispatch] = useReducer(workoutsReducer, defaultWorkouts);
    
    return (
        <WorkoutsContext.Provider value={{workouts, dispatch}}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}