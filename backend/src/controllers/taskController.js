const Task = require("../models/taskModel");

const createTask = async (req, res) => {
  const task = req.body;
  try {
    const newTask = await Task.create(task);
    res.status(201).json({
      message: "Task created successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const allTask = async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo', 'name');
    res.status(201).json({
      tasks: tasks.map(t => ({
        _id: t._id,
        title: t.title,
        status: t.status,
        assignedTo: t.assignedTo ? { name: t.assignedTo.name } : null
      }))
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const taskCount = async (req, res) => {
  const { id }= req.params
  try {
    const tasks = await Task.find({assignedTo: id})
    res.status(201).json({
      tasks
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { createTask, allTask, taskCount };
