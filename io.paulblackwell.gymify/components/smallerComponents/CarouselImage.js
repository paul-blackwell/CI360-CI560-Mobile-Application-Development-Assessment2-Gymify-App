import React from 'react';
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';


import { standardColors } from '../../styles/colors';
let colors = standardColors;

const windowHeight = Dimensions.get('window').height;

export default CarouselImage = ({ uri, justOneImage = false }) => {

    var yourPicture = require('../../assets/icons/no_image_icon_large.png');

    /**
     * If there is not uri for that image show the
     * no image placeholder
     */
    if (uri === null) {
        return (
            <View style={styles.carouselImageContainer}>
                <Image
                    style={{ width: "100%", maxHeight: windowHeight / 4 }}
                    source={yourPicture}
                />
            </View>
        )
    }


    /**
     * If there is only one image
     */
    if(justOneImage) {
        return (
        <View >
          <Image source={{uri: uri}} style={{ width: "100%", height: windowHeight / 4 }}/>
        </View>
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