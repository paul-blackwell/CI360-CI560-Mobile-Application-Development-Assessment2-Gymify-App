import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


/**
 * This component will render a loader if the loading prop
 * passed into it is true
 */

export default Loader = (props) => {
    if (props.loading) {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
            </View>
        );
    } else {
        return(null)
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});