import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ToDo = ({ currentUser }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);

  const ToDo_Key = "all_todos";

  useEffect(() => {
    if (currentUser?.id) {
      loadTasks();
    }
  }, [currentUser]);

  const saveTasks = (userTasks) => {
    const allTasks = JSON.parse(localStorage.getItem(ToDo_Key)) || [];

    const otherUserTasks = allTasks.filter(task => task.userId !== currentUser.id);

    const updatedAllTasks = [...otherUserTasks, ...userTasks];

    localStorage.setItem(ToDo_Key, JSON.stringify(updatedAllTasks));
  };

  const loadTasks = () => {
    const allTasks = JSON.parse(localStorage.getItem(ToDo_Key)) || [];

    const userTasks = allTasks.filter(task => task.userId === currentUser.id);

    setTasks(userTasks);
  };

  const handleAddTask = () => {
    if (task.trim() === "") return;

    let updatedTasks;

    if (editTaskId) {
      updatedTasks = tasks.map(t =>
        t.id === editTaskId ? { ...t, text: task } : t
      );
      setEditTaskId(null);
    } else {
      const newTask = {
        userId: currentUser.id,
        text: task,
        completed: false,
        id: Date.now().toString(),
      };
      updatedTasks = [...tasks, newTask];
    }

    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setTask("");
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const handleEditTask = (id) => {
    const taskToEdit = tasks.find(t => t.id === id);
    if (taskToEdit) {
      setTask(taskToEdit.text);
      setEditTaskId(id);
    }
  };

  const clearAllTasks = () => {
    setTasks([]);
    saveTasks([]);
  };

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">To Do List</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button
          onClick={handleAddTask}
          className="btn btn-outline-primary"
          type="button"
        >
          {editTaskId ? "Update Task" : "Add Task"}
        </button>
      </div>

      {pendingTasks.map((task) => (
        <div
          key={task.id}
          className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2"
        >
          <span>{task.text}</span>
          <div>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => handleEditTask(task.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm me-2"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-success btn-sm"
              onClick={() => handleCompleteTask(task.id)}
            >
              Complete
            </button>
          </div>
        </div>
      ))}

      <h4 className="mt-4">Completed Tasks</h4>
      {completedTasks.map((task) => (
        <div
          key={task.id}
          className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2"
        >
          <span className="text">{task.text}</span>
          <div>
            
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {tasks.length > 0 && (
        <div className="text-center mt-4">
          <button className="btn btn-outline-danger" onClick={clearAllTasks}>
            Clear All Tasks
          </button>
        </div>
      )}
    </div>
  );
};

export default ToDo;
