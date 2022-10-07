import '../scene/style.css'



function Header (props){

console.log(props)


    return <div>{props.list.map((obj)=><p>{obj.text}</p>)}</div>
}


export default Header;