import React from "react";
import Aloha from "../Aloha/Aloha";


class AlohaDashBoard extends React.Component{
constructor(props){
    super(props);
    this.state = {
         usersArray :  [{
            id:1,
            firstName: 'Tony',
             lastName: 'Stark',
             }, {
                id:2,
             firstName: 'Bruce',
             lastName: 'Brenner',
             }, {
                id:3,
             firstName: 'Thor',
             lastName: 'Odinsson',
             },
             {
                id:4,
             firstName: 'Peter',
             lastName: 'Parker'
             }, {
                id:5,
             firstName: 'Natasha',
             lastName: 'Romanof'
             }],
             sortDirection: true
    }
   
}
userToAloha(){
    const{usersArray}= this.state;
   return usersArray.map((user)=><Aloha key={user.id} name={user.firstName} lastName={user.lastName}/>);

}

sortArray () {
    const{usersArray,sortDirection}= this.state;
    const newArray = [...usersArray];
    newArray.sort((a,b)=>{
    if(sortDirection){
        return  a.firstName > b.firstName? 1: -1
    } else{
      return   a.firstName > b.firstName? -1: 1
    }
});
    this.setState({
        usersArray: newArray,
        sortDirection:!sortDirection
    })
}
render(){
    
    return(
        <>
        <button onClick = {()=>{this.sortArray()}}>Sort</button>
        {this.userToAloha()}
        </>
    )
}
}





export default AlohaDashBoard;