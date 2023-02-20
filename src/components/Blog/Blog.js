import axios from "axios"
import { useEffect, useState } from "react"
import BlogR from "./BlogR"

import Detail from "./Detail";
function Blog(props){
    
    const [data, setData] = useState("");

    useEffect(()=>{
        axios.get("http://localhost/laravel/laravel/public/api/blog")
        .then(res=>{
            setData(res.data.blog.data)
        })
        .catch(error => console.log(error))
    },[])
                console.log(data)
              
    return(
         <div className="col-sm-9">
            <div className="blog-post-area">
                <h2 className="title text-center">Lastest from our blog</h2>
                <BlogR data = {data} />
                
            </div>

         </div>   


        
    )
}
export default Blog