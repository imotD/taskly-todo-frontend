// import { useState } from 'react'
import CheckIcon from "../assets/check.svg?react";
import CancelIcon from "../assets/cancel.svg?react";

function TodoList() {
  // const [count, setCount] = useState(0)

  const todos = [
    {
      id: 1,
      title: "Test",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Test 2",
      isCompleted: false
    },
    {
      id: 3,
      title: "Test 3",
      isCompleted: false
    }
  ]

  return (
    <div className="bg-slate-100 rounded">
      {todos.map((todo) => (
        <div className="flex justify-between items-center px-5 py-1 todo-list">
          <div className="flex justify-between items-center cursor-pointer">
            <div className="p-2">
              <div className={`todo-circle p-2 ${todo.isCompleted ? "todo-circle__check" : "todo-circle__none"}`}>
                {todo.isCompleted ? <CheckIcon className="w-6 h-6 text-white stroke-2" /> : ''}
              </div>
            </div>

            <div className={`text-2xl w-full text-left py-5 p-5 ${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</div>
          </div>
          {/* icon cancel */}
          {
            !todo.isCompleted ?
              <div className="cursor-pointer">
                <CancelIcon className="w-10 h-10 text-gray-500" />
              </div> : ''
          }

        </div>
      ))}

    </div>
  );
}

export default TodoList;
