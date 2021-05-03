import axios from 'axios';

const getWarmups = async (setWarmups) => {

    let warmupsArr = [];
    axios
      .get('https://gymify-strapi-api.herokuapp.com/warmups')
      .then(response => {
        setWarmups(response.data)
      })
      .catch(error => {
        console.log(error)
      });
}


export default getWarmups;