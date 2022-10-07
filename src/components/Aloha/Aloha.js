import React from "react";



class Aloha extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            indicator:true
        }
    }

    toggle(){
        this.setState({
            indicator:!this.state.indicator
          })
    }

    render(){
        const greetings = this.state.indicator ? 'hello': 'buy';
        return <h1 onClick = {()=>{this.toggle()}}>{greetings} {this.props.name} {this.props.lastName}</h1>
    }
}








export default Aloha;