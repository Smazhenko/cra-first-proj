import BlockForm from "../BlockForm"
import React from "react"
import BlockInfo from "../BlockInfo";


class Block extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            indicator: false,
            name: ''
        }
    }

 
    takeInfo=(info)=>{
        console.log('hello', info)

        this.setState({
            indicator: true,
            name: info
        })
    }

render(){
    const {indicator}=this.state;
    return(

        <>
        <BlockForm callbackFn={this.takeInfo}></BlockForm>
        {indicator?<BlockInfo nameUser={this.state.name}></BlockInfo>: null}
        </>
    )
}
}


export default Block