// services/taskService.js

import axios from 'axios';
import API_URL from './Base_Url';


const getAllTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

const getTaskById = async (taskId) => {
  try {
    const response = await axios.get(`${API_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching task ${taskId}:`, error);
    throw error;
  }
};

const createTask = async (taskData) => {
  try {
    const response = await axios.post(API_URL, taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

const updateTask = async (taskId, taskData) => {
  try {
    const response = await axios.patch(`${API_URL}/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error(`Error updating task ${taskId}:`, error);
    throw error;
  }
};

const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting task ${taskId}:`, error);
    throw error;
  }
};

export {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
