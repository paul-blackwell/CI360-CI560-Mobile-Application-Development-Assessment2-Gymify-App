import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import uuid from '../utils/uuid';

/**
 * This function will save data to local storage
 * @param {string} key - This key will be used as a keyExtractor so the data can be retrieved later.
 * @param {object} data -This will be the data that needs to be saved but will be converted into a string.
 */
export const storeLocalData = (key, data) => {

    const request = async (keyExtractor, object) => {
        try {
            await AsyncStorage.setItem(keyExtractor, JSON.stringify(object));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        request(key, data);
    }, []);
};


/**
 * This function will get any saved data from local storage based on a key.
 * However, if no data is returned, it will return a string.
 * @param {string} key - This is the key the data is stored under in AsyncStorage.
 * @return {state} - The data stored 
 */

export const retrieveLocalData = async (key, setState) => {

    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {

        } else if (value === null) {
            setState('No data under this key');
        }
    } catch (error) {
        console.log(error);
    }
}




export const pushToLocalStorage = async (key, data) => {
    console.log('push to local fired')
    try {
        await AsyncStorage.removeItem(key) // Remove old data
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}



export const fetchFromLocalStorage = async (key) => {
    try {
        const value =  await AsyncStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            console.log(value);
          }
    } catch (error) {
        console.log(error);
    }
}




/**
 * This function will only be used in development/testing as we
 * don't want to delete data but instead update/override in using the 
 * storeData function. We need this function to clear up any mistakes with 
 * data in AsyncStorage, that may be made during development.
 * @param {string} key - This is the key the data is stored under in AsyncStorage.
 */

export const deleteLocalData = (key) => {
    const removeItem = async (keyExtractor) => {
        try {
            await AsyncStorage.removeItem(keyExtractor);
            // Uncomment to show all keys in AsyncStorage
            const keys = await AsyncStorage.getAllKeys();
            console.log(keys)
        } catch (error) {
            console.error('Error clearing app data.');
        }
    }

    useEffect(() => {
        removeItem(key);
    }, []);
}


// This just shows all the keys saved in local storage - this is for testing 
export const showLocalDataKeys = () => {
    const getDataKeys = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            console.log(keys)
        } catch (error) {
            console.error('Error clearing app data.');
        }
    }

    useEffect(() => {
        getDataKeys();
    }, []);
}






export const initializeNewWorkoutPlan = () => {
    const [state, setState] = useState('');

    /**
    * Check if workoutPlan already exists, if it does set the 
    * state to the the workoutPlan.
    * 
    * Note: I tried to use the retrieveData function to do this but couldn't 
    * get it to work withing this initializeNewWorkoutPlan function. This is because 
    * you can't run hooks outside a react function. In this case a function within a 
    * function that is then called inside a react function (the workout.context).
    */
    const request = async () => {
        try {
            const value = await AsyncStorage.getItem('workoutPlan');
            if (value !== null) {
                setState(value)
            } else {
                //setState('No data bro');

                // Make array 
                const workoutPlan = []
                const workout = { warmup: [], workouts: [] }
                const week = { id: uuid(), date: 'Week1', workouts: [] }

            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        request();
    }, [state]);


    return state;
}