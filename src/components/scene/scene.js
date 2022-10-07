import React from "react";
import Toggler from "./toggler";
import Indicator from "./indicator";

class Scene extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            light: true
        }
    }

    toggleScene(){
        this.setState({
            light:!this.state.light
          })
    }

    render(){
        const{light}= this.state;
        const classScene =light? 'scene-on': 'scene-off';
        return(
            <>
            <div className={classScene}></div>
            <Toggler buttonText={light?'on':'off'} changeParentState={()=>{this.toggleScene()}} />
            <Indicator text={light?'light is on':'light is off'} />
            </>
        )
    }
}






export default Scene