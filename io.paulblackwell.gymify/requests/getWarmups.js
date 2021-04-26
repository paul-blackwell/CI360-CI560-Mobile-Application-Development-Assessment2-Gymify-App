import axios from 'axios';

const getWarmups = async (workout,setState) => {

    let warmupsArr = [];
    axios
      .get('https://gymify-strapi-api.herokuapp.com/warmups')
      .then(response => {
        workout.warmups.forEach(warmup => {
          warmupsArr.push(response.data.find(element => element.id === warmup))
          setState(warmupsArr);
        });
      })
      .catch(error => {
        console.log(error)
      });
}


export default getWarmups;