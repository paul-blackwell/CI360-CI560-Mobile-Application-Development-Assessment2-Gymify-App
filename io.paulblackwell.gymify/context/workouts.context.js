import React, {useReducer, createContext } from 'react';
import workoutsReducer from '../reducers/workouts.reducer';

export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {
    const [workout, dispatch] = useReducer(cartReducer, []);
    
    return (
        <WorkoutsContext.Provider value={{workout, dispatch}}>
            {props.children}
        </WorkoutsContext.Provider>
    );
}