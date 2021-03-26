
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
           
        //let updatedState;
        console.log(`payload: ${action.payload.currentExerciseSelectedId}`)
        const newState = state.post.forEach(week => { // Loop though each week
                week.workouts.forEach(workout => { // Loop though each workout 
                    // workout.warmups.forEach(warmup => { // Loop though each warmup
                    //     if(warmup.id === action.payload.currentExerciseSelectedId) { // If warm up id is the same as currentExerciseSelectedId delete it
                    //         console.log(warmup.id)
                    //     }
                    // })
                    workout.warmups.filter(warmup => warmup.id !== action.payload.currentExerciseSelectedId);
                    //workout.exercises.forEach(exercise => { // Loop though each exercise
                        //console.log(exercise.id)
                    //})
                })

                // will need to do this for workouts
            });

            console.log(newState)
            // return {
            //     loading: false,
            //     post: '', 
            //     error: ''
            // }
        default:
            return state;
    }
}


export default reducer;