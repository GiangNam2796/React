import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Comment from "./Comment";
import ListComment from "./ListComment";
import Rate from "./Rate";

function Detail(props){
    let params = useParams();
    const [data, setData] = useState('');
    const [listComment, setListComment] = useState([]);
    const [getId, setId] = useState("");

    function getDataCmt(newCmt){
       
        let result = listComment.concat(newCmt);
        console.log(result)
        setListComment(result);
    }
    
    function getIdCmt(id_cha){
        setId(id_cha);
    }


    useEffect(()=> {
        axios.get('http://localhost/laravel/laravel/public/api/blog/detail/' + params.id)
        .then(Response =>{
            
            setData(Response.data.data);
            setListComment(Response.data.data.comment)

        })
        .catch(function (error){
            console.log(error)
        })
    },[])

    
    



// console.log(data);
// console.log(listComment);

    return(
        <div className="col-sm-9">
            <div className="blog-post-area">
                <h2 className="title text-center">Latest From our Blog</h2>
                <div className="single-blog-post">
                    <h3>{data.title}</h3>
                    <div className="post-meta">
                        <ul>
                        <li><i className="fa fa-user" /> Mac Doe</li>
                        <li><i className="fa fa-clock-o" /> {data.updated_at}</li>
                        <li><i className="fa fa-calendar" /> {data.created_at}</li>
                        </ul>
            
                    </div>
                    <a href>
                         <img src={"http://localhost/laravel/laravel/public/upload/Blog/image/" + data.image} alt="" />
                    </a>
                    <p>{data.description}</p>
                    {data.content}
                    <div className="pager-area">
                        <ul className="pager pull-right">
                        <li><a href="#">Pre</a></li>
                        <li><a href="#">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>  

            <div className="rating-area">
                <Rate />
            </div>

            <div className="socials-share">
                <a href><img src="images/blog/socials.png" alt="" /></a>
            </div>

            <div className="response-area"> 
                <h2>{listComment.length} RESPONSES</h2>
                
                <ListComment listComment = {listComment} getId={getIdCmt}/>
               				
            </div>

            <div className="replay-box">
                <div className="row">
                   <Comment data={data}  getId={getId} getDataCmt={getDataCmt}  />
                </div>
            
            </div>   
                
        </div>
         
    )
}

export default Detail