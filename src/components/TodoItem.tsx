import { useState } from "react";

function TodoItem() {
  const [todo, setTodo] = useState("");

  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  const handleKeydown = (e: any) =>{
    if(e.key === "Enter"){
      e.preventDefault();
      console.log(todo);
    }
  }

  return (
    <div className="mt-15 mb-5 relative">
      <div className="todo-input"></div>
      <input
        className="w-full py-5 px-20 text-2xl bg-white rounded "
        id="todo"
        type="text"
        placeholder="create todo..."
        onChange={handleChange}
        onKeyDown={handleKeydown}
        value={todo}
      ></input>
    </div>
  );
}

export default TodoItem;
