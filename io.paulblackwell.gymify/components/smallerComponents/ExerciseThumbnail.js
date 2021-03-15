import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { standardColors } from '../../styles/colors';
import { Feather } from '@expo/vector-icons';


let colors = standardColors;


export default ExerciseThumbnail = ({ exerciseCompleted, uri }) => {
    return (
        <View style={exerciseCompleted ? [styles.exerciseThumbnail, styles.exerciseThumbnailBorderGreen] : [styles.exerciseThumbnail, styles.exerciseThumbnailBorderGray]} >
            <View style={styles.exerciseThumbnailOverlay}>
                <Feather style={styles.exerciseThumbnailOverlayIcon} name="check" size={24} color={colors.green[200]} />
            </View>
            <Image style={styles.exerciseThumbnailImage} source={{ uri: uri }} />
        </View>
    )
}

const styles = StyleSheet.create({
    exerciseThumbnail: {
        position: 'absolute',
        borderWidth: 3,
        overflow: 'hidden',
        borderRadius: 50,
        width: 78,
        height: 78,
        zIndex: 1
    },
    exerciseThumbnailBorderGreen: {
        borderColor: colors.green[200],
    },
    exerciseThumbnailBorderGray: {
        borderColor: colors.gray[200],
    },
    exerciseThumbnailOverlay: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green[100],
        opacity: 0.9,
        width: '100%',
        height: '100%',
        zIndex: 1
    },
    exerciseThumbnailOverlayIcon: {

    },
    exerciseThumbnailImage: {
        width: '100%',
        height: '100%'
    }
});