import { useState } from "react"

function Login1(){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [errorEmail, setErrorEmail] = useState("");
    const [errorPass, setErrorPass] = useState("");


    function handleEmail (e) {
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email == ""){
            setErrorEmail("nhap gmail")
        }else{
            setErrorEmail("")
        }
        if (pass == ""){
            setErrorPass("nhap pass")   
        }else{
            setErrorPass("")
        }

        if(email != "" && pass != ""){
           
            alert("dang nhap thanh cong")
        }

    } 

    return(
        <form onSubmit={handleSubmit}>
               email: <input type= "text" value = {email} onChange = {handleEmail} /> <p>{errorEmail}</p> <br />
               pass:  <input type = "text" value = {pass} onChange = {handlePass} /> <p>{errorPass}</p> <br />
                <button type="submit">Submit</button>
        </form>
    );
}




export default Login1