import React, { useReducer, createContext, useEffect } from 'react';
import workoutsReducer from '../reducers/workouts.reducer';
import defaultWorkouts from '../data/defaultWorkouts';
import { storeData, retrieveData } from '../requests/accessLocalStorage';





export const WorkoutsContext = createContext();

const test = retrieveData('workouts');


// if(test === null){
//     console.log('knowing is saved')
// } else {
//     console.log(test)
// }



export const WorkoutsProvider = (props) => {

    useEffect(() => {
        const storage = async () => {
            const test = retrieveData('workouts');
            console.log(test)
        }
        storage()
    }, []);


    const [workouts, dispatch] = useReducer(workoutsReducer, defaultWorkouts);

    return (
        <WorkoutsContext.Provider value={{ workouts, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}