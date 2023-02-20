
const initialState = {
    list: [1,2,3],
    activeId: null
}
// Reducer nhan 2 gia tri: state, action 
const hobbyReducer = (state = initialState, action) => {
    // console.log(action.type)
    // khi lv tren reducer thi chu y van de tham chieu,
    
    switch (action.type) {
        case "ADD_HOBBY": {
            // khi lien quan toi Obj/arr thi clone ra 1 obj moi 
            const newList = [...state.list]
            newList.push(action.payload);
            // => dua vao local

            return {
                //giu lai state hien tai
                ...state,

                //newlist moi
                list:newList,
            }
        }
       

        default:
            return state;
    }

}

export default hobbyReducer;