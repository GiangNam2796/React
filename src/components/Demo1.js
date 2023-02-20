import axios from "axios";
import { useEffect, useState } from "react";
function Demo1(){
    const [data, setData] = useState("");
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setData(res.data)
        })
        .catch(error => console.log(error))
    },[])

    
    function renderData(){
        if(data.length > 0){
            return data.map((value, key)=>{
                return (
                    <li key = {key}> {value.name}</li>
                )
            })
        }
    }
    return (
        <ul>
            {renderData()}
        </ul>
    )
}

export default Demo1