const serversDao = require("../dao/servers-dao");



async function getAllServers() {
  return await serversDao.getServers();
}

async function updateStatus(statusInfo){
    return await serversDao.updateStatus(statusInfo);
}

async function getServersByStatus() {
  return await serversDao.getServersByStatus();
}

async function getServersByDate() {
  return await serversDao.getServersByDate();
}

module.exports = {
    getAllServers,
    updateStatus,
    getServersByStatus,
    getServersByDate
};