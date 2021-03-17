import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';


import { standardColors } from '../../styles/colors';
let colors = standardColors;



export default ModelBtnPrimary = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.modalBtnPrimary} onPress={() => {
            onPress()
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
        backgroundColor: colors.red[100],
        borderRadius: 4
    },
    modalBtnPrimaryText: {
        color: colors.white[100],
        fontFamily: 'Inter_800ExtraBold',
        fontSize: 18,
    },
});





