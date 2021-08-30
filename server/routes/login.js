const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    req.session.user_id = req.params.id;
    db.query(`select first_name from users where users.id = ${req.session.id};`)
     
    res.redirect('/');
  });
  return router;
}