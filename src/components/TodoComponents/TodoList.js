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
      query: {
        task: "",
        time: ""
      }
    }
  }

  addNote = ev => {
    ev.preventDefault();

    this.setState({ notes: [...this.state.notes, this.state.query] })
  }

  setThing = ev => {
    this.setState({query : { ...this.state.query, [ev.target.name]: ev.target.value }})
  }

  // editThing = index => {


  //   this.setState([this.state.notes, this.state.notes[index]: {
  //     task: this.state.task,
  //     time: this.state.time
  //   })]


  // }

  render() {
    return (
      <div>
        <TodoForm addNote={this.addNote} setThing={this.setThing} query={this.state.query} />
        {
          this.state.notes.map((d, i) => (
            <Todo note={d} key={i} index={i} />
          ))

        }
        </div>
    )
  }
}

export default TodoList;