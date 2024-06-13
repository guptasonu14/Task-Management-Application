import React from 'react';
import './styles.css';

// TaskItem component for rendering individual tasks
const TaskItem = ({ task, deleteTask, editTask }) => {
  return (
    <li className="task-item">
      {/* Task details */}
      <div>
        <h5>{task.title}</h5>
        <p>{task.description}</p>
        <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      </div>
      {/* Task action buttons */}
      <div>
        <button className="btn btn-secondary" onClick={() => editTask(task)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => deleteTask(task._id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
