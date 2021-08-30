const express = require('express');
const router = express.Router();

module.exports = (db) => {
 
  //create new post by user
  router.post("/:id", async (req, res) => {
    try {
      const newPost = await db.query(
        "INSERT INTO posts (content, user_id, photo) values($1, $2, $3) returning*;", [req.body.content, req.params.id, req.body.photo]
      );
      res.status(201).json({
        data: { post: newPost.rows[0] }
      });
    } catch (err) {
      res.json({ error: err.message });
    }
  });

  //update a post
  router.put("/:id", (req, res) => {
    const content = req.body.content;
    //const user_id = req.body.user_id
    const photo = req.body.photo
    const post_id = req.params.id

    db.query(`
      UPDATE posts SET
      content = $1, photo = $2
      WHERE id = $3 returning*`,
      [content, photo, post_id])
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
    db.query(`SELECT * FROM posts WHERE user_id = $1 OR user_id IN (SELECT DISTINCT user2_id FROM friends WHERE user1_id = $2) ORDER BY id desc`, [userId, userId])
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

  //get post replies
  router.get("/:id/replies", (req, res) => {
    const postId = req.params.id;
    db.query(`SELECT * FROM post_replies WHERE post_id = $1 ORDER BY id`, [postId])
    .then(data => {
      res.json(data.rows);
    });
  });

  //reply to a post
  router.post("/:id/replies", (req, res) => {
    const postId = req.params.id;
    db.query(`INSERT INTO post_replies (user_id, post_id, content) VALUES ($1, $2, $3)`, [postId])
    .then(data => {
      res.json(data.rows);
    });
  });

  return router;
}

// "INSERT INTO posts (content, user_id, photo) values($1, $2, $3) returning*;", [req.body.content, req.params.id, req.body.photo]