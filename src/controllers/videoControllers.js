let videos = [
    {
        title:"First Video",
        rating:5,
        comments:2,
        createdAt:"2 minutes ago",
        views:59,
        id:0,
    },
    {
        title:"Second Video",
        rating:5,
        comments:2,
        createdAt:"2 minutes ago",
        views:59,
        id:1,
    },
    {
        title:"Third Video",
        rating:5,
        comments:2,
        createdAt:"2 minutes ago",
        views:59,
        id:2,
    }
];
export const trending = (req,res) => {
    return res.render("home",{ pageTitle: "home", videos});
};
export const watch = (req,res) =>{
    const {id} = req.params;
    const video = videos[id];
    res.render("watch",{pageTitle: `Watching ${video.title}`, video});
};
export const getEdit = (req,res) => 
{
    const {id} = req.params;
    const video = videos[id];
    res.render("edit",{pageTitle: `Editing ${video.title}`,video});
}; 
export const postEdit = (req,res) => 
{
    const {id} = req.params;
    console.log(req.body);
    return res.redirect(`/videos/${id}`);
};