import React from "react"

class Bv extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            display: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            display: !state.display
        }))
        
        console.log("a")
    }

    handleChange(){
        
    }

    render(){

        if (this.state.display == true){
            return (
                <div>
                    <button onClick={this.handleClick} >click</button>
                    <h1>duoc</h1>
                </div>
            )
        }else{
            return (
                <div>
               
                    <button onClick={this.handleClick} >click</button>
               
                </div>
            )
        }
        // return(
        //     <div>
        //         {this.state.display ? <h1> displayed!</h1> : ""}
        //         <button onClick={this.handleClick} >click</button>
        //     </div>
        // )
    }
}

export default Bv;



