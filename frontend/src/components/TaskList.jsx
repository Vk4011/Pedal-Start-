import React, { useState, useEffect } from "react";
import { getAllTasks, deleteTask } from "./TaskService";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasksData = await getAllTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error(`Error deleting task ${taskId}:`, error);
    }
  };

  return (
    
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Task List</h1>
      {tasks.map((task) => (
        <div key={task._id} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-gray-700">{task.description}</p>
          {task.dueDate && (
            <p className="text-gray-500 mt-2">
              Due Date: {new Date(task.dueDate).toLocaleDateString()}
            </p>
          )}
          <div className="mt-4 flex justify-between">
            <div className="flex flex-row items-center justify-around gap-2">
              <button
                onClick={() => handleDelete(task._id)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 transition ease-in-out delay-75 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
              >
                <Link to={`/tasks/${task._id}`}>View Details</Link>
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
              >
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
                Delete
              </button>
            </div>
            <Link
              to={`/tasks/${task._id}/edit`}
              className=" bg-gradient-to-r from-green-600 to-green-400  hover:bg-green-400 text-white px-3 py-1 rounded-md focus:outline-none"
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
