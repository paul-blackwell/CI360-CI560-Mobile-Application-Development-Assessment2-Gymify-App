import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { standardColors } from '../styles/colors';

let colors = standardColors;

export default EditExerciseModalItem = ({ title, setModalDisplay,  setReplacementExercise, item }) => (
    <TouchableOpacity
        style={styles.item}
        onPress={() => {
            setModalDisplay('confirm-swap-exercise');
            setReplacementExercise(item);
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