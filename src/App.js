import React, { useState, useEffect } from "react";
import "./App.css";
import AppWrapper from "./components/app-wrapper/app-wrapper.component";
import SubmitForm from "./components/submit-form/submit-form.component";
import TodoList from "./components/todo-list/todo-list.component";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (index) => {
    //create a copy of the current tasks array
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  };

  const handleSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  useEffect(() => {
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos")
      .then((response) => response.json())
      .then((todos) => setTasks(todos));
  }, []);

  return (
    <div className="App">
      <AppWrapper>
        <div className="column  m-4">
          <div className="row box">
            {/* here we have to send the handleAdd function downwards using props called handleAdd. */}
            <SubmitForm onAdd={handleSubmit} />
          </div>
          <div className="row"> </div>
        </div>
        <div className="column box mt-5 mr-6">
          <TodoList tasks={tasks} onDelete={handleDelete} />
        </div>
      </AppWrapper>
    </div>
  );
}

export default App;
