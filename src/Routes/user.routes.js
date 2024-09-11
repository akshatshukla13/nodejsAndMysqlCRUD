import {
  createUser,
  deleteUser,
  updateUser,
  getAllUser,
} from "../Controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.route("/create").post(createUser);

router.route("/get").post(getAllUser);

router.route("/update").post(updateUser);

router.route("/delete").post(deleteUser);

export default router;
