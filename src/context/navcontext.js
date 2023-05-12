import { createContext, useReducer, useState } from "react";

export const Navcontext = createContext();

export const NavcontextProvider = ({children})=>{

    const reducer = (state,action)=>{
      switch (action.type){
        case "OpenNav" :{
           state.open =!state.open ;
            console.log(state.open);
            return {...state}
        }
        default:
            return state
      }
 
    } 
    let intialstate = {
        open:false
    }   
    const[state,dispatch] = useReducer(reducer,intialstate);
   
return(
    <Navcontext.Provider value={{value:state.open,dispatch}} >
      
        {children}
    </Navcontext.Provider>
)
    
}