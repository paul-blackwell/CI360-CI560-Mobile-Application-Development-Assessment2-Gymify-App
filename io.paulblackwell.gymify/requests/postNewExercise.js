import axios from 'axios';
import uuid from '../utils/uuid';

const postNewExercise = async (week, workout, isWarmup, newExerciseObj, jwt, setShowLoader, setUpdateContext) => {

    const weekID = week.id;
    const workoutID = workout.id;

    // Show loader in parent component
    setShowLoader(true)

    let updatedWarmups = workout.warmups;
    let updatedExercises = workout.exercises;






    // Find out if it  is a new warmup or exercise thats betting added
    if (isWarmup) {
        updatedWarmups.push(
            {
                id: uuid(),
                _id: uuid(),
                title: newExerciseObj.title,
                description: newExerciseObj.description,
                time: newExerciseObj.time,
                sets: newExerciseObj.sets,
                reps: newExerciseObj.reps,
                maxWeight: 0,
                completed: false,
                images: []
            }
        )
    } else {
        updatedExercises.push(
            {
                id: uuid(),
                _id: uuid(),
                title: newExerciseObj.title,
                description: newExerciseObj.description,
                time: newExerciseObj.time,
                sets: newExerciseObj.sets,
                reps: newExerciseObj.reps,
                maxWeight: 0,
                completed: false,
                images: []
            }
        )
    }

    // Remove workout from the week as will will be updating it anyway
    const updatedWorkouts = week.workouts.filter(item => item.id !== workoutID);


    // Add a new workout with the updatedExercises and  updatedWarmups to it
    updatedWorkouts.push(
        {
            ...workout,
            exercises: updatedExercises,
            warmups: updatedWarmups
        }
    );



    // Send a request to the API and update the workouts for that week
    axios.put(`https://gymify-strapi-api.herokuapp.com/weeks/${weekID}`, {
        workouts: updatedWorkouts
    },
        {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(response => {


            /**
             * After run a check to see if isWarmup, if it is add to warms else add to exercises.
             * We need to do this because the swap exercise modal on the WorkoutScreen
             * makes a request to both these URLs
             */
            if (isWarmup) {
                axios.post(`https://gymify-strapi-api.herokuapp.com/warmups`, {
                    id: uuid(),
                    _id: uuid(),
                    title: newExerciseObj.title,
                    description: newExerciseObj.description,
                    time: newExerciseObj.time,
                    sets: newExerciseObj.sets,
                    reps: newExerciseObj.reps,
                    maxWeight: 0,
                    completed: false,
                    images: []
                },
                    {
                        headers: {
                            'Authorization': `Bearer ${jwt}`
                        }
                    })
                    .then(response => {

                        /**
                         * setUpdateContent to true this will make an API request in the parent
                         *  component and update the context
                         */
                        setUpdateContext(true)
                    })
                    .catch(error => {
                        console.log(error)
                    });
            } else {
                axios.post(`https://gymify-strapi-api.herokuapp.com/warmups`, {
                    id: uuid(),
                    _id: uuid(),
                    title: newExerciseObj.title,
                    description: newExerciseObj.description,
                    time: newExerciseObj.time,
                    sets: newExerciseObj.sets,
                    reps: newExerciseObj.reps,
                    maxWeight: 0,
                    completed: false,
                    images: []
                },
                    {
                        headers: {
                            'Authorization': `Bearer ${jwt}`
                        }
                    })
                    .then(response => {

                        /**
                         * setUpdateContent to true this will make an API request in the parent
                         *  component and update the context
                         */
                        setUpdateContext(true)
                    })
                    .catch(error => {
                        console.log(error)
                    });
            }

            /**
             * The request work so set state to true.
             * This will update the loader in the parent
             * component 
             */
            //setLoader(true);

            /**
             * setUpdateContent to true this will make an API request in the parent
             *  component and update the context
             */
            //setUpdateContext(true)
        })
        .catch(error => {
            console.log(error)
        });




}


export default postNewExercise;