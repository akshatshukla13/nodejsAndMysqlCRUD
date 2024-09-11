import { Error } from "mongoose";
import { User } from "../Models/user.model.js";
import { queryDatabase } from "../Utils/dbcall.js";

const createUser = async (req, res) => {
  const { userName, rating } = req.body;

  console.log(userName);

  if (!(userName && rating)) {
    console.error("give username and rating both");
    return res.status(500).json("give username and rating both");
  }

  const userAlreadyExists = await queryDatabase(
    `SELECT * FROM mytestdb.users WHERE userName = '${userName}'`
  );

  if (userAlreadyExists.length) {
    console.log("a: ", userAlreadyExists);

    console.error("Already existed user");
    return res.status(500).json("Already existed user");
  }

  const createNewUser = await await queryDatabase(
    `INSERT INTO mytestdb.users (userName, rating) VALUES ("${userName}", ${rating});`
    // await pool.query('INSERT INTO users (userName, rating) VALUES (?, ?)', [userName, rating]);
  );

  if (!createNewUser.affectedRows) {
    console.error("Error creating user");
    return res.status(500).json("Error creating user");
  }

  console.log(createNewUser);

  return res.status(200).json("User Created successfully");
};

const updateUser = async (req, res) => {};

const deleteUser = async (req, res) => {};

const getAllUser = async (req, res) => {};

export { createUser, updateUser, deleteUser, getAllUser };
