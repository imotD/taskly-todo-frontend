import axios from "axios";
import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function TodoItem() {
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);


  const createTodo = async (newTodo: { title:string, isCompleted: boolean }) => {
    const response = await axios.post("http://localhost:8080/api/todos" , newTodo)
    return response.data
  }


  const mutation = useMutation(
    {
      mutationFn: createTodo,
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["todos"]})

        if(inputRef.current){
          inputRef.current.value = ""
        }
      }
    } 
  )

  const handleKeydown = (e: any) =>{
    if(e.key === "Enter"){
      e.preventDefault();

    const newTodo = {
      title: e.target.value,
      isCompleted: false
    }
    
    mutation.mutate(newTodo)
    }
  }

  return (
    <div className="mt-15 mb-5 relative">
      <div className="todo-input"></div>
      <input
        className="w-full py-5 px-20 text-2xl bg-white rounded "
        id="todo"
        type="text"
        ref={inputRef}
        placeholder="create todo..."
        onKeyDown={handleKeydown}
      ></input>
    </div>
  );
}

export default TodoItem;
