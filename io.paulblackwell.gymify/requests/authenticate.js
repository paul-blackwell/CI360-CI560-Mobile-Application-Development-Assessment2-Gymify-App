import axios from 'axios';
import {API_IDENTIFIER, API_PASSWORD} from "@env"




const authenticate = async () => {

    axios
        .post('https://gymify-strapi-api.herokuapp.com/auth/local', {
            identifier: API_IDENTIFIER,
            password: API_PASSWORD
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        });
}

export default authenticate;