import axios from 'axios';


const markExerciseAsComplete = async (week, workout, exercise, maxWeight, jwt, setUpdateContext) => {


    const exerciseId = exercise.id;

    /**
     * This will check if the exercise that is going to be updated
     * is from the warmups or Exercises, then it will remove the old
     * Exercise and replace it the exercise that has its axWeight and 
     * completed items updated
     */
    let updatedWarmups = workout.warmups;
    let updatedExercises = workout.exercises;
    if (workout.warmups.filter(warmup => warmup.id === exercise.id).length > 0) {
        updatedWarmups = workout.warmups.filter(warmups => warmups.id !== exerciseId);
        updatedWarmups.push({
            ...exercise,
            completed: true,
            maxWeight: maxWeight
        });
    } else if (workout.exercises.filter(exercise => exercise.id === exercise.id).length > 0) {
        updatedExercises = workout.exercises.filter(exercise => exercise.id !== exerciseId)
        updatedExercises.push({
            ...exercise,
            completed: true,
            maxWeight: maxWeight
        });
    }

    
     // Remove workout from the week as will will be updating it anyway
     const updatedWorkouts = week.workouts.filter(item => item.id !== workout.id);



     // Add a new workout with the updatedExercises and  updatedWarmups to it
     updatedWorkouts.push(
         {
             ...workout,
             exercises: updatedExercises,
             warmups: updatedWarmups
         }
     );


    // Send a request to the API and update the workouts for that week
    axios.put(`https://gymify-strapi-api.herokuapp.com/weeks/${week.id}`, {
        workouts: updatedWorkouts
    },
        {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(response => {
           
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

export default markExerciseAsComplete;