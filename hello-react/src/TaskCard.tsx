import './TaskCard.css'
import React from 'react';
const TaskCard = (props) => {
    const {title, dueDate, completedAtDate, assigneeName } = props;

    return  (
        <div className='TaskItem'>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className='Date'>{(dueDate) ?  `Due on: ${dueDate}` : `Completed on: ${completedAtDate}` }</p>
            <p>Assignee :{assigneeName}</p>
        </div>
    )
}

export default TaskCard