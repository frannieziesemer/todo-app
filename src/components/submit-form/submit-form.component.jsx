import React from 'react';
import './submit-form.css';

// we need to use a class component because we have state information/ updating inside the component 
class SubmitForm extends React.Component {
  //state object, input is undefined because we want the input clear field empty on load
  state = {
    title: '',
    content: '',
  }

  //onSubmit function is an event called in the <form> tag and called when submit button is clicked 
  onSubmit = (event) => {
    event.preventDefault();
    //onSubmit function calls handle submit function from App.js component
    //handleSubmit function has been sent down to this component via props
    //it passes in the input value 
    this.props.handleAdd(this.state);
    //sets state back to empty for the input field on submit
    this.setState({ title: '', content: '', });

  }


  render () {
  return (
    <div className="submit-form">
      <form className="field" onSubmit={this.onSubmit}>
        <div className="control">
          <label>Add new:</label>
          <input 
            className="input mr-4 mt-2" 
            type="text" 
            placeholder="Add new list item here..." 
            value = {this.state.title}
            //onChange to handle input value 
            // updates state (title) object within this component
            onChange={(event) => this.setState({title: event.target.value})}
          />
          
         
        </div>
        <div className="">
          <textarea 
            placeholder="Content" 
            value={this.state.content} 
            onChange={(event) => this.setState({content: event.target.value})}
            className="textarea mt-2 mb-2"
          ></textarea>
          
        </div>
        <div>
          <button className="button is-primary mr-2 ">Add +</button>
          <button 
            className="button is-info" 
            type="reset"
            onClick={(event) => this.setState({title: '', content: '' })}
          >Reset</button>
        </div>
      </form>
    </div>
  )
  }
}

export default SubmitForm;