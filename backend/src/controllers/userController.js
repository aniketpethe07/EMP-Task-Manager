const User = require("../models/userModel");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password != password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(201).json({
      message: "Logged in successfully",
      user: {
        _id: user._id,
        email: user.email,
        name: user.name, 
        role: user.role
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const allEmployees = async (req, res) => {
  try {
    const user = await User.find({ role: 'EMPLOYEE' });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({
      message: "Logged in successfully",
      user: user.map(u => ({ _id:u._id, name: u.name, role: u.role })) 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { loginUser, allEmployees };
