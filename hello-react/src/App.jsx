import TaskCard from "./TaskCard"


function App() {

  return (
    
    <div style={{display:"flex", margin:"5px",width:'100%'}}>
      <div style={{margin:"15px",width:'50%'}}>
      <h1 style={{marginBottom:'10px',fontSize:'35px',fontWeight:'bold'}}>Pending</h1>
        <div>
        <TaskCard title = "build the website with react.." dueDate="10th april"assigneeName="Rohit S" type="pending"  />
        <TaskCard title = "add blog" dueDate="22nd March"assigneeName="Rohit M" type="pending" />
        </div>
      </div>
      <div style={{margin:"15px",width:'50%'}}>
      <h1 style={{marginBottom:'10px',fontSize:'35px',fontWeight:'bold'}}>Done</h1>
      <div >
        <TaskCard title ="design the mock up" completedAtDate="10th april"assigneeName="Rohit m" type="done" />
        <TaskCard title ="get approval" completedAtDate="10th april"assigneeName="Rohit m" type="done" />
      </div>
      </div>
    </div>
  )
}

export default App
