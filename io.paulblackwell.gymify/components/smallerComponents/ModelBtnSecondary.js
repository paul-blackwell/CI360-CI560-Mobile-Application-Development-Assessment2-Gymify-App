import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';

import { standardColors } from '../../styles/colors';
let colors = standardColors;

export default ModelBtnSecondary = ({title, onPress }) => {
    return (
        <TouchableOpacity style={styles.modalBtnSecondary} onPress={() => {
           onPress()
        }}>
            <Text style={styles.modalBtnSecondaryText}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    modalBtnSecondary: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 24,
        //backgroundColor: colors.purple[100]
    },
    modalBtnSecondaryText: {
        color: colors.purple[200],
        fontSize: 18,
    }
});