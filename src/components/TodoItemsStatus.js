import React from 'react'

function TodoItemsStatus({
  items,
  incomplete
}) {
  let result = null
  if (incomplete === 0) {
    result = "👏 Awesome! You did it!"
  } else if (incomplete === 1) {
    result = "👌 Great! One more to go!"
  } else if (incomplete === 2) {
    result = "🤘  Halfway through!!!"
  } else if (incomplete === 3) {
    result = "🗣 Hurry up! Let's do something"
  } else {
    result = "💩 C'mon, c'mon, c'mon!!!"
  }

  return (
    <div>
      <h3>Total items: {items}</h3>
      <p>Item to complete: {incomplete}</p>
      <p>{result}</p>
    </div>
  )
}

export default TodoItemsStatus