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

    this.setState({ notes: [...this.state.notes, {
      task: this.state.query.task,
      time: this.state.query.time,
      completion: false
    
    }] })
  }

  setThing = ev => {
    this.setState({query : { ...this.state.query, [ev.target.name]: ev.target.value }})
  }

  editThing = index => {
    let notes = this.state.notes
      .slice(0, index)
      .concat(this.state.query)
      .concat(this.state.notes.slice(index+1));

    notes[index] = this.state.query;
    this.setState({ notes: [
      ...notes
    ] })

  }

  deleteThing = index => {

    let notes = this.state.notes.slice(0, index).concat(this.state.notes.slice(index+1));

    this.setState({ notes: [
      ...notes
    ] })

  }

  setComplete = index => {
    const notes = [...this.state.notes];
    notes[index].completion = !this.state.notes[index].completion;
    this.setState({ notes: notes});
  }

  deleteCompleted = () => {
    const remaining = this.state.notes.filter(note => {
      return !note.completion;
    })
    this.setState({ notes: [
      ...remaining
    ]})
  }

  render() {
    return (
      <div>
        <TodoForm 
          addNote={this.addNote} 
          setThing={this.setThing} 
          query={this.state.query} 
          deleteCompleted={this.deleteCompleted}
          />
        {
          this.state.notes.map((d, i) => (
            <Todo 
              note={d} 
              key={i} 
              index={i} 
              edit={this.editThing} 
              delete={this.deleteThing} 
              setComplete={this.setComplete} 
              complete={this.state.notes[i].completion} />
          ))

        }
        </div>
    )
  }
}

export default TodoList;