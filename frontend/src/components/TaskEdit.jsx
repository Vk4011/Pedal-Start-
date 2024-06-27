import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTaskById, updateTask } from "./TaskService";
import Navbar from "./Navbar";

const TaskEdit = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskData = await getTaskById(taskId);
        setTask(taskData);
      } catch (error) {
        console.error(`Error fetching task ${taskId}:`, error);
      }
    };
    fetchTask();
  }, [taskId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(taskId, task);
      console.log("Task updated successfully:", task);
    } catch (error) {
      console.error(`Error updating task ${taskId}:`, error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md w-full mx-auto mt-8 p-4 bg-white rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">Edit Task</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={task.title}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={task.description}
                onChange={handleInputChange}
                rows="3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-gray-700"
              >
                Due Date:
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={task.dueDate}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md focus:outline-none w-full"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default TaskEdit;
