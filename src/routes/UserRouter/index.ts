import express from "express";
import { UserController } from "../../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/recover", userController.createRecoverPasswordToken);
userRouter.post("/change", userController.changeUserPassword);
