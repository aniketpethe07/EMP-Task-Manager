const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email);
    if(email=="admin@gmail.com"&&password=="123"){
      res.status(201).json({user: "admin"});
    }else if(email=="emp@gmail.com"&&password=="123"){
      res.status(201).json({user: "employee"});
    }else{
      res.status(400).json({message: 'Invalid credentials'});
    }
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser };
