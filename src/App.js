import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [ tasks, setTasks ] = useState([
    {
        id: 1,
        text: 'doctor appointment',
        day: 'Feb 8th at 2:30pm',

    },
    {
        id: 2,
        text: 'school meeting',
        day: 'Feb 10th at 4:30pm',
        
    },
    {
        id: 3,
        text: 'grocery shopping',
        day: 'Feb 12th at 6:30pm',
        
    }
])
  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
