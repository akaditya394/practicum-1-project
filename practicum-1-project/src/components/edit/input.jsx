import React from "react";

function InputArea(props) {
  return (
    <div className="formedit">
      <input onChange={props.change} type="text" value={props.item} />
      <button onClick={props.arrayAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
