import React, { useReducer, createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import workoutsReducer from '../reducers/workouts.reducer';
import defaultWorkouts from '../data/defaultWorkouts';



const storeData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (error) {
        console.log(error);
    }
};

storeData('workouts', JSON.stringify(defaultWorkouts));



const retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('workouts');
        if (value !== null) {
            console.log(value);
        } else {
            // Save default workouts locally 
            //storeData('workouts', defaultWorkouts)
            console.log('there was no data')
        }
    } catch (error) {
        console.log(error);
    }
};




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