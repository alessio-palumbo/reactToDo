import React, { Component } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem description="First" completed={true} />
        <TodoItem description="Second" />
        <TodoItem description="Third" />
      </div>
    )
  }
}

export default App;
