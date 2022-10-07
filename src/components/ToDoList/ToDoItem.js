import '../scene/style.css'

function ToDoItem(props){

  const bord =  ()=>{
       props.borderFn(props.id);
    }
    const del = ()=>{
        props.callBackFn(props.id);
        
    }
    return<li
     className={props.styleClass}>
        <span
         onClick = {()=>{bord()}}>
            {props.text}
            </span>
            <button
             onClick = {()=>{del()}} >X</button></li>;
}



export default ToDoItem;