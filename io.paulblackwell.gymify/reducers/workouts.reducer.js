
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
        state.post.forEach(week => { // Loop though each week
                week.workouts.forEach(workout => { // Loop though each workout 
                    workout.warmups.forEach(warmup => { // Loop though each warmup
                        /**
                         * If warm up id is the same as currentExerciseSelectedId delete it,
                         * do this by getting is position for the parent array 
                         */
                        if(warmup.id === action.payload.currentExerciseSelectedId) { 
                            workout.warmups.splice(workout.warmups.indexOf(warmup), 1)
                        }
                    })

                    workout.exercises.forEach(exercise => { // Loop though each exercise
                        /**
                         * If warm up id is the same as currentExerciseSelectedId delete it,
                         * do this by getting is position for the parent array 
                         */
                        if(exercise.id === action.payload.currentExerciseSelectedId) { 
                            workout.exercises.splice(workout.exercises.indexOf(exercise), 1)
                        }
                    })
                })
            });

            // Save 

            // By returning the now updated state the context will update
            return state;
        default:
            return state;
    }
}


export default reducer;