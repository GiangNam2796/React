import { useState } from "react";


function Test (){
    const [getItem, setItem] = useState(true)
    function thaydoi(){
        setItem(!getItem)
    }
    return(
        <div>
            {getItem ?  "x"   :  "y" }
            <button onClick={thaydoi}>Click</button>
        </div>
    )
}
// function Test() {

//     const [getItem, setItem] = useState(true)

//     function thaydoi(){
//         setItem(!getItem)
//     }


//     return(
//       <div>
//             {/* thuat toan 3 ngoi: iff else tren cung dong */}
//            {getItem ? "111" : "222"}

//            <button onClick={thaydoi}>click</button>
//       </div>
//     )
//   }
  
  
  export default Test;
  