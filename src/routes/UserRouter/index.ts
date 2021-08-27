import express from "express";
import { UserController } from "../../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/recover-password", userController.createRecoverPasswordToken);
userRouter.post("/change-password", userController.changeUserPassword);
