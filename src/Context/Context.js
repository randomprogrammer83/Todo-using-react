import { createContext, useContext } from "react";

export const Todocontext=createContext({
    todos:[
        {  id:101,
            Todos:"First task added",
            isCompleted:false
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    UpdateTodo:(todo,id)=>{},
    toggleTodo:(id)=>{},

})

export const TodoProvider=Todocontext.Provider;

 const useTodo=()=>{
  return useContext(Todocontext)
}

export default useTodo;