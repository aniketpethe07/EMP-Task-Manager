const connectDB = require("../db/index")

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  
  try {
    const con = await connectDB(); 
    const [result] = await con.query('SELECT * FROM users WHERE email = ? AND password = ?', [email,password]);
    
    if (result.length > 0) {
      res.status(201).json({id:result[0].id, name:result[0].name, role:result[0].role});
    } else {
      res.status(404).json({ msg: "User not found" });
    }
    con.end()
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const allEmployees = async (req, res) => {
  try {
    const con = await connectDB(); 
    const [users] = await con.query('SELECT * FROM users WHERE role = "EMPLOYEE"');
    if (users.length === 0) {
      return res.status(404).json({ message: "No employees found" });
    }
    
    res.status(200).json({
      users: users.map(u => ({ id: u.id, name: u.name, role: u.role })),
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { loginUser, allEmployees };
