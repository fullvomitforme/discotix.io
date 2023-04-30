const express = require("express");
const app = express();
const port = 5050;
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");

app.use(bodyParser.json());

app.get("/users/all-user", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    // response from mysql
    response(200, result, "Success Get All User 🙋", res);
  });
});

app.get("/users/find-user", (req, res) => {
  const sql = `SELECT * FROM user WHERE id_user = '${req.query.id}'`;
  db.query(sql, (error, result) => {
    if (error) {
      response(500, result, "Internal server error 😓", res);
      return;
    }

    if (result.length === 0) {
      response(404, result, `User with id ${req.query.id} not found 😕`, res);
      return;
    }

    response(200, result, "Success Get User From Id User 🙋", res);
  });
});

app.get("/", (req, res) => {
  res.json({
    message: `Disco.Tix is now live on port ${port}! 🎉`,
  });
});

app.listen(port, () => {
  console.log(`Disco.Tix is now live on port ${port}! 🎉`);
});
