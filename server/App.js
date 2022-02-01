const express = require("express");
const server = express();
const serversController = require("./controllers/servers-controller");


const cors = require("cors");
server.use(cors({ origin: "http://localhost:3000" }));


server.use(express.json());

server.use("/api", serversController);

// server.use(authenticateJwtRequestToken())

server.listen(3001, () => console.log("Listening on http://localhost:3001"));


