import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';


/**
 * This function will save data to local storage
 * @param {string} key - This key will be used as a keyExtractor so the data can be retrieved later.
 * @param {object} data -This will be the data that needs to be saved but will be converted into a string.
 */
export const storeData = async (key, data) => {
    
    const [state, setState] = setState('');

    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }

    // useEffect(() => {
       
    // }, [input])
};


/**
 * This function will get any saved data from local storage based on a key.
 * However, if no data is returned, it will save the default workouts to local 
 * storage and return that data.
 * @param {string} key - This is the key the data is stored under.
 * @return {object} - The data stored 
 */

export const retrieveData = (key) => {
    const [state, setState] = useState('');

    const request = async (keyExtractor) => {
        try {
            const value = await AsyncStorage.getItem(keyExtractor);
            if (value !== null) {
                setState(value)
            } else if (value === null){
                setState('');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        request(key);
     }, [state]);

     return state;
}