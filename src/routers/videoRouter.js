import express from "express";
import { watch,getEdit,postEdit, getUpload, postUpload} from "../controllers/videoControllers.js";

const videoRouter = express.Router();

videoRouter.route("/:id(\\d+)").get(watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/Upload").get(getUpload).post(postUpload);

export default videoRouter;