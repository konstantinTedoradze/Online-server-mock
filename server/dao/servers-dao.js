const connection = require("./connection-wrapper");

async function getServers() {
  const sql = `SELECT 
  servers.id,
  servers.name,
  servers.IP,
  companies.name as 'company',
  servers.status,
  servers.date_time
  FROM servers INNER JOIN companies
  ON servers.hosting_company_id = companies.id`;
  return await connection.execute(sql);
}

async function updateStatus(statusInfo) {
  console.log("req.body.status", statusInfo.newstatus);
  const sql = `UPDATE servers
  SET status=${statusInfo.newstatus}
  WHERE id=${statusInfo.id}`;
  return await connection.execute(sql);
}

async function getServersByStatus() {
  let sql = `SELECT 
  servers.id,
  servers.name,
  servers.IP,
  companies.name as 'company',
  servers.status,
  servers.date_time
  from servers inner join companies
  on servers.hosting_company_id = companies.id
  where status=1`;
  return await connection.execute(sql);
}

async function getServersByDate(){
  let sql = `SELECT 
  servers.id,
  servers.name,
  servers.IP,
  companies.name as 'company',
  servers.status,
  servers.date_time
  from servers inner join companies
  on servers.hosting_company_id = companies.id
  order by date_time DESC`;
  return await connection.execute(sql);
}


module.exports = {
  getServers,
  updateStatus,
  getServersByStatus,
  getServersByDate  
};
