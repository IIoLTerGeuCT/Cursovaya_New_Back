const mysql = require("mysql2");
const User = require("../models/User");
const bodyParser = require("body-parser");
const e = require("express");

module.exports.login = async (req, res) => {
  await res.status(200).json({
    login: "login",
  });
};
module.exports.register = async (req, res) => {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "servicedb",
  });
  db.connect((err) => {
    if (!err) {
      res.status(200).json({ message: "Соединение успешно установлено" });
    } else {
      res.status(509).json({ message: "Ошибка при подключении" });
    }
  });

  // const newUser = new User(req.body.login, req.body.password);
  // connect.query(`INSERT INTO user (login, password) VALUES ('${req.body.login}','${req.body.password}')`)
  await db.query(`SELECT * FROM user`, (err, rows) => {
    try {
      const candidate = rows.find(
        (u) => u.login === req.body.login && u.password === req.body.password
      );
      if (candidate) {
        console.log(`${candidate.login} ${candidate.password}`);
      } else {
        res.send({ message: "Такой login и password allready create" });
      }
    } catch (e) {
      console.log(`Не верный логин или пароль`);
    }
  });
};
