import React from 'react';
import './App.css';
import AppWrapper from './components/app-wrapper/app-wrapper.component';
import SubmitForm from './components/submit-form/submit-form.component';
import TodoList from './components/todo-list/todo-list.component';


class App extends React.Component{
  //state objects here 
  state = {
    tasks: [],
    //maybe need a loading state here:
    //isLoading is to inform the user that the site is fetching data -
    // it may take a few seconds

  }

  //functions here


  handleDelete = (index) => {
    //create a copy of the current tasks array
    const newArr = [...this.state.tasks];
    //find the id of the task via index that was passed into this function
    const id = newArr[index].id;
    console.log(id);
    //here we have to add the id to the end of the url because we need to target the correct api object
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos/" + id, {
      method: 'DELETE'
    })
    //why is this text???
      .then(response => response.text())
      .then(todos => {
        //remove the item from index 
        newArr.splice(index, 1);
        //re - setState as new array
        this.setState({ tasks: newArr });
      });
  }

  //this function ultimately takes the input data that we have saved in the state object (title and content ) 
  // then it adds it to the api !!
  handleAdd = task => {
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos", {
      //Post is the instruction to add to api 
      method: 'POST',
      //look this up??? 
      headers: {
        'Content-Type': 'application/json'
      },
      // i think this part turns the data into the correct json format
      body: JSON.stringify(task)
    })
      .then(response => response.json())
      .then(task => {
        //takes input  from submit-form component and adds it to json api data
        this.setState({ tasks: [...this.state.tasks, task] });
      });
  };



  // this function does the first step of api call 
  //cDM() executes a second render (1st render()) of the page with the data fetched from api
  //after cDM() function api date is stored locally and can be displayed or passed to other functions as props
  componentDidMount() {
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos")
      //pulls the response from url into json file
      .then(response => response.json())
      //updates our state object to = the json file 
      //(todos refers to complete data inside api)
      .then(todos => {
        this.setState({ tasks: todos });
      });
  }

  render() {
  return (
   //JSX here
      <AppWrapper> 
        <div className="column  m-4"> 
          <div className="row box">     
              {/* here we have to send the handleAdd function downwards using props called handleAdd. */}
              <SubmitForm handleAdd={this.handleAdd} />
        </div>
        <div className="row"> </div>
        </div>
        <div className="column box mt-5 mr-6"> 
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
        </div>
      </AppWrapper>  
  
  );
  }
}

export default App;
