import React from 'react';
import { StyleSheet, Image, View } from 'react-native';




import { standardColors } from '../../styles/colors';
let colors = standardColors;

export default CarouselImage = ({ uri }) => {

    /**
     * If there is not uri for that image show the
     * no image placeholder
     */
    if (uri === null) {
        return (
            <Image
                style={[styles.carouselImage, { elevation: 5, }]}
                source={require('../../assets/icons/no_image_icon_large.png')}
            />
        )
    }


    return (

        <View style={styles.carouselImageContainer}>
            <Image
                style={styles.carouselImage}
                source={{ uri: uri }}
            />
        </View>

    )
}


const styles = StyleSheet.create({
    carouselImageContainer: {
        flex: 1,
        backgroundColor: colors.white[100],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    carouselImage: {
        flex: 1,
    }
});