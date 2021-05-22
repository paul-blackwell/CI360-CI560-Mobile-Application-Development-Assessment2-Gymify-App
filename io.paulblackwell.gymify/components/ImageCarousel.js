import React, { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import CarouselImage from '../components/smallerComponents/CarouselImage';
import CarouselSettingsIcon from '../components/smallerComponents/CarouselSettingsIcon';


import { standardColors } from '../styles/colors';
let colors = standardColors;

const windowHeight = Dimensions.get('window').height;

export default ImageCarousel = ({ images, setOpenModel}) => {


    // This will open the image settings model
    const handelIconPress = () => {
        setOpenModel(true)
    }



    /**
     * If their are no images, don't show the chevrons and set the
     * CarouselImage uri to null, this will make it render an image
     * with a no image placeholder
     */

    if (images.length === 0) {
        return (
            <View>
                <CarouselSettingsIcon onPress={handelIconPress} />
                {/* <View style={[styles.imageCarouselContainer], { marginHorizontal: 48 }}>
                    <CarouselImage uri={null} />
                </View> */}
                <View style={[styles.imageCarouselContainer, { padding: 32 }]}>
                    <CarouselImage uri={null} />
                </View>
            </View>
        )
    }



    /**
     * If their is only one image render  carousel without
     * chevrons
     */
    if (images.length <= 1) {
        return (
            <View>
                <CarouselSettingsIcon onPress={handelIconPress} />
                <View style={[styles.imageCarouselContainer], { marginHorizontal: 48 }}>
                    <CarouselImage uri={images[0].uri} justOneImage={true} />
                </View>
            </View>
        )
    }



    
    /**
     * This will allow the user to click through the carousel images
     */
    const [currentCarouselPosition, setCurrentCarouselPosition] = useState(0);
    const updateCurrentCarouselPosition = (direction) => {
        let increment = currentCarouselPosition;
        if (direction === 'right') {
            if (images.length - 1 === currentCarouselPosition) {
                setCurrentCarouselPosition(0);
                return;
            }
            increment ++;
            setCurrentCarouselPosition(increment)
        } else if (direction === 'left') {
            if(currentCarouselPosition === 0) {
                setCurrentCarouselPosition(images.length - 1);
                return;
            }
            increment --;
            setCurrentCarouselPosition(increment)
        }
    }



    return (
        <View>
            <CarouselSettingsIcon onPress={handelIconPress} />
            <View style={styles.imageCarouselContainer}>
                <TouchableOpacity style={styles.imageCarouselChevron} onPress={() => updateCurrentCarouselPosition('left')}>
                    <Entypo name="chevron-small-left" size={24} color={colors.gray[400]} />
                </TouchableOpacity>
                <CarouselImage uri={images[currentCarouselPosition].uri} />
                <TouchableOpacity style={styles.imageCarouselChevron} onPress={() => updateCurrentCarouselPosition('right')}>
                    <Entypo name="chevron-small-right" size={24} color={colors.gray[400]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    imageCarouselContainer: {
        flexDirection: 'row',
        height: windowHeight / 4,
        alignItems: 'center',
        marginTop: 16
    },
    imageCarouselChevron: {
        padding: 8
    },

});

