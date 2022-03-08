import User from "../models/User.js";

export const getJoin = (req,res) => res.render("join",{ pageTitle: "Join" });

export const postJoin = async(req,res) => {
    const {name,username,email,password1,password2,location} = req.body;
    const exists = await User.exists({$or:[{username},{email}]});
    if(exists){
        return res.render("join",{
            pageTitle:"join",
            errorMessage:"This username/email is already taken"
        })
    }

    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    return res.redirect("/login");
};

export const edit = (req,res) => res.send("Edit User");
export const remove = (req,res) => res.send("remove User");
export const login = (req,res) => res.send("Login");
export const logout = (req,res) => res.send("Log Out");
export const see = (req,res) => res.send("See User");
