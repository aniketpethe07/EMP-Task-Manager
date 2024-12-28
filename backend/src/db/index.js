const mysql2 = require('mysql2/promise');
const DB_NAME = require('../../constants')

const connectDB = async () => {
  try {
    const con = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'peace',
      database: DB_NAME,
    });
    
    console.log(`MySQL Connected! DB NAME: ${DB_NAME}`);
    return con; 
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    throw error; 
  }
};

module.exports = connectDB;
