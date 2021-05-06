import React, {useState, useEffect} from 'react';
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
//import ReactStopwatch from 'react-stopwatch';

// const Timer = () => (
//     <ReactStopwatch
//     seconds={0}
//     minutes={0}
//     hours={0}
//     limit="00:00:10"
//     onChange={({ hours, minutes, seconds }) => {
//       // do something
//     }}
//     onCallback={() => console.log('Finish')}
//     render={({ formatted, hours, minutes, seconds }) => {
//       return (
//         <View>
//             <Text>{ formatted }</Text>
//         </View>
//       );
//     }}
//    />
// );

// export default Timer


const Timer = ({ seconds }) => {
    // initialize timeLeft with the seconds prop
    const [timeLeft, setTimeLeft] = useState(seconds);
  
    useEffect(() => {
      // exit early when we reach 0
      if (!timeLeft) return;
  
      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
  
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    }, [timeLeft]);
  
    return (
    //   <div>
    //     <h1>{timeLeft}</h1>
    //   </div>
    <View>
        <Text>{timeLeft}</Text>
    </View>
    );
  };

  export default Timer;
  // https://stackoverflow.com/questions/57137094/implementing-a-countdown-timer-in-react-with-hooks