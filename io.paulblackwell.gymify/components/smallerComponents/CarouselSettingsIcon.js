import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'; 




import { standardColors } from '../../styles/colors';
let colors = standardColors;

export default CarouselSettingsIcon = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.carouselSettingsIcon} onPress={onPress}>
            <Feather name="settings" size={24} color={colors.gray[200]} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    carouselSettingsIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        right: 0,
        width: 48,
        height: 48,
        backgroundColor: colors.white[100],
        borderColor: colors.gray[200],
        borderWidth: 2,
        borderRadius: 100,
        shadowOpacity: 0,
        elevation: 3,
        zIndex: 100
    }
});