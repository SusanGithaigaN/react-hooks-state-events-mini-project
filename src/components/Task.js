import React from "react";

function Task({text,category,deletedItem}) {
  return (
    <div className="task">
    {/* show the task's text and category */}
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      {/* remove task from list onClick */}
      <button onClick={()=>deletedItem(text)} className="delete">X</button>
    </div>
  );
}
export default Task;