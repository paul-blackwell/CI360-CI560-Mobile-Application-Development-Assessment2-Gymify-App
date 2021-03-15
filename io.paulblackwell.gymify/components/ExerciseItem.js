import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { standardColors } from '../styles/colors';


let colors = standardColors;


const ExerciseThumbnail = (props) => {
    return (
        <View style={styles.exerciseThumbnail} >
            <View style={styles.exerciseThumbnailOverlay}></View>
            <Image style={styles.exerciseThumbnailImage} source={{ uri: props.uri }} />
        </View>
    )
}



export default ExerciseItem = ({ title, id, navigation, time, sets, reps, maxWeight, completed, images }) => {
    return (
        <TouchableOpacity
            style={styles.itemWrapper}
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
            <ExerciseThumbnail uri={images[0].uri} />
            <View style={styles.item}>
                <View style={styles.itemTitle}>
                    <Text style={styles.itemTitleText}>{title}</Text>
                    <Text style={styles.itemSubTitleText}>30 seconds</Text>
                </View>
                <TouchableOpacity 
                style={styles.itemIconContainer}
                onPress={()=> {
                    console.log('the menu was pressed')
                }}
                >
                    <MaterialCommunityIcons name="dots-horizontal" size={24} color={colors.gray[400]} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    itemWrapper: {
        justifyContent: 'center'
    },
    item: {
        flexDirection: 'row',
        marginLeft: 12,
        backgroundColor: colors.white[100],
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginVertical: 12,
        borderColor: colors.gray[200],
        borderWidth: 1,
        borderRadius: 4,
    },
    itemTitle: {
        flex: 1,
        marginLeft: 58,
        justifyContent: 'center',
        width: '50%',
    },
    itemTitleText: {
        fontSize: 18,
        fontFamily: 'Inter_400Regular',
        color: colors.gray[400],
    },
    itemSubTitleText: {
        fontSize: 12,
        color: colors.gray[300]
    },
    itemIconContainer: {
        //backgroundColor: colors.purple[200],
        //width: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
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