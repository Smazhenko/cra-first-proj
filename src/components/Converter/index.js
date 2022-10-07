import React from "react";
import {getWell} from '../block/api'
import '../SignInForm/style.css'


class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            number: '',
            well: ''
        }
    }
    componentDidMount(){
        getWell().then(data=> {
            this.setState({
                well: data[0].buy
            })
        })
    
    }
    changeInputs=(event)=>{
        const {target: {value}} = event;
        this.setState({
            number:value
        })
    
        }

        usdNumber=()=>{
            const {number, well}= this.state;
            let result = Number(number) / well;
            if(isNaN(result)){
                console.log('its not a number')
            }else if(result < 0){
                console.log('number < 0')
            }else if (result === 0){
                result = null
            }
            else{
                return result;
            }
           

         

            
        }


    render(){
        return(
            <div className="wrapper">
                <h2>Converter</h2>
            <input
            name="number"
            onChange={this.changeInputs}
            placeholder="UAH" 
            type='text'></input>
            <div className="usd"
            name="numberUSD"
            >{ this.usdNumber()}</div>
            </div>
        )
    }
}



export default Converter