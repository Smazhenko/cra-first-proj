import React from "react";
import ToDoItem from "./ToDoItem";
import Header from "../Header";


class ToDoList extends React.Component{
    constructor(props){
        super(props);
        const works = ['go to party','meet friends', 'have a walk'].map((text,index, )=>({id:index, text, border: false,}))
            this.state = {
          works
            }
    }
   
  border(id){
    const {works} = this.state;
    const newWorks = [...works];
    newWorks.forEach((obj)=>{
        if(obj.id === id){
            obj.border =!obj.border
        }     
        this.setState({
            works: newWorks
        })
    })   
    }


    deleteLi(id){
        const{works}= this.state;
        const result = works.filter((word)=>  Number(id)!== word.id);
    this.setState({
        works: result
   
    })
    }
headerSelected(){
    const {works}= this.state;
    const selectedArray = works.filter((obj)=>obj.border);
    return selectedArray;
}


createWork(){
    const{works}= this.state;
    return works.map((obj)=>
    <ToDoItem
     styleClass={obj.border? 'on' : 'off'} 
     borderFn={(id)=>this.border(id)}
      key={obj.id} 
      id={obj.id} 
      callBackFn={(el)=>this.deleteLi(el)} 
       text={obj.text}
       />
       )
}
    render(){
      
        return(
          <>
        <Header list={this.headerSelected()}/>
            <ul>
                {this.createWork()};
            </ul>
          
            </>
        )
    }
}



export default ToDoList;