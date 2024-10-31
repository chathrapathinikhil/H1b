const sql = require("mssql");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

require("dotenv").config();

PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.send("<p>Welcome to H1B web extension</p>");
});

app.get("/about", function (req, res) {
  res.send("<p>About page</p>");
});

app.listen(PORT, function () {
  console.log(`Server is listening ${PORT}`);
});
var config = {
  user: "sa",
  password: "root",
  server: "LAPTOP-5DMQSCP1",
  database: "exampledb",
  driver: "msnodesqlv8",
  options: {
    encrypt: false,
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
  port: 49937,
};

// module.exports = config;

sql.connect(config, function (err) {
  if (err) console.log(err);
  var request = new sql.Request();
  request.query(
    "SELECT TOP (2) * FROM [exampledb].[dbo].[master_file];",
    function (err, records) {
      if (err) console.log(err);
      else console.log(records);
    }
  );
});
