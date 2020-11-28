import React from 'react';
import './submit-form.css';

// we need to use a class component because we have state information/ updating inside the component 
class SubmitForm extends React.Component {
  //state object, input is undefined because we want the input clear field empty on load
  state = {
    input: ' ',
  }

  //onSubmit function is an event called in the <form> tag and called when submit button is clicked 
  onSubmit = (event) => {
    event.preventDefault();
    //onSubmit function calls handle submit function from App.js component
    //handleSubmit function has been sent down to this component via props
    //it passes in the input value 
    this.props.handleAdd(this.state.input);
    //sets state back to empty for the input field on submit
    this.setState({ input: '' });

  }


  render () {
  return (
    <div className="submit-form">
      <form className="field is-grouped" onSubmit={this.onSubmit}>
          <input 
            className="input mr-4" 
            type="text" 
            placeholder="Add new list item here..." 
            value = {this.state.input}
            //onChange to handle input value 
            // updates state (input) object within this component
            onChange={(event) => this.setState({input: event.target.value})}
          />
          <button className="button is-primary">Add +</button>
      </form>
    </div>
  )
  }
}

export default SubmitForm;