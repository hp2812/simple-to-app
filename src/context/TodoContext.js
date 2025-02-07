import { useContext,createContext } from "react";
//we dont requre any jsx in this so we create this as js

// first we need to create context 
//second we neeed to provide context and wrap our app.jsx to provide the value
// third we need to consume the context which is happen in components 
 export const TodoContext = createContext({
        todos:[
          { 
            id:1,
            todo:"Todo Msg",
            completed:false,

          }
        ],
        // now adding th function 
        addTodo: (todo)=>{

        }, 
        //editing the todo 
        updateTodo: (id,todo)=>{ 

        },
        //delete the todo from the screen
        deleteTodo: (id)=>{ },

        // its used for checked the todo for complete and change the css of the  to do 
        toggleComplete : (id)=>{

        }




 }); // its an object

 export const useTodo = ()=>{
  return useContext(TodoContext); //because of this we can directly asign the value of context in components

 }
 export const TodoProvider = TodoContext.Provider //provide the global acess of the todo functionalty to the other components 
