import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ToDo() {
  const [todo, setTodo] = useState({
    taskAdd: "",
    allTasks: [],
    taskEdit: null,
  });

  const { taskAdd, allTasks, taskEdit } = todo;

  const handleDelete = (index) => {
    const update = [...allTasks];
    update.splice(index, 1);
    setTodo({
      ...todo,
      allTasks: update,
    });
  };

  const handleComplete = (index) => {
    const update = [...allTasks];
    update[index].completed = true;
    setTodo({
      ...todo,
      allTasks: update,
    });
  };

  const clearAllTasks = () => {
    setTodo({
      ...todo,
      allTasks: [],
    });
  };

  const handleAdd = () => {
    if (taskAdd.trim() === "") return;

    const newTask = {
      text: taskAdd,
      completed: false,
    };

    if (taskEdit !== null) {
      const updated = [...allTasks];
      updated[taskEdit] = newTask;
      setTodo({
        ...todo,
        allTasks: updated,
        taskAdd: "",
        taskEdit: null,
      });
    } else {
      setTodo({
        ...todo,
        allTasks: [...allTasks, newTask],
        taskAdd: "",
      });
    }
  };

  const handleEdit = (index) => {
    setTodo({
      ...todo,
      taskAdd: allTasks[index].text,
      taskEdit: index,
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">To Do</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) =>
            setTodo((prev) => ({
              ...prev,
              taskAdd: e.target.value,
            }))
          }
          value={taskAdd}
          placeholder="Enter task"
        />
        <button
          onClick={handleAdd}
          className="btn btn-outline-secondary"
          type="button"
        >
          {taskEdit == null ? "Add" : "Update"}
        </button>
      </div>

      {allTasks.map((task, index) =>
        !task.completed ? (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2"
          >
            <span>{task.text}</span>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => handleComplete(index)}
            >
              Completed
            </button>
          </div>
        ) : null
      )}
 <h4 className="mt-4">Completed Tasks</h4>
      {allTasks.some((task) => task.completed) && (
        <>
         
          {allTasks.map((task, index) =>
            task.completed ? (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2"
              >
                <span >{task.text}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            ) : null
          )}
        </>
      )}

      <div className="text-center mt-4">
        <button className="btn btn-outline-danger" onClick={clearAllTasks}>
          Clear All Tasks
        </button>
      </div>
    </div>
  );
}

export default ToDo;
