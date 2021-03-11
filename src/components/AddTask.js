import React from 'react';
import { useState } from 'react';

const AddTask = ( { onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();
        
        if(text===''){
            alert('please enter a task.');
            return;
        }
        
        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <div>
            <form className='add-form' onSubmit={onSubmit}> 
                <div className='form-control'>
                    <label htmlFor='text'>Task </label>
                    <input 
                        type='text' 
                        id='text' 
                        placeholder='input task' 
                        value={text} 
                        onChange={(e)=>setText(e.target.value)}>
                    </input>
                </div>  
                <div className='form-control'>
                    <label htmlFor='day'>Day & Time </label>
                    <input 
                        type='text' 
                        id='day' 
                        placeholder='input day and time'
                        value={day} 
                        onChange={(e)=>setDay(e.target.value)}>
                    </input>
                </div>   
                <div className='form-control form-control-check'>
                    <label htmlFor='reminder'>Set Remainder</label>
                    <input 
                        type='checkbox' 
                        id='reminder'
                        value={reminder}
                        onChange={(e)=>setReminder(e.currentTarget.checked)}>
                    </input>
                </div>
                
                    <input className='btn btn-block' type='submit' value='Add Task'></input>
                    
            </form>
        </div>
    )
}

export default AddTask
