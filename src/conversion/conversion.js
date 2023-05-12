import { useState } from "react";

const Conversion = ()=>{
    const [files,setFiles] = useState([])
    const fileadd =(e)=>{
        let json = e.target.value;
        console.log(...files,e.target.value);
        setFiles({...files,json})
       
    }

    const addfiles = ()=>{
        console.log(files);
    }
    return(
        <>
          <input type="file"  onChange={(e)=>fileadd(e)} multiple  ></input>
          <button onClick={addfiles}>Add</button>
        </>
    )
}

export default Conversion;