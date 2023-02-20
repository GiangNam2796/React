import { useContext, useState } from "react";
import {
  NavLink,
  Link
} from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Addaccount from "./Addaccount";
import { UserContext } from "../../UserContext";


function Header (){
  const user = useContext(UserContext);

   const handleLogoutClick = (e) => {
        // setIsToggle("");
        localStorage.removeItem('auth_token'); 
    }

    const renderButton = (e)=> {
      const y = localStorage.getItem('auth_token');
      
    
      let button;
          
        if (y){
            button = <LogoutButton  onClick={handleLogoutClick}/>    
        } else{
            button = <LoginButton  /> 
        }
       return button 
       
    }
    const renderButton2 = (e) => {
      const y = localStorage.getItem('auth_token');
      let button;
      if (y){
        button = <Addaccount />    
      }
      return button
    }

    const renderCart = (e) => {
      const y = localStorage.getItem('auth_token');
      
        return(
       <>{user.qty}</> 
      )
    }
    


  return(
    <header id="header">
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="contactinfo">
              <ul className="nav nav-pills">
                <li><a href><i className="fa fa-phone" /> +2 95 01 88 821</a></li>
                <li><a href><i className="fa fa-envelope" /> info@domain.com</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="social-icons pull-right">
              <ul className="nav navbar-nav">
                <li><a href><i className="fa fa-facebook" /></a></li>
                <li><a href><i className="fa fa-twitter" /></a></li>
                <li><a href><i className="fa fa-linkedin" /></a></li>
                <li><a href><i className="fa fa-dribbble" /></a></li>
                <li><a href><i className="fa fa-google-plus" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>{/*/header_top*/}
    <div className="header-middle">{/*header-middle*/}
      <div className="container">
        <div className="row">
          <div className="col-md-4 clearfix">
            <div className="logo pull-left">
              <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
            </div>
            <div className="btn-group pull-right clearfix">
              <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                  USA
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  <li><a href>Canada</a></li>
                  <li><a href>UK</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                  DOLLAR
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  <li><a href>Canadian Dollar</a></li>
                  <li><a href>Pound</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8 clearfix">
            <div className="shop-menu clearfix pull-right">
              <ul className="nav navbar-nav">
                <li><Link to="/account"> {renderButton2()} </Link></li>
                <li><a href><i className="fa fa-star" /> Wishlist</a></li>
                <li><a href="checkout.html"><i className="fa fa-crosshairs" /> Checkout</a></li>
                <li><Link to="/cart"><i className="fa fa-shopping-cart" /> Cart {renderCart()}</Link></li> 
                <li><a href="cart.html"><i className="fa fa-user" /> User</a></li>      
                <li><Link to="/login"><i className="fa fa-lock" /> {renderButton()}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>{/*/header-middle*/}
    <div className="header-bottom">{/*header-bottom*/}
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="mainmenu pull-left">
              <ul className="nav navbar-nav collapse navbar-collapse">
                <li><Link to="/">Home</Link></li>
                <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down" /></a>
                  <ul role="menu" className="sub-menu">
                    <li><a href="shop.html">Products</a></li>
                    <li><a href="product-details.html">Product Details</a></li> 
                    <li><a href="checkout.html">Checkout</a></li> 
                    <li><a href="cart.html">Cart</a></li> 
                    <li ><a href="login.html">Login</a></li> 
                  </ul>
                </li> 
                <li className="dropdown"><Link to ="/blog" className="active">Blog<i className="fa fa-angle-down" /></Link>
                  <ul role="menu" className="sub-menu">
                    <li><a href="blog.html" className="active"><Link to ="/A" >Blog List</Link></a></li>
                  

                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li> 
                <li><a href="404.html">404</a></li>
                <li><a href="contact-us.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="search_box pull-right">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
   )
}
export default Header;


{/* <header>
    <div className="navbar">
      <div className="header"> 
        <ul className="header-1">
          <li>
            <img src="https://static-znews.zadn.vn/images/logo-zing-home.svg" />
          </li>
          <p>TRI THỨC TRỰC TUYẾN</p>
        </ul>
        <ul className="header-2">
          <li><p> <Link to ="/Login" >Xuất bản</Link> </p></li>
          <li><p> <NavLink exact activeStyle={{
            backgroundColor : 'white',
            color: 'red'
          }}
          to = "/Account" className="my-Account"> Sách </NavLink>  </p></li>
          
          <li><p> <Link to = '/'> Xã hội </Link>  </p></li>
          <li><p>Thế giới</p></li>
          <li><p>Kinh doanh</p></li>
          <li><p>Công nghệ</p></li>
          <li><p>Sức khỏe</p></li>
          <li><p>Thể thao</p></li>
          <li><p>Giải trí</p></li>
          <li><p>Đời sống</p></li>
          <li className="more"><p className="p">...</p></li>
        </ul>
      </div> 
    </div>
  </header> */}