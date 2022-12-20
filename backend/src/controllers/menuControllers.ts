const connection = require("../helpers/connect");

exports.getMenus = (req, res) => {
  connection.query("SELECT * FROM menu", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};
