const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // router.get("/", (req, res) => {
  //   db.query("select * from users")
  //   .then((data)=> {
  //     res.json(data.rows)
  //   })
  // });

  router.get("/", (req, res) => {
    db.query(`select * from users where users.id = $1;`, [req.session.user_id])
    .then((data) => {
      res.json(data.rows[0])
    })
     
  });

  return router;
}