import { createConnection } from 'mysql';
var connection;
const connectDB = async () => {
  connection = createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'anjali'
  });
   
  // const pool = createPool({
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   waitForConnections: true,
  //   connectionLimit: 10,
  //   queueLimit: 0
  // });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });
};

export {connection}
export default connectDB;
