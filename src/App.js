import React, { Component } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

const items = [
  { description: 'First', completed: true },
  { description: 'Second', completed: true },
  { description: 'Third', completed: false },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          items.map((item, idx) => (
            <TodoItem
              key={idx}
              description={item.description}
              completed={item.completed}
            />
          ))
        }
        <TodoItem description="First" completed />
        <TodoItem description="Second" completed />
        <TodoItem description="Third" />
      </div>
    )
  }
}

export default App;
