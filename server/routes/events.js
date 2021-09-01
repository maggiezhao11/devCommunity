const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const postId = req.params.id;
    db.query(`SELECT * FROM events ORDER BY date desc;`)
    .then(data => {
      res.json(data.rows);
    });
  });

  //get joined event and display in upcoming events
  router.get("/upcoming", (req, res) => {
    const user_id = req.session.user_id
    db.query(`SELECT * FROM events WHERE user_id = $1 ORDER BY date asc;`, [user_id])
    .then(data => {
      res.json(data.rows);
    });
  })
//join an event
  router.post("/join", (req, res) => {
    const user_id = req.session.user_id
    const event_id = req.body.id
    
    return db.query(`UPDATE events SET user_id = $1 WHERE id = $2 returning *;`, [user_id, event_id])
    .then(data => {
      res.json(data.rows);
    })
  })

  //filter events by category
  router.post("/filter", (req, res) => {
    db.query(`SELECT events.*, categories.topic FROM events JOIN categories ON categories.id = events.category_id  WHERE topic = $1;`, [req.body.topic])
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

