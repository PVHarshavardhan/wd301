import TaskCard from "./TaskCard"
import './App.css'

function App() {

  return (
    <>
    <div>
      <h1 style={{'font-size':'30px'}}>Smart Tasker</h1>
      <p>Welcome to schedule the tasks</p>
      </div>
    <div className = "mainroot">
      
      <div>
        <h1 className="h1">Pending</h1>
        <TaskCard title = "build the website with react.." dueDate="10th april"assigneeName="Rohit S" type="pending"  />
        <TaskCard title = "add blog" dueDate="22nd March"assigneeName="Rohit M" type="pending" />
      </div>
      <div>
      <h1 className="h1">Done</h1>
        <TaskCard title ="design the mock up" completedAtDate="10th april"assigneeName="Rohit m" type="done" />
        <TaskCard title ="get approval" completedAtDate="10th april"assigneeName="Rohit m" type="done" />
        
      </div>
    </div>
    </>
  )
}

export default App
