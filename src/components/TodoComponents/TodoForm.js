import React from 'react';

export default class TodoForm extends React.Component {

  constructor() {
    super()
  }


  render() {
    return (
      <form onSubmit={this.props.addNote}>
        <input placeholder="Things to do" onChange={this.props.setQuery} />
      </form>
    )

  }

}