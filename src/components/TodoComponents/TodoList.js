// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {

  constructor() {
    super();
    this.state = [
      {
        
      }
    ]
  }

  render() {
    return (
      <ul>
        <TodoForm />
        {
          //map state list of inputted values into list items

        }
      </ul>
    )
  }
}

export default TodoList;