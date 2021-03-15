import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { standardColors } from '../../styles/colors';


let colors = standardColors;


export default ExerciseThumbnail = ({exerciseCompleted, uri}) => {
    return (
        <View style={styles.exerciseThumbnail} >
            <View style={styles.exerciseThumbnailOverlay}></View>
            <Image style={styles.exerciseThumbnailImage} source={{ uri: uri }} />
        </View>
    )
}

const styles = StyleSheet.create({
    exerciseThumbnail: {
        position: 'absolute',
        borderColor: colors.gray[200],
        borderWidth: 3,
        overflow: 'hidden',
        borderRadius: 50,
        width: 78,
        height: 78,
        zIndex: 1
    },
    exerciseThumbnailOverlay: {

    },
    exerciseThumbnailImage: {
        width: '100%',
        height: '100%'
    }
});