import React from 'react';

export default class Todo extends React.Component {
  constructor() {
    super()

  }
// these props need to be receiving information I can plug in that the
// user typed into the form that should be saved in state on change and 
// iterated in on submit
  render() {
    return(
      <li>{this.props.note}</li>
    )

  }

}