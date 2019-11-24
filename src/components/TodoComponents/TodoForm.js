import React from 'react';

export default class TodoForm extends React.Component {

  constructor() {
    super()
  }


  render() {
    return (
      <form onSubmit={this.props.addNote}>
        <input 
          placeholder="Things to do" 
          onChange={this.props.setThing} 
          value={this.props.state.task} 
          name="task"

        />

        <input 
          placeholder="Time they need to be done" 
          onChange={this.props.setThing}
          value={this.props.state.time}
          name="time"

        />

        <button type="submit">Submit</button>
      </form>
    )

  }

}