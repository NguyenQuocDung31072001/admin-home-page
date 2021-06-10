import { createContext } from "react";


export const ContextInitial=createContext("");

const ContextProvider=(props)=>{
    
    return(
        <ContextInitial.Provider value={props.data}>
            {props.children}
        </ContextInitial.Provider>
    )
}
export default ContextProvider;
