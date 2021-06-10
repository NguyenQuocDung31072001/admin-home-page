import { createContext, useState } from "react";


export const ContextInitial=createContext("");

const ContextProvider=(props)=>{
    
    return(
        <ContextInitial.Provider value={props.data}>
            {props.children}
        </ContextInitial.Provider>
    )
}
export default ContextProvider;
// export function ContextTest(props){
//     console.log(props)
//     return(
//         <ContextInitial.Provider value={{props}}>
//             {props.children}
//         </ContextInitial.Provider>
//     )
// }