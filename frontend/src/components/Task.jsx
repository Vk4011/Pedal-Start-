import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskEdit from "./TaskEdit";
import ViewDetails from "./ViewDetails"; // Import the ViewDetails component
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Task = () => {
  const handleTaskCreated = (newTask) => {
    console.log("New task created:", newTask);
  };
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      
        <Route
          path="/create"
          element={<TaskForm onTaskCreated={handleTaskCreated} />}
        />
        <Route path="/tasks/:taskId" element={<ViewDetails />} /> {/* Add this line */}
        <Route path="/tasks/:taskId/edit" element={<TaskEdit />} />
        <Route path="/" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Task;
