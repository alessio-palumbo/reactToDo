import React from 'react'

function TodoItem({
  description,
  completed = false
}) {
  return (
    <label>
      <input type="checkbox" checkbox={completed} />
      {description}
    </label>
  )
}

export default TodoItem