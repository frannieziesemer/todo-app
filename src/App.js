import React from 'react';
import './App.css';
import AppWrapper from './components/app-wrapper/app-wrapper.component';
import SubmitForm from './components/submit-form/submit-form.component';
import TodoList from './components/todo-list/todo-list.component';


class App extends React.Component{
  //state objects here 
  state = {
    tasks: ['task1', 'task2'],
    
}

  //functions here
  handleDelete = (index) => {
      //create a copy of the tasks array
      const newArr = [...this.state.tasks];
      //remove the item from index 
      newArr.splice(index, 1);
      //re - setState as new array
      this.setState({ tasks: newArr });
    
  }
  //has to be in the component becuase we are adding data to tasks state object 
  handleAdd = (input) => {
    //takes input (state object/data) from submit-form component and adds it to array of tasks
    this.setState({tasks: [...this.state.tasks, input]})
  }



  render() {
  return (
   //JSX here
      <AppWrapper> 
          <div className="column box m-4"> 
            {/* here we have to send the handleAdd function downwards using props called handleAdd. */}
            <SubmitForm handleAdd={this.handleAdd}/>
          </div>
          <div className="column box m-4"> 
            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          </div>
       
      </AppWrapper>  
  
  );
  }
}

export default App;
