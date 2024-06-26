import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskEdit from "./TaskEdit";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Task = () => {
  const handleTaskCreated = (newTask) => {
    console.log("New task created:", newTask);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<TaskForm onTaskCreated={handleTaskCreated} />}
        />
        <Route path="/tasks/:taskId/edit" element={<TaskEdit />} />
        {/* <Route path="/tasks" element={<TaskList />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Task;
