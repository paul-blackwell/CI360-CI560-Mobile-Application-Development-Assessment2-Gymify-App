import axios from 'axios';
import { WorkoutsContext } from '../context/workouts.context';
import uuid from '../utils/uuid';

const postNewExercise = async (week, workout, isWarmup, newExerciseObj, jwt, setShowLoader, setUpdateContext) => {

    const workoutID = workout.id;

    // Show loader in parent component
    setShowLoader(true)

    let updatedWarmups = workout.warmups;
    let updatedExercises = workout.exercises;

    // Find out if it  is a new warmup or exercise thats betting added
    if (isWarmup) {
        updatedWarmups.push(
            {
                id: uuid(),
                _id: uuid(),
                time: newExerciseObj.time,
                sets: newExerciseObj.time,
                reps: newExerciseObj.time,
                maxWeight: 0,
                completed: false,
                images: []
            }
        )
    } else {
        updatedExercises.push(
            {
                id: uuid(),
                _id: uuid(),
                title: newExerciseObj.title,
                time: newExerciseObj.time,
                sets: newExerciseObj.time,
                reps: newExerciseObj.time,
                maxWeight: 20,
                completed: false,
                images: [],
                description: newExerciseObj.description
            }
        )
    }



    // workout.warmups.forEach(warmup => {
    //     warmup.completed = false;
    // });
    // workout.exercises.forEach(exercise => {
    //     exercise.completed = false;
    // });


    // axios.put(`https://gymify-strapi-api.herokuapp.com/weeks/${week.id}`, {
    //     workouts: week.workouts
    // },
    //     {
    //         headers: {
    //             'Authorization': `Bearer ${jwt}`
    //         }
    //     })
    //     .then(response => {
    //         setUpdateContext(true);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });


}


export default  postNewExercise;