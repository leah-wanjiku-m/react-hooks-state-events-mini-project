import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[tasks, setTasks]= useState(TASKS);
  const[category,setCategory]= useState('All');
  function add(newTask){
    setTasks([...tasks,newTask])
  }
  function handledelete (deletedTaskText) {
  setTasks(tasks.filter((task)=>task.text !== deletedTaskText));
  }
  const visibleTasks=tasks.filter((task)=> category ==="All" || task.category=== category);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
       categories={CATEGORIES}
       selectCategory={category}
       onCategory={setCategory}/>
      <NewTaskForm 
        categories ={CATEGORIES.filter((catogory) => catogory !== "ALL" )}
        onTaskFormSubmit ={add}
        />
      <TaskList deleteTask={handledelete} allTasks={visibleTasks}/>
    </div>
  );
}

export default App;
