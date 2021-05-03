import axios from 'axios';

const getExercises = async (setExercises) => {

    axios
    .get('https://gymify-strapi-api.herokuapp.com/exercises')
        .then(response => {
           setExercises(response.data)
        })
        .catch(error => {
            console.log(error)
        });
}


export default  getExercises;