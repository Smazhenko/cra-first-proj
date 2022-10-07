import React from 'react';
import '../SignInForm/style.css'

class SignInForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            pass:''
        }
    }
    changeInputs=(event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })

    }
    submitHandler (event) {
    event.preventDefault();
        console.log(this.state)
}
    render(){

    
    return (
        <form onSubmit={(event)=>this.submitHandler(event)} className="form-wrapper">
            <label className='label-margin'/> Your email
            <input
            value={this.state.email} 
            onChange={this.changeInputs}
            name='email' 
            placeholder="example@gmail.com" 
            type='text'></input>
            <label className='label-margin'/> Your Pass
            <input 
             value={this.state.pass} 
             onChange={this.changeInputs}
             name='pass'
            type='text'></input>
            <button type='submit'>Login</button>
        </form>
    )
    }
}


export default SignInForm