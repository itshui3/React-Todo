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

  //   let notes = this.state.notes.slice(0, index).concat(this.state.notes.slice(index+1));

  //   notes[index] = this.state.query;
  //   this.setState({ notes: [
  //     notes
  //   ] })

  // }

  deleteThing = index => {

    let notes = this.state.notes.slice(0, index).concat(this.state.notes.slice(index+1));

    this.setState({ notes: [
      ...notes
    ] })

  }

  render() {
    return (
      <div>
        <TodoForm addNote={this.addNote} setThing={this.setThing} query={this.state.query} />
        {
          this.state.notes.map((d, i) => (
            <Todo note={d} key={i} index={i} delete={this.deleteThing} />
          ))

        }
        </div>
    )
  }
}

export default TodoList;