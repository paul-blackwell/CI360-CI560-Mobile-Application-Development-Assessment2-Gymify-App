import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';


/**
 * This function will save data to local storage
 * @param {string} key - This key will be used as a keyExtractor so the data can be retrieved later.
 * @param {object} data -This will be the data that needs to be saved but will be converted into a string.
 */
export const storeData = (key, data) => {

    //const [state, setState] = setState('');

    const request = async (keyExtractor, object) => {
        try {
            await AsyncStorage.setItem(keyExtractor, JSON.stringify(object));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
       request(key, data);
    }, [])
};


/**
 * This function will get any saved data from local storage based on a key.
 * However, if no data is returned, it will return an empty string.
 * @param {string} key - This is the key the data is stored under in AsyncStorage.
 * @return {state} - The data stored 
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