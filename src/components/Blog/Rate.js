import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import axios from "axios";


function Rate(props){
    const [rating, setRating]=useState(0);
    
    let params = useParams();

    useEffect(()=> {
      axios.get('http://localhost/laravel/laravel/public/api/blog/rate/' + params.id)
      .then(res =>{
          
          console.log(res)           
          const data = res.data.data;
          

          if(data.length>0){
           
            const sum = data.reduce((prev, current)=>{
              return prev + +current.rate
            }, 0) 
            console.log(sum)
            let avg = sum/data.length;
            setRating(avg)
            console.log(avg) 
          }
              


      })
      .catch(function (error){
          console.log(error)
      })
    },[])



    function changeRating (newRating, name) {
      setRating(newRating)
      console.log(newRating)
      console.log(rating)   
      
      const userData = JSON.parse(localStorage.getItem('auth_token'));

      if(userData){
        let url = 'http://localhost/laravel/laravel/public/api/blog/rate/' + params.id;
        let accessToken = userData.success.token;
        let config = { 
          headers: { 
          'Authorization': 'Bearer '+ accessToken,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
          } 
        };

        const formData = new FormData();
          formData.append('blog_id', params.id);
          formData.append('user_id', userData.Auth.id);
          formData.append('rate', newRating);
        
        axios.post( url, formData, config)
          .then(res =>{
            console.log(res)
            alert(res.data.message)
          })     
            
      }else{
        alert("vui long login")
      }

    }

    function render() { 
      return (
        <StarRatings
          rating= {rating}
          starRatedColor="blue"
          changeRating={changeRating}
          numberOfStars={5}
          name='rating'
        />
      )
    }



    

    
    return(
        <>
        <ul className="ratings">
        
          <li className="rate-this">Rate this item:</li>
          <li >
          {render()}
              
          </li>
          <li className="color">(6 votes)</li>
        </ul>
        <ul className="tag">
          <li>TAG:</li>
          <li><a className="color" href>Pink <span>/</span></a></li>
          <li><a className="color" href>T-Shirt <span>/</span></a></li>
          <li><a className="color" href>Girls</a></li>
        </ul>
        </>
    )
}

export default Rate;




