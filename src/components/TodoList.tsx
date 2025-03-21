import CheckIcon from "../assets/check.svg?react";
import CancelIcon from "../assets/cancel.svg?react";
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

function TodoList() {
  interface Todo {
    id: number;
    title: string;
    isCompleted: boolean
  }

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:8080/api/todos");
    return response.data;
  }

  const { data: todos, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    retry: false,
  });

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error ya </div>

  return (
    <div className="bg-white rounded">
      {todos.map((todo: Todo) => (
        <div key={todo.id} className="flex justify-between items-center px-5 py-1 todo-list">
          <div className="flex justify-between items-center cursor-pointer">
            <div className="p-2">
              <div className={`todo-circle p-2 ${todo.isCompleted ? "todo-circle__check" : "todo-circle__none"}`}>
                {todo.isCompleted ? <CheckIcon className="w-6 h-6 text-white stroke-2" /> : ''}
              </div>
            </div>

            <div className={`text-2xl w-full text-left py-5 p-5 ${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</div>
          </div>

          {/* icon cancel */}
          <div className="cursor-pointer">
            <CancelIcon className="w-10 h-10 text-gray-200 hover:text-gray-400" />
          </div>

        </div>
      ))}

    </div>
  );
}

export default TodoList;
