import { useNavigate } from "react-router-dom"

export const WithRouter = (Newcomponent)=>{
    const Wrapper = (props)=>{
        let navigate  = useNavigate();
        return(
            <Newcomponent navigate={navigate} {...props}/>
        )
    }
    return Wrapper;
}