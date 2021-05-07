import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Image, View, Dimensions, Text, TouchableOpacity } from 'react-native';

import { standardColors } from '../styles/colors';
let colors = standardColors;



const Timer = ({ time, toggleStartTimer, setToggleStartTimer, setTimerStopped }) => {


    /**
     * As time prop will be something like 1.30 we need to 
     * get the seconds from it, we can use use parseInt() to
     * get the minutes 
     */
    const getSeconds = (time) => {
        let seconds;
        seconds = time.toFixed(2);
        seconds = seconds.toString().substring(seconds.indexOf(".") + 1); // Get rid of everything before decimal point;
        seconds = parseInt(seconds)
        return seconds;
    }



    // initialize secondsLeft and minutesLeft
    const [secondsLeft, setSecondsLeft] = useState(getSeconds(time));
    const [minutesLeft, setMinutesLeft] = useState(parseInt(time));

    useEffect(() => {


        // If parent component toggleStartTimer state is false just return 
        if (!toggleStartTimer) return;

        // exit early when we reach 0 on secondsLeft and minutesLeft
        if (!secondsLeft && !minutesLeft) {
            setTimerStopped(true)
            return;
        }

        /**
         * I there are no secondsLeft but there is still minutesLeft
         * and 60 to seconds left and remove a minute from minutesLeft
         */
        if (!secondsLeft && minutesLeft) {
            setSecondsLeft(59)
            setMinutesLeft(minutesLeft - 1)
        }


        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add secondsLeft as a dependency to re-rerun the effect
        // when we update it
    }, [secondsLeft, minutesLeft, toggleStartTimer]);

    // Reset everything and stop timer on button press
    const handleRefresh = () => {
        setSecondsLeft(getSeconds(time))
        setMinutesLeft(parseInt(time))
        setToggleStartTimer(false);
    }



    return (
        <View style={styles.timerContainer}>
            <View style={styles.timerMain}>
                <Text style={styles.timerText}>{minutesLeft.toString().length < 2 ? `0${minutesLeft}` : minutesLeft} : {secondsLeft.toString().length < 2 ? `0${secondsLeft}` : secondsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.timerRefreshBtn} onPress={handleRefresh}>
                <Ionicons name="refresh" size={24} color={colors.purple[200]} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    timerContainer: {
        marginTop: 24,
        paddingBottom: 32
    },
    timerMain: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 16,
        backgroundColor: colors.white[100],
        borderColor: colors.gray[200],
        borderWidth: 1,
        borderRadius: 4,
    },
    timerText: {
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: 'Inter_800ExtraBold',
        color: colors.gray[400]
    },
    timerRefreshBtn: {
        position: "absolute",
        bottom: 0,
        alignSelf: 'center',
        //right: 0,
        backgroundColor: colors.white[100],
        justifyContent: "center",
        alignItems: "center",
        width: 48,
        height: 48,
        borderColor: colors.purple[200],
        borderWidth: 2,
        borderRadius: 100,
    }
});




export default Timer;


