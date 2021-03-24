import React, { useState } from 'react';
import './submit-form.css';

// we need to use a class component because we have state information/ updating inside the component 
function SubmitForm (props) {

  //state object, is undefined because we want the fields empty on load
  const [task, setTask] = useState({ title: "", content: ""});

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setTask(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(event.target)
  }

  //onSubmit function is an event called in the <form> tag and called when submit button is clicked 
  //onSubmit function calls handle submit function from App.js component
    //handleSubmit function has been sent down to this component via props
    //it passes in the input value 
    //sets state back to empty for the input field on submit

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(task);
    console.log(task);
    setTask({ title: "", content: ""});
  }

  return (
    <div className="submit-form">
      <form className="field" onSubmit={handleSubmit}>
        <div className="control">
          <label>Add new:</label>
          <input 
            className="input mr-4 mt-2" 
            type="text" 
            placeholder="Add new list item here..." 
            value = {task.title}
            //onChange to handle input value 
            // updates state (title) object within this component
            onChange={handleInputChange}
          />
          
         
        </div>
        <div className="">
          <textarea 
            placeholder="Content" 
            value={task.content} 
            onChange={handleInputChange}
            className="textarea mt-2 mb-2"
          ></textarea>
          
        </div>
        <div>
          <button className="button is-primary mr-2 ">Add +</button>
          <button 
            className="button is-info" 
            type="reset"
          >Reset</button>
        </div>
      </form>
    </div>
  )
}

export default SubmitForm;