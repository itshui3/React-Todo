import React from 'react';
import TodoList from './components/TodoComponents';

class App extends React.Component {
  constructor() {
    super();
    this.state = [
      {
        chore: 'clean',
        dueDate: ''
      }
    ]

  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>{this.state.chore}Welcome to your Todo App!</h2>

        <TodoList />

      </div>
    );
  }
}

export default App;
