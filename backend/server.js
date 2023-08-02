const express = require("express");
const router = require("./router.js");
const dotEnv = require("dotenv");

const server = express();

dotEnv.config();
server.use(express.json());
server.listen(process.env.PORT_SERVER, () => {
    console.log(`Server is listening port ${process.env.PORT_SERVER}`);
});

server.use("/", router);