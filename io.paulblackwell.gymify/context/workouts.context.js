import React, { useReducer, createContext, useEffect } from 'react';
import workoutsReducer from '../reducers/workouts.reducer';
import defaultWorkouts from '../data/defaultWorkouts';
import { storeData, retrieveData, deleteData, initializeNewWorkoutPlan } from '../requests/accessLocalStorage';

// just for testing
import getRandomItems from '../utils/getRandomItems';

// just for testing
// const testArr = [{dog: 'some dog', id:1 }, {cat: 'some cat', id: 2}]
const testArr = ['dog', 'cat', 'hamster']
console.log(getRandomItems(testArr, 2))


export const WorkoutsContext = createContext();



export const WorkoutsProvider = (props) => {

    // storeData('workoutPlan', {data: 'some data'});
    // console.log(retrieveData('workoutPlan'));
    //deleteData('workoutPlan')
   // console.log(initializeNewWorkoutPlan())

    const [workouts, dispatch] = useReducer(workoutsReducer, defaultWorkouts);

    return (
        <WorkoutsContext.Provider value={{ workouts, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}