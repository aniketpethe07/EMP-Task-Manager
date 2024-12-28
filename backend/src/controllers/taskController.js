const connectDB = require("../db/index")

const createTask = async (req, res) => {
  const { title, date, category, description, assignedTo, assignedBy } = req.body;
  try {
    const con = await connectDB();
    const [result] = await con.query(
      'INSERT INTO tasks (title, date, category, description, status, assignedTo, assignedBy) VALUES (?, ?, ?, ?, ?, ?, ?)',[title, date, category, description, "Pending",assignedTo, assignedBy]
    );
    res.status(201).json({
      message: "Task created successfully",
      result
    });
    await con.end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const allTask = async (req, res) => {
  try {
    const con = await connectDB();
    const [tasks] = await con.query('SELECT t.id, t.title, t.status, u.name as assignedTo  FROM tasks t LEFT JOIN users u ON t.assignedTo = u.id');
    res.status(201).json({
      tasks: tasks.map(t => ({
        id: t.id,
        title: t.title,
        status: t.status,
        assignedTo: t.assignedTo
      }))
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const taskCount = async (req, res) => {
  const { id }= req.params
  try {
    const con = await connectDB();
    const [tasks] = await con.query('SELECT * FROM tasks WHERE assignedTo = ?',[id]);
    // const tasks = await Task.find({assignedTo: id})
    res.status(201).json({
      tasks
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { createTask, allTask, taskCount };
