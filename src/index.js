import connectDB from "./Database/index.js";
import { app } from "./app.js";
import express from 'express'

// const app = express();

connectDB()
  .then(() => {
    
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log("Listening at port: ", PORT);
      console.log("URL : ", `http://localhost:${PORT}/`);
    });
  })

  .catch((err) => {
    console.log("Express Error:", err);
  });
