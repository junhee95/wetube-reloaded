import express from "express";
import {join,login} from "../controllers/userControllers.js"
import {home} from "../controllers/videoControllers.js";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;