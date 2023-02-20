

function B(props){
  const x = props.x;
  
  function renderData(){
    return x.map((value, key) => {
      
      return (
          <li key={x.id}>
              - ID: {value.id}
              <br />
              - Name: {value.name}
              <br />
              - Username: {value.username}
              <br />
              - Email: {value.email}
              <br />
              - Address:
              <br />
              + Street: {value.address.street}
              <br />
              + Suite: {value.address.suite}
              <br />
              - Phone: {value.phone}
              <br />
              - Website: {value.website}
              <br />
              - company: <br />
                + Name: {value.company.name} <br />
                + catchPhrase: {value.company.catchPhrase} <br /><br />
          </li>
        )
      })
  }
  
  return(
    <ul>
     {renderData()}
     
    </ul>
  )
}

export default B