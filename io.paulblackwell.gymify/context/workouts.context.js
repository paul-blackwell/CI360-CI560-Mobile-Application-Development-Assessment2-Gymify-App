import React, { useReducer, createContext, useEffect } from 'react';
import workoutsReducer from '../reducers/workouts.reducer';
import defaultWorkouts from '../data/defaultWorkouts';
import { storeData, retrieveData , deleteData, initializeNewWorkoutPlan} from '../requests/accessLocalStorage';


export const WorkoutsContext = createContext();



export const WorkoutsProvider = (props) => {

    // storeData('workoutPlan', {data: 'some data'});
    // console.log(retrieveData('workoutPlan'));
   console.log(initializeNewWorkoutPlan())
   
    const [workouts, dispatch] = useReducer(workoutsReducer, defaultWorkouts);

    return (
        <WorkoutsContext.Provider value={{ workouts, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}