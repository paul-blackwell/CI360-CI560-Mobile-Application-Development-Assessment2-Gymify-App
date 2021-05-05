import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';


import { standardColors } from '../../styles/colors';
let colors = standardColors;



export default ExerciseBtnPrimary = ({ title, onPress, color }) => {

    return (
        <TouchableOpacity style={styles.exerciseBtnPrimary} onPress={() => {
            onPress();
        }}>
            <Text style={styles.exerciseBtnPrimaryText}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    exerciseBtnPrimary: {
        alignItems: 'center',
        width: '100%',
        maxWidth: 208,
        paddingVertical: 12,
        marginVertical: 16,
        marginHorizontal: 8,
        borderRadius: 4,
        backgroundColor: colors.purple[200]
    },
    exerciseBtnPrimaryText: {
        color: colors.white[100],
        fontFamily: 'Inter_800ExtraBold',
        fontSize: 14,
    },
});


