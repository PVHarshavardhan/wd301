import './TaskCard.css'
const TaskCard = (props) => {
    const {title, dueDate, completedAtDate, assigneeName, type } = props;

    const Category = () => {
        if (type == "pending") {
            return <p>due on:{dueDate}</p>
        }
        else {
            return <p>completed on:{completedAtDate}</p>
        }
    }
    return  (
        <div className='TaskItem'>
            <h2 className="text-xl font-bold">{title}</h2>
            <Category />
            <p>Assignee :{assigneeName}</p>
        </div>
    )
}

export default TaskCard