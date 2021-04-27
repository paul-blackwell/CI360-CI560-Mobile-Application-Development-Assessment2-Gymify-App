import React, { useReducer, createContext, useEffect, useState } from 'react';
import reducer from '../reducers/workouts.reducer';
import axios from 'axios';
import {API_IDENTIFIER, API_PASSWORD} from "@env"


// Build initial state
const initialState = {
    loading: true,
    error: '',
    post: {}
}


export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {


    const [workoutPlan, dispatch] = useReducer(reducer, initialState);


    const [dataExists, setDataExists] = useState(false);
    useEffect(() => {
        const request = async () => {
            axios
                .get('https://gymify-strapi-api.herokuapp.com/weeks')
                .then(response => {
                    // Pass response data to dispatch in reducer
                    dispatch({ type: 'FETCH_API_SUCCESS', payload: response.data });
                    setDataExists(true);
                })
                .catch(error => {
                    dispatch({ type: 'FETCH_API_ERROR' })
                    console.log(error)
                });
        }
        if(!dataExists) {
            request();
        }
    }, [dataExists]);



    /**
     * This will authenticate the app with the API and then
     * will sore a json web token in the context so the app can
     * us it in other app requests
     */
    const [jwtExists, setJwtExists] = useState(false);
    useEffect(() => {
        const authenticate = async () => {
            axios
                .post('https://gymify-strapi-api.herokuapp.com/auth/local', {
                    identifier: API_IDENTIFIER,
                    password: API_PASSWORD
                })
                .then(response => {
                    dispatch({ type: 'FETCH_JWT_SUCCESS', payload: response.data.jwt });
                    setJwtExists(true);
                })
                .catch(error => {
                    console.log(error)
                });
        }


        if(!jwtExists) {
            authenticate();
        }
       
    },[jwtExists])
  



    return (
        <WorkoutsContext.Provider value={{ workoutPlan, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}