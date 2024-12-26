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
        email: user.email,
        name: user.name, 
        role: user.role
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser };
