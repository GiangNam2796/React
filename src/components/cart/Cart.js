import axios from "axios";
import { useEffect, useState } from "react";


function Cart(props){
  
    const [data, setData] = useState("");
    const [qty, setQty] = useState({});
    const [total, setTotal] = useState("");

    useEffect(()=> {

      let a = localStorage.getItem("item");
      if(a){
        let b = JSON.parse(a)
        axios.post("http://localhost/laravel/laravel/public/api/product/cart", b)
        .then(res=>{
            console.log(res)
            setData(res.data.data)
            
            //---------
            const data = res.data.data;
            if(data.length>0){
              const sum = data.reduce((prev, current)=>{
              return prev + +current.price*+current.qty
            },0)
            
            setTotal(sum) 
          }
          //------------
        })
      }
     
        
    },[])

console.log(data)



    const handleClick = (e) => {
      let qtyOld = parseInt(e.target.name);
      const qtyNew = qtyOld + 1;
      

        let a = e.target.id;
        let item = {};
        let y = localStorage.getItem("item")
        if (y) {
            item = JSON.parse(y)
         }  
       
        const x = item || {};
            x[a] = qtyNew
       item = x;

       

       setQty(item)

       axios.post("http://localhost/laravel/laravel/public/api/product/cart", item)
        .then(res=>{
            console.log(res)
            setData(res.data.data)

            //---------
            const data = res.data.data;
            if(data.length>0){
              const sum = data.reduce((prev, current)=>{
              return prev + +current.price*+current.qty
            },0)
            setTotal(sum) 
          }
          //------------
        })

       localStorage.setItem("item", JSON.stringify(item))
    }   

    const handleClick1 = (e) => {
      let qtyOld = parseInt(e.target.name);
      const qtyNew = qtyOld - 1;
     

        let a = e.target.id;
        let item = {};
        let y = localStorage.getItem("item")
        if (y) {
            item = JSON.parse(y)
         }  
       
        const x = item || {};
            x[a] = qtyNew
       item = x;
       setQty(item)

       axios.post("http://localhost/laravel/laravel/public/api/product/cart", item)
        .then(res=>{
            console.log(res)
            setData(res.data.data)

            //---------
            const data = res.data.data;
            if(data.length>0){
              const sum = data.reduce((prev, current)=>{
              return prev + +current.price*+current.qty
            },0)
            setTotal(sum) 
          }
          //------------
        })

       localStorage.setItem("item", JSON.stringify(item))


       if(qtyNew<1){
         delete item[a]

         axios.post("http://localhost/laravel/laravel/public/api/product/cart", item)
        .then(res=>{
            console.log(res)
            setData(res.data.data)
        })

         localStorage.setItem("item", JSON.stringify(item))
       }
    }
    
    const handleClick2 = (e) =>{
      let a = e.target.id;
        let item = {};
        let y = localStorage.getItem("item")
        if (y) {
            item = JSON.parse(y)
         }  
       setQty(item)
       delete item[a]
      axios.post("http://localhost/laravel/laravel/public/api/product/cart", item)
       .then(res=>{
           console.log(res)
           setData(res.data.data)

           //---------
           const data = res.data.data;
           if(data.length>0){
             const sum = data.reduce((prev, current)=>{
             return prev + +current.price*+current.qty
           },0)
           setTotal(sum) 
         }else{
           setTotal("0")
         }
         //------------
       })

        localStorage.setItem("item", JSON.stringify(item))
    }

    function renderData (){
      if(data.length>0){
        return data.map((value, key) =>{
          let a = value.image;
          let b = JSON.parse(a); 
          let image = b[0];
          // ----------
         

      // console.log(image)
          return (
            <tbody>
                  <tr>
                    <td className="cart_product">
                    <img className="image_edit" src={"http://localhost/laravel/laravel/public/upload/user/product/" + value.id_user + "/" + image} />
                    </td>
                    <td className="cart_description">
                      <h4><a href>{value.name}</a></h4>
                      
                    </td>
                    <td className="cart_price">
                      <p>${value.price}</p>
                    </td>
                    <td className="cart_quantity">
                      <div  className="cart_quantity_button">
                        <a className="cart_quantity_up"  id={value.id} name={value.qty} onClick={handleClick} > + </a>
                        <input className="cart_quantity_input" type="text" name="quantity" value={value.qty} size={2}  />
                        <a className="cart_quantity_down" id={value.id} name={value.qty} onClick={handleClick1} > - </a>
                      </div>
                    </td>
                    <td className="cart_total">
                      <p className="cart_total_price">$ {value.qty*value.price}</p>
                    </td>
                    <td className="cart_delete">
                      <a className="cart_quantity_delete" href><i id={value.id} name={value.qty} onClick={handleClick2} className="fa fa-times" /></a>
                    </td>
                  </tr> 
                </tbody>
          )
        })
      }
    }

     

    return(
      <>
      <section  id="cart_items">
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li><a href="#">Home</a></li>
              <li className="active">Shopping Cart</li>
            </ol>
          </div>
          <div className="table-responsive cart_info">
              <table className="table table-condensed">
                <thead>
                  <tr className="cart_menu">
                    <td className="image">Item</td>
                    <td className="description" />
                    <td className="price">Price</td>
                    <td className="quantity">Quantity</td>
                    <td className="total">Total</td>
                    <td />
                  </tr>
                </thead>
                {renderData()}
              </table>
            </div>
        </div>
      </section>

      <section id="do_action">
        <div className="container">
          <div className="heading">
            <h3>What would you like to do next?</h3>
            <p>Choose if you have a discount code or reward points you want to use or would like to estimate your
              delivery cost.</p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="chose_area">
                <ul className="user_option">
                  <li>
                    <input type="checkbox" />
                    <label>Use Coupon Code</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Use Gift Voucher</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Estimate Shipping &amp; Taxes</label>
                  </li>
                </ul>
                <ul className="user_info">
                  <li className="single_field">
                    <label>Country:</label>
                    <select>
                      <option>United States</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Ucrane</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field">
                    <label>Region / State:</label>
                    <select>
                      <option>Select</option>
                      <option>Dhaka</option>
                      <option>London</option>
                      <option>Dillih</option>
                      <option>Lahore</option>
                      <option>Alaska</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field zip-field">
                    <label>Zip Code:</label>
                    <input type="text" />
                  </li>
                </ul>
                <a className="btn btn-default update" href>Get Quotes</a>
                <a className="btn btn-default check_out" href>Continue</a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="total_area">
                <ul>
                  <li>Cart Sub Total <span>$59</span></li>
                  <li>Eco Tax <span>$0</span></li>
                  <li>Shipping Cost <span>Free</span></li>
                  <li>Total <span className="total1"> ${total} </span></li>
                </ul>
                <a className="btn btn-default update" href>Update</a>
                <a className="btn btn-default check_out" href>Check Out</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}

export default Cart
