import axios from 'axios';

const getWeeks = async (setLoading, dispatch) => {

    // Set loading state to true
    setLoading(true)


    /**
     * Make API request to get weeks and update context using 
     * the dispatch function passed in
     */
    axios
        .get('https://gymify-strapi-api.herokuapp.com/weeks')
        .then(response => {
            // Pass response data to dispatch in reducer
            dispatch({ type: 'FETCH_API_SUCCESS', payload: response.data });
            setLoading(false);
        })
        .catch(error => {
            dispatch({ type: 'FETCH_API_ERROR' })
            console.log(error)
        });

}

export default getWeeks;