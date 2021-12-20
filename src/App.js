import './App.css';
import React from "react"
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';

const todos=[
  {text:"Cortar Cebolla",completed:false},
  {text:"Trabajos Finales",completed:false},
  {text:"Dormir",completed:false}
]

function getDones(arr){
  var count=0;
  for(var item of arr){
    (item["completed"])?count+=1:count=count;
  }
  return count;
}

function App(props) {
  return(
    <React.Fragment>
      <TodoCounter done={getDones(todos)} all={todos.length}/>
      <TodoSearch/>
      
      <TodoList>
        {todos.map(todo=>{
          console.log(todo);
          return <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        })}
      </TodoList>
      <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
