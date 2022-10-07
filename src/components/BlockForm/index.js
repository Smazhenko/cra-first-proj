import React from "react";
import '../SignInForm/style.css'



class BlockForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    ChangeInput= (event)=> {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

submitHandler=(event)=>{
    event.preventDefault();
   this.props.callbackFn(this.state.name);
    

}

    render(){


        return(
            <form  onSubmit={this.submitHandler} className="form-wrapper">
                <label className="label-margin"/> Press your name
                <input
                name='name'
                onChange={this.ChangeInput}
                value={this.state.email}
                placeholder="Type your name"
                 type='text'></input>

                <button>Submit</button>
            </form>
        )
    }
}

export default BlockForm