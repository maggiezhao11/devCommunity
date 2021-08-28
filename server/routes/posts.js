const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //get all posts
  // router.get('/', (req, res) => {
  //   db.query(`SELECT * FROM posts LIMIT 4;`)
  //   .then(data => {
  //     res.json(data.rows);
  //   });
  // });
  //create new post
  router.post("/", async (req, res) => {
    try {
      const newPost = await db.query(
        "INSERT INTO posts (content, user_id, photo) values($1, $2, $3) returning*;", [req.body.content, req.body.user_id, req.body.photo]
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
    const user_id = req.body.user_id
    const photo = req.body.photo
    const post_id = req.params.id
    
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
  
  router.delete("/:id/delete", (req, res) => {
    
    const post_id = req.params.id;
    db.query(`DELETE FROM posts WHERE id = $1`, [post_id])
    .then(
      res.send("deleted")
    )
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

//get timeline posts
router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  db.query(`SELECT * FROM posts WHERE user_id = $1 OR user_id IN (SELECT DISTINCT user2_id FROM friends WHERE user1_id = $2) `, [userId, userId])
  .then(data => {
    res.json(data.rows);
  }
  )
  .catch(err => {
    console.log('/posts/user', err.message)
    res
      .status(500)
      .json({ error: err.message });
  });
});
  return router;
}