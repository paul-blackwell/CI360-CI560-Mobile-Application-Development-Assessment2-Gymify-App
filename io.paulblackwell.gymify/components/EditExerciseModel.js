import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import CustomModal from '../components/CustomModal';


import { standardColors } from '../styles/colors';
let colors = standardColors;


export default EditExerciseModel = ({openModel, setOpenModel}) => {

    return (
        <CustomModal open={openModel} setOpen={setOpenModel} />
    );
}




const styles = StyleSheet.create({
    
});