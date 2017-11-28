import React, { Component } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import TodoItemsStatus from './components/TodoItemsStatus'

class App extends Component {
  state = {
    items: [
      { description: 'First', completed: true, edit: false },
      { description: 'Second', completed: true, edit: false },
      { description: 'Third', completed: false, edit: false },
      { description: 'Fourth', completed: false, edit: false },
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

  filterCompletedItems() {
    return this.state.items.map(item => {
      if (item.completed === true) {
        return item
      } else {
        return null
      }
    })
  }

  filterIncompleteItems() {
    return this.state.items.map(item => {
      if (item.completed === false) {
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

        <div class="container">
          <div class="col completed">
            <p>Completed: {totalCompleted}</p>
            {
              this.filterCompletedItems().map((item, index) => {
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
          <div class='col incomplete'>
            <p>Incomplete: {totalIncomplete}</p>
            {
              this.filterIncompleteItems().map((item, index) => {
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
      </div>
    )
  }
}

export default App;
