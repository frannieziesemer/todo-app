import React from 'react';
import { TrashIcon } from '@primer/octicons-react';

function TodoItem(props) {


  return (
    <div className="todo-item box">
      <h4 className="block">{props.task}</h4>
      <p className="block">description</p>
      <button onClick={() => props.onDelete(props.index)} className="button is-danger is-light"><TrashIcon /></button>
      {/* we send a function down through props and call it on an onClick event-
       -this passes the info (index number) back up to App.js */}
    </div>
  )
}

export default TodoItem;