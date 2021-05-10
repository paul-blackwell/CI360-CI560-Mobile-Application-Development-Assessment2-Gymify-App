import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import CustomModal from './CustomModal';
import ModelBtnPrimary from './smallerComponents/ModelBtnPrimary';
import ModelBtnSecondary from './smallerComponents/ModelBtnSecondary';



import { standardColors } from '../styles/colors';
let colors = standardColors;


const windowHeight = Dimensions.get('window').height;


export default SettingsModal = ({ openModel, setOpenModel }) => {



    return (
        <CustomModal
            title='Reset exercises'
            open={openModel}
            setOpen={setOpenModel}
        >
            <View style={styles.mainContent}>
                <Text style={styles.modelText}>This will reset all your exercises to be marked as not completed, it will not reset any of your highest weight scores. Are you sure you what to do this?</Text>
            </View>
            <View>
                <ModelBtnPrimary title='Reset my exercises'  onPress={() => {
                    setOpenModel(false)
                }} />
                <ModelBtnSecondary title='Go back' onPress={() => {
                    setOpenModel(false)
                }} />
            </View>
        </CustomModal>
    )
}




const styles = StyleSheet.create({
    modelText: {
        fontSize: 18,
        color: colors.gray[300],
        fontFamily: 'Inter_400Regular',
        marginBottom: 8
    },
    mainContent: {
        flex: 1,
        paddingTop: 16,
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
    modelLoader: {
        height: "100%",
        marginTop: "50%",
        alignSelf: "center",
    }
});