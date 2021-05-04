import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { standardColors } from '../styles/colors';
import truncate from '../utils/truncate';
import ExerciseThumbnail from '../components/smallerComponents/ExerciseThumbnail';


let colors = standardColors;


/**
 * This function will change what the sub title text is
 * depending on if its an exercise thats time or has sets
 * @param {int} time 
 * @param {int} sets 
 * @returns a string with either the exercise in seconds, minutes or sets  
 */
const setSubTitle = (time, sets) => {
    if (time > 0 && time < 1) { //If it is a timed exercise and in seconds
        return `${time.toFixed(2).toString().replace('0.', '')} seconds`
    } else if (time > 0 && time >= 1) { //If it is a timed exercise and in minutes 
        return `${time} minutes`
    } else { //If it is a exercise that in sets and reps
        return `${sets} x sets`
    }
}


export default ExerciseItem = ({ title, id, navigation, time, sets, reps, maxWeight, completed, images, setOpenModel, setCurrentExerciseSelected }) => {

    return (
        <TouchableOpacity
            style={styles.itemWrapper}
            onPress={() => {
                //Go to Exercise screen 
                navigation.navigate('WorkoutStack', {
                    screen: 'ExerciseScreen',
                    params: { exerciseTitle: title }
                });
            }}
        >
            <ExerciseThumbnail uri={images[0].uri} origin={images[0].origin} exerciseCompleted={completed} />
            <View style={styles.item}>
                <View style={styles.itemTitle}>
                    <Text style={styles.itemTitleText}>{truncate(title, 16)}</Text>
                    <Text style={styles.itemSubTitleText}>{setSubTitle(time, sets)}</Text>
                </View>
                <TouchableOpacity
                    style={styles.itemIconContainer}
                    onPress={() => {
                        setCurrentExerciseSelected({ title: title, id: id }) // the modal will use this to know what exercise to edit 
                        setOpenModel(true);
                    }}
                >
                    <MaterialCommunityIcons name="dots-horizontal" size={24} color={colors.gray[400]} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    itemWrapper: {
        justifyContent: 'center'
    },
    item: {
        flexDirection: 'row',
        backgroundColor: colors.white[100],
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 12,
        marginLeft: 20,
        borderColor: colors.gray[200],
        borderWidth: 1,
        borderRadius: 4,
    },
    itemTitle: {
        flex: 1,
        marginLeft: 48,
        justifyContent: 'center',
        width: '50%',
    },
    itemTitleText: {
        fontSize: 18,
        fontFamily: 'Inter_400Regular',
        color: colors.gray[400],
    },
    itemSubTitleText: {
        fontSize: 12,
        color: colors.gray[300]
    },
    itemIconContainer: {
        //backgroundColor: colors.purple[200],
        //width: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
});