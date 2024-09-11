import { connection } from "../Database/index.js";

function queryDatabase(query) {
    return new Promise((resolve, reject) => {
      connection.query(query, function (err, result) {
        if (err) return reject(err);  // reject promise on error
        console.log("result: ",result);
        
        resolve(result);              // resolve promise with result
      });
    });
  }

  export {queryDatabase};