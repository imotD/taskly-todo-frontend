// import { useState } from 'react'

function TodoItem() {
  // const [count, setCount] = useState(0)

  return (
    <div className="mt-15 mb-5">
    <input className="w-full py-5 px-20 text-2xl bg-white rounded " id="todo" type="text" placeholder="create todo..."></input>
   </div>
  )
}

export default TodoItem