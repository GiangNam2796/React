import { useState } from "react"


function Form (props){
    const [state, setState] = useState(true);

    const handleChange = (e) => {
        setState(e.target.value.toUpperCase())
    }

    function handleSubmit(e) {
        alert("name:" + state)
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} >
            {/* <label>
                name:
                <textarea value={state} onChange= {handleChange} />       
            </label> */}
            <select value={state} onChange ={handleChange}>
                <option value = "demo1">demo1</option>
                <option value = "demo2">demo2</option>
                <option value = "demo3">demo3</option>
            </select>
            <button type = "submit">Submit</button>
        </form>
    );

}

export default Form