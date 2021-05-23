import axios from 'axios';
import uuid from '../utils/uuid';



/**
 * @param {int} week is the current week that is selected 
 * 
 * @param {int} workout is the current workout that is selected 
 * 
 * @param {int} exerciseID is the id for the exercise we want to replace
 * 
 * @param {string} jwt This is the JSON web joken that the API will need to use
 * to a authenticate
 * 
 * @param {function} setLoader will be used to set the loader to show after the api request
 * is successful 
 * 
 * @param {function} setUpdateContext will force the parent component to update the context 
 * 
 * @param {function} replacementExercise is the exercise the will be used to replace the old 
 * exercise 
 * 
 */

const swapExerciseInWorkout = async (week, workout, exerciseID, jwt, setLoader, setUpdateContext, replacementExercise) => {

    const weekID = week.id;
    const workoutID = workout.id;

    /**
      * This will update the loader in the parent
      * component to show the loader
     */
    setLoader(false)



    /**
     * This will check if the exercise that is going to be replaced
     * is from the warmups or Exercises, then it will remove the old
     * Exercise and replace it with the replacement exercise
     */
    let updatedWarmups = workout.warmups;
    let updatedExercises = workout.exercises;
    if (workout.warmups.filter(warmup => warmup.id === exerciseID).length > 0) {
        updatedWarmups = workout.warmups.filter(warmups => warmups.id !== exerciseID);
        updatedWarmups.push({
            ...replacementExercise,
            id: uuid(),
            _id: uuid(),
            completed: false
        });
    } else if (workout.exercises.filter(exercise => exercise.id === exerciseID).length > 0) {
        updatedExercises = workout.exercises.filter(exercise => exercise.id !== exerciseID)
        updatedExercises.push({
            ...replacementExercise,
            id: uuid(),
            _id: uuid(),
            completed: false
        });
    }


    



    // Remove workout from the week as will will be updating it anyway
    const updatedWorkouts = week.workouts.filter(item => item.id !== workoutID);


    // Add a new workout with the updatedExercises and  updatedWarmups to it
    updatedWorkouts.push(
        {
            ...workout,
            exercises: updatedExercises,
            warmups: updatedWarmups
        }
    );



    // Send a request to the API and update the workouts for that week
    axios.put(`https://gymify-strapi-api.herokuapp.com/weeks/${weekID}`, {
        workouts: updatedWorkouts
    },
        {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(response => {
            /**
             * The request work so set state to true.
             * This will update the loader in the parent
             * component 
             */
            setLoader(true);

            /**
             * setUpdateContent to true this will make an API request in the parent
             *  component and update the context
             */
            setUpdateContext(true)
        })
        .catch(error => {
            console.log(error)
        });


}

export default swapExerciseInWorkout;