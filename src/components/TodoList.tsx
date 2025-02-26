// import { useState } from 'react'
import CheckIcon from "../assets/check.svg?react";
// import CancelIcon from "../assets/cancel.svg";

function TodoList() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-100 rounded py-1">
      <div className="flex justify-between items-center px-5">
        <div className="flex justify-between items-center cursor-pointer">
          <div className="p-2">
            <div className="todo-circle p-2">
            <CheckIcon className="w-6 h-6 text-white stroke-2" />
            </div>
          </div>

          <div className="text-2xl w-full text-left py-5 p-5">Test</div>
        </div>
        {/* icon cancel */}
        <div className="cursor-pointer">
          {/* <img src={Cancel} alt="icon" className="w-10 h-10 cursor-pointer" /> */}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
