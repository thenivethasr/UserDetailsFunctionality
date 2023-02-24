const express = require("express");
const app = express();
const {readdirSync} = require('fs');

console.log("1");
const profileRoute = require('./controllers/profile');
console.log("2");


require("dotenv").config();
console.log("3");


//app.use('/profile', profileRoute);
console.log("4");

const port = process.env.PORT;
console.log("5");
readdirSync('./routers').map((r)=>app.use("/api",require(`./routers/${r}`)));

app.listen(port, () => {
  console.log(`Server is runing on port http://localhost:${port}`);
});
