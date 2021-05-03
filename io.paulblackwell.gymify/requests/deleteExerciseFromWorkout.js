import axios from 'axios';


/**
 * @param {int} week is the current week that is selected 
 * 
 * @param {int} workout is the current workout that is selected 
 * 
 * @param {int} exerciseID is the id for the exercise we want to delete
 * 
 * @param {string} jwt This is the JSON web joken that the API will need to use
 * to a authenticate
 * 
 * @param {function} setLoader will be used to set the loader to show after the api request
 * is successful 
 * 
 * @param {function} setUpdateContext will force the parent component to update the context 
 * 
 */

const deleteExerciseFromWorkout = async (week, workout, exerciseID, jwt, setLoader, setUpdateContext) => {

    const weekID = week.id;
    const workoutID = workout.id;

      /**
        * This will update the loader in the parent
        * component to show the loader
       */
      setLoader(false)


    /**
     * This will push all the exercise to the updatedExercises array that are not
     * equal to the exerciseID (currently selected exercise) was we only what
     * to remove currently selected exercise.
     * 
     * Note: Because deleteExerciseFromWorkout will also be used on warmup,
     * well will also do this work the warmups (updatedWarmups)
     */
    const updatedExercises = workout.exercises.filter(exercise => exercise.id !== exerciseID);
    const updatedWarmups = workout.warmups.filter(warmup => warmup.id !== exerciseID);



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


export default deleteExerciseFromWorkout;




