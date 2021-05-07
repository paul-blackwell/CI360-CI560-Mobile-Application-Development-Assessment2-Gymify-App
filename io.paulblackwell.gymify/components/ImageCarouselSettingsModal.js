import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomModal from '../components/CustomModal';
import ModelBtnSecondary from '../components/smallerComponents/ModelBtnSecondary';
import ModelIcon from '../components/smallerComponents/ModelIcon';

const ImageCarouselSettingsModal = ({openModel,setOpenModel}) => {

    console.log('Model was rendered')


    return (
        <CustomModal
                title='Edit image'
                open={openModel}
                setOpen={setOpenModel}
            >
                <View>
                    <TouchableOpacity onPress={() => console.log('add image')}>
                        <ModelIcon icon="add_image" />
                    </TouchableOpacity>

                    <ModelBtnSecondary title='Cancel' onPress={() => {
                        setOpenModel(false);
                    }} />
                </View>
            </CustomModal>
    )
}

const styles = StyleSheet.create({
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



export default ImageCarouselSettingsModal;

