import express from "express";
import { edit } from "../controllers/userControllers";
import { remove } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/edit",edit);
userRouter.get("/delete",remove);

export default userRouter;