import React from 'react';
import Task from './Task';


const Tasks = ({ tasks }) => {
    
    return (
        <>
            {/* NOTE: here inside map, after arrow it is "()" used, not {}, why? */}
            {tasks.map((task)=>(<Task key={task.id} task={task} />)
            )}
        </>
    )
}

export default Tasks
