import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { standardColors } from '../styles/colors';


let colors = standardColors;


const ExerciseThumbnail = (props) => {
    return(
        <View style={styles.exerciseThumbnail} >
            <View style={styles.exerciseThumbnailOverlay}></View>
            <Image style={styles.exerciseThumbnailImage} source={{uri: props.uri}} />
        </View>
    )
}



export default ExerciseItem = ({ title, id, navigation, time, sets, reps, maxWeight, completed, images }) => {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                console.log('I was pressed')
            }}
        >
            {/* <Text>{title}</Text>
            <Text>{time}</Text>
            <Text>{sets}</Text>
            <Text>{reps}</Text>
            <Text>{maxWeight}</Text>
            <Text>{completed}</Text>
            <Text>{images[0].uri}</Text> */}
            <ExerciseThumbnail uri={images[0].uri}/>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    item: {
        //flexDirection: 'row',
        backgroundColor: colors.white[100],
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 8,
        borderColor: colors.gray[200],
        borderWidth: 1,
        borderRadius: 4,
    },
    itemTitle: {
        justifyContent: 'center',
        width: '50%',
    },
    itemTitleText: {
        fontSize: 18,
        fontFamily: 'Inter_400Regular',
        color: colors.gray[400],
    },
    itemNumberOfExercisesText: {
        fontSize: 16,
        color: colors.gray[300]
    },
    itemIconContainer: {
        width: '50%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    exerciseThumbnail: {
        borderColor: colors.gray[200],
        borderWidth: 2,
        overflow: 'hidden',
        borderRadius: 50,
        width: 74,
        height: 74
    },
    exerciseThumbnailOverlay: {

    },
    exerciseThumbnailImage: {
        width: '100%',
        height: '100%'
    }
});