import "./db.js";
import "./models/Video.js";
import "./models/User.js";
import app from "./server.js";

 
const PORT = 5000;

const handleListening= () => 
    console.log(`Server listenting on port http://localhost:${PORT}🚀`);

app.listen(PORT,handleListening);