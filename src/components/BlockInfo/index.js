import React from "react"
import '../SignInForm/style.css'



class BlockIfo extends React.Component{
    // constructor(props){
    //     super(props);
    // }




    render(){
        return(
            <div className="block">Hello {this.props.nameUser} </div>
        )
    }
}



export default BlockIfo