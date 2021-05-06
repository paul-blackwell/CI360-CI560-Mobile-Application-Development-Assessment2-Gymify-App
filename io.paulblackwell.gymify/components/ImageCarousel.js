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

 
    return (
        <View style={styles.imageCarouselContainer}>
            <CarouselSettingsIcon onPress={()=> {console.log('i was clicked')}} />
            <TouchableOpacity style={styles.imageCarouselChevron} onPress={() => 'i was clicked'}>
                <Entypo name="chevron-small-left" size={24} color={colors.gray[400]} />
            </TouchableOpacity>
            <CarouselImage uri={images[0].uri}/>
            <TouchableOpacity style={styles.imageCarouselChevron} onPress={() => 'i was clicked'}>
                <Entypo name="chevron-small-right" size={24} color={colors.gray[400]} />
            </TouchableOpacity>
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

