import express from "express";
import {join,login} from "../controllers/userControllers.js"
import {trending} from "../controllers/videoControllers.js";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;