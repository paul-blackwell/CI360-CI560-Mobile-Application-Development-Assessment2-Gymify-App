import axios from 'axios';

const getWeeksFromExerciseScreen = async (setLoading, dispatch, setNavigateToWorkoutScreen) => {

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
            dispatch({ type: 'FETCH_UPDATED_DATA_FROM_API', payload: response.data });
            setNavigateToWorkoutScreen(true)
        })
        .catch(error => {
            dispatch({ type: 'FETCH_API_ERROR' })
            console.log(error)
        });

}

export default getWeeksFromExerciseScreen;