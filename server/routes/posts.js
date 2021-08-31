const express = require('express');
const router = express.Router();

module.exports = (db) => {
 
  //create new post by user
  router.post("/", async (req, res) => {
    const content = req.body.content;
    const user_id = req.session.user_id;
    const photo = req.body.photo;
    db.query(
        "INSERT INTO posts (content, user_id, photo) values($1, $2, $3) returning*;", [content, user_id, photo]
      )
      .then(data => {
        res.json(data.rows);
      })
      .catch(err => {
        res
        .status(500)
        .json({ error: err.message })
      });
  });

  //update a post
  router.put("/:id", (req, res) => {
    const content = req.body.content;
    const user_id = req.session.user_id
    const photo = req.body.photo
    const post_id = req.params.id

    db.query(`
      UPDATE posts SET
      content = $1, user_id = $2, photo = $3
      WHERE id = $4 returning*`,
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

  router.delete("/:id", (req, res) => {

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
  router.get("/", (req, res) => {
    const userId = req.session.user_id;
    db.query(`SELECT posts.*, users.first_name FROM posts JOIN users ON users.id = user_id WHERE user_id = $1 OR user_id IN (SELECT DISTINCT user2_id FROM friends WHERE user1_id = $2) ORDER BY id desc`, [userId, userId])
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
    db.query(`SELECT post_replies.*, users.first_name FROM post_replies JOIN users ON users.id = user_id WHERE post_id = $1 ORDER BY id desc`, [postId])
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  //reply to a post
  router.post("/:id/replies", (req, res) => {
    const postId = req.params.id;
    db.query(`INSERT INTO post_replies (user_id, post_id, content) VALUES ($1, $2, $3) returning*`, [req.session.user_id, postId, req.body.content])
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  return router;
}


//<input name="post_id" type="hidden" value="<%= post.id %>">