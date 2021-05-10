import axios from 'axios';

const resetExercises = async (week, jwt, setShowLoader) => {



    week.workouts.forEach(workout => {
        workout.warmups.forEach(warmup => {
            warmup.completed = false;
        });
        workout.exercises.forEach(exercise => {
            exercise.completed = false;
        });
    })


    const test = [];

    const updateWeek = async (week) => {
        axios.put(`https://gymify-strapi-api.herokuapp.com/weeks/${week.id}`, {
            workouts: week.workouts
        },
            {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            })
            .then(response => {
                test.push(`${week.id} has been changed`)
            })
            .catch(error => {
                console.log(error)
            });
    }

    weeks.forEach(week => {
        updateWeek(week);
    })



    // axios
    // .get('https://gymify-strapi-api.herokuapp.com/exercises')
    //     .then(response => {
    //        setExercises(response.data)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });
}


export default resetExercises;