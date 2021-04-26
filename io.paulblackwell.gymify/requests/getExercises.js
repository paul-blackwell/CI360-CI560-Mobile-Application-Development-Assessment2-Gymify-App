import axios from 'axios';

const getExercises = async (workout, setState) => {

    let exercisesArr = [];
    axios
    .get('https://gymify-strapi-api.herokuapp.com/exercises')
        .then(response => {
            workout.exercises.forEach(exercise => {
                exercisesArr.push(response.data.find(element => element.id === exercise))
                setState(exercisesArr);
            });
        })
        .catch(error => {
            console.log(error)
        });
}


export default  getExercises;