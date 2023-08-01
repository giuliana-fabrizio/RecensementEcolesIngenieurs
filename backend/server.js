const express = require("express");
const router = require("./router.js")

const server = express();

server.use(express.json());
server.listen(process.env.PORT_SERVER, () => {
    console.log(`Server is listening port ${process.env.PORT_SERVER}`);
});

server.use("/", router);