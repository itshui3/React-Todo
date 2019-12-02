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
    this.setState({ complete: !this.state.complete })
  }

  // setStrikethrough = complete = {
  //   if (complete) {
  //     const strikethrough = { text-decoration: 'line-through' }
  //     return strikethrough
  //   } else {
  //     return {}
  //   }

  // }

  render() {
  

    return(
      <div>
        <ul>
          <li 
            className={`${
              this.state.complete ?
              'complete' :
              'incomplete'
            }`}
            onClick={this.handleCompletion}
          >{this.props.note.task}</li>
          <li 
            className={`${
              this.state.complete ?
              'complete' :
              'incomplete'
            }`}
            onClick={this.handleCompletion}
          >{this.props.note.time}</li>
        </ul>
        <div>
          <button onClick={() => this.props.delete(this.props.index)}>Delete</button>
          <button onClick={() => this.props.edit(this.props.index)}>Edit</button>
        </div>

      </div>
      
    )

  }

}