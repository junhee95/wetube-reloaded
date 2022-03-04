import User from "../models/User.js";

export const getJoin = (req,res) => res.render("join",{pageTitle: "Join" });
export const postJoin = async(req,res) =>
    {
        console.log(req.body);
        await User.create({
            name,
            email,
            username,
            password,
            location,

        });
       return res.redirect("/login")
    };
export const edit = (req,res) => res.send("Edit User");
export const remove = (req,res) => res.send("remove User");
export const login = (req,res) => res.send("Log in");
export const logout = (req,res) => res.send("Log Out");
export const see = (req,res) => res.send("See User");
