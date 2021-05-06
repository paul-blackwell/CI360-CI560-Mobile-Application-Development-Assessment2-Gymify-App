import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';


/**
   * Title: Implementing a countdown timer in React with Hooks
   * Author: Asaf Aviv
   * Date: 06, May, 2021
   * Code version: 1.0
   * Availability:  https://stackoverflow.com/questions/57137094/implementing-a-countdown-timer-in-react-with-hooks
   * 
   */

const Timer = ({ minutes, seconds }) => {
    // initialize secondsLeft with the seconds prop
    const [secondsLeft, setSecondsLeft] = useState(seconds);
    const [minutesLeft, setMinutesLeft] = useState(minutes);

    useEffect(() => {

        // exit early when we reach 0 on secondsLeft and minutesLeft
        if (!secondsLeft && !minutesLeft) return;

        /**
         * I there are no secondsLeft but there is still minutesLeft
         * and 60 to seconds left and remove a minute from minutesLeft
         */
        if (!secondsLeft && minutesLeft) {
            setSecondsLeft(60)
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
    }, [secondsLeft]);



    return (
        <View>
            <Text>{minutesLeft}</Text>
            <Text>{secondsLeft}</Text>
        </View>
    );
};

export default Timer;
