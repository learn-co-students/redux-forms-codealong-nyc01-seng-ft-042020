import React, {Component} from 'react';
import {connect} from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state); 
  }; 

  handleChange = (e) => {
    this.setState({
      text: e.target.value 
    });
  }; 

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>add todo</label>
          <input 
            type="text"
            onChange={this.handleChange} 
            value={this.state.text} 
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
});

export default connect(null, mapDispatchToProps)(CreateTodo);