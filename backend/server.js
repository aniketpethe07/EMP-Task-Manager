const express = require("express");
const cors = require('cors')
const router = require("./src/routes/userRoute");
// const { default: connectDB } = require("./src/db");
const app = express();

require('dotenv').config({
  path: './.env'
})


app.use(express.json());
app.use(cors());
app.use('/', router)


// connectDB().then(() => 
//   server.listen(7000, () => {
//       console.log(`Server is listening at port 7000...`);
//   })
// );

const PORT = process.env.PORT;
app.listen((PORT), () => {
    console.log(`Server running at ${PORT}`);
    
})