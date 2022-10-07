import React from "react";
import '../scene/style.css'

// class Toggler extends React.Component{
//     constructor(props){
//         super(props);
    
//     }

//     toggle(){
//           this.props.changeParentState();
//     }
//     render(){
//         return(
//             <button onClick = {()=>{this.toggle()} }>{this.props.buttonText}</button>
//         )
//     }
// }


function Toggler (props) {
const toggle = ()=> props.changeParentState();

    return  <button onClick = {()=>{toggle()} }>{props.buttonText}</button>
}






export default Toggler