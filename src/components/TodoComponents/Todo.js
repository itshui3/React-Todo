import React from 'react';
import './Todo.scss';

export default class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      complete: false
    }
  }
// these props need to be receiving information I can plug in that the
// user typed into the form that should be saved in state on change and 
// iterated in on submit


  handleCompletion = ev => {
    console.log(this.props.index);
    this.props.setComplete(this.props.index)
  }

  handleEdit = ev => {
    this.props.edit(this.props.index);
    ev.stopPropagation();
  }

  render() {
  

    return(
      <div>
        <ul>
          <li 
            className={`${
              this.props.complete ?
              'complete' :
              'incomplete'
            }`}
            onClick={this.handleCompletion}
          >{this.props.note.task}</li>
          <li 
            className={`${
              this.props.complete ?
              'complete' :
              'incomplete'
            }`}
            onClick={this.handleCompletion}
          >{this.props.note.time}</li>
        </ul>
        <div>
          <button onClick={() => this.props.delete(this.props.index)}>Delete</button>
          <button onClick={this.handleEdit}>Edit</button>
        </div>

      </div>
      
    )

  }

}