const express = require('express');
const router = express.Router();
const Task = require("../models/TaskSchema");

// Get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new task
router.post('/tasks', async (req, res) => {
    const { title, description, dueDate } = req.body;
    const task = new Task({
        title,
        description,
        dueDate
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a single task
router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a task
router.patch('/tasks/:id', async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, { title, description, dueDate }, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
