import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ addOrUpdateTask, editingTask }) => {
  // State to manage task details
  const [task, setTask] = useState({ title: '', description: '', dueDate: '' });

  // useEffect hook to update the form when editingTask changes
  useEffect(() => {
    if (editingTask) {
      // Set the form fields to the task being edited
      setTask(editingTask);
    } else {
      // Reset the form fields
      setTask({ title: '', description: '', dueDate: '' });
    }
  }, [editingTask]);

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding field in the task state
    setTask({ ...task, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the parent function to add or update the task
    addOrUpdateTask(task);
    // Reset the form fields after submission
    setTask({ title: '', description: '', dueDate: '' });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      {/* Title input field */}
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
      </div>
      {/* Description input field */}
      <div className="form-group">
        <textarea
          className="form-control"
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
      </div>
      {/* Due date input field */}
      <div className="form-group">
        <input
          type="date"
          className="form-control"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      {/* Submit button */}
      <button type="submit" className="btn btn-primary">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
