import React from "react";

function Task({text,category,deleteTask},) {
  function handledeletet(){
  deleteTask(text);
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handledeletet}>X</button>
    </div>
  );
}

export default Task;
