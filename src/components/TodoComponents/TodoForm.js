import React from 'react';

export default class TodoForm extends React.Component {

  constructor() {
    super()
  }


  render() {
    return (
      <div>
      {/* Input Form */}
        <form onSubmit={this.props.addNote}>
          <input 
            placeholder="Things to do" 
            onChange={this.props.setThing} 
            // value={this.props.query.task} 
            name="task"

          />

          <input 
            placeholder="Time they need to be done" 
            onChange={this.props.setThing}
            // value={this.props.query.time}
            name="time"

          />

          <button type="submit">Submit</button>
       </form>
      {/* Remove Completed Form */}
          <button onClick={this.props.deleteCompleted}>Remove Completed</button>
        <form>

        </form>
      </div>

    )

  }

}