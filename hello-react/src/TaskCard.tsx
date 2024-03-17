import './TaskCard.css'
import React from 'react';


interface TaskCardprops {
    title: string;
    completdAtDate?: string;
    dueDate?:string;
    assignName:string;
}
const TaskCard = (props) => {
    const {title, dueDate, completedAtDate, assigneeName } = props;

    return  (
        <div className='TaskItem'>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className='Date'>{(dueDate) ?  `Due on: ${dueDate}` : `Completed on: ${completedAtDate}` }</p>
            <p className='Assigne'>Assignee :{assigneeName}</p>
        </div>
    )
}

export default TaskCard