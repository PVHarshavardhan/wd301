import "./TaskCard.css";
interface TaskProps {
  idx:number;
  title: string;
  dueDate: string;
  description:string;
  deleteTask:(idx:number) => void;
}

const Task = (props: TaskProps) => {
  const deleteTask = () => {
    props.deleteTask(props.idx);
  }
  
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div style={{display: "flex"}}>
        <div>
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">DueDate: {props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
        </div>
      
      <div style={{marginLeft:"120px",marginTop:"15px"}}>
      <button onClick={deleteTask} id="deleteTaskButton" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Delete Task </button>
      </div>
      </div>
    </div>
  );
};

export default Task;