import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { standardColors } from '../../styles/colors';
import { Feather } from '@expo/vector-icons';


let colors = standardColors;




export default ExerciseThumbnail = ({ exerciseCompleted, uri}) => {



    /**
     * This function just sets the image source to uri
     * or gets it from the saved images, if the image
     * exists or not
     * @returns image uri or image path 
     */
    const getImage = () => {
        if (uri === null || uri === undefined) {
            return require('../../assets/icons/no_image_icon.png')
        } else {
            return { uri: uri }
        }
    }


    return (
        <View style={exerciseCompleted ? [styles.exerciseThumbnail, styles.exerciseThumbnailBorderGreen] : [styles.exerciseThumbnail, styles.exerciseThumbnailBorderGray]} >
            {exerciseCompleted &&
                <View style={styles.exerciseThumbnailOverlay}>
                    <Feather style={styles.exerciseThumbnailOverlayIcon} name="check" size={32} color={colors.green[200]} />
                </View>
            }
            <Image style={styles.exerciseThumbnailImage} source={getImage()} />
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
    exerciseThumbnailOverlayHidden: {

    },
    exerciseThumbnailOverlayIcon: {

    },
    exerciseThumbnailImage: {
        width: '100%',
        height: '100%'
    }
});