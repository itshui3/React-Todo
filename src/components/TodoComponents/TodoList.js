// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      notes: [],
      query: ""
    }
  }

  addNote = ev => {
    ev.preventDefault();
    this.setState({ notes: [...this.state.notes, this.state.query] })
  }

  setQuery = ev => {
    this.setState({ query: ev.target.value })
  }

  render() {
    return (
      <ul>
        <TodoForm addNote={this.addNote} setQuery={this.setQuery} />
        {
          this.state.notes.map((d, i) => (
            <Todo note={d} key={i} />
          ))

        }
      </ul>
    )
  }
}

export default TodoList;