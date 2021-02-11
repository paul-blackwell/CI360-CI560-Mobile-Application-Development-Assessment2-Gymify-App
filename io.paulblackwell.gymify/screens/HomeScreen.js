import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function HomeScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text >Home Screen</Text>
        <Button
            title="Next Screen"
            onPress={() => {
              navigation.navigate('WorkoutList')
            }}
            color="#ff5c5c"
          />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center'
  },
});