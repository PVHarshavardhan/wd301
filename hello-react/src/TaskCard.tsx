import './TaskCard.css'
import React from 'react';

interface TaskCardprops {
  title: string;
  completedAtDate?: string;
  dueDate?:string;
  assigneeName:string;
}

const TaskCard :React.FC<TaskCardprops> = (props) => {
  const {title,completedAtDate,dueDate,assigneeName} = props;


  return (
    <div className="TaskItem">
      <h2 className='Title'>{title}</h2>
      <p className='Date'>{(dueDate) ? `Due on: ${dueDate}` : `Completed on: ${completedAtDate}` }</p>
      <p className='Assignee'>Assignee: {assigneeName}</p>
    </div>
  )
}

export default TaskCard