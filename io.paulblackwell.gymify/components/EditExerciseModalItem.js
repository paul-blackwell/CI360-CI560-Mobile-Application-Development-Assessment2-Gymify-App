import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { standardColors } from '../styles/colors';

let colors = standardColors;

export default EditExerciseModalItem = ({ title, setSwapExercise, setModalDisplay }) => (
    <TouchableOpacity
        style={styles.item}
        onPress={() => {
            // TODO: move to next section of the modal and update parent state
            setSwapExercise(title) // will need to be made into and object with tile and id
            setModalDisplay('confirm-swap-exercise')
        }}>
        <View style={styles.itemTitle}>
            <Text style={styles.itemTitleText}>{title}</Text>
        </View>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.white[100],
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderTopWidth: 1,
        borderTopColor: colors.gray[200],
        // borderBottomWidth: 1,
        // borderBottomColor: colors.gray[200],
    },
    itemTitle: {

    },
    itemTitleText: {
        fontSize: 18,
        fontFamily: 'Inter_400Regular',
        color: colors.gray[400],
    },
});