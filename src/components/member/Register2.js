import axios from "axios";
import { useState } from "react";
import Error from "../error/Error";

function Register2 () {

    const [inputs, setInputs] = useState("");
    const [errors, setErrors] = useState("");
    const [inputsFile, setInputsFile] = useState("");
    const [inputsAvatar, setInputsAvatar] = useState("");

    const handleInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;

        setInputs(state => ({... state, [nameInput]:value}))
        
    }
    const handleInputFile = (e) => {
        const file = e.target.files;
        let reader = new FileReader()
            reader.onload = (e) => {
                setInputsFile(file[0]) //xu li
                setInputsAvatar(e.target.result) //api
            }
          
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        let errorSubmit = {};
        let flag = true;

        if(inputs.name == undefined || inputs.name == ""){
            flag = false;
            errorSubmit.name = "chua nhap ten"
        }
        if(inputs.password == undefined || inputs.password == ""){
            flag = false;
            errorSubmit.password = "chua nhap pass"
        }
        
        if(!flag){
           setErrors(errorSubmit) 
        }
        else{
            setErrors={}

            const data = {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password,
                phone: inputs.phone,
                address: inputs.address,
                level: 0,
                avatar: inputsAvatar
            }
            
            axios.post("http://localhost/laravel/laravel/public/api/register", data)
            .then((res)=>{
                if(res.data.errors){
                    setErrors(res.data.errors)
                    
                }else{
                    alert("dang ki thanh cong")
                    console.log(res.data[0])
                    
                }
            })
        }
        
    }

   

    return(
        <div className="col-sm-4">
            <div className="signup-form">
                <h2>New User Signup!</h2>
                <Error errors = {errors} />
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <input type= "text" name="name" placeholder="Name" onChange={handleInput} />
                    <input type="email" name="email" placeholder="Email" onChange={handleInput}/>
                    <input type="password" name="password" placeholder="Password"  onChange={handleInput}/>
                    <input type= "number" name="phone" placeholder="Phone"  onChange={handleInput}/>
                    <input type="text" name="address" placeholder="Address"  onChange={handleInput}/>
                    <input type="file" name="avatar" onChange={handleInputFile} />
                

                    <button type="submit" className="btn btn-default" >Signup </button>
                   
                </form>
            </div>
        </div>
    )
}

export default Register2;