import React, { createContext, useContext, useReducer } from 'react'

// // Preparing the data layer
export const StateContext = createContext();

// // wrap our component provider the provider 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
// // this is how can it inside of a component
export const useStateValue = () => useContext(StateContext);
