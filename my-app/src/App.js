import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component{
  state = {
    todos: [
      {
        id: 1,
        title: "Clean your Room",
        completed: false
      },
      {
        id: 2,
        title: "Take Responsibility",
        completed: true
      },
      {
        id: 3,
        title: "Quit wasting time",
        completed: false
      }
    ]
  }
  render(){
    // console.log(this.state.todos);
  return (
    <div className="App">
        <Todos todos={this.state.todos}/>
    </div>
  );
  }
}

export default App;
