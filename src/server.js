// import express from "express";
const express = require("express");
const { handle } = require("express/lib/router");
const app = express();

const handleListening= () => console.log("Server listenting on port 4000")

app.listen(4000,handleListening);

