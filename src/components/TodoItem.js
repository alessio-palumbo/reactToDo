import React from 'react'

function TodoItem({
  description,
  completed = false,
  onToggleCompleted,
  onChangeItemDescription,
  onChangedDescription,
  onPressEnter,
  displayInput,
  edit = false
}) {
  let emoji = null
  completed === false ? emoji = '❌' : emoji = '✅'

  let input = null
  if (edit === false && description !== '') {
    input = <span onClick={(event) => displayInput()}>{description}</span>
  } else {
    input = <input
      type="text"
      onChange={onChangeItemDescription}
      onBlur={onChangedDescription}
      onKeyPress={onPressEnter}
      value={description}
      autoFocus />
  }

  return (
    <div>
      <button
        completed={completed}
        onClick={(event) => onToggleCompleted()}
      >
        {emoji}
      </button>
      {input}
    </div>
  )
}

export default TodoItem