import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default WeeklyWorkoutItem = ({ title, id, navigation }) => (
    <View style={styles.item}>
        <Text>{title}</Text>
        <Text>{id}</Text>
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
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });