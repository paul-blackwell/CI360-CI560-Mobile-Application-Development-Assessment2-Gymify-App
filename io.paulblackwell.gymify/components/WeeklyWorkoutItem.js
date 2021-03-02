import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default WeeklyWorkoutItem = ({ item, navigation }) => (
    <View style={styles.container}>
        <Text>{item.name}</Text>
        <Button
            title="Go to workout"
            onPress={() => {
                // Go to WorkoutList screen and pass the workout id to that screen
                navigation.navigate('WorkoutStack', {
                    screen: 'WorkoutListScreen',
                    params: { workoutListId: item.id }
                });
            }}
        />
    </View>
);


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});