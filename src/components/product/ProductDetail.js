import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {
    PopupboxManager,
    PopupboxContainer
  } from 'react-popupbox';

function ProductDetail(){
    const [data, setData] = useState("");
    const params = useParams();
    const [image, setImage] = useState("");
    const [qty, setQty] = useState("1")

    useEffect(()=>{
        axios.get("http://localhost/laravel/laravel/public/api/product/detail/" + params.id  )
        .then(res=>{
            console.log(res)
            setData(res.data.data)
            const a = res.data.data.image;
            const image = JSON.parse(a)
            setImage(image[0])   
        })
        .catch(function(error){
            console.log(error)
            
        })
    },[])

    const handleClick = (e) => {
        const src = e.target.src;
        const name = src.split('/').pop();
        console.log(name)
        setImage(name)
      }
    
    function  openPopupbox() {
        const content = <img src={"http://localhost/laravel/laravel/public/upload/user/product/" + data.id_user + "/" + image} />
        PopupboxManager.open({
          content,
          config: {
            titleBar: {
              enable: true,
              text: 'day la anh!!'
            },
            fadeIn: true,
            fadeInSpeed: 500
          }
        })
      }
  
    const handleInput = (e) => {
        const qty1 = e.target.value;
        setQty(qty1)
    }  
    const handleClick1 = (e) => {
        let a = data.id;   
        let item = {};
        let y = localStorage.getItem("item")
        if (y) {
            item = JSON.parse(y)
         }  
       
        const x = item || {};
            x[a] = qty
       item = x;
       
       localStorage.setItem("item", JSON.stringify(item))
     
    }

    function renderImage (){
        // console.log(data)
        if(Object.keys(data).length>0){
            // console.log(data.image)
            const x = data.image;
            const y = JSON.parse(x)
            // console.log(y)
            return y.map((value, key)=>{
                return(
                    <>
                        <a onClick={handleClick} value={value}><img className="image_edit" src={"http://localhost/laravel/laravel/public/upload/user/product/" + data.id_user + "/" + value} alt="" /></a>
                    </>
                )
            })
        }
    }

    return(
        <div className="container"> 
          <div className="row"> 
            <div className="col-sm-9 padding-right">
                <div className="product-details">{/*product-details*/}
                <div className="col-sm-5">
                    <div className="view-product">
                    <img src={"http://localhost/laravel/laravel/public/upload/user/product/" + data.id_user + "/" + image} />
                    <button onClick={openPopupbox}  ><h3>ZOOM</h3></button>
                    <PopupboxContainer />
                    </div>
                    <div id="similar-product" className="carousel slide" data-ride="carousel">
                    {/* Wrapper for slides */}
                    <div className="carousel-inner">
                        <div className="item active">
                        {renderImage()}
                        </div>
                        <div className="item">
                        {renderImage()}
                        </div>
                        <div className="item">
                        {renderImage()}
                        </div>
                    </div>
                    {/* Controls */}
                    <a className="left item-control" href="#similar-product" data-slide="prev">
                        <i className="fa fa-angle-left" />
                    </a>
                    <a className="right item-control" href="#similar-product" data-slide="next">
                        <i className="fa fa-angle-right" />
                    </a>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="product-information">{/*/product-information*/}
                    <img src="images/product-details/new.jpg" className="newarrival" alt="" />
                    <h2>{data.name}</h2>
                    <p>Web ID: 1089772</p>
                    <img src="images/product-details/rating.png" alt="" />
                    <span>
                        <span>US ${data.price}</span>
                        <label>Quantity:</label>
                        <input type="number" defaultValue="1" min={1} onChange={handleInput}/>
                        <button onClick={handleClick1} type="button" className="btn btn-fefault cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                        </button>
                    </span>
                    <p><b>Availability:</b> In Stock</p>
                    <p><b>Condition:</b> New</p>
                    <p><b>Brand:</b> E-SHOPPER</p>
                    <a href><img src="images/product-details/share.png" className="share img-responsive" alt="" /></a>
                    </div>{/*/product-information*/}
                </div>
                </div>{/*/product-details*/}
                <div className="category-tab shop-details-tab">{/*category-tab*/}
                <div className="col-sm-12">
                    <ul className="nav nav-tabs">
                    <li><a href="#details" data-toggle="tab">Details</a></li>
                    <li><a href="#companyprofile" data-toggle="tab">Company Profile</a></li>
                    <li><a href="#tag" data-toggle="tab">Tag</a></li>
                    <li className="active"><a href="#reviews" data-toggle="tab">Reviews (5)</a></li>
                    </ul>
                </div>
                
                </div>{/*/category-tab*/}
                
            </div>
          </div>
        </div>
    )
}

export default ProductDetail