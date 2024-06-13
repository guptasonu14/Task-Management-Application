import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // State to hold the task being edited
  const [editingTask, setEditingTask] = useState(null);

  // useEffect to fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Function to fetch tasks from the server
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Function to add a new task or update an existing task
  const addOrUpdateTask = async (task) => {
    if (editingTask) {
      await axios.put(`http://localhost:5000/tasks/${editingTask._id}`, task);
    } else {
      await axios.post('http://localhost:5000/tasks', task);
    }
    setEditingTask(null);
    fetchTasks();
  };

  // Function to delete a task by ID
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  // Function to set the task to be edited
  const editTask = (task) => {
    setEditingTask(task);
  };

  return (
    <>
      {/* Header for the Task Manager application */}
      <h1>Task Manager</h1>
      
      {/* Container for the task form and task list */}
      <div className="container">
        
        {/* Left side for the task form */}
        <div className="left-side">
          <TaskForm addOrUpdateTask={addOrUpdateTask} editingTask={editingTask} />
        </div>
        
        {/* Right side for the task list */}
        <div className="right-side">
          <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
        </div>
      </div>
    </>
  );
};

export default App;
