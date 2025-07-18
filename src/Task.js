export const Task = (props) => {
    return (
        <div className="task"
        style={{backgroundColor: props.completed ? "orange" : "white"}}>
            <h1>{props.taskName}</h1>
            <button onClick={()=> props.completeTask(props.id)}>Done</button>
            <button onClick ={() => props.deleteTask(props.id)}>X</button>
        </div>
      );
};
