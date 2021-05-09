import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Dimensions } from 'react-native';


import { standardColors } from '../styles/colors';
import { color } from 'react-native-reanimated';
let colors = standardColors;


const windowHeight = Dimensions.get('window').height;


const ExerciseHighestWeightInput = ({ show }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            style={styles.modalContainer}
        >
            <TouchableOpacity style={styles.modelBackBtn} onPress={() => { console.log('I was presses') }}>
                <Feather style={{ marginLeft: 20 }} name="arrow-left" size={24} color={colors.gray[400]} />
            </TouchableOpacity>

            <View style={styles.modalBackground}></View>
            <View style={styles.modalContentContainer}>

            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalContainer: {
    },
    modalBackground: {
        flex: 1,
        backgroundColor: colors.purple[200],
        opacity: 0.9,
        zIndex: 100,
    },
    modalContentContainer: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        minHeight: windowHeight / 2,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 16,
        backgroundColor: colors.white[100],
        zIndex: 100,
        borderRadius: 20,
        overflow: 'hidden'
    },
    modelBackBtn: {
        position: 'absolute',
        top: 0,
        right: 0
    }

});





export default ExerciseHighestWeightInput;

