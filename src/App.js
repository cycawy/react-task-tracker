import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [ tasks, setTasks ] = useState([
    {
        id: 1,
        text: 'doctor appointment',
        day: 'Feb 8th at 2:30pm',
        reminder: true,

    },
    {
        id: 2,
        text: 'school meeting',
        day: 'Feb 10th at 4:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'grocery shopping',
        day: 'Feb 12th at 6:30pm',
        reminder: false,
    }
])

//Add task
const addTask=(task)=>{
  let id=Math.floor(Math.random()*10000+1);
  let newTask = {id, ...task};
  
  setTasks([...tasks, newTask]);
}

// Delete Task
const DeleteTask =(id) =>{
  setTasks(tasks.filter((task)=>task.id!==id));
}

// Toggle reminder
const ToggleReminder = (id) => {
   setTasks(tasks.map((task)=>task.id===id?{...task, reminder:!task.reminder}:task))
}

  return (
    <div className="container">
     <Header />
     <AddTask onAdd={addTask} />
     {tasks.length>0 ? <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={ToggleReminder}/>  :'no task to show'}
    </div>
  );
}

export default App;
