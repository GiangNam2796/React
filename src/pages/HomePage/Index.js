import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Index(props){
    const hobbyList = useSelector(state => state.hobby.list)
    console.log(hobbyList)
    const dispatch = useDispatch()

    const handleAddClick = () =>{
        const newHobby = {
            id: 123,
            title: "test"
        }
        const action = addNewHobby(newHobby)
        dispatch(action)
    }
    return (
        <>
            <button onClick={handleAddClick} > ADD1 </button>
            <ul>{renderList()}</ul>
        </>
    )
}
export default Index;