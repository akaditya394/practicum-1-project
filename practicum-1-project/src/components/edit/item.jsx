import React from "react";

function ToDoItem(props) {
  return (
    <div className="formedit" >
      <li>{props.text} <div  className="edit-remove">  <button onClick={() => {
        props.onChecked(props.id);
      }} > Remove</button></div>  </li> 
      
    </div>
  );
}

export default ToDoItem;
