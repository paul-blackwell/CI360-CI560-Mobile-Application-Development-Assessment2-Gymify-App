import axios from 'axios';



/**
 * 
 * @param {int} workoutID This is the workoutID for the request, it will also be
 * given to the new workout.
 * 
 * @param {int} exerciseID is the id for the exercise we want to delete
 * 
 * @param {string} jwt This is the JSON web joken that the API will need to use
 * to a authenticate
 * 
 * @param {function} setState will be used to set the loader to show after the api request
 * is successful 
 * 
 * The problem is that the API we are using (Strapi) doesn't allow
 * PUT request as it will not update the locale of an entry. This means
 * that we first have to delete the workout, then make an updated workout
 * with the removed exercise. But this will be saved to the API with the 
 * old workout's ID.
 * 
 */


const deleteExerciseFromWorkout = async (workout, exerciseID, jwt, setState) => {

    const workoutID = workout.id;


    /**
     * This will push all the exercise to the updatedExercises array that are
     * equal to the exerciseID (currently selected exercise) was we only what
     * to remove currently selected exercise.
     * 
     * Note: Because deleteExerciseFromWorkout will also be used on warmup,
     * well will also do this work the warmups (updatedWarmups)
     */
    const updatedExercises = workout.exercises.filter(exercise => exercise.id !== exerciseID);
    const updatedWarmups = workout.warmups.filter(warmup => warmup.id !== exerciseID);


    console.log(workoutID)

    axios
        .delete(
            `https://gymify-strapi-api.herokuapp.com/workouts/${workout.id}`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        )
        .then((response) => {
            axios.post(`https://gymify-strapi-api.herokuapp.com/workouts`, {
                ...workout,
                id: workoutID,
                _id: workoutID,
                exercises: updatedExercises,
                warmups: updatedWarmups
            },
                {
                    headers: {
                        'Authorization': `Bearer ${jwt}`
                    }
                })
                .then(response => {
                    //console.log(response)
                })
                .catch(error => {
                    console.log(error)
                });
        })
        .catch((error) => {
            console.log(error);
        });


    // axios
    //     .post(`https://gymify-strapi-api.herokuapp.com/workouts`, {
    //         ...workout,
    //         id: workoutID,
    //         _id: workoutID,
    //         exercises: updatedExercises,
    //         warmups: updatedWarmups
    //     },
    //         {
    //             headers: {
    //                 'Authorization': `Bearer ${jwt}`
    //             }
    //         })
    //     .then(response => {
    //         //console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });



}


export default deleteExerciseFromWorkout;




