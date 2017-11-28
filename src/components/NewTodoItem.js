import React from 'react'

function NewToDoItem({
  description,
  onAddTodoItem
}) {
  return (
    <div>
      <input type='text' placeholder='New Todo' onChange={onAddTodoItem} />
      <button>Add</button>
    </div>
  )
}

export default NewToDoItem