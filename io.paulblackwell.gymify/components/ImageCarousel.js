import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import CarouselImage from '../components/smallerComponents/CarouselImage';
import CarouselSettingsIcon from '../components/smallerComponents/CarouselSettingsIcon';


import { standardColors } from '../styles/colors';
let colors = standardColors;

const windowHeight = Dimensions.get('window').height;

export default ImageCarousel = ({ images }) => {


    // images.forEach(image => {
    //     console.log(image.uri)
    // });


    /**
     * If their are no images, don't show the chevrons and set the
     * CarouselImage uri to null, this will make it render an image
     * with a no image placeholder
     */

    if(images.length === 0) {
        return (
            <View>
                <CarouselSettingsIcon onPress={() => { console.log('i was clicked') }} />
                <View style={[styles.imageCarouselContainer], {marginHorizontal: 48}}>
                    <CarouselImage uri={null} />
                </View>
            </View>
        )
    }



    /**
     * If their is only one image render  carousel without
     * chevrons
     */
    // if(images.length <= 1) {
    //     return (
    //         <View>
    //             <CarouselSettingsIcon onPress={() => { console.log('i was clicked') }} />
    //             <View style={styles.imageCarouselContainer}>
    //                 <TouchableOpacity style={styles.imageCarouselChevron} onPress={() => console.log('i was clicked')}>
    //                     <Entypo name="chevron-small-left" size={24} color={colors.gray[400]} />
    //                 </TouchableOpacity>
    //                 <CarouselImage uri={images[0].uri} />
    //                 <TouchableOpacity style={styles.imageCarouselChevron} onPress={() => console.log('i was clicked')}>
    //                     <Entypo name="chevron-small-right" size={24} color={colors.gray[400]} />
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     )
    // }


    return (
        <View>
            <CarouselSettingsIcon onPress={() => { console.log('i was clicked') }} />
            <View style={styles.imageCarouselContainer}>
                <TouchableOpacity style={styles.imageCarouselChevron} onPress={() => console.log('i was clicked')}>
                    <Entypo name="chevron-small-left" size={24} color={colors.gray[400]} />
                </TouchableOpacity>
                <CarouselImage uri={images[0].uri} />
                <TouchableOpacity style={styles.imageCarouselChevron} onPress={() => console.log('i was clicked')}>
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

