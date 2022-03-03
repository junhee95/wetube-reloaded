import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtage: [{type: String}],
    meta: {
        view: Number,
        rating: Number,
    },
});

const Video = mongoose.model("Video",videoSchema);
export default Video;