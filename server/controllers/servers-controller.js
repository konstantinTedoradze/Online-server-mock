const express = require("express");
const router = express.Router();

const serversLogic = require("../logic/servers-logic");

router.get("/servers", async (request, response) => {
    try {
      const servers = await serversLogic.getAllServers();
  
      response.json(servers);
    } catch (e) {
      console.log(e);
      response.status(600).json();
    }
});

router.put("/server/status", async (request, response) => {
  try {
    const statusInfo = request.body;
    const results = await serversLogic.updateStatus(statusInfo);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.status(600).json();
  }
 
});

router.get("/server/bystatus", async (request, response) => {
  try {
    const serversByStatus = await serversLogic.getServersByStatus();
    response.json(serversByStatus);
  } catch (e) {
    console.log(e);
    response.status(600).json();
  }
});

router.get("/server/bydate", async (request, response) => {
  try {
    const serversByDate = await serversLogic.getServersByDate();

    response.json(serversByDate);
  } catch (e) {
    console.log(e);
    response.status(600).json();
  }
});


module.exports = router;