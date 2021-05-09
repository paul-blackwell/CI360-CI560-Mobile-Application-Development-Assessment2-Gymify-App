import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Dimensions, TextInput, ToastAndroid } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';


import { standardColors } from '../styles/colors';
let colors = standardColors;

const windowHeight = Dimensions.get('window').height;

const ExerciseHighestWeightInput = ({ show, setShow }) => {


    const [highestWeight, setHighestWeight] = useState(null);


    // const showErrorToast = () => {
    //     ToastAndroid.show("You must enter an number greater than 0", ToastAndroid.SHORT);
    // }

    const toastConfig = {
        error: ({ text1, props, ...rest }) => (
            <View style={styles.modelToast}>
                <Text style={styles.modelToastText}>{text1}</Text>
            </View>
        ),
        success: () => { },
        info: () => { },
        any_custom_type: () => { }
    };


    const handleSubmit = () => {
        // Show error toast is null or weight lower than or equal to 0
        if (highestWeight === null || highestWeight <= 0) {
            Toast.show({
                text1: 'You must enter  valid weight.',
                type: 'error',
                height: 200,
                // error: ({ text1, props, ...rest }) => (
                //     <View style={{ zIndex: 200 }}>
                //         <Text>{text1}</Text>
                //         <Text>{props.guid}</Text>
                //     </View>
                // ),
            });
            return;
        }
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            style={styles.modalContainer}
        >
            <View style={styles.modalBackground}></View>
            <View style={styles.modalContentContainer}>
                <View style={styles.modelInputContainer}>
                    <TextInput
                        style={styles.modelInput}
                        onChangeText={setHighestWeight}
                        value={highestWeight}
                        placeholder="e.g 20kg"
                        keyboardType="numeric"
                        onSubmitEditing={handleSubmit}
                    />
                    <TouchableOpacity style={styles.modelBackBtn} onPress={() => { setShow(false) }}>
                        <AntDesign name="close" size={24} color={colors.gray[400]} />
                    </TouchableOpacity>
                </View>
            </View>
            <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: colors.purple[200],
        opacity: 0.9,
        //zIndex: 100,
    },
    modalContainer: {
        // flexDirection: 'row',
        // padding: 8
    },
    modalContentContainer: {
        backgroundColor: colors.white[100],
        padding: 12,
        zIndex: 100,
    },
    modelBackBtn: {
        marginLeft: 8
    },
    modelInputContainer: {
        //backgroundColor: colors.purple[100],
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    modelInput: {
        flex: 1,
        padding: 4,
        backgroundColor: colors.gray[100],
        borderColor: colors.gray[200],
        borderWidth: 1,
        borderRadius: 4,
    },
    modelToast: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white[100],
        borderRadius: 100,
        // margin: 20,
        padding: 16,
    },
    modelToastText: {
        color: colors.red[100]
    }

});





export default ExerciseHighestWeightInput;

