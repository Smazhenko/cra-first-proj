import './App.css';
import React from 'react';

class App extends React.Component {
constructor(props){
  super(props);
  this.state= {
    indicator: true
  }
}

toggle() {

  this.setState({
    indicator:!this.state.indicator
  })
}
  render() {
    const style = this.state.indicator ?'circle-off': 'circle-on';
    const text = this.state.indicator ?'on': 'off';
    return (
      <>
        <div className={style}></div>;
        <button  onClick = {()=>{this.toggle()} }>{text}</button>
      </>
    
     );
   
  }
  
}

export default App;
