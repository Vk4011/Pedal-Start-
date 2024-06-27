import React, { useState } from "react";
import { createTask } from "./TaskService";
import TaskList from "./TaskList";
import Navbar from "./Navbar";

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await createTask({ title, description, dueDate });
      onTaskCreated(newTask);
      setTitle("");
      setDescription("");
      setDueDate("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="App min-h-screen bg-gray-100">
         {/* <Navbar/> */}
      <main className="container mx-auto px-4 py-8">
       
        <div className="max-w-3xl mx-auto">
          <div className="">
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">Create Task</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title:
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description:
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="3"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Due Date:
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <center>
                <button
                  type="submit"
                  className="w-[60%] p-2 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Add Task
                </button>
              </center>
            </form>
            <TaskList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaskForm;
