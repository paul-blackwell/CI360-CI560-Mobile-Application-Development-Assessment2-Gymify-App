import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';


import { standardColors } from '../../styles/colors';
let colors = standardColors;



export default ModelBtnPrimary = ({ title, onPress, color }) => {

    let buttonStyles;
    if (color === 'green') {
        buttonStyles = [styles.modalBtnPrimary, styles.modalBtnPrimaryColorGreen]
    } else {
        buttonStyles = [styles.modalBtnPrimary, styles.modalBtnPrimaryColorRed]
    }

    return (
        <TouchableOpacity style={buttonStyles} onPress={() => {
            onPress();
        }}>
            <Text style={styles.modalBtnPrimaryText}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    modalBtnPrimary: {
        alignItems: 'center',
        paddingVertical: 16,
        marginHorizontal: 20,
        borderRadius: 4
    },
    modalBtnPrimaryColorRed: {
        backgroundColor: colors.red[100],
    },
    modalBtnPrimaryColorGreen: {
        backgroundColor: colors.green[200],
    },
    modalBtnPrimaryText: {
        color: colors.white[100],
        fontFamily: 'Inter_800ExtraBold',
        fontSize: 18,
    },
});





