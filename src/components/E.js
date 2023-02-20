import axios from "axios"
import F from "./F"
import { useEffect, useState } from "react"

function E (){
    const [data, setData] = useState("");
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            setData(res.data)
        })
        .catch(error => console.log(error))
    },[])

    
    console.log(data)
    return(
        
         <F x = {data} />
       
        
    )
}

export default E