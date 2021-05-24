import axios from 'axios';
import uuid from '../utils/uuid';




const swapExerciseInWorkout = async (week, workout, exerciseID, jwt, setLoader, setUpdateContext, replacementExercise) => {

    const weekID = week.id;
    const workoutID = workout.id;

    /**
      * This will update the loader in the parent
      * component to show the loader
     */
    setLoader(false)


    workout.warmups.forEach(warmup => {
        if (warmup.id === exerciseID) {
            warmup.id = uuid();
            warmup.title = replacementExercise.title;
            warmup.description = replacementExercise.description;
            warmup.sets = replacementExercise.sets;
            warmup.reps = replacementExercise.reps;
            warmup.time = replacementExercise.time;
            warmup.maxWeight = replacementExercise.maxWeight;
            warmup.completed = false;
            warmup.images = replacementExercise.images
        }
    });

    workout.exercises.forEach(exercise => {
        if (exercise.id === exerciseID) {
            exercise.id = uuid();
            exercise.title = replacementExercise.title;
            exercise.description = replacementExercise.description;
            exercise.sets = replacementExercise.sets;
            exercise.reps = replacementExercise.reps;
            exercise.time = replacementExercise.time;
            exercise.maxWeight = replacementExercise.maxWeight;
            exercise.completed = false;
            exercise.images = replacementExercise.images
        }
    });




    // Remove workout from the week as will will be updating it anyway
    const updatedWorkouts = week.workouts.filter(item => item.id !== workoutID);


    // Add a new workout with the updatedExercises and  updatedWarmups to it
    updatedWorkouts.push(
        {
            ...workout,
            warmups: workout.warmups,
            exercises: workout.exercises,
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