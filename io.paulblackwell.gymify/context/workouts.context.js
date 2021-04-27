import React, { useReducer, createContext, useEffect } from 'react';
import reducer from '../reducers/workouts.reducer';
import axios from 'axios';
import authenticate from '../requests/authenticate';



// Build initial state
const initialState = {
    loading: true,
    error: '',
    post: {}
}


export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {


    const [workoutPlan, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        const request = async () => {
            axios
                .get('https://gymify-strapi-api.herokuapp.com/weeks')
                .then(response => {
                    // Pass response data to dispatch in reducer
                    dispatch({ type: 'FETCH_API_SUCCESS', payload: response.data })
                })
                .catch(error => {
                    dispatch({ type: 'FETCH_API_ERROR' })
                    console.log(error)
                });
        }



        request();
    }, []);


    useEffect(() => {
        authenticate();
    })




    return (
        <WorkoutsContext.Provider value={{ workoutPlan, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}