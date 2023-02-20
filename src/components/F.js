
function F(props){
    const data = props.x;
    
    function renderData(){
        if(data.length>0){
            return data.map((value, key)=>{
                return(
                    <li key={key}>
                        <p>- ID: {value.id} </p>        <br /> 
                        <p>- Name: {value.name}</p>     <br />
                        <p>- Address:                   <br /> 
                            + Street: {value.address.street} 
                        </p>                            <br /> 
                        <p>- Phone: {value.phone}</p>   <br /><br /><br />
                    </li>
                )
            })            
        }
    }

    return(
        <ul>{renderData()}</ul>
    )
}
export default F
// - ID: hiện thị ID ra day
// - name: hiện thị name ra day
// - address:
//    + street
//   - phone: ...
// - company:
//    + name
