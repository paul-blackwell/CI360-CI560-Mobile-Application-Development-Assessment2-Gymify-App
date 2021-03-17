import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { standardColors } from '../styles/colors';
import truncate from '../utils/truncate';
import ExerciseThumbnail from '../components/smallerComponents/ExerciseThumbnail';


let colors = standardColors;


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
            <ExerciseThumbnail uri={images[0].uri}  exerciseCompleted={true}/>
            <View style={styles.item}>
                <View style={styles.itemTitle}>
                    <Text style={styles.itemTitleText}>{truncate(title, 16)}</Text>
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
        backgroundColor: colors.white[100],
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 12,
        marginLeft: 20,
        borderColor: colors.gray[200],
        borderWidth: 1,
        borderRadius: 4,
    },
    itemTitle: {
        flex: 1,
        marginLeft: 48,
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
});