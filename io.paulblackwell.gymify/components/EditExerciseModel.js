import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import CustomModal from '../components/CustomModal';


import { standardColors } from '../styles/colors';
let colors = standardColors;


export default EditExerciseModel = ({openModel, setOpenModel}) => {

    return (
        <CustomModal 
        title='Edit exercise' 
        open={openModel} 
        setOpen={setOpenModel}
         >
            <TouchableOpacity style={styles.editOption} onPress={()=>{
                console.log('swap exercise')
            }}>
                <AntDesign style={styles.editOptionIcon} name="swap" size={24} color={colors.gray[400]} />
                <Text style={styles.editOptionText}>Swap Exercise</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editOption} onPress={()=>{
                console.log('delete exercise')
            }}>
                <AntDesign style={styles.editOptionIcon} name="delete" size={24} color={colors.red[100]} />
                <Text style={[styles.editOptionText, styles.editOptionTextRed]}>Delete exercise</Text>
            </TouchableOpacity>
         </CustomModal>
    );
}




const styles = StyleSheet.create({
    editOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
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
    }
});