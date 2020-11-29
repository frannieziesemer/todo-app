import React from 'react';
import { TrashIcon } from '@primer/octicons-react';
import './todo-item.css';

function TodoItem(props) {


  return (
    <div className="todo-item box">
      <h3 className="task-title">{props.task}</h3>
      <p className="block">{props.description}</p>
      <button onClick={() => props.onDelete(props.index)} className="button is-danger is-light"><TrashIcon /></button>
      {/* we send a function down through props and call it on an onClick event-
       -this passes the info (index number) back up to App.js */}
    </div>
  )
}

export default TodoItem;