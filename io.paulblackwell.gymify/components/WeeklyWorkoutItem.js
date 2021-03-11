import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import colors from '../styles/colors'

export default WeeklyWorkoutItem = ({ title, id, navigation }) => (
    <View style={styles.item}>
        <Text>{title}</Text>
        <Button
            title="Go to workout"
            onPress={() => {
                //Go to WorkoutList screen and pass the workout id to that screen
                navigation.navigate('WorkoutStack', {
                    screen: 'WorkoutsScreen',
                    params: { weekId: id }
                });
            }}
        />
    </View>
);


const styles = StyleSheet.create({
    item: {
        // width: '100%',
        backgroundColor: colors.white[100],
        padding: 20,
        marginVertical: 8,
        // marginHorizontal: 16,
        borderColor: colors.gray[200],
        borderWidth: 1,
        borderRadius: 4,
    },
});