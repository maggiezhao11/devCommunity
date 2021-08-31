const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const postId = req.params.id;
    db.query(`SELECT * FROM groups ORDER BY id desc;`)
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  //filter groups by category
  router.post("/filter", (req, res) => {
    db.query(`SELECT groups.*, categories.topic FROM groups JOIN categories ON categories.id = category_id  WHERE topic = $1;`, [req.body.topic])
    .then(data => {
      
      res.json(data.rows);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })

  return router;
}