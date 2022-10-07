import React from "react";



class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0
        }
        this.intervalId = null;
    }

    start=()=>{
     this.intervalId =    setInterval(()=>{
            this.setState({
                count:this.state.count+1
            })
        }, 1000)
        console.log(this.intervalId)
    }

    componentDidMount(){
        this.start();
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=> this.start()}>Click</button>
            </>
        )
    }
}


export default Counter