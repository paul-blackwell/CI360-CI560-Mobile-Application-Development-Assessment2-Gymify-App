import AsyncStorage from '@react-native-community/async-storage';
import defaultWorkouts from '../data/defaultWorkouts';

/**
 * This function will save data to local storage
 * @param {string} key - This key will be used as a keyExtractor so the data can be retrieved later.
 * @param {object} data -This will be the data that needs to be saved but will be converted into a string.
 */
export const storeData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};


/**
 * This function will get any saved data from local storage based on a key.
 * However, if no data is returned, it will save the default workouts to local 
 * storage and return that data.
 * @param {string} key - This is the key the data is stored under.
 * @return {object} - The data stored 
 */
export const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        } else {
            // Save default workouts locally 
            storeData('workouts', defaultWorkouts);
            // The function will call itself (again), now the default workouts have been saved.
            retrieveData();
        }
    } catch (error) {
        console.log(error);
    }
};