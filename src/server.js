import express from "express";
import morgan from "morgan";
import globalRouter from "../src/routers/globalRouter.js";
import videoRouter from "../src/routers/videoRouter.js";
import userRouter from "../src/routers/userRouter.js";

 
const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.get("/login");

app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/users",userRouter);

const handleListening= () => console.log(`Server listenting on port http://localhost:${PORT}🚀`);

app.listen(PORT,handleListening);

