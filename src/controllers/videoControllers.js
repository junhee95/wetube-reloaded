import Video from "../models/video";

export const home = async(req,res) => {
    const videos = await Video.find({});
    res.render("home",{ pageTitle: "Home", videos});
};

export const watch = async(req,res) =>{
    const {id} = req.params;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404",{pageTitle:"video not found"});
    }
    return res.render("watch",{pageTitle: video.title ,video});
};

export const getEdit = async(req,res) => 
{
    const {id} = req.params;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404",{pageTitle:"video not found"});
    }
    return res.render("edit",{pageTitle: `Edit: ${video.title}`, video});
}; 

export const postEdit = async(req,res) => 
{
    const {id} = req.params;
    const video = await Video.exists({_id: id});
    if(!video){
        return res.render("404",{pageTitle:"video not found"});
    }
    await Video.findByIdAndUpdate(id,{
        title,
        Description,
        hashtags: video.formatHashtags(hashtags),
    });
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req,res) => {

    return res.render("Upload",{pageTitle:"Upload Video"});
}

export const postUpload = (req,res) => {
    const {title,Description,hashtags} =req.body;
    try{
        await Video.create({
            title,
            Description,
            createdAt: Date.now(),
            hashtags: video.formatHashtags(hashtags),
            meta:{
                view:0,
                rating:0,
            },
        });
        return res.redirect("/");
    } catch(error){
        return res.render("Upload",{
            pageTitle:"Upload Video",
            errorMessage: error._message,
        });
    }
}


export const deleteVideo = async(req,res) => {
    const {id} = req.params;
    await Video.findByIdAndDelete(id);
    return res.redirect("/");
};