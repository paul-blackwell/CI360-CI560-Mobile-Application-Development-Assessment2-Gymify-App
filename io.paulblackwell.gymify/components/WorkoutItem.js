import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {standardColors} from '../styles/colors';


let colors = standardColors;

export default WeeklyWorkoutItem = ({ title, id, warmups, exercises, navigation}) => {

    let singularOrPlural;
    const totalNumberExercises = warmups.length + exercises.length;

    if(totalNumberExercises === 1) {
        singularOrPlural = 'Exercise';
    } else if (totalNumberExercises > 1) {
        singularOrPlural = 'Exercises';
    }

    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                //Go to WorkoutList screen and pass the workout id to that screen
                 navigation.navigate('WorkoutStack', {
                    screen: 'WorkoutScreen',
                    params: { weekId: id }
                });
                console.log('I was pressed')
            }}>
            <View style={styles.itemTitle}>
                <Text style={styles.itemTitleText}>{title}</Text>
                <Text style={styles.itemNumberOfExercisesText}>{`${totalNumberExercises} ${singularOrPlural}`}</Text>
            </View>
            <View style={styles.itemIconContainer}>
                <AntDesign name="arrowright" size={24} color={colors.gray[400]} />
            </View>
        </TouchableOpacity>
    )

};


const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: colors.white[100],
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 8,
        borderColor: colors.gray[200],
        borderWidth: 1,
        borderRadius: 4,
    },
    itemTitle: {
        justifyContent: 'center',
        width: '50%',
    },
    itemTitleText: {
        fontSize: 18,
        fontFamily: 'Inter_400Regular',
        color: colors.gray[400],
    },
    itemNumberOfExercisesText: {
        fontSize: 16,
        color: colors.gray[300]
    },
    itemIconContainer: {
        width: '50%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});