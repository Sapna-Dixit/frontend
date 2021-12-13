const express = require("express");
const app = express();
require("./src/db/conn");
const port = process.env.PORT || 8000;
const empRoute = require("./src/routes/empRegister");
const loginRoute = require("./src/routes/empLogin");
const cors = require("cors");
app.use(
    cors()
);

app.use(express.json());
app.use("/empRegister", empRoute);
app.use("/login",loginRoute);


app.listen(port, ()=>{
    console.log(`Server running at :http://localhost: ${port}`);
})
