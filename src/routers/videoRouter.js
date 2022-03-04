import express from "express";
import { 
    watch,
    getEdit,
    postEdit,
    getUpload,
    postUpload,
    deleteVideo,
} from "../controllers/videoControllers.js";

const videoRouter = express.Router();

videoRouter.route("/:id([0-9a-f]{24})").get(watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/Upload").get(getUpload).post(postUpload);

export default videoRouter;