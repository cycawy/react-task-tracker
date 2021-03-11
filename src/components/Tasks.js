import React from 'react';
import Task from './Task';


const Tasks = ({ tasks, onDelete , onToggle }) => {
    
    return (
        <>
            {/* NOTE: here inside map, after arrow it is "()" used, not {}, why? */}
            {tasks.map((task)=>(<Task key={task.id} task={task} onDelete={()=>onDelete(task.id)} onToggle={onToggle}/>)
            )}
        </>
    )
}

export default Tasks
