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
  let emoji = ''
  if (completed === false) {
    emoji = '❌'
  } else {
    emoji = '✅'
  }

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

    /* <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={
            (event) => {
              console.log('Toggled', description)
              onToggleCompleted()
            }
          }
        />
        {description}
      </label> */
  )
}

export default TodoItem