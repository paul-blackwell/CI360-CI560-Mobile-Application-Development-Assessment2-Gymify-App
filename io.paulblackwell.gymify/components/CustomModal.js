import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions } from 'react-native';

import { standardColors } from '../styles/colors';
let colors = standardColors;

const windowHeight = Dimensions.get('window').height;

export default CustomModal = ({ title, children, open }) => {

    const [modelOpen, setModelOpen] = useState(open);


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modelOpen}
            // onRequestClose={() => {
            //     Alert.alert("Modal has been closed.");
            // }}
            style={styles.modalContainer}
        >
            <View style={styles.modalBackground}></View>
            <View style={styles.modalContentContainer}>
                <View style={styles.modalTitle}>
                    <Text style={styles.modalTitleText}>Edit exercise </Text>
                </View>
                <View style={styles.modalContent}>

                </View>
                <View style={styles.modalButtons}>
                    <TouchableOpacity style={styles.modalBtnSecondary} onPress={() => {
                        setModelOpen(false)
                    }}>
                        <Text style={styles.modalBtnSecondaryText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}




const styles = StyleSheet.create({
    modalContainer: {
        // backgroundColor: colors.purple[200]
    },
    modalBackground: {
        flex: 1,
        backgroundColor: colors.purple[200],
        opacity: 0.9,
        zIndex: 100
    },
    modalContentContainer: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        minHeight: windowHeight / 2,
        left: 0,
        right: 0,
        margin: 16,
        //paddingVertical: 16,
        paddingTop: 16,
        backgroundColor: colors.white[100],
        zIndex: 100,
        borderRadius: 20,
        overflow: 'hidden'
    },
    modalContent: {
        flex: 3
    },
    modalTitle: {
        flex: 1,
        backgroundColor: colors.purple[100],
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    modalTitleText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: 'Inter_800ExtraBold'
    },
    modalButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    modalBtnSecondary: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: colors.purple[100]
    },
    modalBtnSecondaryText: {
        //color: colors.purple[200],
        fontSize: 18,
    }
});