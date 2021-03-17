import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CustomModal from '../components/CustomModal';
import ModelBtnPrimary from '../components/smallerComponents/ModelBtnPrimary';
import ModelBtnSecondary from '../components/smallerComponents/ModelBtnSecondary';


import { standardColors } from '../styles/colors';
let colors = standardColors;


export default EditExerciseModel = ({ openModel, setOpenModel }) => {

    const [modalDisplay, setModalDisplay] = useState('edit-exercise');

    if (modalDisplay === 'edit-exercise') {
        return (
            <CustomModal
                title='Edit exercise'
                open={openModel}
                setOpen={setOpenModel}
            >
                <View style={styles.mainContent}>
                    <TouchableOpacity style={styles.editOption} onPress={() => {
                        console.log('swap exercise')
                    }}>
                        <AntDesign style={styles.editOptionIcon} name="swap" size={24} color={colors.gray[400]} />
                        <Text style={styles.editOptionText}>Swap Exercise</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editOption} onPress={() => {
                        setModalDisplay('delete-exercise')
                    }}>
                        <AntDesign style={styles.editOptionIcon} name="delete" size={24} color={colors.red[100]} />
                        <Text style={[styles.editOptionText, styles.editOptionTextRed]}>Delete exercise</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <ModelBtnSecondary title='Cancel' onPress={() => {
                        setOpenModel(false);
                    }} />
                </View>

            </CustomModal>
        );
    } else if(modalDisplay === 'delete-exercise') {
        return (
            <CustomModal
                title='Delete exercise'
                open={openModel}
                setOpen={setOpenModel}
            >
                <View style={styles.mainContent}>
                    <Text style={styles.modelText}>Are you sure you want to delete this exercise? If you do, you can always add the it agin using the “plus” button in the workout screen.</Text>
                </View>
                <View>
                    <ModelBtnPrimary title='Delete this  exercise ' onPress={()=> {
                        // TODO: DELETE EXERCISE 
                        setModalDisplay('edit-exercise')
                        setOpenModel(false)
                    }} />
                    <ModelBtnSecondary title='Go back to safety' onPress={() => {
                        //setOpenModel(false);
                        setModalDisplay('edit-exercise')
                    }} />
                </View>

            </CustomModal>
        )
    }
}




const styles = StyleSheet.create({
    modelText: {
        fontSize: 18,
        color: colors.gray[300] 
    },
    editOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    mainContent: {
        flex: 1,
        paddingTop: 16
    },
    editOptionIcon: {
        marginRight: 12
    },
    editOptionText: {
        color: colors.gray[400],
        fontSize: 18,
    },
    editOptionTextRed: {
        color: colors.red[100]
    },
});