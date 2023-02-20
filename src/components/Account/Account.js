import { useEffect, useState } from "react";
import Error from "../error/Error";
import axios from "axios";

function Account(){
    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        avatar: "",
        password:""

    });
    const [errors, setErrors] = useState("");
    const [inputsFile, setInputsFile] = useState("");
    const [inputsAvatar, setInputsAvatar] = useState("");
    
    useEffect(()=> {
        const y = localStorage.getItem('auth_token');
        if(y){
            let user = JSON.parse(y);
            setInputs({
                name: user.Auth.name,
                email: user.Auth.email,
                phone: user.Auth.phone,
                address: user.Auth.address,
                avatar: user.Auth.avatar
            })
        }
        
    
      },[])
  
   
    const handleInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;

        setInputs(state => ({... state, [nameInput]:value }))
        // {
        //     name:...Account
        //     email:...Account.
        // }
    }

    const handleInputFile = (e) =>{
        const file = e.target.files;
        let reader = new FileReader();
        reader.onload = (e) => {
            setInputsFile(file[0]);           // file xu li
            setInputsAvatar(e.target.result); // API
        };
        reader.readAsDataURL(file[0]);   
    }   

    const handleSubmit =(e)=>{
        e.preventDefault();
        let errorSubmit ={};
        let flag = true;
        const userData = JSON.parse(localStorage.getItem('auth_token')); 

        if(inputsFile){
            const a = inputsFile.type.split('.').pop().toLowerCase();
            const b = a.split('/').pop();
            const c = ['png', 'gif', 'jpeg', 'jpg'];
            
            if(inputsFile.size > 1024*1024){
                flag = false;
                errorSubmit.avatar = "chon anh co size nho hon"
            }
            if(c.includes(b)){

            }else{
                flag = false;
                errorSubmit.avatar = "file anh chua hop le"
            }

        }


        if(!flag){
            setErrors(errorSubmit)
        }else{
            setErrors({})

            let url = "http://localhost/laravel/laravel/public/api/user/update/" + userData.Auth.id;
            let accessToken = userData.success.token;
            let config = { 
                headers: { 
                    'Authorization': 'Bearer '+ accessToken,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                } 
                };  
            const formData = new FormData();
                    formData.append('name', inputs.name || userData.Auth.name);
                    formData.append('email', userData.Auth.email);
                    formData.append('phone', inputs.phone || userData.Auth.phone);
                    formData.append('address', inputs.address || userData.Auth.address);
                    formData.append('level', 0);
                    formData.append('avatar', inputsAvatar || userData.Auth.avatar);
                    formData.append('password', inputs.password)

                    axios.post( url, formData, config)
                    .then(res =>{
                        console.log(res)
                        const user_infor = res.data;
                    
                        localStorage.setItem('auth_token',JSON.stringify(user_infor));
                        
                        alert("cap nhat thanh cong")
                        
                    })
        }
    }

    return(
      <section>  
        <div className='container'>
            <div className='row'>
                <div className='col-sm-1'>
                        
                </div>
                <div className='col-sm-11'>
                    <div className="col-sm-4">
                        <div className="signup-form">
                        <h2>User Update</h2>   
                        <Error errors = {errors} />
                            <form encType="multipart/form-data"  onSubmit={handleSubmit}>
                                <input type= "text" name="name" value={inputs.name} placeholder="vui long nhap name"  onChange={handleInput}/>
                                <input type="email" name="email" placeholder="" value={inputs.email} readOnly onChange={handleInput} />
                                <input type="password" name="password" placeholder="nhap password" onChange={handleInput} />
                                <input type= "number" name="phone" placeholder="nhap sdt" value={inputs.phone}  onChange={handleInput} />
                                <input type="text" name="address" placeholder="nhap dia chi" value={inputs.address} onChange={handleInput}/>
                                <input type="file" name="avatar" onChange={handleInputFile} />
                            

                                <button type="submit" className="btn btn-default">Update</button>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
}


export default Account


