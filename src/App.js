import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
// import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import MenuLeft from './components/layout/MenuLeft';
import { useLocation } from 'react-router-dom';
import Menuleft2 from './components/layout/Menuleft2';
import { UserContext } from './UserContext';
import { useState } from 'react';



function App(props){
  let params1 = useLocation();
  // console.log(params1)

    // function loginContext(data){
        
    // }
  const [a, setA] = useState("");
  const user = {name: "giang", loggedIn: true}


  function abc(data){
   
   console.log(data)
   setA(data)
  }

  // console.log(a)

    return (
      <>
      <UserContext.Provider value={{
        qty: a,
        getData: abc
      }} >
        
      
            <Header />
            
            <section>
            
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-3'>
                    {(params1['pathname'].includes("account") || 
                      params1['pathname'].includes("myproduct") || 
                      params1['pathname'].includes("edit")  ? <Menuleft2 /> : <MenuLeft />)
                      }
      
                    {/* {params1['pathname'].includes("account")? <MenuLeft /> : <Menuleft2 />} */}
                    {/* {params1['pathname'].includes("cart")} */}
      
                  </div>
                  <div className='col-sm-9'>
                    {props.children}
                  </div>
                </div>
              </div>
            </section>
            <Footer />
      </UserContext.Provider>
      </>
    )
  }





export default App;
