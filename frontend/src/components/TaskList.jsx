import React from 'react';
import './TaskList.css';

// TaskList component for rendering the list of tasks
const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <>
      <h3>Task List</h3>
      <hr />
      <ul className="task-list">
        {/* Iterate through the tasks and render each task item */}
        {tasks.map(task => (
          <li key={task._id} className="task-item">
            <div>
              <h5>{task.title}</h5>
              <p>{task.description}</p>
              <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
            <div>
              <button onClick={() => editTask(task)} className="btn btn-secondary">Edit</button>
              <button onClick={() => deleteTask(task._id)} className="btn btn-danger">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
