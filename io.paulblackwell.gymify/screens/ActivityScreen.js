
import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, SafeAreaView } from 'react-native';
import colors from '../styles/colors'

export default function ActivityScreen({ navigation }) {
  
    return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle="light-content" backgroundColor={colors.purple[200]} />
        <View style={styles.main}>
          <Text >Activity Screen</Text>
        </View>
      </SafeAreaView>
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