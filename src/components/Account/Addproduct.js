import axios from "axios";
import { useEffect, useState } from "react";
import Error from "../error/Error";


function Addproduct(){
    const [inputs, setInputs] = useState("");
    const [inputsFile, setInputsFile] = useState("");
    const [errors, setErrors] = useState("")
    const [id, setId] = useState(3)
    const [category, setCategory] = useState("");
    
    const [brand, setBrand] = useState([{}]);
    const status = [{
        "id":"3",
        "name": "status",
    },
    {
        "id": 1,
        "name":"sale",
    },
    {
        "id": 0,
        "name":"new"
    }
    ];
   
    useEffect (()=>{
        axios.get("http://localhost/laravel/laravel/public/api/category-brand")
        .then(res=>{
            console.log(res.data.category)
           
            setCategory(res.data.category);
            setBrand(res.data.brand);
            
        })
        .catch(function(error){
            console.log(error)
        })
    },[])

    const handleClick = (e) =>{
        const id = e.target.value;
        setId(id)
       
    }
    function renderStatus (){
        return status.map((value, key)=>{
            return(
                <>
                <option key={key} value={value.id}  >
                    {value.name} 
                </option>
                </>
            )
        })
    }

    function renderSale (){
        if(id==1){
            return(
                <input type= "number" name="sale"  placeholder="0" onChange={handleInput} />
            )
        }else{
            return(
                <></>
            )
        }
    }
    
    function renderCategory (){
        if(category.length > 0){
            return category.map((value, key)=>{
                return(
                    <option key={key} value={value.id} >
                        {value.category}
                    </option>
                )
            })
        }
    }

    function renderBrand (){
        if(brand.length > 0){

        
            return brand.map((value, key)=>{
                return(
                    <option key={key} value={value.id}>
                        {value.brand}
                    </option>
                )
            })
        }
    }

    const handleInput = (e) =>{
        const nameInput = e.target.name;
        const value = e.target.value;

        setInputs(state => ({...state, [nameInput]:value}))
    }

    const handleInputFile = (e) =>{
        
        const file = e.target.files;
        console.log(file)

        setInputsFile(file);
            
            
        
    }
    console.log(inputsFile)
    const handleSubmit = (e) =>{
        e.preventDefault();
        let errorSubmit ={};
        let flag = true;
        const userData = JSON.parse(localStorage.getItem('auth_token'));

        if(inputs.name == undefined || inputs.name == ""){
            flag = false;
            errorSubmit.name = "nhap ten"
        }
        if(inputs.price == undefined || inputs.price == ""){
            flag = false;
            errorSubmit.price = "nhap gia";
        }
        if(inputs.category == undefined || inputs.category == ""){
            flag = false;
            errorSubmit.category = "nhap category";
        }
        if(inputs.brand == undefined || inputs.brand == ""){
            flag = false;
            errorSubmit.brand = "nhap brand";
        }
        if(inputs.status == undefined || inputs.status == ""){
            flag = false;
            errorSubmit.brand = "nhap status";
        }
        if(inputs.status==1){
            if(inputs.sale == undefined || inputs.sale == ""){
                flag = false;
                errorSubmit.brand = "nhap % sale";
            }
        }
        if(inputs.company == undefined || inputs.company == ""){
            flag = false;
            errorSubmit.brand = "nhap company";
        }
        if(inputs.detail == undefined || inputs.detail == ""){
            flag = false;
            errorSubmit.brand = "nhap detail";
        }
        
        Object.keys(inputsFile).map((key)=>{
           
            console.log(inputsFile.length)
            if(inputsFile){
                const a = inputsFile[key].type.split('.').pop().toLowerCase();
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
                if(inputsFile.length>3){
                    flag=false;
                    errorSubmit.avatar = "chon toi da 3 anh"
                }
    
            }else{
                flag = false;
                errorSubmit.avatar = " chua chon file"
            }
        })
        
        if(!flag){
            setErrors(errorSubmit)
        }else{
            setErrors({})
            

            let url = "http://localhost/laravel/laravel/public/api/user/add-product";
            let accessToken = userData.success.token;
            let config = { 
                headers: { 
                    'Authorization': 'Bearer '+ accessToken,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                } 
                };  
            const formData = new FormData();
                    formData.append('name', inputs.name);
                    formData.append('price', inputs.price);
                    formData.append('category', inputs.category);
                    formData.append('brand', inputs.brand);
                    formData.append('sale', inputs.sale? inputs.sale : 0);
                    formData.append('company', inputs.company);
                    formData.append('detail', inputs.detail)
                    formData.append('status', inputs.status)
                    // formData.append('file[]', inputsFile)
                    Object.keys(inputsFile).map((item, i)=>{
                     formData.append("file[]", inputsFile[item]);
                    })

                    axios.post( url, formData, config)
                    .then(res =>{
                        console.log(res)
                        
                        
                        alert("them thanh cong")
                        
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
                        <h2>Create product</h2>   
                        <Error errors = {errors} />
                            <form encType="multipart/form-data" onSubmit={handleSubmit} >
                                <input type= "text" name="name"  placeholder="name" onChange={handleInput} />
                                <input type="number" name="price" placeholder="price" onChange={handleInput}/>
                                <select name="category"  onChange={handleInput}>
                                    <option value="">vui long chon category</option>
                                        {renderCategory()}
                                    
                                </select>
                                <select name="brand" onChange={handleInput}>
                                <option value="">vui long chon brand</option>
                                   {renderBrand()}
                                    
                                </select>
                                <select name="status" onChange={handleInput} onClick={handleClick} > 
                                    {renderStatus()}  
                                </select>
                                {renderSale()}
                                <input type="text" name="company" placeholder="company profile"  onChange={handleInput}/>
                                <input type="file" name="image" multiple maxLength={3} onChange={handleInputFile} />
                                <input type="text" name="detail" placeholder="detail" onChange={handleInput} />

                                <button type="submit" className="btn btn-default">Create </button>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
}

export default Addproduct;



// setInputsFile( state => ({...state, [nameInput]:file }))