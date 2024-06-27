import React, { useState, useEffect } from "react";
import { getTaskById } from "./TaskService";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const taskData = await getTaskById(taskId);
        setTask(taskData);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchTaskDetails();
  }, [taskId]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Task Details</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p className="text-gray-700">{task.description}</p>
        {task.dueDate && (
          <p className="text-gray-500 mt-2">
            Due Date: {new Date(task.dueDate).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewDetails;
