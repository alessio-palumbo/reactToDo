import React, { Component } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import TodoItemsStatus from './components/TodoItemsStatus'
import NewToDoItem from './components/NewTodoItem'

class App extends Component {
  state = {
    items: [
      { description: 'Wash dishes', completed: true },
      { description: 'Prepare Lunch', completed: true },
      { description: 'Go to the gym', completed: false },
      { description: 'Fourth', completed: false },
    ]
  }

  onToggleItemAtIndex = (index) => {
    this.setState(prevState => {
      const beforeItems = prevState.items
      // Find item with the particular index
      const afterItems = beforeItems.map((item, currentIndex) => {
        if (currentIndex === index) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })

      return {
        items: afterItems
      }
    })
  }

  itemsCompletedStatus(value) {
    return this.state.items.map(item => {
      if (item.completed === value) {
        return item
      } else {
        return null
      }
    })
  }

  onChangeItemDescriptionAtIndex(index, description) {
    this.setState(prevState => {
      const afterItems = prevState.items.map((item, currentIndex) => {
        if (currentIndex === index) {
          return {
            ...item,
            description
          }
        } else {
          return item
        }
      })
      return { items: afterItems }
    })
  }

  displayInputField(index) {
    this.setState(prevState => {
      const afterItems = prevState.items.map((item, currentIndex) => {
        if (currentIndex === index) {
          return {
            ...item,
            edit: true
          }
        } else {
          return item
        }
      })
      return { items: afterItems }
    })
  }

  hideInputField(index) {
    this.setState(prevState => {
      const afterItems = prevState.items.map((item, currentIndex) => {
        if (currentIndex === index) {
          if (item.description === '') {
            alert('Label cannot be empty!')
            return item
          }
          return {
            ...item,
            edit: false
          }
        } else {
          return item
        }
      })
      return { items: afterItems }
    })
  }

  confirmChange(index, event) {
    if (event.key === 'Enter') {
      this.hideInputField(index)
    }
  }

  render() {
    const items = this.state.items

    const total = items.length
    let totalCompleted = 0
    let totalIncomplete = 0
    items.forEach(item => {
      if (item.completed) {
        totalCompleted += 1
      } else {
        totalIncomplete += 1
      }
    })

    return (
      <div className="App" >
        <h2>TODO LIST</h2>
        <TodoItemsStatus total={total} incomplete={totalIncomplete} />

        <div className="container">
          <div className="col completed">
            <p>Completed: {totalCompleted}</p>
            {
              this.itemsCompletedStatus(true).map((item, index) => {
                if (item !== null) {
                  return (
                    <TodoItem
                      key={index}
                      description={item.description}
                      completed={item.completed}
                      edit={item.edit}
                      onToggleCompleted={() => this.onToggleItemAtIndex(index)}
                      displayInput={(event) => this.displayInputField(index)}
                      onChangeItemDescription={(event) => this.onChangeItemDescriptionAtIndex(index, event.target.value)}
                      onChangedDescription={(event) => this.hideInputField(index)}
                      onPressEnter={(event) => this.confirmChange(index, event)}
                    />
                  )
                }
              })
            }
          </div>
          <div className='col incomplete'>
            <p>Incomplete: {totalIncomplete}</p>
            {
              this.itemsCompletedStatus(false).map((item, index) => {
                if (item !== null) {
                  return (
                    <TodoItem
                      key={index}
                      description={item.description}
                      completed={item.completed}
                      edit={item.edit}
                      onToggleCompleted={() => this.onToggleItemAtIndex(index)}
                      displayInput={(event) => this.displayInputField(index)}
                      onChangeItemDescription={(event) => this.onChangeItemDescriptionAtIndex(index, event.target.value)}
                      onChangedDescription={(event) => this.hideInputField(index)}
                    />
                  )
                }
              })
            }
          </div>
        </div>
        <hr />
        <NewToDoItem />

      </div>
    )
  }
}

export default App;
