import React,{createContext,useContext,useReducer} from "react";
export const StateContext=createContext();
// importlayıp data layerı kurduk.

export const StateProvider=({reducer,initalState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initalState)}>
        {children}
    </StateContext.Provider>
);
//Stateler burada depolanacak !! 
export const useStateValue = () =>useContext(StateContext);

//put into index.js