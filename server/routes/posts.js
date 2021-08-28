const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.send("ok");
    //res.json(data);
  });
  //create new post
  router.post("/", async (req, res) => {
    try {
      const newPost = await db.query(
        "INSERT INTO posts (content, user_id, photo, created_at) values($1, $2, $3, $4) returning*;", [req.body.content, req.session.user_id, req.body.photo, req.body.created_at]
      );
      res.status(201).json({
        data: {post: newPost.rows[0]}
      });
    } catch (err) {
      res.json({error: err.message});
    }
  });
  
  //update a post
  router.put("/:id", (req, res) => {
    const content = req.body.content;
    const user_id = req.session.user_id
    const photo = req.body.photo
    const post_id = req.body.id
    
    db.query(`
      UPDATE posts SET
      content = $1, user_id = $2, photo = $3
      WHERE id = $4`,
    [content, user_id, photo, post_id])
      .then(data => {
        res.json(data.rows);
    
      })
      .catch(err => {  
        res
          .status(500)
          .json({ error: err.message });
      });
    // };
  });

  
  //delete a post
  //router.post("/:id/delete", (req, res) => {)
  router.delete("/:id", (req, res) => {
    const user_id = req.session.user_id;
    const post_id = parseInt(req.params.id);
    db.query(`DELETE FROM posts WHERE id = $1`, [post_id])
    .then(
      res.redirect("/")
    )
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

//get timeline posts
router.get("/", (req, res) => {
  
  db.query(`SELECT * users FROM friends`, [post_id])
  .then(
    res.redirect("/")
  )
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});
  return router;
}