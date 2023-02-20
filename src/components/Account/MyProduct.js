import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Edit from "./Edit";
 
 
 
 function MyProduct(props){
    const [data, setData] = useState("");
    const [id, setID] = useState("");
   
    
    useEffect(()=> {
        const y = localStorage.getItem('auth_token')
        if(y){
            let userData = JSON.parse(y)
            
            let url = "http://localhost/laravel/laravel/public/api/user/my-product";
            let accessToken = userData.success.token;
            let config = { 
                headers: { 
                    'Authorization': 'Bearer '+ accessToken,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                } 
                };
        axios.get(url, config)
        .then(Response =>{
            console.log(Response.data.data)
            setData(Response.data.data)
        })
        .catch(function (error){
            console.log(error)
        })
        }
         
    },[])



    function renderdata (){
        return  Object.keys(data).map((key)=>{
            let a = JSON.parse(data[key].image);
            // console.log(a[0])
            
            return(
               <tr>
               <td>{data[key].id}</td>
               <td>{data[key].name}</td>
               <td><img className="image_product" src={"http://localhost/laravel/laravel/public/upload/user/product/" + data[key].id_user + "/" + a[0]} alt="" /> </td>
               <td>${data[key].price}</td>
               <td> 
                    <Link to = {"/edit/" + data[key].id}  id = {data[key].id} > Edit </Link>   
                    <Link to = ""  > delete </Link>
               </td>
               </tr>
            )

        })
    }

    return(
        <>

             <div className="table-responsive cart_info">
                <table className="table table-condensed">
                    <thead>
                        <tr className="cart_menu">
                            <td className="id">ID</td>   
                            <td className="name">Name</td>  
                            <td className="image">Image</td>                       
                            <td className="price">Price</td>
                            <td className="action">Action</td>
                            
                            <td />
                        </tr>
                    </thead>
          <tbody>

          {renderdata()}
                	
          </tbody>
          <tfoot>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              <td className="addmore"> <Link to = "/addproduct" >Add New</Link> </td>
          </tfoot>
        </table>
      </div>
      
        </>
    )
 }

 export default MyProduct;

 