function NumberList(props){
    const numbers= props.numbers;
    const ListItems= numbers.map((number)=>
        <li key={number.toString()} >{number}</li>
    );
    return(
        <ul>{ListItems}</ul>
    );
}

// const numbers = [1, 2, 3, 4, 5];



export default NumberList;