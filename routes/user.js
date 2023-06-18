import express from "express";
import UserController from "../controller/user.js";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("User page"));
userRouter.post("/create", UserController.createUser);

export default userRouter;
