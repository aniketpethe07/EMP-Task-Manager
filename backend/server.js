const express = require("express");
const cors = require('cors')
const userRouter = require("./src/routes/userRoute");
const taskRouter = require("./src/routes/taskRoute");
const connectDB = require("./src/db");
const app = express();

require('dotenv').config({
  path: './.env'
})


app.use(express.json());
app.use(cors());
app.use('/api/users', userRouter)
app.use('/api/tasks', taskRouter)


const PORT = process.env.PORT;
connectDB()
  .then(() => 
    app.listen(PORT, () => {
        console.log(`Server is listening at port 7000...`);
    })
  );
