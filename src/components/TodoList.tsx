import CheckIcon from "../assets/check.svg?react";
import CancelIcon from "../assets/cancel.svg?react";
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function TodoList() {

  const queryClient = useQueryClient();
  interface Todo {
    id: number;
    title: string;
    isCompleted: boolean
  }

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:8080/api/todos");
    return response.status === 204 ? [] : response.data;
  }

  const { data: todos = [], isLoading, isError } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    retry: false,
  });

  const updateTodo = async (id: number) => {
    const todo = todos.find((todo: Todo) => todo.id === id);
    if (!todo) return;

    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted
    }

    await axios.put(`http://localhost:8080/api/todos/${id}`, updatedTodo);
  }

  const handleUpdateTodo = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Tolong cek errornya", error);
    },
  });

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error ya </div>

  return (
    <div className="bg-white rounded">

      {todos.length > 0 ?
        todos.map((todo: Todo) => (
          <div key={todo.id} className="flex justify-between items-center px-5 py-1 todo-list">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleUpdateTodo.mutate(todo.id)}>
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
        )) :
        <div className="flex justify-center items-center h-32">
          <div className="text-2xl text-gray-400">No Todos</div>
        </div>
      }

      {/* footer */}

      <div className="flex justify-between mx-10 py-4 text-gray-500">
        <div>{todos.length > 0 ? todos.length : 0} Items left</div>
        <div className="flex gap-5">
          <div>All</div>
          <div>Active</div>
          <div>Complated</div>
        </div>
        <div>
          <button>Clear Complated</button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
