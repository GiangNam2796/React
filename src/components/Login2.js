import { useState } from "react"
import Error from "./Error";

function Login2 (){

    const y = localStorage.getItem('infor');
    const x = JSON.parse(y);

    const [inputs, setInputs] = useState("");
    const [errors, setErrors] = useState({});
    
    const handleInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;
        setInputs(state => ({... state, [nameInput]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let errorSubmit = {}
        let flag = true;

       
        if(inputs.email == undefined || inputs.password == "") {
            flag = false;
            errorSubmit.email = "vui long nhap email";
        }
        if(inputs.password == undefined || inputs.password == "") {
            flag = false;
            errorSubmit.password = "vui long nhap mat khau";
        }
        
        // if(inputs.email == x.mail && inputs.password == x.pass){
        //     alert("dang nhap thanh cong")
        // }

        if(!flag) {
            setErrors(errorSubmit);
        }else{
            setErrors({})
             if(inputs.email == x.mail && inputs.password == x.pass){
                alert("dang nhap thanh cong")
            }
            
        }
    }

    // function renderError(){
    //     if(Object.keys(errors).length > 0){
    //         return Object.keys(errors).map((key, index) =>{
    //             return (
    //                 <li key = {index} > {errors[key]} </li>
    //             )
    //         })
    //     }
    // }

    return(
        <div> 
            
        <Error errors = {errors} />
        
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleInput} />
            <input type="password" name="password" onChange={handleInput} />
            <button type="submit" className="btn btn-default">login</button>
        </form>
        </div>
    )

    
}

export default Login2


