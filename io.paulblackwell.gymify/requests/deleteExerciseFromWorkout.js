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


const deleteExerciseFromWorkout = async (workoutID, exerciseID,jwt, setState) => {

    console.log(exerciseID);
    // axios
    // .delete('https://gymify-strapi-api.herokuapp.com/workout/id')
    //     .then(response => {
    //         workout.exercises.forEach(exercise => {
    //             exercisesArr.push(response.data.find(element => element.id === exercise))
    //             setState(exercisesArr);
    //         });
    //     })
    //     .catch(error => {
    //         console.log(error)
    // });
}


export default  deleteExerciseFromWorkout;