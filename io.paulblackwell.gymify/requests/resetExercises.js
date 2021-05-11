import axios from 'axios';

const resetExercises = async (week, jwt, setShowLoader, setUpdateContext) => {


    // Show loader in parent component
    setShowLoader(true)


    week.workouts.forEach(workout => {
        workout.warmups.forEach(warmup => {
            warmup.completed = false;
        });
        workout.exercises.forEach(exercise => {
            exercise.completed = false;
        });
    });



    axios.put(`https://gymify-strapi-api.herokuapp.com/weeks/${week.id}`, {
        workouts: week.workouts
    },
        {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(response => {
            setUpdateContext(true);
        })
        .catch(error => {
            console.log(error)
        });


}


export default resetExercises;