const sql = require("mssql");

const config = {
  user: "sa",
  password: "12345",
  server: "localhost",
  database: "CustomerOrders",
  options: {
    trustedConnection: true,
    enableArithAbort: true,
    instanceName: "SQLEXPRESS",
    encrypt: false,
  },
};

sql.connect(config);

module.exports = { sql: sql };
