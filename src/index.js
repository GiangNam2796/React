
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import Home from './components/product/Home';
// import Account from './components/Account';
// import Login from './components/Login';
// import Test from './components/Test';
// import Greeting from './components/Greeting';


import reportWebVitals from './reportWebVitals';
// import Lists from './components/Lists';

// import A from './components/A';
// import C from './components/C';
// import Form from './components/Form';
// import Login1 from './components/Login1';
// import Login2 from './components/Login2';
// import Register from './components/Register';
// import Demo1 from './components/Demo1';
// import Demo from './components/Demo';
// import E from './components/E';

import Blog from "./components/Blog/Blog";

import Detail from './components/Blog/Detail';
import Index from './components/member/Index';
import Account from './components/Account/Account';
import MyProduct from './components/Account/MyProduct';
import Addproduct from './components/Account/Addproduct';
import Edit from './components/Account/Edit';
import ProductDetail from './components/product/ProductDetail';
import Cart from './components/cart/Cart';
import Bv from './components/Bv';
import Index2 from './components/member/Index2';
// import Index from './pages/HomePage/Index';



// import Comment from './Comment';
// import FormatName from './formatName';
// import Welcome from './Welcome';





ReactDOM.render(
 
  <React.StrictMode  >
    <Router>
      <App>
        <Routes>
          <Route index path='/' element = {<Home />} />
          {/* <Route path ='/account' element = {<Account />} />
          <Route path ='/login' element = {<Login />} />
          <Route path ='/test' element = {<Test />} />
          <Route path ='/greeting' element = {<Greeting />}  />
          <Route path = '/lists' element = {<Lists />} />
          <Route path = '/a' element = {<A />} />
          <Route path = '/c' element = {<C />} />
          <Route path = '/form' element = {<Form />} />
          <Route path = '/login1' element = {<Login1 />} />
          <Route path = '/login2' element = {<Login2 />} />
          <Route path = '/register' element = {<Register />} />
          <Route path = '/demo1' element = {<Demo1 />} />
          <Route path = '/demo' element = {<Demo />} />
          <Route path = '/e' element = {<E />} /> */}
          <Route path = '/Blog' element = {<Blog  />} />
          <Route path = '/blog/detail/:id' element = {<Detail  />} />
          <Route path = '/login' element = {<Index  />} />
          <Route path = '/account' element = {<Account  />} />
          <Route path = '/myproduct' element = {<MyProduct  />} />
          <Route path = '/addproduct' element = {<Addproduct  />} />
          <Route path = '/edit/:id' element = {<Edit  />} />
          <Route path = '/productdetail/:id' element = {<ProductDetail  />} />
          <Route path = '/cart' element = {<Cart  />} />
          <Route path = '/index2' element = {<Index2  />} />
          <Route path = '/bv' element = {<Bv    />} />
         

        
        </Routes>
      </App>
    </Router>
    
 
  </React.StrictMode>, 
  document.getElementById('root')
);


reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// const Element = <h1> Hello, world </h1>
// ReactDOM.render(Element, document.getElementById('root'));
