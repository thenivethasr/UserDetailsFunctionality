const express = require("express");
const app = express();
//const preRequestValidation = require('./middleware/preRequestValidation');

const { readdirSync } = require("fs");

const profileRoute = require("./controllers/profile");

require("dotenv").config();

app.use(express.json());
//app.use(preRequestValidation);

//app.use('/profile', profileRoute);

const port = process.env.PORT;
readdirSync("./routers").map((r) => app.use("/api", require(`./routers/${r}`)));

app.listen(port, () => {
  console.log(`Server is runing on port http://localhost:${port}`);
});
