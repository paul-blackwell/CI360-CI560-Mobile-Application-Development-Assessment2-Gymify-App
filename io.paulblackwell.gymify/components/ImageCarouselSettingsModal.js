import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CustomModal from '../components/CustomModal';
import ModelBtnSecondary from '../components/smallerComponents/ModelBtnSecondary';
import ModelIcon from '../components/smallerComponents/ModelIcon';

import { standardColors } from '../styles/colors';
let colors = standardColors;


const ImageCarouselSettingsModal = ({ openModel, setOpenModel }) => {

    console.log('Model was rendered')


    return (
        <CustomModal
            title='Edit image'
            open={openModel}
            setOpen={setOpenModel}
        >
            <View style={styles.modelMain}>
                <TouchableOpacity style={styles.editOption} onPress={() => console.log('add image')}>
                    <ModelIcon icon="add_image" />
                    <Text style={[styles.modelText, { marginLeft: 12 }]}>Upload image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editOption} onPress={() => console.log('add image')}>
                    <AntDesign style={styles.deleteIcon} name="delete" size={24} color={colors.red[100]} />
                    <Text style={[styles.modelText, styles.modelTextRed]}>Delete image/images</Text>
                </TouchableOpacity>
                <ModelBtnSecondary title='Cancel' onPress={() => {
                    setOpenModel(false);
                }} />
            </View>
        </CustomModal>
    )
}

const styles = StyleSheet.create({
    modelMain: {
        flex: 1,
        paddingTop: 16,
    },
    modelText: {
        fontSize: 18,
        color: colors.gray[300],
        fontFamily: 'Inter_400Regular'
    },
    modelTextBold: {
        fontSize: 18,
        color: colors.gray[400],
        fontFamily: 'Inter_800ExtraBold'
    },
    editOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    mainContent: {
        flex: 1,
        paddingTop: 16,
    },
    optionIcon: {
        marginRight: 12
    },
    modelText: {
        fontSize: 18,
        color: colors.gray[400],
    },
    modelTextRed: {
        fontSize: 18,
        color: colors.red[100]
    },
    deleteIcon: {
        marginRight: 12
    },
});



export default ImageCarouselSettingsModal;

