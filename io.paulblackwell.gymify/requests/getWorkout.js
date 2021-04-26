import axios from 'axios';

const getWorkout = async (id, setState) => {

    axios
        .get(`https://gymify-strapi-api.herokuapp.com/workouts/${id}`)
        .then(response => {
            setState(response.data)
        })
        .catch(error => {
            console.log(error)
        });
}


export default getWorkout;