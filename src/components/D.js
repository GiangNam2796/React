function D(props){
    const infor = props.x;
    
   
    
    // return(
    //     <div>
    //         {x.map((x)=>(
    //             <div key = {x.id} >
    //                 <p> - ID: {x.id} </p>
    //                 <p> - Name: {x.name} </p>
    //                 <p> - Username: {x.username} </p>
    //                 <p> - Email: {x.email} </p>
    //                 <p> - Address:</p>
    //                 <p> + Street: {x.address.street} </p>
    //                 <p> + Suite: {x.address.suite} </p>
    //                 <p> - Phone: {x.phone} </p>
    //                 <p> - Website: {x.website} </p>
    //                 <p> - Company: </p>
    //                 <p> + Name: {x.company.name} </p>
    //                 <p> + CatchPhrase: {x.company.catchPhrase} </p>
    //             </div>
    //         ))}
    //     </div>
    // )
    return infor.map((value, key) => {
        return(
            <div key = {value.id} >
                    <p> - ID: {value.id} </p>
                    <p> - Name: {value.name} </p>
                    <p> - Username: {value.username} </p>
                    <p> - Email: {value.email} </p>
                    <p> - Address:</p>
                    <p> + Street: {value.address.street} </p>
                    <p> + Suite: {value.address.suite} </p>
                    <p> - Phone: {value.phone} </p>
                    <p> - Website: {value.website} </p>
                    <p> - Company: </p>
                    <p> + Name: {value.company.name} </p>
                    <p> + CatchPhrase: {value.company.catchPhrase} </p>
                </div>
        )
    })
}

export default D