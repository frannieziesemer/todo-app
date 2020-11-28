import React from 'react';
import TodoItem from '../todo-item/todo-item.component';

function TodoList(props) {
  return (
    <div className="todo-list">
      {props.tasks.map((task, index) => <TodoItem key={index} task={task} index={index} onDelete={props.onDelete} />)}   
      {/* render content(props) inside {} {props.tasks(takes info from props)
        .map(maps through tasks array and renders as TodoItem for all of the items)
        key= is reauired when do ing map method so we can use the index of the props array ?? not sure, just is
        item= sends down task information as a prop into TodoItem component
        } */}
    </div>
  )
}

export default TodoList;