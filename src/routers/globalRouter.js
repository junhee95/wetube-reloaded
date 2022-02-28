import express from "express";
import {join,login} from "../../../wetube/src/controllers//userControllers.js"
import {trending,search} from "../../../wetube/src/controllers//videoControllers.js";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;