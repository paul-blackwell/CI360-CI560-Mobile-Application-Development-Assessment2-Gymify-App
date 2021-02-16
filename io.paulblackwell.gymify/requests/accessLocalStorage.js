import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (error) {
        console.log(error);
    }
};


export const retrieveData = async () => {
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