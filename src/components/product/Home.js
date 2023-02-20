import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";



function Home(){
    const [data, setData] = useState("");
 
    const user = useContext(UserContext);
    console.log(user.getData)
    console.log(user)
    

    useEffect(()=>{
        axios.get("http://localhost/laravel/laravel/public/api/product")
        .then(res=>{
            console.log(res)
            setData(res.data.data)
        })
        .catch(function(error){
            console.log(error)
        })
    },[])

    const handleClick = (e) => {
       
        let a = e.target.id;
        let qty= 0;
        let item = {};
        let y = localStorage.getItem("item")
        if (y) {
            item = JSON.parse(y)
            qty = qty + item[a] + 1
         }else{
             qty = 1;
         }
       
        const x = item || {};
            x[a] = qty || 1;
       item = x;
    //    console.log(item[a])
    //    console.log(item)
        user.getData(qty)

       localStorage.setItem("item", JSON.stringify(item))
    }

    function renderProduct(){ 
        console.log(data)
        if(data.length>0){
            return data.map((value, key)=>{
                let a = value.image;
                let b = JSON.parse(a); 
                let image = b[0];
                //   console.log(image)
                return(
                    <div key={key}  id={value.id} className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src={"http://localhost/laravel/laravel/public/upload/user/product/" + value.id_user + "/" + image} alt="" />
                                    <h2> {value.price} </h2>
                                    <p>{value.name}</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>${value.price}</h2>
                                        <p>{value.name}</p>
                                        <a id={value.id} onClick={handleClick} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href="#"><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                    <li><Link to ={"/productdetail/" + value.id} id = {value.id}><i className="fa fa-plus-square" />More</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <section>
            <div className="container">
                <div className="row">
                
                <div className="col-sm-9 padding-right">
                    <div className="features_items">{/*features_items*/}
                    <h2 className="title text-center">Features Items</h2>
                    {renderProduct()}
                    </div>{/*features_items*/}
                    
                </div>
                </div>
            </div>
            </section>
            
        </div>
    )
}


export default Home;