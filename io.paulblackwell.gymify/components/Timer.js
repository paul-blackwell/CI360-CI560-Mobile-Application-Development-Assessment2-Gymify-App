import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


import { standardColors } from '../../styles/colors';
let colors = standardColors;



export default Timer = ({ time }) => {
    return (
        <View>
            <Text>I am a timer</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    timerContainer: {
        backgroundColor: colors.purple[200],
    }

});