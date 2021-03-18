import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions } from 'react-native';

import { standardColors } from '../styles/colors';
let colors = standardColors;

const windowHeight = Dimensions.get('window').height;

export default CustomModal = ({ title, children, open }) => {

    //const [modelOpen, setModelOpen] = useState(open);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            style={styles.modalContainer}
        >
            <View style={styles.modalBackground}></View>
            <View style={styles.modalContentContainer}>
                <View style={styles.modalTitle}>
                    <Text style={styles.modalTitleText}>{title} </Text>
                </View>
                <View style={styles.modalContent}>
                    {children}
                </View>
            </View>
        </Modal>
    );
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
        // maxHeight: windowHeight - 100, // just for testing
        left: 0,
        right: 0,
        bottom: 0,
        margin: 16,
        backgroundColor: colors.white[100],
        zIndex: 100,
        borderRadius: 20,
        overflow: 'hidden'
    },
    modalTitle: {
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitleText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: 'Inter_800ExtraBold'
    },
    modalContent: {
        flex: 1,
        marginTop: 16,
        paddingHorizontal: 20,
    },
});