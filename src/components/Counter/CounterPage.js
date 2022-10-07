import React from "react";
import Counter from "./counter";



class CounterPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mount:true
        }
    }

    render(){

        return (
            <>
            <button onClick={()=> this.setState({mount: !this.state.mount})}>Unmount</button>
            {this.state.mount ? <Counter/>:null}
            </>
        )
    }
}



export default CounterPage;