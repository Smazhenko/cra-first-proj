function UserCard (props) {
    const {user:{name: {first : firstName, last : lastName}, email,picture:{medium:avatar }} }= props;


    return <div className="card-wrapper">
        <img src={avatar}/>
        <h1>{firstName} {lastName}</h1>
        <p>{email}</p>
    </div>
}



export default UserCard;