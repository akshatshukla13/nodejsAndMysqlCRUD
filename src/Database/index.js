import { createConnection } from 'mysql';
var connection;
const connectDB = async () => {
  connection = createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'anjali'
  });
   
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
