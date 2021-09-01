const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    req.session.user_id = req.params.id;
    db.query(`select first_name from users where users.id = ${req.session.id};`)
     
    res.redirect('/');
  });

  router.post("/", async (req, res) => {
    const query = await db.query(`select * from users where users.email = $1;`, [req.body.email])
    console.log("line 22:", query.rows[0]);
        res.json(query.rows[0])
     
    res.redirect('/');
  });

  return router;
}