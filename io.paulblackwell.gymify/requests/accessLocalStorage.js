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
    }, []);
};


/**
 * This function will get any saved data from local storage based on a key.
 * However, if no data is returned, it will return a string.
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
                setState('No data under this key');
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


/**
 * This function will only be used in development/testing as we
 * don't want to delete data but instead update/override in using the 
 * storeData function. We need this function to clear up any mistakes with 
 * data in AsyncStorage, that may be made during development.
 * @param {string} key - This is the key the data is stored under in AsyncStorage.
 */

export const deleteData = (key) => {
    const removeItem = async (keyExtractor) => {
        try {
            await AsyncStorage.removeItem(keyExtractor);
            // Uncomment to show all keys in AsyncStorage
            // const keys = await AsyncStorage.getAllKeys();
            // console.log(keys)
        } catch (error) {
            console.error('Error clearing app data.');
        }
    }

    useEffect(() => {
        removeItem(key);
     }, []);
}
