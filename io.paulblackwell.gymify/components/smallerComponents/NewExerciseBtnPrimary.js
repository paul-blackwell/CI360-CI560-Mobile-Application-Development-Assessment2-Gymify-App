import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';


import { standardColors } from '../../styles/colors';
let colors = standardColors;


export default NewExerciseBtnPrimary = ({ title, onPress, color }) => {

    return (
        <TouchableOpacity style={styles.newExerciseBtnPrimary} onPress={() => {
            onPress();
        }}>
            <Text style={styles.newExerciseBtnPrimaryText}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    newExerciseBtnPrimary: {
        alignItems: 'center',
        width: '100%',
        maxWidth: 208,
        paddingVertical: 12,
        marginVertical: 16,
        marginHorizontal: 8,
        borderRadius: 4,
        backgroundColor: colors.purple[200]
    },
    newExerciseBtnPrimaryText: {
        color: colors.white[100],
        fontFamily: 'Inter_800ExtraBold',
        fontSize: 14,
    },
});