import { useContext,createContext} from "react";
export const ToDoContext=createContext({
 todos:[
    {
        todo:"task1",
        id:1,
        completed:false,
    }
 ],
 addToDo:(todo) => {},
 updateToDo:(todo,id) =>{},
 deleteToDo:(id)=>{},
 toggleComplete:(id)=>{}


});

export const ToDoProvider=ToDoContext.Provider;
export const useToDo=()=>{
    return useContext(ToDoContext);
} 
