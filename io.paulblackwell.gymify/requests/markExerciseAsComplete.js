import axios from 'axios';


const markExerciseAsComplete = async (week, workout, exercise, maxWeight, jwt, setUpdateContext) => {


    const exerciseId = exercise.id;



    workout.warmups.forEach(warmup => {
        if(warmup.id === exerciseId) {
            warmup.maxWeight = 0;
            warmup.completed = true
        }
    });


    workout.exercises.forEach(exercise => {
        if(exercise.id === exerciseId) {
            exercise.maxWeight = maxWeight;
            exercise.completed = true
        }
    });




    // // Remove workout from the week as will will be updating it anyway
    const updatedWorkouts = week.workouts.filter(item => item.id !== workout.id);



    // Add a new workout with the updatedExercises and  updatedWarmups to it
    updatedWorkouts.push(
        {
            ...workout,
            //exercises: updatedExercises,
            //warmups: updatedWarmups
            exercises:  workout.exercises,
            warmups: workout.warmups
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