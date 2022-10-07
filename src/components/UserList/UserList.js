import React from "react";
import { getUser } from "../../api";
import UserCard from "./UserCard";




class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users: []
        }
    }


componentDidMount(){
    getUser().then(data=> {
        const{results}= data;
        this.setState({
            users: results
        })
    })
    
}

renderUsers(){
    const{users}= this.state;
  return users.map((user)=>{
        return <UserCard key={user.id.value} user={user}/>
    })
}

    render(){
const{users}= this.state
        return(

            <>
            {users.length?this.renderUsers(): null}
            </>
        )
    }
}



export default UserList