import express from "express";
import {join} from "../src/controllers/userControllers";
import {trending} from "../src/controllers/videoControllers.js";

const globalRouter = express.Router();

const handleHome = (req,res) => res.send("Home");
const handleJoin = (req,res) => res.send("Join");
const handleLogin = (req,res) => res.send("Login");


globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", handleLogin);


export default globalRouter;