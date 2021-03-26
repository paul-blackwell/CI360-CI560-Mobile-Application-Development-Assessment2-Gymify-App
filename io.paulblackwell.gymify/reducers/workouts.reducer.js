
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_API_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_API_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
        case 'FETCH_LOCAL_STORAGE_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'DELETE_EXERCISE_FROM_WORKOUT':
           
        console.log(state.post)
            // state.post.workouts.forEach(workout => {
            //     if(workout.id === action.payload.parentWorkoutId) { // find parent workout
            //         console.log(workout)
            //     }
            // });
            return state;
        default:
            return state;
    }
}


export default reducer;