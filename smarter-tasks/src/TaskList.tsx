import Task from "./Task";
import { TaskItem } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppState {
  tasks: TaskItem[];
}
interface Props {
  tasks: TaskItem[];
}


const TaskList = (props: Props) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });
  const deleteTask =(idx:number) => {
    console.log(taskAppState);
    
        props.tasks.splice(idx, 1);
      
      setTaskAppState({ tasks: props.tasks});


  }
  const list = props.tasks.map((task, idx) => (
    <li>
    <Task
      key={idx}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      idx = {idx}
      deleteTask={deleteTask}
    />
    </li>
  ));
  return <><ul>{list}</ul></>;
};
export default TaskList;