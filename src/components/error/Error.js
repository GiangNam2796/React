
function Error(props){
    function renderError(){
        let {errors} = props

        if(Object.keys(errors).length > 0) {
            return Object.keys(errors).map((key, index) =>{
                return (
                    <li style={{ color: "red", fontWeight:"500" }} key={index} > {errors[key]}</li>
                )
            })
        }
    }
    return (
        <ul>{renderError()} </ul>
    )
}



export default Error


