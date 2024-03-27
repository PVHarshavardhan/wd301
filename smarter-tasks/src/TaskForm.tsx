import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
    addTask: (task: TaskItem) => void;
  
}
interface TaskFormState {
    title: string;
    dueDate: string;
    description: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
        title: "",
        dueDate:"",
        description: ""
      }
      
  }
    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
          title: this.state.title,
          dueDate: this.state.dueDate,
          description: this.state.description,
        };
        this.props.addTask(newTask);
        this.setState({ title: "" ,dueDate: "",description:""});
      };
    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ title: event.target.value });
    };

    dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      
      this.setState({ dueDate:event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    
    this.setState({ description: event.target.value });
};
  
  render(){
    return (
        <form onSubmit={this.addTask}>
          <div>
          <label htmlFor="todoTitle">Task:</label>
          <input type="text" id="todoTitle" value={this.state.title} onChange={this.titleChanged} required/>
          </div>
          <div>
          <label htmlFor="todoDueDate">DueDate:</label>
          <input type="date" id="todoDueDate" value={this.state.dueDate} onChange={this.dueDateChanged} required/>
          </div>
          <div>          
          <label htmlFor="todoDescription">Description:</label>
          <input type="text" id="todoDescription" value={this.state.description} onChange={this.descriptionChanged} />
          </div>
          <button type="submit">Add item</button>
        </form>
      )
  }
}
 export default TaskForm;